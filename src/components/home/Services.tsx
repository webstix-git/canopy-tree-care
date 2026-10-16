import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CloudLightning, Phone } from "lucide-react";
import { site } from "@/lib/site";
import removalImg from "@/assets/images/service-removal.jpg";
import pruningImg from "@/assets/images/service-pruning.jpg";
import stumpImg from "@/assets/images/service-stump-grinding.jpg";
import diseaseImg from "@/assets/images/service-plant-health.jpg";

const cards = [
  {
    slug: "tree-removal",
    name: "Tree Removal",
    text: "Some trees have to come down. Storm damage, disease, or one leaning over the house. We take them down carefully, even in tight spots close to your home.",
    image: removalImg,
    alt: "A crane lifting a cut section of trunk during a residential tree removal",
    featured: true,
  },
  {
    slug: "tree-pruning",
    name: "Tree Pruning",
    text: "Good pruning keeps a tree healthy, lets light into your yard, and keeps branches clear of your roof and lines. We prune to help the tree, never just to shorten it.",
    image: pruningImg,
    alt: "An arborist pruning the canopy of a large shade tree",
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    text: "A stump left behind is a tripping hazard and an eyesore. We grind it below grade so you can replant, reseed, or just have your yard back.",
    image: stumpImg,
    alt: "A stump grinder removing a tree stump from a lawn",
  },
  {
    slug: "disease-management",
    name: "Disease Management",
    text: "When a tree is struggling, we figure out why and tell you plainly whether it can be saved. Oak wilt, ash borers, and decline are problems we see across Dane County.",
    image: diseaseImg,
    alt: "Close view of healthy green leaves in a cared-for tree canopy",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream-100 py-24 lg:py-32" aria-labelledby="services-title">
      <div className="container-page">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="eyebrow">Our Services</p>
          <h2 id="services-title" className="mt-4 text-4xl leading-tight sm:text-5xl">
            How We Can Help
          </h2>
        </div>
        <p className="max-w-md text-ink-muted">
          Most of our days are spent on one of these three jobs. If you&apos;re not sure which one you
          need, just tell us what&apos;s going on and we&apos;ll point you the right way.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <li key={card.slug} className={card.featured ? "md:col-span-2 lg:col-span-2" : undefined}>
            <Link
              href={`/services/${card.slug}`}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white text-forest-900 shadow-[0_18px_40px_-28px_rgb(20_48_31/0.45)] ring-1 ring-forest-900/10 ${
                card.featured ? "lg:flex-row" : ""
              }`}
            >
              <div className={`relative ${card.featured ? "min-h-56 lg:w-1/2" : "aspect-[16/10]"}`}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  placeholder="blur"
                  sizes={card.featured ? "(min-width: 1024px) 32vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className={`flex flex-1 flex-col p-6 ${
                  card.featured ? "justify-center text-left lg:p-8" : "justify-end"
                }`}
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight text-forest-900">{card.name}</h3>
                <p className="mt-2 text-[18px] leading-relaxed text-ink-muted">{card.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-forest-700">
                  Learn more about {card.name.toLowerCase()}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}

        <li>
          <div className="flex h-full flex-col justify-between rounded-[1.75rem] bg-forest-800 p-7 text-cream-50">
            <div>
              <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-sun-400">
                <CloudLightning className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white">
                Storm Damage
              </h3>
              <p className="mt-2 text-[18px] leading-relaxed text-cream-100/80">
                Hanging limbs and split trunks can&apos;t wait. Call and we&apos;ll come take a look,
                then take the hazard down safely.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sun-400 px-5 py-3 text-sm font-bold text-forest-950 hover:bg-sun-500"
              >
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
              </a>
              <Link href="/services/storm-damage" className="text-center text-sm font-semibold text-leaf-200 hover:text-white">
                Learn more about storm damage
              </Link>
            </div>
          </div>
        </li>
      </ul>
      </div>
    </section>
  );
}
