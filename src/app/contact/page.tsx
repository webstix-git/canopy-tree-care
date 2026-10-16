import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { EstimateForm } from "@/components/home/EstimateForm";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a free tree care estimate in Madison and Dane County. Call ${site.phone} or write ${site.email}.`,
};

const details = [
  {
    icon: Phone,
    label: "Phone",
    href: site.phoneHref,
    text: site.phone,
  },
  {
    icon: Mail,
    label: "Email",
    href: site.emailHref,
    text: site.email,
  },
  {
    icon: MapPin,
    label: "Address",
    href: site.mapHref,
    text: `${site.street}, ${site.locality}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Tell us what the tree is doing and we'll come take a look."
      />
      <Breadcrumb className="bg-cream-100" items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <section className="bg-cream-100 py-16 lg:py-24">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <EstimateForm />
          <div>
            <h2 className="text-3xl">Talk to us directly</h2>
            <ul className="mt-8 space-y-6">
              {details.map(({ icon: Icon, label, href, text }) => (
                <li key={label}>
                  <a href={href} className="flex items-start gap-3">
                    <Icon className="mt-1 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                    <span>
                      <span className="block text-sm text-ink-muted">{label}</span>
                      <span className="font-bold text-forest-900">{text}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-ink-muted">
              We serve {site.serviceArea}. For storm damage, call {site.phone} and we&apos;ll tell
              you when we can get there.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
