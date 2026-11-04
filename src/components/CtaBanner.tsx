import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import canopyImg from "@/assets/images/cta-canopy.jpg";

export function CtaBanner({
  id,
  title = "Got a Tree You're Worried\u00a0About?",
  description = "Tell us what's going on and we'll come take a look. We'll explain what we find, what we recommend, and what it will take to get the job done right.",
}: {
  id?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section id={id} className={`relative flex min-h-[400px] items-center overflow-hidden py-16 sm:py-20 ${id ? "scroll-mt-28" : ""}`}>
      <Image src={canopyImg} alt="" fill placeholder="blur" sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-[rgb(20_48_31/80%)]" />
      <div className="container-page relative mx-auto max-w-3xl text-center text-cream-50">
        <h2 className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-cream-100 sm:mt-5">{description}</p>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/contact"
            className="rounded-full bg-white px-7 py-3.5 text-center font-semibold text-forest-900 transition-colors hover:bg-cream-100"
          >
            Get a Free Estimate
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/30"
          >
            Call <Phone className="size-4" aria-hidden="true" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
