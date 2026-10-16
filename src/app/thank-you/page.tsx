import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your estimate request and will follow up to schedule a visit.",
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero title="Thank You" description="We have your note and we'll be in touch to set a time." />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Thank you" }]} />
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page max-w-2xl">
          <p className="text-ink-muted">
            Need us sooner? Call{" "}
            <a href={site.phoneHref} className="font-semibold text-forest-700 underline">
              {site.phone}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-forest-800 px-7 py-3.5 font-semibold text-forest-900 hover:bg-cream-100"
            >
              Back to home
            </Link>
            <Link
              href="/services"
              className="rounded-full bg-forest-800 px-7 py-3.5 font-semibold text-white hover:bg-forest-700"
            >
              See our services
            </Link>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
