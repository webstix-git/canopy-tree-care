import { Award, MapPin, MessageSquare, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Certified Expertise",
    text: "Tree care led by an ISA Certified Arborist.",
  },
  {
    icon: MapPin,
    title: "Local to Madison",
    text: "Proudly serving homeowners throughout Madison and Dane County.",
  },
  {
    icon: MessageSquare,
    title: "Honest Recommendations",
    text: "We'll tell you what your tree actually needs—not what it doesn't.",
  },
  {
    icon: Sparkles,
    title: "Careful Cleanup",
    text: "We treat your property with care and clean up when the work is done.",
  },
];

export function TrustBar() {
  return (
    <section className="container-page relative pb-16 lg:pb-20" aria-labelledby="trust-title">
      <h2 id="trust-title" className="sr-only">
        Why homeowners choose Canopy
      </h2>
      <ul className="grid overflow-hidden rounded-[1.5rem] border border-forest-900/8 bg-white shadow-[0_20px_50px_-36px_rgb(20_48_31/0.4)] sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex items-start gap-4 border-forest-900/10 px-6 py-7 sm:border-r sm:nth-[2n]:border-r-0 lg:border-r lg:nth-[2n]:border-r lg:last:border-r-0 [&:not(:last-child)]:border-b lg:[&:not(:last-child)]:border-b-0"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-leaf-100 text-forest-700">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-sans text-base font-bold tracking-normal text-forest-900">{title}</h3>
              <p className="mt-1 text-[18px] leading-relaxed text-ink-muted">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
