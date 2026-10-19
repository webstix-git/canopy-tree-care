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
  includesLead?: string;
  includes: string[];
  cta: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "tree-removal",
    name: "Tree Removal",
    summary:
      "Sometimes a tree has reached the end of its useful life. It may be dead, badly damaged, leaning in a dangerous direction, or simply too close to your home or other structures.",
    image: removalImg,
    alt: "A crane lifting a cut section of trunk during a residential tree removal",
    paragraphs: [
      "When removal is the safest option, we'll help you understand what needs to happen before the work begins. We take the time to plan the job carefully, especially when we're working around houses, driveways, landscaping, fences, or other obstacles.",
    ],
    includesLead: "You can expect:",
    includes: [
      "A careful look at the tree and surrounding property",
      "A clear explanation of the work involved",
      "Safety-focused removal",
      "Care around your home and landscaping",
      "Cleanup when the job is finished",
    ],
    cta: "Get a Tree Removal Estimate",
  },
  {
    slug: "tree-pruning",
    name: "Tree Pruning",
    summary: "Good pruning isn't about taking off as many branches as possible.",
    image: pruningImg,
    alt: "An arborist pruning the canopy of a large shade tree",
    paragraphs: [
      "The right cuts can remove dead or damaged branches, improve the tree's structure, and help reduce problems as the tree grows. The wrong cuts can leave a tree weaker or more vulnerable to disease and damage.",
      "We'll look at the tree as a whole and determine what actually needs to be pruned, and what should be left alone.",
    ],
    includesLead: "Our pruning work can help with:",
    includes: [
      "Dead or damaged branches",
      "Overgrown or crowded limbs",
      "Structural problems",
      "Branches growing toward structures",
      "Improving the tree's overall shape and health",
    ],
    cta: "Ask About Tree Pruning",
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    summary: "Removing a tree doesn't always mean the job is finished.",
    image: stumpImg,
    alt: "A stump grinder removing a tree stump from a lawn",
    paragraphs: [
      "An old stump can get in the way of mowing, landscaping, or whatever you want to do with the space next. Stumps can also become a place for insects and decay to settle in.",
      "We'll grind the stump down below the surrounding grade so you can reclaim the area and move on with your plans.",
    ],
    includesLead: "Stump grinding is a good option when you want to:",
    includes: [
      "Clear space for landscaping",
      "Make mowing easier",
      "Remove an old, unsightly stump",
      "Prepare the area for something new",
    ],
    cta: "Get a Stump Grinding Estimate",
  },
  {
    slug: "disease-management",
    name: "Disease Management",
    summary: "A tree that doesn't look right isn't necessarily a tree that needs to come down.",
    image: diseaseImg,
    alt: "Close view of healthy green leaves in a cared-for tree canopy",
    paragraphs: [
      "Brown leaves, thinning branches, unusual growth, or changes in the bark can have several different causes. Before deciding what to do, it's important to understand what's actually happening.",
      "We'll take a closer look at the tree, identify signs of disease or other problems, and explain what options make sense.",
    ],
    includesLead: "Depending on the situation, we may recommend:",
    includes: [
      "Monitoring the tree",
      "Pruning affected areas",
      "Treatment",
      "Changes to tree care",
      "Removal when the tree has become a safety concern",
    ],
    cta: "Talk to an Arborist",
  },
  {
    slug: "lot-clearing",
    name: "Lot Clearing",
    summary:
      "Getting a property ready for a new project can mean dealing with trees, brush, and other growth that needs to come out of the way.",
    image: lotImg,
    alt: "An arborist feeding branches into a wood chipper during a cleanup",
    paragraphs: [
      "Whether you're preparing for construction, opening up an overgrown area, or simply need to clear part of your property, we'll help you figure out what needs to be removed and what can stay.",
      "We'll approach the work with the surrounding property in mind, rather than treating everything as something that automatically needs to go.",
    ],
    includes: [],
    cta: "Talk About Your Project",
  },
  {
    slug: "storm-damage",
    name: "Storm Damage",
    summary:
      "Wisconsin weather can be hard on trees. Strong winds, heavy snow, and ice can leave branches broken or trees damaged without much warning.",
    image: stormImg,
    alt: "Storm-damaged limbs and branches across a driveway, ready for cleanup",
    paragraphs: [
      "If a storm has damaged a tree on your property, don't assume it's safe just because it's still standing.",
      "We'll assess the damage and help you determine what needs immediate attention and what can wait.",
    ],
    includesLead: "We can help with:",
    includes: [
      "Broken or hanging branches",
      "Storm-damaged trees",
      "Trees that have partially fallen",
      "Damage near homes or other structures",
      "Cleanup and removal",
    ],
    cta: "Get Help With Storm Damage",
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
