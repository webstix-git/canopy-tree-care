import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArboristBadge } from "@/components/ArboristBadge";

const values = [
  {
    icon: "/icons/icons/certified%20badge.svg",
    title: "Certified Arborist",
    text: "Professional tree care backed by arborist knowledge and experience.",
  },
  {
    icon: "/icons/Homepage/A%20local%20team/answer-lg.svg",
    title: "Straight Answers",
    text: "We'll explain the problem and your options without making things complicated.",
  },
  {
    icon: "/icons/Homepage/A%20local%20team/careful-work.svg",
    title: "Careful Work",
    text: "We take care around your home, landscaping, driveway, and yard.",
  },
  {
    icon: "/icons/Homepage/A%20local%20team/location-lg.svg",
    title: "Local Knowledge",
    text: "We know the trees and growing conditions around Madison and Dane County.",
  },
];

export function Welcome() {
  return (
    <section id="welcome" className="scroll-mt-28 bg-cream-50" aria-labelledby="welcome-title">
      <div className="container-page grid items-start gap-16 py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16 lg:py-32">
        <div className="relative pr-10 pb-16 sm:pr-20 sm:pb-20 lg:sticky lg:top-[calc(var(--site-header-height)+2rem)] lg:mt-12 lg:self-start">
          <div className="relative aspect-video overflow-hidden rounded-[2rem] rounded-bl-[6rem] shadow-[0_40px_80px_-40px_rgb(20_48_31/0.5)]">
            <Image
              src="/images/crew-axes.jpg"
              alt="Two Canopy Tree Care crew members with axes in a field"
              fill
              quality={100}
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute right-0 bottom-[calc(-1.5rem-10px)] z-10 aspect-square w-[42%] overflow-hidden rounded-[1.6rem] border-[6px] border-cream-50 shadow-xl sm:w-[38%]">
            <Image
              src="/images/welcome-climber.jpg"
              alt="Climber in a high-visibility jacket working partway up a trunk"
              fill
              quality={100}
              sizes="(min-width: 1024px) 22vw, 42vw"
              className="object-cover object-center"
            />
          </div>
          <ArboristBadge className="absolute bottom-2 left-4 z-10 h-24 w-auto drop-shadow-xl sm:h-28" />
        </div>

        <div>
          <p className="eyebrow">A local team you can count on</p>
          <h2 id="welcome-title" className="mt-4 text-4xl leading-tight sm:text-5xl">
            We Look After Your Trees <span className="text-forest-600">Like They&apos;re Our Own.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
            <p>
              Canopy Tree Care is a locally owned tree care company serving Madison and surrounding
              Dane County communities. Our work is led by ISA Certified Arborist Josh Knapp, with a
              focus on safe work, healthy trees, and doing right by the homeowner.
            </p>
            <p>
              Sometimes a tree needs to come down. Sometimes it just needs the right pruning. And
              sometimes the best thing to do is leave it alone. We&apos;ll explain what we&apos;re
              seeing, talk through your options, and help you decide what makes sense for your
              property.
            </p>
          </div>

          <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {values.map(({ icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-forest-800">
                  <img src={icon} alt="" className={`size-7 ${title === "Certified Arborist" ? "brightness-0 invert" : ""}`} />
                </span>
                <div>
                  <h3 className="font-sans text-base font-bold tracking-normal">{title}</h3>
                  <p className="mt-1 text-[18px] leading-relaxed text-ink-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-forest-700"
          >
            Meet Our Team
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
