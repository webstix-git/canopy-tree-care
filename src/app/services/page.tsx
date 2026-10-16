import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArboristBadge } from "@/components/ArboristBadge";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceBlock } from "@/components/ServiceBlock";
import { ServiceArea } from "@/components/home/ServiceArea";
import { Why } from "@/components/home/Why";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { servicePages } from "@/lib/service-pages";
import workImg from "@/assets/images/arborist-at-work.jpg";
import autumnImg from "@/assets/images/canopy-autumn.jpg";

export const metadata: Metadata = {
  title: "Services",
  description:
    "If a tree can be kept healthy and safe, Canopy Tree Care will tell you how. Free estimates in Madison and Dane County.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        description="Pruning, removal, stumps, and sick trees across Madison and Dane County."
      />
      <Breadcrumb className="bg-cream-50" items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      <section className="bg-cream-50">
        <div className="container-page grid items-center gap-16 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <div className="relative pb-16 sm:pr-20 lg:pb-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-bl-[6rem] shadow-[0_40px_80px_-40px_rgb(20_48_31/0.5)]">
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
            <ArboristBadge className="absolute bottom-6 left-6 h-28 w-auto drop-shadow-xl sm:h-32" />
          </div>

          <div>
            <h2 className="text-4xl leading-tight sm:text-5xl">
              We&apos;d Rather Save a Tree Than Cut It Down
            </h2>
            <div className="mt-6 space-y-4 text-ink-muted">
              <p>
                If a tree can be kept healthy and safe, we&apos;ll tell you how. If it really has to
                come down, we&apos;ll take it down carefully and clean up after ourselves.
              </p>
              <p>
                Our crew has the training and the equipment for jobs of every size, and Josh has the
                eye to tell what a tree actually needs. Pruning, removal, a stubborn stump, or a sick
                tree you&apos;re not sure about, we can help.
              </p>
              <p>
                Estimates are always free, so give us a call and we&apos;ll come take a look.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full border border-forest-800 px-7 py-3.5 font-semibold text-forest-900 transition-colors hover:bg-white"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {servicePages.map((service, index) => (
        <ServiceBlock key={service.slug} service={service} flip={index % 2 === 1} />
      ))}
      <Why />
      <ServiceArea />
      <CtaBanner />
    </>
  );
}
