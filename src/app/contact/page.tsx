import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { EstimateForm } from "@/components/home/EstimateForm";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a free tree care estimate in Madison and Dane County. Call ${site.phone} or write ${site.email}.`,
};

const details: { icon: typeof Phone; label: string; href: string; text: ReactNode }[] = [
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
    text: (
      <>
        {site.street}
        <br />
        {site.locality}
      </>
    ),
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
            <h2 className="text-3xl">Talk to Us Directly</h2>
            <ul className="mt-8 space-y-6">
              {details.map(({ icon: Icon, label, href, text }) => (
                <li key={label}>
                  <a href={href} className="group flex items-start gap-3">
                    <Icon className="mt-1 size-5 shrink-0 text-forest-700 transition-colors group-hover:text-sun-600" aria-hidden="true" />
                    <span>
                      <span className="block text-sm text-ink-muted transition-colors group-hover:text-forest-700">{label}</span>
                      <span className="font-bold text-forest-900 transition-colors group-hover:text-forest-600">{text}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-ink-muted">
              We serve {site.serviceArea}. For storm damage, call{" "}
              <a href={site.phoneHref} className="inline-flex items-center gap-1.5 font-semibold text-forest-800">
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
              </a>{" "}
              and we&apos;ll tell you when we can get there.
            </p>
            <div className="mt-8 overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-36px_rgb(20_48_31/0.45)] ring-1 ring-forest-900/10">
              <iframe
                src="https://www.google.com/maps?q=1705+Moorland+Rd,+Madison,+WI+53713&z=15&output=embed"
                title="Map of 1705 Moorland Rd., Madison, WI 53713"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="aspect-[4/3] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
