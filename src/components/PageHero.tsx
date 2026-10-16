import Image from "next/image";
import Link from "next/link";
import canopyImg from "@/assets/images/cta-canopy.jpg";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative bg-cream-50">
      <div className="pointer-events-none absolute -top-[6.5rem] right-0 bottom-0 left-0 sm:-top-[8.5rem]">
        <Image
          src={canopyImg}
          alt=""
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgb(255_255_255/92%)_0%,rgb(255_255_255/62%)_42%,rgb(255_255_255/18%)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/88%)_0%,rgb(255_255_255/48%)_36%,rgb(255_255_255/8%)_100%)]"
        />
      </div>
      <div className="container-page relative z-10 flex min-h-[calc(400px-6.5rem)] items-end pb-12 sm:min-h-[calc(400px-8.5rem)]">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className={`max-w-3xl text-5xl leading-tight font-bold text-forest-900 sm:text-6xl ${eyebrow ? "mt-4" : ""}`}>
            {title}
          </h1>
          {description ? <p className="mt-4 max-w-xl text-ink-muted">{description}</p> : null}
        </div>
      </div>
    </section>
  );
}

export function Breadcrumb({
  items,
  className = "bg-white",
}: {
  items: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="container-page flex flex-wrap items-center gap-x-2 gap-y-1 py-4 text-sm text-ink-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href && !last ? (
                <Link href={item.href} className="hover:text-forest-800">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-forest-900" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function BackHome() {
  return (
    <Link
      href="/"
      className="mt-10 inline-flex rounded-full border border-forest-800 px-7 py-3.5 font-semibold text-forest-900 transition-colors hover:bg-white"
    >
      Back to home
    </Link>
  );
}
