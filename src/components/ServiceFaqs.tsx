export function ServiceFaqs({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section className="bg-cream-100 py-20 lg:py-28">
      <div className="container-page max-w-3xl">
        <header className="text-center">
          <p className="eyebrow justify-center">FAQs</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Frequently Asked Questions</h2>
        </header>
        <ul className="mt-12 space-y-4">
          {items.map((item) => (
            <li key={item.question}>
              <details
                open
                className="rounded-[1.75rem] bg-white p-6 ring-1 ring-forest-900/10 open:pb-6"
              >
                <summary className="cursor-pointer list-none font-sans text-lg font-bold tracking-normal text-forest-900 [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="mt-3 leading-relaxed text-ink-muted">{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
