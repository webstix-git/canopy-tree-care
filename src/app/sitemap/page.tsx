import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { servicePages } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on the Canopy Tree Care website in one place.",
};

const groups = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About Us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: servicePages.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
    })),
  },
  {
    title: "Blog",
    links: posts.map((post) => ({
      label: post.title,
      href: `/blog/${post.slug}`,
    })),
  },
  {
    title: "On the Home Page",
    links: [
      { label: "Welcome", href: "/#welcome" },
      { label: "Services", href: "/#services" },
      { label: "Why Choose Us", href: "/#why" },
      { label: "Our Work Process", href: "/#process" },
      { label: "Testimonials", href: "/#reviews" },
      { label: "Blog", href: "/#blog" },
      { label: "Gallery", href: "/#gallery" },
      { label: "Service Area", href: "/#service-area" },
      { label: "Free Estimate", href: "/#estimate" },
    ],
  },
  {
    title: "Policies & Information",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "AI Policy", href: "/ai-policy" },
      { label: "AI Readiness Service Index", href: "/ai-readiness-service-index" },
      { label: "Site Map", href: "/sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest-950 text-white">
        <Image
          src="/images/hero-lakeside.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-forest-950/55" />
        <div className="container-page relative flex min-h-[22rem] flex-col justify-end pb-12 pt-16 sm:min-h-[24rem]">
          <h1 className="text-5xl font-bold tracking-tight text-white uppercase sm:text-6xl">Site Map</h1>
          <p className="mt-3 max-w-xl text-white/90">Every page on our website in one place.</p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="bg-cream-100">
        <ol className="container-page flex flex-wrap items-center gap-x-2 gap-y-1 py-4 text-sm text-ink-muted">
          <li>
            <Link href="/" className="hover:text-forest-800">
              Home
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-forest-900" aria-current="page">
              Site Map
            </span>
          </li>
        </ol>
      </nav>

      <section className="bg-cream-100 pb-20 lg:pb-28">
        <div className="container-page max-w-3xl">
          {groups.map((group) => (
            <div key={group.title} className="mt-12 first:mt-4">
              <h2 className="text-xl tracking-wide uppercase">{group.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-forest-800 underline underline-offset-4">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <Link
            href="/"
            className="mt-12 inline-flex rounded-md border border-forest-800 px-5 py-2.5 text-sm font-semibold text-forest-900 transition-colors hover:bg-cream-100"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
