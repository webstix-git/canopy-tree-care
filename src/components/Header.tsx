"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, services, site } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
    <div className="relative z-40 bg-forest-900 text-cream-50">
      <div className="container-page flex flex-col items-center justify-between gap-1 py-2 text-center text-xs sm:flex-row sm:text-left sm:text-sm">
        <p className="text-xs sm:text-sm">Locally owned and operated · Serving Madison, WI &amp; Dane County</p>
        <a href={site.phoneHref} className="inline-flex items-center gap-1.5 text-xs font-semibold text-sun-400 hover:text-sun-500 sm:text-sm">
          <Phone className="size-3.5" aria-hidden="true" />
          Storm damage? Call {site.phone}
        </a>
      </div>
    </div>
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream-50/95 shadow-[0_10px_30px_-24px_rgb(20_48_31/0.8)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Logo className={`w-auto transition-all duration-300 ${scrolled ? "h-12" : "h-20 sm:h-28"}`} />

        <nav
          className={`hidden items-center lg:flex ${scrolled ? "gap-10" : "gap-6"}`}
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = isCurrent(pathname, link.href);
            const itemClass = `font-semibold text-ink transition-all duration-300 hover:text-forest-600 ${
              scrolled ? "text-base" : "text-[18px]"
            } ${active ? "underline decoration-2 underline-offset-8 decoration-forest-700" : ""}`;

            return link.href === "/services" ? (
              <div key={link.href} className="group relative">
                <Link href={link.href} className={`inline-flex items-center gap-1.5 ${itemClass}`} aria-haspopup="true" aria-current={active ? "page" : undefined}>
                  {link.label}
                  <ChevronDown
                    className="size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden="true"
                  />
                </Link>
                <div className="invisible absolute top-full left-0 z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-56 rounded-2xl bg-white p-2 shadow-[0_24px_50px_-28px_rgb(20_48_31/0.55)] ring-1 ring-forest-900/10">
                    {services.map((service) => {
                      const serviceActive = pathname === `/services/${service.slug}`;
                      return (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            aria-current={serviceActive ? "page" : undefined}
                            className={`block rounded-xl px-4 py-2.5 text-base font-semibold transition-colors hover:bg-cream-100 hover:text-forest-700 ${
                              serviceActive
                                ? "text-forest-700 underline decoration-2 underline-offset-4 decoration-forest-700"
                                : "text-forest-900"
                            }`}
                          >
                            {service.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={itemClass} aria-current={active ? "page" : undefined}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={`hidden items-center xl:flex ${scrolled ? "gap-2" : "gap-3"}`}>
          <a
            href={site.phoneHref}
            className={`inline-flex items-center gap-2.5 font-bold text-forest-800 transition-all duration-300 ${
              scrolled ? "text-base" : "text-[18px]"
            }`}
          >
            <Phone className={scrolled ? "size-4" : "size-5"} aria-hidden="true" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className={`rounded-full bg-forest-800 font-bold text-white shadow-sm transition-all duration-300 hover:bg-forest-700 ${
              scrolled ? "px-5 py-2.5 text-base" : "px-7 py-3.5 text-[18px]"
            }`}
          >
            Free Estimate
          </Link>
        </div>

        <button
          type="button"
          className={`grid place-items-center rounded-full border border-forest-900/15 text-forest-900 transition-all duration-300 lg:hidden ${
            scrolled ? "size-10" : "size-11"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto bg-cream-50 px-5 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {navLinks.map((link) =>
              link.href === "/services" ? (
                <li key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                      className={`block flex-1 rounded-2xl px-4 py-3.5 text-lg font-semibold hover:bg-cream-100 ${
                        isCurrent(pathname, link.href)
                          ? "text-forest-700 underline decoration-2 underline-offset-4 decoration-forest-700"
                          : "text-forest-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      className="grid size-11 place-items-center rounded-full text-forest-900 hover:bg-cream-100"
                      aria-expanded={servicesOpen}
                      aria-label="Show services"
                      onClick={() => setServicesOpen((value) => !value)}
                    >
                      <ChevronDown
                        className={`size-5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {servicesOpen ? (
                    <ul className="mb-1 ml-4 space-y-1 border-l border-forest-900/10 pl-3">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            onClick={() => setOpen(false)}
                            aria-current={pathname === `/services/${service.slug}` ? "page" : undefined}
                            className={`block rounded-xl px-3 py-2.5 font-semibold hover:bg-cream-100 ${
                              pathname === `/services/${service.slug}`
                                ? "text-forest-700 underline decoration-2 underline-offset-4 decoration-forest-700"
                                : "text-forest-800"
                            }`}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                    className={`block rounded-2xl px-4 py-3.5 text-lg font-semibold hover:bg-cream-100 ${
                      isCurrent(pathname, link.href)
                        ? "text-forest-700 underline decoration-2 underline-offset-4 decoration-forest-700"
                        : "text-forest-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="mt-6 grid gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-800 px-5 py-3.5 font-bold text-forest-800"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-forest-800 px-5 py-3.5 text-center font-bold text-white"
            >
              Free Estimate
            </Link>
          </div>
        </nav>
      )}
    </header>
    </>
  );
}
