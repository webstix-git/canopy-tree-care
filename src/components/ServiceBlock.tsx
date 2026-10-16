import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ServicePage } from "@/lib/service-pages";

export function ServiceBlock({
  service,
  flip = false,
  showIntro = true,
}: {
  service: ServicePage;
  flip?: boolean;
  showIntro?: boolean;
}) {
  return (
    <section
      id={service.slug}
      className={`scroll-mt-[calc(var(--site-header-height)+4.5rem)] py-20 lg:py-28 ${flip ? "bg-cream-100" : "bg-white"}`}
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={`relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ${flip ? "lg:order-2" : ""}`}>
          <Image
            src={service.image}
            alt={service.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className={flip ? "lg:order-1" : undefined}>
          {showIntro ? <h2 className="text-4xl leading-tight">{service.name}</h2> : null}
          <div className={`space-y-4 text-ink-muted ${showIntro ? "mt-5" : ""}`}>
            {showIntro ? <p>{service.summary}</p> : null}
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {service.includes.length > 0 ? (
            <>
              <p className="mt-6 font-semibold text-forest-900">{service.includesLead}</p>
              <ul className="mt-4 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-muted">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#689838] text-white">
                      <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-forest-800 px-7 py-3.5 font-semibold text-forest-900 transition-colors hover:bg-white"
          >
            {service.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
