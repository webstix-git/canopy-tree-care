import type { StaticImageData } from "next/image";
import removalImg from "@/assets/images/service-removal.jpg";
import pruningImg from "@/assets/images/service-pruning.jpg";
import stumpImg from "@/assets/images/service-stump-grinding.jpg";
import diseaseImg from "@/assets/images/service-plant-health.jpg";
import lotImg from "@/assets/images/gallery-cleanup.jpg";
import stormImg from "@/assets/images/gallery-storm-cleanup.jpg";

export type ServicePage = {
  slug: string;
  name: string;
  summary: string;
  image: StaticImageData;
  alt: string;
  paragraphs: string[];
  includes: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "tree-removal",
    name: "Tree Removal",
    summary:
      "Some trees have to come down. Storm damage, disease, or one leaning over the house. We take them down carefully, even in tight spots close to your home.",
    image: removalImg,
    alt: "A crane lifting a cut section of trunk during a residential tree removal",
    paragraphs: [
      "We start with a look at the tree, the targets around it, and the way it wants to fall. A tree between the house and the garage is lowered in pieces. An open yard can be a simpler drop. Either way, you hear the plan and the price before we start.",
      "When the tree is down, we chip or haul the brush and rake the work area. If you also want the stump gone, we can grind it on the same visit or schedule it after.",
    ],
    includes: [
      "A free on-site look and a clear quote",
      "Removal planned around your house, fence, and garden",
      "Brush chipped or hauled away",
      "The work area raked before we leave",
    ],
  },
  {
    slug: "tree-pruning",
    name: "Tree Pruning",
    summary:
      "Good pruning keeps a tree healthy, lets light into your yard, and keeps branches clear of your roof. We prune to help the tree, never just to shorten it.",
    image: pruningImg,
    alt: "An arborist pruning the canopy of a large shade tree",
    paragraphs: [
      "We take out dead, broken, and rubbing wood, and we thin where the canopy is crowded. The goal is a tree that keeps its shape and stays safer around your home.",
      "We do not top trees. Topping leaves weak sprouts and a tree that is worse off than when we arrived. If a tree is too large for the spot, we will say so and talk through real options, including removal.",
      "Oaks in Dane County are a special case. We avoid pruning oaks in spring and early summer, when oak wilt is easiest to spread.",
    ],
    includes: [
      "Deadwood and broken limbs removed",
      "Clearance from roofs and structures",
      "Pruning cuts made to help the tree",
      "Debris cleaned up before we leave",
    ],
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    summary:
      "A stump left behind is a tripping hazard and an eyesore. We grind it below grade so you can replant, reseed, or just have your yard back.",
    image: stumpImg,
    alt: "A stump grinder removing a tree stump from a lawn",
    paragraphs: [
      "We grind the stump and the flare of the roots below the lawn. The hole is filled with the grindings. You can top that with soil and seed when you are ready.",
      "Tell us about underground lines, irrigation, and nearby plantings before we arrive. If the grinder cannot reach a stump, we will say so on the estimate instead of forcing the job.",
    ],
    includes: [
      "Stump ground below lawn grade",
      "Surface roots in the way of the grinder taken down",
      "Grindings left in the hole",
      "A free look if you are not sure the stump can be reached",
    ],
  },
  {
    slug: "disease-management",
    name: "Disease Management",
    summary:
      "When a tree is struggling, we figure out why and tell you plainly whether it can be saved. Oak wilt, ash borers, and decline are problems we see across Dane County.",
    image: diseaseImg,
    alt: "Close view of healthy green leaves in a cared-for tree canopy",
    paragraphs: [
      "Josh looks at the leaves, the trunk, and the site, then tells you what he sees in plain language. Some trees can be pruned or watched. Some should come down before they fail. If we are not the right people for a lab test or a treatment, we will say that too.",
      "We will not promise a cure. A sick tree is a living thing, and the honest answer is sometimes removal.",
    ],
    includes: [
      "An on-site look by an ISA Certified Arborist",
      "A plain explanation of what is going on",
      "Options, including leaving the tree alone",
      "A quote only for work that actually helps",
    ],
  },
  {
    slug: "lot-clearing",
    name: "Lot Clearing",
    summary:
      "We clear trees and brush from a residential lot so you can see the ground again. You get a walk-through and a price before any cutting starts.",
    image: lotImg,
    alt: "An arborist feeding branches into a wood chipper during a cleanup",
    paragraphs: [
      "Lot clearing for us means trees, brush, and the woody mess that comes with them. We mark what stays and what goes, then cut, chip, and haul.",
      "We do not pull permits, grade soil, or build driveways. If your project needs that, we will stick to the tree work and leave the rest to the trades who do it.",
    ],
    includes: [
      "A walk of the lot and a written scope",
      "Trees and brush cut and hauled or chipped",
      "Stumps quoted separately if you want them ground",
      "A tidy site when the cutting is done",
    ],
  },
  {
    slug: "storm-damage",
    name: "Storm Damage",
    summary:
      "Hanging limbs and split trunks cannot wait. Call and we will come take a look, then take the hazard down safely.",
    image: stormImg,
    alt: "Storm-damaged limbs and branches across a driveway, ready for cleanup",
    paragraphs: [
      "After a storm, start with anything still hanging over the house, the driveway, or a walkway. Call us and describe what you see. We will tell you when we can get there.",
      "We make the tree safe first, then clean up the brush. If the rest of the tree should come down, that is a separate quote so you can decide without pressure.",
    ],
    includes: [
      "A phone call with a real person on our crew",
      "Hazard limbs and split trunks taken down",
      "Brush hauled or chipped",
      "A straight price before extra work starts",
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
