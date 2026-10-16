"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

type ServiceTab = {
  slug: string;
  name: string;
};

export function ServiceTabs({ services }: { services: ServiceTab[] }) {
  const [active, setActive] = useState(services[0]?.slug ?? "");
  const jumping = useRef(false);

  useEffect(() => {
    const sections = services
      .map((service) => document.getElementById(service.slug))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (jumping.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id) setActive(id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [services]);

  function selectService(event: MouseEvent<HTMLAnchorElement>, slug: string) {
    const section = document.getElementById(slug);
    if (!section) return;
    event.preventDefault();
    jumping.current = true;
    setActive(slug);
    const offset = Number.parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "instant" });
    history.pushState(null, "", `#${slug}`);
    window.setTimeout(() => {
      jumping.current = false;
    }, 50);
  }

  return (
    <div
      className="sticky z-40 border-y border-forest-900/10 bg-cream-50/95 backdrop-blur-md"
      style={{ top: "var(--site-header-height)" }}
    >
      <nav aria-label="Services" className="container-page grid w-full grid-cols-2 gap-2 py-3 sm:grid-cols-3 lg:grid-cols-6">
        {services.map((service) => {
          const current = active === service.slug;
          return (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              aria-current={current ? "true" : undefined}
              onClick={(event) => selectService(event, service.slug)}
              className={`flex items-center justify-center rounded-full px-3 py-2 text-center text-sm font-bold transition-colors ${
                current ? "bg-forest-800 text-white" : "text-forest-800 hover:bg-cream-100"
              }`}
            >
              {service.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
