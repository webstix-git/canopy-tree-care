import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { ArboristBadge } from "@/components/ArboristBadge";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceArea } from "@/components/home/ServiceArea";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `A small Madison tree care crew led by ISA Certified Arborist ${site.arborist}. We've been caring for trees since 2000.`,
};

const ticks = [
  "Science-backed tree care",
  "Safe, careful work",
  "Straightforward advice",
  "Ongoing training",
];

const values = [
  {
    icon: "/icons/icons/safety.svg",
    title: "Safety",
    text: "Tree work can be dangerous, so we don't cut corners. We follow industry safety practices to protect our crew, you, and your home.",
  },
  {
    icon: "/icons/icons/environment.svg",
    title: "Environmental Stewardship",
    text: "We'd rather save a healthy tree than remove it. If a tree can stay, we'll look for a practical way to keep it.",
  },
  {
    icon: "/icons/icons/transparency.svg",
    title: "Transparency",
    text: "You'll get honest advice and a clear price before the work begins. No surprises halfway through the job.",
  },
  {
    icon: "/icons/icons/property.svg",
    title: "Respect for Property",
    text: "We work carefully around your house, yard, and landscaping, and we clean up after ourselves when the job is done.",
  },
];

const outlineButton =
  "mt-10 inline-flex rounded-full border border-forest-800 px-7 py-3.5 font-semibold text-forest-900 transition-colors hover:bg-white";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="A small Madison tree care crew led by ISA Certified Arborist Josh Knapp. We've been caring for trees since 2000."
      />
      <Breadcrumb className="bg-cream-50" items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      <section className="bg-cream-50">
        <div className="container-page grid items-center gap-12 py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-40px_rgb(20_48_31/0.5)]">
              <Image
                src="/images/welcome-josh-knapp.jpg"
                alt="Josh Knapp, owner and ISA Certified Arborist"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -top-4 -right-2 grid size-28 place-items-center rounded-full bg-forest-800 px-3 text-center text-cream-50 shadow-lg sm:-right-4">
              <p>
                <span className="block text-3xl leading-none font-bold">25</span>
                <span className="mt-1 block text-[11px] font-bold tracking-wide uppercase">Years since 2000</span>
              </p>
            </div>
          </div>
          <div className="max-w-xl">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Why We Do This</h2>
            <div className="mt-6 space-y-4 text-ink-muted">
              <p>We got into this work because we love trees, and we were tired of seeing them treated badly.</p>
              <p>
                Too many trees were being topped, hacked back, or taken down when a better solution
                was possible. We wanted to do things differently, with sound tree care practices,
                careful work, and a little more respect for the trees we&apos;re working around.
              </p>
              <p>
                We&apos;re a locally owned crew, and we care about doing the job right. That means
                showing up when we say we will, keeping your property clean, and taking the time to
                explain what we see and what we recommend.
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
                Our work is led by {site.arborist}, an ISA Certified Arborist. His certification
                comes from the International Society of Arboriculture and reflects a strong
                foundation in tree biology, pruning, diagnosis, and safe work practices.
              </p>
              <p>
                What that means for you is simple: you&apos;re getting advice from someone who
                understands how trees grow, what they need, and when a tree can be saved instead of
                removed.
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
            <div className="w-full max-w-sm rounded-[1.75rem] bg-cream-100 px-8 py-10 text-center ring-1 ring-forest-900/10">
              <ArboristBadge className="mx-auto h-56 w-auto sm:h-64" />
              <p className="mt-6 text-xs font-bold tracking-[0.16em] text-forest-600 uppercase">ISA Certified Arborist</p>
              <p className="mt-2 text-2xl font-bold text-forest-900">{site.arborist}</p>
              <p className="mt-2 text-ink-muted">Leading tree care in Madison since 2000.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-900 py-24 text-cream-100 lg:py-32">
        <div className="container-page">
          <header className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-leaf-200">Our Values</p>
            <h2 className="mt-4 text-4xl leading-tight text-white sm:text-5xl">What We Care About</h2>
            <p className="mt-4 text-lg leading-relaxed text-cream-100/75">
              A few things we try to get right on every job, no matter the size.
            </p>
          </header>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map(({ icon, title, text }) => (
              <li key={title} className="rounded-[1.75rem] bg-white/[0.06] p-7 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-block size-6 shrink-0 bg-sun-400"
                    style={{
                      WebkitMask: `url("${icon}") center / contain no-repeat`,
                      mask: `url("${icon}") center / contain no-repeat`,
                      WebkitMaskMode: "alpha",
                      maskMode: "alpha",
                    }}
                  />
                  <h3 className="font-sans text-lg font-bold tracking-normal text-white">{title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-cream-100/75">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceArea variant="about" />
      <CtaBanner />
    </>
  );
}
