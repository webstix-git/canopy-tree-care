"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export function RouteScroll() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    root.setAttribute("data-scroll-instant", "");
    if (!window.location.hash) window.scrollTo(0, 0);

    const timer = window.setTimeout(() => {
      if (!window.location.hash) window.scrollTo(0, 0);
      root.removeAttribute("data-scroll-instant");
    }, 80);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
