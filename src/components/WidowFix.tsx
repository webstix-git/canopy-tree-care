"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function textNodes(el: HTMLElement) {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if ((node.textContent ?? "").length > 0) nodes.push(node as Text);
    node = walker.nextNode();
  }
  return nodes;
}

function snapshotText(el: HTMLElement) {
  return textNodes(el).map((node) => node.textContent ?? "");
}

function restoreText(el: HTMLElement, snapshot: string[]) {
  textNodes(el).forEach((node, index) => {
    if (snapshot[index] != null) node.textContent = snapshot[index];
  });
}

function collectLines(el: HTMLElement) {
  const chars: { top: number; ch: string }[] = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    const text = node.textContent ?? "";
    for (let index = 0; index < text.length; index += 1) {
      const range = document.createRange();
      range.setStart(node, index);
      range.setEnd(node, index + 1);
      const box = range.getBoundingClientRect();
      if (box.height === 0) continue;
      chars.push({ top: box.top, ch: text[index] });
    }
    node = walker.nextNode();
  }

  if (chars.length === 0) return [] as string[];

  const lineHeight = Number.parseFloat(getComputedStyle(el).lineHeight) || 24;
  const threshold = Math.max(3, lineHeight * 0.4);
  chars.sort((a, b) => a.top - b.top);

  const lines: { top: number; text: string }[] = [];
  for (const char of chars) {
    const current = lines.at(-1);
    if (!current || Math.abs(char.top - current.top) > threshold) {
      lines.push({ top: char.top, text: char.ch });
    } else {
      current.text += char.ch;
    }
  }

  return lines.map((line) => line.text.replace(/\u00a0/g, " ").trim()).filter(Boolean);
}

function lineCount(el: HTMLElement) {
  return collectLines(el).length;
}

function lastLineWordCount(el: HTMLElement) {
  const last = collectLines(el).at(-1) ?? "";
  if (!last) return 0;
  return last.split(/\s+/).filter(Boolean).length;
}

function glueLastSpaces(el: HTMLElement, spaces: number) {
  let remaining = spaces;
  const nodes = textNodes(el);

  for (let index = nodes.length - 1; index >= 0 && remaining > 0; index -= 1) {
    let value = nodes[index].textContent ?? "";
    while (remaining > 0) {
      const spaceAt = value.lastIndexOf(" ");
      if (spaceAt === -1) break;
      value = `${value.slice(0, spaceAt)}\u00a0${value.slice(spaceAt + 1)}`;
      remaining -= 1;
    }
    nodes[index].textContent = value;
  }

  return remaining === 0;
}

function overflows(el: HTMLElement) {
  return el.scrollWidth > el.clientWidth + 1;
}

function hasWidow(el: HTMLElement) {
  return lineCount(el) >= 2 && lastLineWordCount(el) > 0 && lastLineWordCount(el) <= 2;
}

function pullWidows() {
  const blocks = document.querySelectorAll<HTMLElement>("main h1, main h2, main h3, main p, footer h2, footer p");

  blocks.forEach((el) => {
    if (el.querySelector("h1, h2, h3, p, ul, ol, li")) return;

    el.style.letterSpacing = "";

    if (!hasWidow(el)) return;

    const snapshot = snapshotText(el);

    for (let step = 1; step <= 16; step += 1) {
      el.style.letterSpacing = `${-0.005 * step}em`;
      if (!hasWidow(el)) return;
    }

    el.style.letterSpacing = "";

    for (let spaces = 1; spaces <= 8; spaces += 1) {
      restoreText(el, snapshot);
      if (!glueLastSpaces(el, spaces)) {
        restoreText(el, snapshot);
        break;
      }
      if (overflows(el)) {
        restoreText(el, snapshot);
        continue;
      }
      if (!hasWidow(el)) return;

      for (let step = 1; step <= 12; step += 1) {
        el.style.letterSpacing = `${-0.004 * step}em`;
        if (!hasWidow(el) && !overflows(el)) return;
      }
      el.style.letterSpacing = "";
    }

    restoreText(el, snapshot);
    el.style.textWrap = "balance";
    for (let spaces = 1; spaces <= 4; spaces += 1) {
      restoreText(el, snapshot);
      el.style.textWrap = "balance";
      if (!glueLastSpaces(el, spaces)) break;
      if (overflows(el)) {
        restoreText(el, snapshot);
        el.style.textWrap = "balance";
        continue;
      }
      if (!hasWidow(el)) return;
      for (let step = 1; step <= 16; step += 1) {
        el.style.letterSpacing = `${-0.005 * step}em`;
        if (!hasWidow(el) && !overflows(el)) return;
      }
      el.style.letterSpacing = "";
    }
    restoreText(el, snapshot);
    el.style.textWrap = "balance";
    el.style.letterSpacing = "";
  });
}

export function WidowFix() {
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    let timer = 0;
    let fixing = false;

    const run = () => {
      if (fixing) return;
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      frame = requestAnimationFrame(() => {
        timer = window.setTimeout(() => {
          fixing = true;
          try {
            pullWidows();
          } finally {
            window.setTimeout(() => {
              fixing = false;
            }, 0);
          }
        }, 60);
      });
    };

    run();
    const delayed = [120, 400, 1000, 2000].map((ms) => window.setTimeout(run, ms));
    window.addEventListener("resize", run);
    document.fonts?.ready.then(run);

    const main = document.getElementById("main");
    const observer =
      main &&
      new MutationObserver((mutations) => {
        if (fixing) return;
        if (mutations.some((mutation) => mutation.type === "childList")) run();
      });
    if (main && observer) observer.observe(main, { subtree: true, childList: true });

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      delayed.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("resize", run);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
