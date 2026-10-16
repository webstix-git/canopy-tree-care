import Link from "next/link";
import { ClipboardList, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest-900/10 bg-cream-50/95 p-3 backdrop-blur-lg md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 py-3 text-sm font-semibold text-white"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-sun-500 py-3 text-sm font-semibold text-forest-950"
        >
          <ClipboardList className="size-4" aria-hidden="true" />
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
