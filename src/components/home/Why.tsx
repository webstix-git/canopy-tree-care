import { Award, Crosshair, Leaf, MapPin, MessageSquare, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Certified Expertise",
    text: "We're led by ISA Certified Arborist Josh Knapp. He knows how trees grow, why they fail, and what keeps them healthy.",
  },
  {
    icon: Crosshair,
    title: "Good in Tight Spaces",
    text: "A tree wedged between the house and the garage is our kind of job. We lower it down one piece at a time.",
  },
  {
    icon: Sparkles,
    title: "A Proper Cleanup",
    text: "We rake, blow, and haul away every last twig. You shouldn't have to clean up after the people you hired.",
  },
  {
    icon: MessageSquare,
    title: "You'll Hear From Us",
    text: "We'll let you know when we're coming, what we're doing, and what it'll cost. You won't have to chase us.",
  },
  {
    icon: Leaf,
    title: "Honest Advice",
    text: "Sometimes the best thing for a tree is to leave it alone. If that's the case, we'll tell you so.",
  },
  {
    icon: MapPin,
    title: "Locally Owned",
    text: "We're based right here in Madison, so we're never far away, and we care how the neighborhood looks.",
  },
];

export function Why() {
  return (
    <section className="bg-forest-900 py-24 text-cream-100 lg:py-32" aria-labelledby="why-title">
      <div className="container-page">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-leaf-200">Why Choose Us</p>
          <h2 id="why-title" className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
            Why Our Neighbors Call Us First
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream-100/75">
            Plenty of companies can take down a tree. Here&apos;s what you can expect when you call us.
          </p>
        </header>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-[1.75rem] bg-white/[0.06] p-7 ring-1 ring-white/10">
              <Icon className="size-6 text-sun-400" aria-hidden="true" />
              <h3 className="mt-5 font-sans text-lg font-bold tracking-normal text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-cream-100/75">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
