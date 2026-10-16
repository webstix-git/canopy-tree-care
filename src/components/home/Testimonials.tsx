import Link from "next/link";
import { Quote } from "lucide-react";

const services = [
  "Tree Removal",
  "Tree Pruning",
  "Stump Grinding",
  "Disease Management",
  "Lot Clearing",
  "Tree Removal",
  "Tree Pruning",
  "Stump Grinding",
  "Disease Management",
];

const reviews = services.map((service) => ({
  quote: "Customer testimonial will appear here.",
  name: "Customer Name",
  location: "City, WI",
  service,
}));

export function Testimonials({
  headingLevel = "h2",
  showLink = true,
}: {
  headingLevel?: "h1" | "h2";
  showLink?: boolean;
}) {
  const Heading = headingLevel;

  return (
    <section id="reviews" className="scroll-mt-28 bg-forest-900 py-24 text-cream-50 lg:py-32" aria-labelledby="reviews-title">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-leaf-200">Kind words</p>
          <Heading id="reviews-title" className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
            Kind Words From Our Customers
          </Heading>
          <p className="mt-4 text-cream-100/75">
            Homeowners across Madison and Dane County trust Canopy with the trees in their yards.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <li key={`${review.service}-${index}`}>
              <figure className="flex h-full flex-col rounded-[1.75rem] bg-white/10 p-7 ring-1 ring-white/10">
                <Quote className="size-8 text-sun-400" aria-hidden="true" />
                <blockquote className="mt-4 text-[18px] leading-relaxed text-white">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-[18px] text-cream-100/70">Homeowner, {review.location}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-leaf-200">
                    {review.service}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {showLink ? (
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex rounded-full border border-white/25 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Read More Testimonials
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
