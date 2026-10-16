import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { ArboristBadge } from "@/components/ArboristBadge";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceArea } from "@/components/home/ServiceArea";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import workImg from "@/assets/images/arborist-at-work.jpg";

export const metadata: Metadata = {
  title: "About",
  description: `Canopy Tree Care is a small Madison crew led by ISA Certified Arborist ${site.arborist}. We've looked after trees here since 2000.`,
};

const ticks = [
  "Science-backed tree care",
  "Industry safety standards",
  "Honest, clear advice",
  "Ongoing training",
];

const values = [
  {
    title: "Safety",
    text: "Tree work can be dangerous, so we don't cut corners. We follow industry safety standards to protect our crew, you, and your home.",
  },
  {
    title: "Environmental Stewardship",
    text: "We'd always rather save a tree than remove it. If a healthy tree can stay, we'll find a way to keep it.",
  },
  {
    title: "Transparency",
    text: "You'll get honest advice and a clear price before any work begins. The bill won't hold any surprises.",
  },
  {
    title: "Respect for Property",
    text: "We work carefully around your house, garden, and lawn, and we leave everything clean when we go.",
  },
];

const outlineButton =
  "mt-10 inline-flex rounded-full border border-forest-800 px-7 py-3.5 font-semibold text-forest-900 transition-colors hover:bg-white";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        description="A small Madison crew led by ISA Certified Arborist Josh Knapp."
      />
      <Breadcrumb className="bg-cream-50" items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <section className="bg-cream-50">
        <div className="container-page grid items-center gap-12 py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-40px_rgb(20_48_31/0.5)]">
            <Image
              src={workImg}
              alt="Arborist in a helmet and harness working among branches"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-xl">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Why We Do This</h2>
            <div className="mt-6 space-y-4 text-ink-muted">
              <p>We got into this work because we love trees, and we were tired of seeing them treated badly.</p>
              <p>
                Too many trees around town were being topped, hacked back, or taken down with risky
                shortcuts. We wanted to do it properly, with sound science and safe methods.
                We&apos;ve been doing that for homeowners and businesses around Madison since 2000.
              </p>
              <p>
                We&apos;re locally owned and run, and we care about safety, good service, and getting
                the details right. One small tree or a whole lot, we turn up when we say we will,
                finish on schedule, and clean up like it&apos;s our own yard.
              </p>
            </div>
            <Link href="/gallery" className={outlineButton}>
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="eyebrow">Certified Expertise</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Led by an ISA Certified Arborist</h2>
            <div className="mt-6 space-y-4 text-ink-muted">
              <p>
                Our work is led by {site.arborist}, an ISA Certified Arborist. The certification
                comes from the International Society of Arboriculture. To earn it, Josh passed an
                exam covering tree biology, pruning, diagnosis, and safe work practices, and he
                keeps up with ongoing training to hold onto it.
              </p>
              <p>
                What that means for you is advice from someone who understands how trees grow and
                why they fail. Josh will tell you what he sees, what he&apos;d do about it, and why.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {ticks.map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold text-forest-900">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#689838] text-white">
                    <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={outlineButton}>
              Ask Josh About Your Trees
            </Link>
          </div>
          <div className="flex justify-center">
            <ArboristBadge className="h-72 w-auto sm:h-80" />
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-24 lg:py-32">
        <div className="container-page">
          <header className="max-w-2xl">
            <p className="eyebrow">Our Values</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">What We Care About</h2>
            <p className="mt-4 text-ink-muted">
              Four things we try to get right on every job, whatever the size.
            </p>
          </header>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <li key={value.title} className="rounded-[1.75rem] bg-white p-7 ring-1 ring-forest-900/10">
                <h3 className="text-2xl">{value.title}</h3>
                <p className="mt-3 text-ink-muted">{value.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceArea />
      <CtaBanner />
    </>
  );
}
