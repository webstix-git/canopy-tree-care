import type { Metadata } from "next";
import Link from "next/link";
import { BackHome, Breadcrumb, PageHero } from "@/components/PageHero";
import { posts } from "@/lib/posts";
import { servicePages } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on the Canopy Tree Care website.",
};

const groups = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
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
    title: "Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "AI Policy", href: "/ai-policy" },
      { label: "AI Readiness Service Index", href: "/ai-readiness-service-index" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero title="Site Map" description="Every page on this site, grouped the way we talk about the work." />
      <Breadcrumb className="bg-cream-100" items={[{ label: "Home", href: "/" }, { label: "Site Map" }]} />
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="container-page grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="rounded-[1.75rem] bg-white p-7 ring-1 ring-forest-900/10">
              <h2 className="text-2xl">{group.title}</h2>
              <ul className="mt-4 space-y-2">
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
        </div>
        <div className="container-page">
          <BackHome />
        </div>
      </section>
    </>
  );
}
