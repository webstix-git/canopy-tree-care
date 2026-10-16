import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

const places = ["Madison", "Dane County", "Surrounding Communities"];

export function ServiceArea() {
  return (
    <section className="container-page py-24 lg:py-32" aria-labelledby="service-area-title">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Service Area</p>
          <h2 id="service-area-title" className="mt-4 text-4xl leading-tight sm:text-5xl">
            Serving Madison and Dane County
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            We&apos;re based in Madison and work all over Dane County. Not sure if we come out your
            way? Give us a call at{" "}
            <a href={site.phoneHref} className="font-semibold text-forest-700 underline">
              {site.phone}
            </a>{" "}
            and ask.
          </p>
          <ul className="mt-8 space-y-3">
            {places.map((place) => (
              <li key={place} className="flex items-center gap-3 font-semibold text-forest-900">
                <MapPin className="size-5 text-forest-600" aria-hidden="true" />
                {place}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-36px_rgb(20_48_31/0.45)] ring-1 ring-forest-900/10">
          <iframe
            src="https://www.google.com/maps?q=Dane+County,+WI&z=9&output=embed"
            title="Map of Madison and Dane County, Wisconsin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="aspect-[4/3] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
