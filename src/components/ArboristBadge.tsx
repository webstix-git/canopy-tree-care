import Image from "next/image";
import isaBadge from "@/assets/images/isa-certified-arborist.jpg";

type ArboristBadgeProps = {
  className?: string;
};

export function ArboristBadge({ className = "h-28 w-auto" }: ArboristBadgeProps) {
  return (
    <Image
      src={isaBadge}
      alt="ISA Certified Arborist"
      className={className}
    />
  );
}
