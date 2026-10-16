import Image from "next/image";

type ArboristBadgeProps = {
  className?: string;
};

export function ArboristBadge({ className = "h-28 w-auto" }: ArboristBadgeProps) {
  return (
    <Image
      src="/images/image.jpeg"
      alt="ISA Certified Arborist"
      width={220}
      height={360}
      className={className}
    />
  );
}
