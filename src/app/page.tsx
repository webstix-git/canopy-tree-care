import { Blog } from "@/components/home/Blog";
import { CtaBanner } from "@/components/CtaBanner";
import { Gallery } from "@/components/home/Gallery";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { ServiceArea } from "@/components/home/ServiceArea";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { Welcome } from "@/components/home/Welcome";
import { Why } from "@/components/home/Why";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  url: site.url,
  telephone: "+1-608-243-1218",
  email: site.email,
  image: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: "Madison",
    addressRegion: "WI",
    postalCode: "53713",
  },
  areaServed: [
    { "@type": "City", name: "Madison", addressRegion: "WI" },
    { "@type": "AdministrativeArea", name: "Dane County", addressRegion: "WI" },
  ],
  founder: {
    "@type": "Person",
    name: site.arborist,
    jobTitle: "ISA Certified Arborist",
  },
  description:
    "Trees don't always make it easy to know what they need. Canopy Tree Care looks at the tree and gives Madison homeowners an honest recommendation.",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Welcome />
      <Services />
      <Why />
      <Process />
      <Testimonials />
      <Blog />
      <Gallery />
      <ServiceArea />
      <CtaBanner id="estimate" />
    </>
  );
}
