import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { ArboristBadge } from "@/components/ArboristBadge";
import { TrustBar } from "@/components/home/TrustBar";
import { site } from "@/lib/site";

const highlights = [
  "ISA Certified Arborist",
  "Locally Owned",
  "Serving Madison & Dane County",
  "Careful, Honest Work",
];

export function Hero() {
  return (
    <section className="relative bg-cream-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[6.5rem] left-0 h-[34rem] w-[46rem] bg-[radial-gradient(ellipse_at_0%_0%,rgb(214_228_196)_0%,rgb(226_236_210/0.72)_38%,transparent_70%)] sm:-top-[8.5rem]"
      />

      <div className="container-page relative grid items-center gap-16 pt-8 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-12 lg:pb-24">
        <div className="relative z-10">
          <p className="text-xs font-bold tracking-[0.18em] text-forest-700 uppercase">
            Madison&apos;s local tree care crew
          </p>
          <h1 className="mt-5 max-w-xl text-[2.6rem] leading-[1.08] font-medium tracking-tight text-forest-900 sm:text-6xl lg:text-[3.6rem]">
            Tree Care You Can Trust, <span className="text-forest-600">Rooted in Madison.</span>
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-ink-muted">
            Trees don&apos;t always make it easy to know what they need. Whether you have a tree
            that&apos;s becoming a safety concern, needs a little attention, or you&apos;re simply
            not sure what&apos;s going on, we&apos;ll take a look and give you an honest
            recommendation.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sun-500 px-7 py-3.5 font-bold text-forest-950 shadow-[0_12px_24px_-14px_rgb(207_138_27/0.9)] transition-colors hover:bg-sun-600"
            >
              Get a Free Estimate
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
            {highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap text-forest-800">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#689838] text-white">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative pb-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] shadow-[0_24px_50px_-28px_rgb(20_48_31/0.35)]">
            <Image
              src="/images/hero-lakeside.jpg"
              alt="Crew member clearing a fallen tree beside a lakeside home"
              fill
              preload
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -top-3 -right-3 z-10 flex max-w-[13rem] items-start gap-2 rounded-xl bg-forest-900 px-3 py-2 text-cream-50 shadow-md">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-sun-400" aria-hidden="true" />
            <div>
              <p className="text-sm leading-tight font-bold text-white">We Leave It Tidy</p>
              <p className="text-xs text-cream-100/80">Your yard is left clean.</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 flex w-[min(100%,18.5rem)] items-center gap-3 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_16px_40px_-20px_rgb(20_48_31/0.45)]">
            <ArboristBadge className="h-16 w-auto shrink-0" />
            <div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-forest-600 uppercase">Led by</p>
              <p className="text-lg leading-tight font-bold text-forest-900">{site.arborist}</p>
              <p className="text-[18px] text-ink-muted">ISA Certified Arborist, Madison, WI</p>
            </div>
          </div>
        </div>
      </div>

      <TrustBar />
    </section>
  );
}
