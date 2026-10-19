import type { Metadata } from "next";
import Link from "next/link";
import { BackHome, Breadcrumb, PageHero } from "@/components/PageHero";
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
      href: `/services#${service.slug}`,
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
      <PageHero title="Site Map" description="Every page on our website in one place." />
      <Breadcrumb className="bg-cream-100" items={[{ label: "Home", href: "/" }, { label: "Site Map" }]} />

      <section className="bg-cream-100 py-20 lg:py-28">
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

          <BackHome />
        </div>
      </section>
    </>
  );
}
