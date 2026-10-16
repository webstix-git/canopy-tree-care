import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact - Thank You",
  description: "We received your message and will get in touch with you shortly.",
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero title="Contact - Thank You" />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Thank You" },
        ]}
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-bold tracking-[0.16em] text-sun-600 uppercase">Request received</p>
          <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Thanks for contacting us!</h2>
          <p className="mt-4 text-ink-muted">We will get in touch with you shortly.</p>
          <p className="mt-6 text-ink-muted">
            Need us sooner? Call{" "}
            <a href={site.phoneHref} className="font-semibold text-forest-700 underline">
              {site.phone}
            </a>
            .
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full border border-forest-800 px-7 py-3.5 font-semibold text-forest-900 hover:bg-cream-100"
          >
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
