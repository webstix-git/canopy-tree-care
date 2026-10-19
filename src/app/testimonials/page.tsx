import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Breadcrumb, PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Kind words from Canopy Tree Care customers will be posted here.",
};

const reviews = Array.from({ length: 9 }, () => ({
  quote: "Customer testimonial will appear here.",
  name: "Customer Name",
  location: "City, WI",
}));

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials"
        description="Kind words from Madison and Dane County homeowners will live here."
      />
      <Breadcrumb className="bg-cream-100" items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} />
      <section className="bg-cream-100 py-20 lg:py-28">
        <ul className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <li key={index}>
              <figure className="flex h-full flex-col rounded-[1.75rem] bg-white p-7 ring-1 ring-forest-900/10">
                <Quote className="size-8 text-sun-500" aria-hidden="true" />
                <blockquote className="mt-4 text-[18px] leading-relaxed text-forest-900">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-forest-900">{review.name}</p>
                  <p className="text-[18px] text-ink-muted">Homeowner, {review.location}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <CtaBanner />
    </>
  );
}
