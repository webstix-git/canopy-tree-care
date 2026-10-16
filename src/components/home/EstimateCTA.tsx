import Image from "next/image";
import Link from "next/link";
import canopyImg from "@/assets/images/canopy-looking-up.jpg";

export function EstimateCTA() {
  return (
    <section id="estimate" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <Image src={canopyImg} alt="" fill placeholder="blur" sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-[rgb(14_35_24/90%)]" />
      <div className="container-page relative max-w-2xl text-cream-50">
        <h2 className="text-4xl leading-tight text-white sm:text-5xl">Let&apos;s talk about your trees.</h2>
        <p className="mt-5 max-w-xl text-cream-100">
          Tell us what&apos;s going on. We&apos;ll come look, say what we&apos;d do if it were our
          tree, and give you a clear price before any work starts.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-sun-500 px-7 py-3.5 font-bold text-forest-950 transition-colors hover:bg-sun-400"
        >
          Get a free estimate
        </Link>
      </div>
    </section>
  );
}
