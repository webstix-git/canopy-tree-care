import type { Metadata } from "next";
import { Phone } from "lucide-react";
import Link from "next/link";
import { BackHome, Breadcrumb, PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} handles the information you share when you call, email, or request an estimate.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="What we do with the information you share when you call or ask for an estimate."
      />
      <Breadcrumb className="bg-cream-100" items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <article className="bg-cream-100 py-20 lg:py-28">
        <div className="container-page">
        <div className="max-w-3xl space-y-8 text-ink-muted">
          <section>
            <h2 className="text-2xl text-forest-900">What We Collect</h2>
            <p className="mt-3">
              If you request an estimate, we ask for your name, phone number, email, the service
              you need, and a short note about the tree. If you call or email, we keep what you
              tell us so we can reply and schedule the visit.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-forest-900">How We Use It</h2>
            <p className="mt-3">
              We use that information to answer you, visit the property, and send a quote. We do
              not sell personal information, and we do not share it for other companies&apos;
              marketing.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-forest-900">How Long We Keep It</h2>
            <p className="mt-3">
              We keep estimate requests and job notes for as long as we need them to finish the
              work and keep ordinary business records. You can ask us to delete a request we have
              not started.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-forest-900">This Website</h2>
            <p className="mt-3">
              The site is a brochure and a way to reach us. The estimate form on this site sends
              you to a thank-you page in your browser. It does not create an account, and it does
              not ask for payment details.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-forest-900">Questions</h2>
            <p className="mt-3">
              Write {site.arborist} at{" "}
              <a href={site.emailHref} className="font-semibold text-forest-700 underline">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={site.phoneHref} className="inline-flex items-center gap-1 font-semibold text-forest-700 underline">
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
              </a>
              . Our shop is at {site.street}
              <br />
              {site.locality}.
            </p>
            <p className="mt-4">
              <Link href="/contact" className="font-semibold text-forest-800 underline underline-offset-4">
                Request an estimate
              </Link>
            </p>
            <BackHome />
          </section>
        </div>
        </div>
      </article>
    </>
  );
}
