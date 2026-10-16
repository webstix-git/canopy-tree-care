import { Award, Eye, Leaf, MapPin, MessageSquare, Sparkles } from "lucide-react";

const homeReasons = [
  {
    icon: Award,
    title: "Certified Expertise",
    text: "Our work is led by an ISA Certified Arborist who understands tree health, structure, and safety.",
  },
  {
    icon: MessageSquare,
    title: "Good, Straight Answers",
    text: "We'll explain what we're seeing and give you practical options without making things complicated.",
  },
  {
    icon: Sparkles,
    title: "A Proper Cleanup",
    text: "Tree work can be messy. We take care to leave your yard, driveway, and property clean when we're finished.",
  },
  {
    icon: Eye,
    title: "We Look at the Whole Tree",
    text: "We consider the tree's health, structure, location, and the things around it—not just the branch that caught your attention.",
  },
  {
    icon: Leaf,
    title: "Honest Advice",
    text: "If a tree can safely stay, we'll tell you. Removal isn't always the answer.",
  },
  {
    icon: MapPin,
    title: "Locally Owned",
    text: "We're part of the Madison community and care about doing work we're proud to put our name on.",
  },
];

const servicesReasons = [
  {
    icon: Award,
    title: "Certified Expertise",
    text: "Our work is led by an ISA Certified Arborist with a focus on safe, responsible tree care.",
  },
  {
    icon: MessageSquare,
    title: "Good, Straight Answers",
    text: "We'll explain what we're seeing and give you practical options without making things complicated.",
  },
  {
    icon: Sparkles,
    title: "A Careful Cleanup",
    text: "We know tree work can make a mess. We'll take care of the cleanup when the job is done.",
  },
  {
    icon: Eye,
    title: "We Look at the Whole Tree",
    text: "We consider the tree's health, structure, location, and what's around it before making a recommendation.",
  },
  {
    icon: Leaf,
    title: "Honest Advice",
    text: "If a tree can safely stay, we'll tell you. You won't be pushed into unnecessary work.",
  },
  {
    icon: MapPin,
    title: "Locally Owned",
    text: "We're based in Madison and care about doing work our neighbors can feel good about.",
  },
];

export function Why({ variant = "home" }: { variant?: "home" | "services" }) {
  const reasons = variant === "services" ? servicesReasons : homeReasons;
  const eyebrow = variant === "services" ? "Why choose Canopy" : "Why local homeowners call us";
  const intro =
    variant === "services"
      ? "When you invite someone onto your property to work on your trees, you want to know you're in good hands."
      : "Good tree care starts with good advice. We take the time to understand what's happening before recommending what to do next.";

  return (
    <section id="why" className="scroll-mt-28 bg-forest-900 py-24 text-cream-100 lg:py-32" aria-labelledby="why-title">
      <div className="container-page">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-leaf-200">{eyebrow}</p>
          <h2 id="why-title" className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
            Why Our Neighbors Call Us First
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream-100/75">{intro}</p>
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
