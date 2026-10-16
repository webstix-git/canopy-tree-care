const steps = [
  {
    title: "Give Us a Call",
    text: "Call or message us and tell us a bit about the tree and what's worrying you.",
  },
  {
    title: "We Come Take a Look",
    text: "Josh stops by, looks the tree over, and walks you through what he sees.",
  },
  {
    title: "You Get a Clear Quote",
    text: "You'll get your options and a straight price, with no pressure to say yes.",
  },
  {
    title: "We Do the Work",
    text: "We get the job done safely and leave your yard as tidy as we found it, if not tidier.",
  },
];

export function Process() {
  return (
    <section className="bg-cream-50 py-24 lg:py-32" aria-labelledby="process-title">
      <div className="container-page">
      <header className="mx-auto max-w-2xl text-center">
        <p className="eyebrow justify-center">Our Work Process</p>
        <h2 id="process-title" className="mt-4 text-4xl leading-tight sm:text-5xl">
          What Happens When You Call
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Here&apos;s how a typical job goes, start to finish.
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
              <h3 className="mt-6 font-sans text-lg font-bold tracking-normal">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs leading-relaxed text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
      </div>
    </section>
  );
}
