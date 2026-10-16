"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import storm from "@/assets/images/gallery-storm-cleanup.jpg";
import cleanup from "@/assets/images/gallery-cleanup.jpg";
import stump from "@/assets/images/gallery-stump.jpg";
import team from "@/assets/images/gallery-team.jpg";
import spar from "@/assets/images/gallery-spar-removal.jpg";
import property from "@/assets/images/gallery-property.jpg";

const photos: { image: StaticImageData; alt: string }[] = [
  {
    image: storm,
    alt: "Storm-damaged limbs and branches across a driveway, ready for cleanup",
  },
  {
    image: cleanup,
    alt: "Aerial view of an arborist feeding branches into a wood chipper",
  },
  {
    image: stump,
    alt: "Stump grinding inside an orange safety perimeter",
  },
  {
    image: spar,
    alt: "A tall trunk being removed in sections beside a house",
  },
  {
    image: team,
    alt: "The Canopy Tree Care team out in the field with their axes",
  },
  {
    image: property,
    alt: "A cared-for tree on a residential property",
  },
];

export function Gallery({
  headingLevel = "h2",
  showLink = true,
}: {
  headingLevel?: "h1" | "h2";
  showLink?: boolean;
}) {
  const Heading = headingLevel;
  const [active, setActive] = useState<number | null>(null);

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
  }, [active]);

  return (
    <section className="bg-forest-900 py-24 text-cream-100 lg:py-32" aria-labelledby="gallery-title">
      <div className="container-page">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-leaf-200">Gallery</p>
          <Heading id="gallery-title" className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
            Some of Our Work
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-cream-100/75">
            A few recent jobs around town, big and small.
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
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

        {showLink ? (
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex rounded-full bg-sun-500 px-7 py-3.5 font-semibold text-forest-950 transition-colors hover:bg-sun-400"
            >
              View Our Gallery
            </Link>
          </div>
        ) : null}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-forest-950/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white/10 text-white"
            aria-label="Close image viewer"
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            className="absolute top-1/2 left-4 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white"
            aria-label="Previous image"
            onClick={() => setActive((current) => (current === null ? current : (current - 1 + photos.length) % photos.length))}
          >
            <ChevronLeft className="size-5" />
          </button>
          <figure className="max-h-[80vh] max-w-5xl">
            <Image
              src={photos[active].image}
              alt={photos[active].alt}
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-cream-100/80">
              {active + 1} of {photos.length}
            </figcaption>
          </figure>
          <button
            type="button"
            className="absolute top-1/2 right-4 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white"
            aria-label="Next image"
            onClick={() => setActive((current) => (current === null ? current : (current + 1) % photos.length))}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
