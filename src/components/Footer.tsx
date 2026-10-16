import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { ArboristBadge } from "@/components/ArboristBadge";
import { CurrentYear } from "@/components/CurrentYear";
import { Logo } from "@/components/Logo";
import { services, site } from "@/lib/site";

const legalLinks = [
  { label: "Site Map", href: "/sitemap" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "AI Policy", href: "/ai-policy" },
  { label: "AI Readiness Service Index", href: "/ai-readiness-service-index" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-cream-50 text-ink">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <Logo className="h-28 w-auto" />
          <p className="mt-5 max-w-xs text-[17px] leading-relaxed text-ink-muted">
            A small, locally owned crew led by ISA Certified Arborist {site.arborist}.
          </p>
          <ul className="mt-5 space-y-3 text-[17px] text-ink-muted">
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-forest-800">
                <Phone className="size-4 text-forest-700" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="inline-flex items-center gap-2 hover:text-forest-800">
                <Mail className="size-4 text-forest-700" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[17px] font-bold tracking-wide text-forest-800 uppercase">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2.5 text-[17px]">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink-muted transition-colors hover:text-forest-800">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[17px] font-bold tracking-wide text-forest-800 uppercase">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-[17px]">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-ink-muted transition-colors hover:text-forest-800"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <ArboristBadge className="h-20 w-auto shrink-0" />
            <p className="text-sm leading-snug">
              <span className="block font-bold text-forest-900">ISA Certified Arborist</span>
              <span className="mt-1 block text-ink-muted">Credentialed expertise on every job</span>
            </p>
          </div>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-muted">
            <span className="font-bold text-forest-900">Address:</span>
            <br />
            <a href={site.mapHref} className="hover:text-forest-800">
              {site.street}
              <br />
              {site.locality}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-forest-900/10">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-5 text-center text-[17px]! text-ink-muted">
          <p className="text-[17px]!">
            © <CurrentYear /> {site.legalName}. All rights reserved.
          </p>
          <span aria-hidden="true" className="hidden h-3 w-px bg-forest-900/25 sm:block" />
          <ul className="flex flex-wrap items-center justify-center text-[17px]!">
            {legalLinks.map((link, index) => (
              <li key={link.href} className="flex items-center">
                {index > 0 ? (
                  <span aria-hidden="true" className="mx-3 h-3 w-px bg-forest-900/25" />
                ) : null}
                <Link href={link.href} className="underline underline-offset-4 hover:text-forest-800">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
