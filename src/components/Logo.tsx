import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-24 w-auto" }: LogoProps) {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Canopy Tree Care home">
      <Image
        src="/images/canopy-tree-care-logo.png"
        alt=""
        width={456}
        height={360}
        preload
        className={className}
      />
    </Link>
  );
}
