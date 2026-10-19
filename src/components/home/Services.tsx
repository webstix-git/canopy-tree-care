import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import lotClearing from "@/assets/images/gallery-cleanup.jpg";

const cards = [
  {
    slug: "tree-removal",
    name: "Tree Removal",
    text: "When a tree is dead, damaged, or creating a safety concern, we'll help you figure out the safest way to handle it.",
    image: "/images/service-removal-house.jpg",
    alt: "Arborist taking down a tree in sections beside a house",
    featured: true,
  },
  {
    slug: "tree-pruning",
    name: "Tree Pruning",
    text: "Good pruning isn't about cutting as much as possible. It's about knowing what to remove, what to leave, and how the tree will respond.",
    image: "/images/welcome-climber.jpg",
    alt: "Climber in a high-visibility jacket working partway up a trunk",
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    text: "Once a tree is gone, the stump doesn't have to stay. We'll grind it down so you can make better use of the space.",
    image: "/images/service-stump.jpg",
    alt: "Crew member operating a stump grinder beside a fence",
  },
  {
    slug: "disease-management",
    name: "Disease Management",
    text: "Leaves changing, branches dying, or a tree looking different than it used to? We'll take a closer look and help you understand what's happening.",
    image: "/images/gallery-storm-cleanup.jpg",
    alt: "Storm-broken limbs and leaves scattered across a driveway",
  },
  {
    slug: "lot-clearing",
    name: "Lot Clearing",
    text: "Need trees and brush cleared for a project? We'll help you figure out what needs to go and get the site ready for what's next.",
    image: lotClearing,
    alt: "Brush and debris cleared from a residential lot",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream-100 py-24 lg:py-32" aria-labelledby="services-title">
      <div className="container-page">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="eyebrow">What we do</p>
          <h2 id="services-title" className="mt-4 text-4xl leading-tight sm:text-5xl">
            How We Can Help
          </h2>
        </div>
        <p className="max-w-md text-ink-muted">
          Every tree and every property is a little different. We&apos;ll look at what&apos;s going
          on and recommend the work that actually makes sense.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <li key={card.slug} className={card.featured ? "md:col-span-2 lg:col-span-2" : undefined}>
            <Link
              href={`/services#${card.slug}`}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white text-forest-900 shadow-[0_18px_40px_-28px_rgb(20_48_31/0.45)] ring-1 ring-forest-900/10 ${
                card.featured ? "lg:flex-row" : ""
              }`}
            >
              <div className={`relative ${card.featured ? "min-h-56 lg:w-1/2" : "aspect-[16/10]"}`}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes={card.featured ? "(min-width: 1024px) 32vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className={`flex flex-1 flex-col p-6 ${card.featured ? "justify-center text-left lg:p-8" : ""}`}
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight text-forest-900">{card.name}</h3>
                <p className="mt-2 text-[18px] leading-relaxed text-ink-muted">{card.text}</p>
                <span className={`inline-flex items-center gap-1 text-sm font-bold text-forest-700 ${card.featured ? "mt-4" : "mt-auto pt-4"}`}>
                  Learn About {card.name}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
