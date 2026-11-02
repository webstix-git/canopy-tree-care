import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { getServicePage, servicePages, type ServiceSection } from "@/lib/service-pages";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

function PhoneText({ text }: { text: string }) {
  const parts = text.split(site.phone);
  if (parts.length === 1) return text;

  return parts.map((part, index) => (
    <span key={`${index}-${part}`}>
      {index > 0 ? (
        <a href={site.phoneHref} className="inline-flex items-center gap-1 font-semibold text-forest-800">
          <Phone className="size-3.5" aria-hidden="true" />
          {site.phone}
        </a>
      ) : null}
      {part}
    </span>
  ));
}

function SplitSection({
  section,
  photo,
  flip,
  cream,
}: {
  section: ServiceSection;
  photo: { image: StaticImageData; alt: string };
  flip: boolean;
  cream: boolean;
}) {
  return (
    <section className={cream ? "bg-cream-50" : "bg-white"}>
      <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className={`relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ${flip ? "lg:order-2" : ""}`}>
          <Image
            src={photo.image}
            alt={photo.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className={flip ? "lg:order-1" : undefined}>
          <h2 className="text-4xl leading-tight sm:text-5xl">{section.title}</h2>
          <div className="mt-6 space-y-4 text-ink-muted">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <PhoneText text={paragraph} />
              </p>
            ))}
          </div>
          {section.items && section.items.length > 0 ? (
            <ul className="mt-6 space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-muted">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#689838] text-white">
                    <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export const instant = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return { title: "Services" };
  return { title: service.heroTitle ?? service.name, description: service.description };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const others = servicePages.filter((item) => item.slug !== service.slug);
  const photos = [{ image: service.image, alt: service.alt }, ...service.extraImages];

  return (
    <>
      <PageHero title={service.heroTitle ?? service.name} description={service.description} />
      <Breadcrumb
        className="bg-cream-50"
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      {service.sections.map((section, index) => (
        <SplitSection
          key={section.title}
          section={section}
          photo={photos[index % photos.length]}
          flip={index % 2 === 1}
          cream={index % 2 === 0}
        />
      ))}

      <section className={`${service.sections.length % 2 === 0 ? "bg-cream-50" : "bg-white"} py-20 lg:py-28`}>
        <div className="container-page">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl leading-tight sm:text-5xl">Our Process</h2>
          </header>
          <ol
            className={`mt-14 grid gap-6 md:grid-cols-2 ${
              service.process.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
          >
            {service.process.map((step, index) => (
              <li
                key={step.title}
                className={`rounded-[1.75rem] p-7 ring-1 ring-forest-900/10 ${
                  service.sections.length % 2 === 0 ? "bg-white" : "bg-cream-50"
                }`}
              >
                <span className="grid size-12 place-items-center rounded-full bg-forest-800 font-display text-xl text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-sans text-lg font-bold tracking-normal text-forest-900">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SplitSection
        section={service.closing}
        photo={photos[service.sections.length % photos.length]}
        flip={service.sections.length % 2 === 1}
        cream={service.sections.length % 2 === 1}
      />

      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="container-page">
          <header className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">More From Canopy</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Other Work We Do</h2>
          </header>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_18px_40px_-28px_rgb(20_48_31/0.45)] ring-1 ring-forest-900/10"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-[linear-gradient(to_top,rgb(20_48_31/72%)_0%,rgb(20_48_31/48%)_42%,rgb(20_48_31/18%)_72%,rgb(20_48_31/0%)_100%)] px-5 pt-16 pb-5 text-white">
                    <span className="font-display text-2xl leading-tight">{item.name}</span>
                    <ArrowRight
                      className="size-5 shrink-0 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner title={service.ctaTitle} />
    </>
  );
}
