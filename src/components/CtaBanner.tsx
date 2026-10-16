import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import canopyImg from "@/assets/images/cta-canopy.jpg";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <Image src={canopyImg} alt="" fill placeholder="blur" sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-[rgb(20_48_31/72%)]" />
      <div className="container-page relative mx-auto max-w-3xl text-center text-cream-50">
        <h2 className="text-4xl leading-tight text-white sm:text-5xl">Got a Tree You&apos;re Worried About?</h2>
        <p className="mx-auto mt-5 max-w-xl text-cream-100">
          Tell us what&apos;s going on and we&apos;ll come take a look. Estimates are free, and
          there&apos;s never any pressure to book.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-white px-7 py-3.5 font-semibold text-forest-900 transition-colors hover:bg-cream-100"
          >
            Get a Free Estimate
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
