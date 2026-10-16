import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, HardHat, Home, Leaf } from "lucide-react";
import { ArboristBadge } from "@/components/ArboristBadge";
import { site } from "@/lib/site";
import workImg from "@/assets/images/arborist-at-work.jpg";
import autumnImg from "@/assets/images/canopy-autumn.jpg";

const values = [
  {
    icon: HardHat,
    title: "Safe work, every time",
    text: "Our crew is trained and careful, and we treat every job like it is next to our own house.",
  },
  {
    icon: Leaf,
    title: "Kind to the environment",
    text: "We look after the trees that can stay, and we handle the ones that can't with care.",
  },
  {
    icon: Eye,
    title: "Honest, upfront prices",
    text: "You'll know the price before we start. No surprises, and no pressure to add on work you don't need.",
  },
  {
    icon: Home,
    title: "Respect for your property",
    text: "We treat your yard like it's our own, and we leave it clean.",
  },
];

export function Welcome() {
  return (
    <section className="bg-cream-50" aria-labelledby="welcome-title">
      <div className="container-page grid items-center gap-16 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div className="relative pb-16 sm:pr-20 lg:pb-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-bl-[6rem] shadow-[0_40px_80px_-40px_rgb(20_48_31/0.5)]">
            <Image
              src={workImg}
              alt="Arborist in a helmet and harness working among branches"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[30%_center]"
            />
          </div>
          <div className="absolute right-0 bottom-0 aspect-square w-[45%] overflow-hidden rounded-[2rem] border-8 border-cream-100 shadow-xl">
            <Image
              src={autumnImg}
              alt="Golden autumn tree canopy against a blue sky"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 18vw, 45vw"
              className="object-cover"
            />
          </div>
          <ArboristBadge className="absolute bottom-6 left-6 h-28 w-auto drop-shadow-xl sm:h-32" />
        </div>

        <div>
          <p className="eyebrow">Welcome to Canopy Tree Care</p>
          <h2 id="welcome-title" className="mt-4 text-4xl leading-tight sm:text-5xl">
            We Look After Your Trees <span className="text-forest-600">Like They&apos;re Our Own.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
            <p>
              We started Canopy Tree Care because we kept seeing good trees topped or cut down when
              a bit of proper pruning would have saved them. Madison&apos;s trees deserve better than
              that.
            </p>
            <p>
              When you call, you&apos;ll talk to people who actually know trees. We&apos;ll come out,
              have a look, tell you honestly what we&apos;d do and what it&apos;ll cost, and then do
              exactly that. No upselling and no surprises on the bill.
            </p>
            <p className="text-[18px] font-semibold text-forest-800">
              {site.arborist}, ISA Certified Arborist
            </p>
          </div>

          <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-forest-800 text-leaf-200">
                  <Icon className="size-5" aria-hidden="true" />
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
            Learn more about us
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
