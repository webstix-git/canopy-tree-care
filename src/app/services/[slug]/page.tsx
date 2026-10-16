import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { ServiceBlock } from "@/components/ServiceBlock";
import { getServicePage, servicePages } from "@/lib/service-pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return { title: "Service" };
  return { title: service.name, description: service.summary };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const others = servicePages.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero title={service.name} description={service.summary} />
      <Breadcrumb
        className="bg-white"
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />
      <ServiceBlock service={service} showIntro={false} />
      <section className="bg-cream-50 py-16 lg:py-20">
        <div className="container-page">
          <h2 className="text-3xl">Other work we do</h2>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="font-semibold text-forest-800 underline underline-offset-4">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
