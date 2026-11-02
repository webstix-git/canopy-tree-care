"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ClipboardList, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCallBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const sentinel = document.getElementById("scroll-top-sentinel");
    if (!sentinel) return;

    const sync = () => {
      const y = document.scrollingElement?.scrollTop ?? window.scrollY ?? 0;
      setVisible(y <= 80);
    };

    sync();
    const observer = new IntersectionObserver(() => sync(), {
      threshold: 0,
      rootMargin: "80px 0px 0px 0px",
    });
    observer.observe(sentinel);
    window.addEventListener("scroll", sync, { passive: true });
    document.addEventListener("scroll", sync, { passive: true, capture: true });
    window.addEventListener("scrollend", sync);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", sync);
      document.removeEventListener("scroll", sync, { capture: true });
      window.removeEventListener("scrollend", sync);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-forest-900/10 bg-cream-50/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-lg transition-transform duration-300 md:hidden ${
        visible ? "" : "pointer-events-none"
      }`}
      style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-2 gap-3">
        <a
          href={site.phoneHref}
          tabIndex={visible ? 0 : -1}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 py-3 text-sm font-semibold text-white"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call Now
        </a>
        <Link
          href="/contact"
          tabIndex={visible ? 0 : -1}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-sun-500 py-3 text-sm font-semibold text-forest-950"
        >
          <ClipboardList className="size-4" aria-hidden="true" />
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
