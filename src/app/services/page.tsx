import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArboristBadge } from "@/components/ArboristBadge";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceArea } from "@/components/home/ServiceArea";
import { Why } from "@/components/home/Why";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { servicePages } from "@/lib/service-pages";
import workImg from "@/assets/images/arborist-at-work.jpg";
import autumnImg from "@/assets/images/canopy-autumn.jpg";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From removing a hazardous tree to helping a healthy one grow better, Canopy Tree Care provides practical tree care for homeowners throughout Madison and Dane County.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        description="From removing a hazardous tree to helping a healthy one grow better, we provide practical tree care for homeowners throughout Madison and Dane County."
      />
      <Breadcrumb className="bg-cream-50" items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      <section className="bg-cream-50">
        <div className="container-page grid items-center gap-10 section-y lg:grid-cols-2 lg:gap-20">
          <div className="relative pb-14 sm:pr-20 lg:pb-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] rounded-bl-[3.5rem] shadow-[0_40px_80px_-40px_rgb(20_48_31/0.5)] sm:rounded-[2rem] sm:rounded-bl-[6rem]">
              <Image
                src={workImg}
                alt="Arborist in a helmet and harness working among branches"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[30%_center]"
              />
            </div>
            <div className="absolute right-0 bottom-0 aspect-square w-[45%] overflow-hidden rounded-[2rem] border-8 border-cream-50 shadow-xl">
              <Image
                src={autumnImg}
                alt="Golden autumn tree canopy against a blue sky"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 18vw, 45vw"
                className="object-cover"
              />
            </div>
            <ArboristBadge className="absolute bottom-4 left-4 h-20 w-auto drop-shadow-xl sm:bottom-6 sm:left-6 sm:h-32" />
          </div>

          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
              We&apos;d Rather Save a Tree Than Cut It Down
            </h2>
            <div className="mt-6 space-y-4 text-ink-muted">
              <p>
                Not every tree needs to be removed. Sometimes a good pruning, a little attention, or
                the right treatment is all it needs.
              </p>
              <p>
                We&apos;ll look at the tree, what&apos;s happening around it, and any safety concerns
                before recommending what to do. If the tree can safely stay, we&apos;ll tell you. If
                removal is the better choice, we&apos;ll explain why.
              </p>
              <p>
                Our goal isn&apos;t to sell you the most work. It&apos;s to help you make the right
                decision for your tree and your property.
              </p>
            </div>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full border border-forest-800 px-7 py-3.5 font-semibold text-forest-900 transition-colors hover:bg-white"
            >
              Talk to an Arborist
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y-sm bg-white">
        <div className="container-page">
          <header className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">What We Do</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">Tree Care for Madison Homes</h2>
            <p className="mt-4 text-ink-muted">
              Six kinds of work, each with its own page. Pick the one that matches what you&apos;re
              seeing in the yard.
            </p>
          </header>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-cream-50 text-forest-900 shadow-[0_18px_40px_-28px_rgb(20_48_31/0.45)] ring-1 ring-forest-900/10"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-forest-900">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-[18px] leading-relaxed text-ink-muted">{service.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-forest-700">
                      Learn About {service.name}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Why variant="services" />
      <ServiceArea variant="services" />
      <CtaBanner />
    </>
  );
}
