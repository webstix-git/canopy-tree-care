import { Phone } from "lucide-react";

const steps = [
  {
    title: "Give Us a Call",
    text: "Tell us what's going on and what you're concerned about.",
  },
  {
    title: "We Come Take a Look",
    text: "We'll look at the tree, its condition, and what's around it.",
  },
  {
    title: "You Get Clear Options",
    text: "We'll explain what we found and what we'd recommend.",
  },
  {
    title: "We Do the Work",
    text: "Once you've decided what you'd like to do, we'll take care of the job safely and carefully.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-28 bg-cream-50 py-24 lg:py-32" aria-labelledby="process-title">
      <div className="container-page">
      <header className="mx-auto max-w-2xl text-center">
        <p className="eyebrow justify-center">A simple process</p>
        <h2 id="process-title" className="mt-4 text-4xl leading-tight sm:text-5xl">
          What Happens When You Call
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          No complicated process. Just a conversation, a look at the tree, and a clear
          recommendation.
        </p>
      </header>

      <div className="relative mt-16">
        <div
          aria-hidden="true"
          className="absolute top-7 right-[12%] left-[12%] hidden border-t-2 border-dashed border-leaf-200 lg:block"
        />
        <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative text-center">
              <span className="relative mx-auto grid size-14 place-items-center rounded-full bg-forest-800 font-display text-xl text-white ring-8 ring-cream-50">
                {index + 1}
              </span>
              <h3 className="mt-6 inline-flex items-center justify-center gap-1.5 font-sans text-lg font-bold tracking-normal">
                {step.title === "Give Us a Call" ? (
                  <>
                    Give Us a Call
                    <Phone className="size-4" aria-hidden="true" />
                  </>
                ) : (
                  step.title
                )}
              </h3>
              <p className="mx-auto mt-2 max-w-xs leading-relaxed text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
      </div>
    </section>
  );
}
