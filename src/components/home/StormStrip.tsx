import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function StormStrip() {
  return (
    <section className="bg-forest-900 text-cream-50" aria-labelledby="storm-strip-title">
      <div className="container-page flex flex-col items-center py-10 text-center sm:py-14">
        <div className="max-w-3xl">
          <h2 id="storm-strip-title" className="text-2xl leading-tight text-white sm:text-3xl">
            Need Tree Removal from Storm Damage?
          </h2>
          <p className="mt-3 text-cream-100/85">
            Storm damage can leave you with trees that need to come down fast. We&apos;re here to
            help with safe, careful tree removal when you need it most.
          </p>
        </div>
        <div className="mt-6 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-red-700"
          >
            Call <Phone className="size-4" aria-hidden="true" /> {site.phone}
          </a>
          <Link
            href="/services/storm-damage"
            className="inline-flex items-center justify-center rounded-full bg-sun-500 px-7 py-3.5 font-semibold text-forest-950 transition-colors hover:bg-sun-600"
          >
            Storm Damage Details
          </Link>
        </div>
      </div>
    </section>
  );
}
