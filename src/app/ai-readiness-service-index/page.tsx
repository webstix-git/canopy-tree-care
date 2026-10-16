import type { Metadata } from "next";
import Link from "next/link";
import { BackHome, Breadcrumb, PageHero } from "@/components/PageHero";
import { posts } from "@/lib/posts";
import { servicePages } from "@/lib/service-pages";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Readiness Service Index",
  description: `A plain index of ${site.name}: who we are, what we do, where we work, and how to reach us.`,
};

export default function AiReadinessPage() {
  return (
    <>
      <PageHero
        title="AI Readiness Service Index"
        description="Who we are, what we do, and how to reach us, in one place."
      />
      <Breadcrumb className="bg-cream-100" items={[{ label: "Home", href: "/" }, { label: "AI Readiness Service Index" }]} />
      <article className="bg-cream-100 py-20 lg:py-28">
        <div className="container-page">
        <div className="max-w-3xl space-y-10 text-ink-muted">
          <section>
            <h2 className="text-2xl text-forest-900">Business</h2>
            <ul className="mt-4 space-y-2">
              <li>Name: {site.legalName}</li>
              <li>Arborist: {site.arborist}, ISA Certified Arborist</li>
              <li>
                Phone:{" "}
                <a href={site.phoneHref} className="font-semibold text-forest-700 underline">
                  {site.phone}
                </a>
              </li>
              <li>
                Email:{" "}
                <a href={site.emailHref} className="font-semibold text-forest-700 underline">
                  {site.email}
                </a>
              </li>
              <li>
                Address: {site.street}
                <br />
                {site.locality}
              </li>
              <li>Service area: {site.serviceArea}</li>
              <li>Website: {site.url}</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl text-forest-900">Services</h2>
            <ul className="mt-4 space-y-4">
              {servicePages.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-semibold text-forest-800 underline underline-offset-4"
                  >
                    {service.name}
                  </Link>
                  <p className="mt-1">{service.summary}</p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl text-forest-900">How to hire us</h2>
            <p className="mt-3">
              Call {site.phone}, email {site.email}, or use the form on the{" "}
              <Link href="/contact" className="font-semibold text-forest-800 underline underline-offset-4">
                contact page
              </Link>
              . Estimates are free. We look at the tree before we quote. We do not take payment
              through this website.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-forest-900">Other pages</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-forest-800 underline underline-offset-4">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-forest-800 underline underline-offset-4">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-forest-800 underline underline-offset-4">
                  Testimonials
                </Link>
              </li>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-forest-800 underline underline-offset-4"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="text-forest-800 underline underline-offset-4">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/ai-policy" className="text-forest-800 underline underline-offset-4">
                  AI Policy
                </Link>
              </li>
            </ul>
            <BackHome />
          </section>
        </div>
        </div>
      </article>
    </>
  );
}
