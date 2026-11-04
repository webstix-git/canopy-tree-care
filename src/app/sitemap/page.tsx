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
];

export default function SitemapPage() {
  return (
    <>
      <PageHero title="Site Map" description="Every page on our website in one place." />
      <section className="bg-cream-100 pb-16 sm:pb-20 lg:pb-28">
        <Breadcrumb className="bg-cream-100" items={[{ label: "Home", href: "/" }, { label: "Site Map" }]} />
        <div className="container-page max-w-3xl">
          {groups.map((group) => (
            <div key={group.title} className="mt-10 first:mt-2">
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
