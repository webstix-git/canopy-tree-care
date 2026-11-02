import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Phone } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { ServiceFaqs } from "@/components/ServiceFaqs";
import { getServicePage, servicePages } from "@/lib/service-pages";
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

      {service.sections.map((section, index) => {
        const photo = photos[index % photos.length];
        const flip = index % 2 === 1;

        return (
          <section
            key={section.title}
            className={index % 2 === 0 ? "bg-cream-50" : "bg-white"}
          >
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
      })}

      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="container-page">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl leading-tight sm:text-5xl">A Simple Process</h2>
          </header>
          <ol
            className={`mt-14 grid gap-6 md:grid-cols-2 ${
              service.process.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
          >
            {service.process.map((step, index) => (
              <li key={step.title} className="rounded-[1.75rem] bg-white p-7 ring-1 ring-forest-900/10">
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

      <ServiceFaqs items={service.faqs} />

      <section className="bg-cream-50 py-16 lg:py-20">
        <div className="container-page">
          <h2 className="text-3xl sm:text-4xl">Other Work We Do</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="inline-flex rounded-full border border-forest-800 px-5 py-2.5 font-semibold text-forest-900 transition-colors hover:bg-white"
                >
                  {item.name}
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
