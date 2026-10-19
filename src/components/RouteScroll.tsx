"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const positions = new Map<string, number>();

export function RouteScroll() {
  const pathname = usePathname();
  const popped = useRef(false);

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.("a");
      if (!anchor || event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.hash) {
        const id = decodeURIComponent(url.hash.slice(1));
        const target = document.getElementById(id);
        if (!target) return;
        event.preventDefault();
        const margin = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - margin, behavior: "instant" });
        history.pushState(null, "", `#${id}`);
        return;
      }
      if (url.pathname === window.location.pathname) return;
      positions.set(window.location.pathname, window.scrollY);
    };

    const onPop = () => {
      popped.current = true;
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const restore = popped.current;
    popped.current = false;

    root.setAttribute("data-scroll-instant", "");

    const apply = () => {
      if (window.location.hash) {
        const id = decodeURIComponent(window.location.hash.slice(1));
        const target = document.getElementById(id);
        if (!target) return;
        const margin = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - margin, behavior: "instant" });
        return;
      }
      window.scrollTo(0, restore ? (positions.get(pathname) ?? 0) : 0);
    };

    apply();
    const timer = window.setTimeout(() => {
      apply();
      root.removeAttribute("data-scroll-instant");
    }, 80);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
