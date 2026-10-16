import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Breadcrumb, PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Kind words from Canopy Tree Care customers will be posted here.",
};

const services = [
  "Tree Removal",
  "Tree Pruning",
  "Stump Grinding",
  "Disease Management",
  "Lot Clearing",
  "Storm Damage",
  "Tree Pruning",
  "Tree Removal",
  "Stump Grinding",
];

const reviews = services.map((service) => ({
  quote: "Customer testimonial will appear here.",
  name: "Customer Name",
  location: "City, WI",
  service,
}));

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Testimonials"
        description="Kind words from Madison and Dane County homeowners will live here."
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} />
      <section className="bg-cream-100 py-20 lg:py-28">
        <ul className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <li key={`${review.service}-${index}`}>
              <figure className="flex h-full flex-col rounded-[1.75rem] bg-white p-7 ring-1 ring-forest-900/10">
                <Quote className="size-8 text-sun-500" aria-hidden="true" />
                <blockquote className="mt-4 text-[18px] leading-relaxed text-forest-900">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-semibold text-forest-900">{review.name}</p>
                    <p className="text-[18px] text-ink-muted">Homeowner, {review.location}</p>
                  </div>
                  <span className="rounded-full bg-cream-100 px-3 py-1 text-xs font-semibold text-forest-800">
                    {review.service}
                  </span>
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
