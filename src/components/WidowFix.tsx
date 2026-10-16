"use client";

import { useEffect } from "react";

function lineCount(el: HTMLElement) {
  const tops = new Set<number>();
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    const text = node.textContent ?? "";
    for (let index = 0; index < text.length; index += 1) {
      if (text[index] === " " || text[index] === "\n") continue;
      const range = document.createRange();
      range.setStart(node, index);
      range.setEnd(node, index + 1);
      const box = range.getBoundingClientRect();
      if (box.height > 0) tops.add(Math.round(box.top));
    }
    node = walker.nextNode();
  }

  return tops.size;
}

function lastLineWordCount(el: HTMLElement) {
  const lines = new Map<number, string>();
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
      const top = Math.round(box.top);
      lines.set(top, `${lines.get(top) ?? ""}${text[index]}`);
    }
    node = walker.nextNode();
  }

  const ordered = [...lines.entries()].sort((a, b) => a[0] - b[0]);
  const last = ordered.at(-1)?.[1].trim() ?? "";
  if (!last) return 0;
  return last.split(/\s+/).length;
}

function pullWidows() {
  const blocks = document.querySelectorAll<HTMLElement>("main h1, main h2, main h3, main p, footer h2, footer p");

  blocks.forEach((el) => {
    if (el.querySelector("h1, h2, h3, p, ul, ol, li")) return;
    el.style.letterSpacing = "";
    if (lineCount(el) < 2) return;
    if (lastLineWordCount(el) > 2) return;

    const startLines = lineCount(el);
    for (let step = 1; step <= 8; step += 1) {
      el.style.letterSpacing = `${-0.005 * step}em`;
      if (lineCount(el) < startLines) return;
    }

    el.style.letterSpacing = "";
    el.style.textWrap = "balance";
    if (lastLineWordCount(el) <= 2) el.style.textWrap = "";
  });
}

export function WidowFix() {
  useEffect(() => {
    let frame = 0;
    const run = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(pullWidows);
    };

    run();
    window.addEventListener("resize", run);
    document.fonts?.ready.then(run);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", run);
    };
  }, []);

  return null;
}
