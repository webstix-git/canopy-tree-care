import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Kind words from Canopy Tree Care customers will be posted here.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials"
        description="Kind words from Madison and Dane County homeowners will live here."
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} />
      <section className="bg-white py-20 lg:py-28">
        <div className="container-page max-w-3xl text-ink-muted">
          <p>
            We don&apos;t invent reviews. If we&apos;ve worked at your place in Madison or Dane
            County and you want a note here, email{" "}
            <a href={site.emailHref} className="font-semibold text-forest-700 underline">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="font-semibold text-forest-700 underline">
              {site.phone}
            </a>
            .
          </p>
          <p className="mt-4">
            Until then, the best way to judge us is to have {site.arborist} walk the tree with you.
            The estimate is free, and you can say no.
          </p>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
