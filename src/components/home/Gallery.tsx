"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos: { image: string; alt: string }[] = [
  {
    image: "/images/gallery-storm-cleanup.jpg",
    alt: "Storm-broken limbs and leaves scattered across a driveway",
  },
  {
    image: "/images/gallery-spar-removal.jpg",
    alt: "A tall trunk being removed in sections beside a house",
  },
  {
    image: "/images/service-stump.jpg",
    alt: "Crew member operating a stump grinder beside a fence",
  },
  {
    image: "/images/service-removal-house.jpg",
    alt: "Arborist taking down a tree in sections beside a house",
  },
  {
    image: "/images/crew-axes.jpg",
    alt: "Two Canopy Tree Care crew members with axes in a field",
  },
  {
    image: "/images/welcome-climber.jpg",
    alt: "Climber in a high-visibility jacket working partway up a trunk",
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
    <section id="gallery" className="scroll-mt-28 bg-forest-900 py-24 text-cream-100 lg:py-32" aria-labelledby="gallery-title">
      <div className="container-page">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-leaf-200">Our work</p>
          <Heading id="gallery-title" className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
            Some of Our Work
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-cream-100/75">
            Every property is different. Here&apos;s a look at some of the tree work we&apos;ve done
            around the Madison area.
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
              View Our Work
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
              <Image
                src={photos[active].image}
                alt={photos[active].alt}
                width={1600}
                height={1200}
                className="max-h-[76vh] w-auto rounded-2xl object-contain"
              />
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
    </section>
  );
}
