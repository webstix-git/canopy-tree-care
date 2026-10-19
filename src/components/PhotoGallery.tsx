"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import storm from "@/assets/images/gallery-storm-cleanup.jpg";
import cleanup from "@/assets/images/gallery-cleanup.jpg";
import stump from "@/assets/images/gallery-stump.jpg";
import team from "@/assets/images/gallery-team.jpg";
import spar from "@/assets/images/gallery-spar-removal.jpg";
import property from "@/assets/images/gallery-property.jpg";
import removal from "@/assets/images/service-removal.jpg";
import removalHouse from "@/assets/images/service-removal-house.jpg";
import pruning from "@/assets/images/service-pruning.jpg";
import grinding from "@/assets/images/service-stump-grinding.jpg";
import stumpClose from "@/assets/images/service-stump.jpg";
import health from "@/assets/images/service-plant-health.jpg";
import climber from "@/assets/images/welcome-climber.jpg";
import atWork from "@/assets/images/arborist-at-work.jpg";
import lakeside from "@/assets/images/hero-lakeside.jpg";
import autumn from "@/assets/images/canopy-autumn.jpg";

const groups: { slug: string; name: string; photos: { image: StaticImageData; alt: string }[] }[] = [
  {
    slug: "tree-removal",
    name: "Tree Removal",
    photos: [
      { image: spar, alt: "A tall trunk being removed in sections beside a house" },
      { image: removal, alt: "A crane lifting a cut section of trunk during a residential tree removal" },
      { image: removalHouse, alt: "Tree removal work close to a house" },
      { image: team, alt: "The Canopy Tree Care crew out in the field" },
    ],
  },
  {
    slug: "tree-pruning",
    name: "Tree Pruning",
    photos: [
      { image: pruning, alt: "An arborist pruning the canopy of a large shade tree" },
      { image: climber, alt: "An arborist climbing in a mature tree" },
      { image: atWork, alt: "An arborist in a helmet and harness working among branches" },
      { image: lakeside, alt: "Mature trees along a Wisconsin shoreline" },
    ],
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    photos: [
      { image: stump, alt: "Stump grinding inside an orange safety perimeter" },
      { image: grinding, alt: "A stump grinder working in a lawn" },
      { image: stumpClose, alt: "A fresh stump left after a removal, before grinding" },
    ],
  },
  {
    slug: "disease-management",
    name: "Disease Management",
    photos: [
      { image: health, alt: "Green leaves in a cared-for tree canopy" },
      { image: property, alt: "A cared-for tree on a residential property" },
      { image: autumn, alt: "Golden autumn tree canopy against a blue sky" },
    ],
  },
  {
    slug: "lot-clearing",
    name: "Lot Clearing",
    photos: [{ image: cleanup, alt: "An arborist feeding branches into a wood chipper" }],
  },
  {
    slug: "storm-damage",
    name: "Storm Damage",
    photos: [{ image: storm, alt: "Storm-damaged limbs and branches across a driveway, ready for cleanup" }],
  },
];

export function PhotoGallery() {
  const [service, setService] = useState(groups[0].slug);
  const [active, setActive] = useState<number | null>(null);
  const photos = groups.find((group) => group.slug === service)?.photos ?? groups[0].photos;

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => (current === null ? current : (current + 1) % photos.length));
      if (event.key === "ArrowLeft")
        setActive((current) => (current === null ? current : (current - 1 + photos.length) % photos.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, photos.length]);

  return (
    <>
      <div
        className="sticky z-40 border-y border-forest-900/10 bg-cream-50/95 backdrop-blur-md"
        style={{ top: "var(--site-header-height)" }}
      >
        <div
          className="container-page grid w-full grid-cols-2 gap-2 py-3 sm:grid-cols-3 lg:grid-cols-6"
          role="tablist"
          aria-label="Gallery services"
        >
          {groups.map((group) => {
            const selected = group.slug === service;
            return (
              <button
                key={group.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setService(group.slug);
                  setActive(null);
                }}
                className={`flex items-center justify-center rounded-full px-3 py-2 text-center text-sm font-bold transition-colors ${
                  selected ? "bg-forest-800 text-white" : "text-forest-800 hover:bg-cream-100"
                }`}
              >
                {group.name}
              </button>
            );
          })}
        </div>
      </div>

      <section className="bg-white py-16 lg:py-24">
        <ul className="container-page grid grid-cols-2 gap-4 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <li key={photo.alt}>
              <button
                type="button"
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[1.75rem]"
                aria-label={`View larger image: ${photo.alt}`}
                onClick={() => setActive(index)}
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-forest-950/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-1/2 left-4 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setActive((current) => (current === null ? current : (current - 1 + photos.length) % photos.length));
            }}
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex max-h-[86vh] max-w-5xl flex-col items-end">
            <button
              type="button"
              className="mb-3 grid size-11 place-items-center rounded-full bg-white/15 text-white"
              aria-label="Close image viewer"
              onClick={(event) => {
                event.stopPropagation();
                setActive(null);
              }}
            >
              <X className="size-5" />
            </button>
            <figure onClick={(event) => event.stopPropagation()}>
              <Image src={photos[active].image} alt={photos[active].alt} className="max-h-[76vh] w-auto rounded-2xl object-contain" />
              <figcaption className="mt-3 text-center text-sm text-cream-100/80">
                {active + 1} of {photos.length}
              </figcaption>
            </figure>
          </div>
          <button
            type="button"
            className="absolute top-1/2 right-4 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setActive((current) => (current === null ? current : (current + 1) % photos.length));
            }}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </>
  );
}
