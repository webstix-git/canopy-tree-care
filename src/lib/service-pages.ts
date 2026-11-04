import type { StaticImageData } from "next/image";
import removalImg from "@/assets/images/service-removal.jpg";
import removalHouseImg from "@/assets/images/service-removal-house.jpg";
import sparImg from "@/assets/images/gallery-spar-removal.jpg";
import pruningImg from "@/assets/images/service-pruning.jpg";
import climberImg from "@/assets/images/welcome-climber.jpg";
import atWorkImg from "@/assets/images/arborist-at-work.jpg";
import stumpImg from "@/assets/images/service-stump-grinding.jpg";
import stumpYardImg from "@/assets/images/gallery-stump.jpg";
import stumpCloseImg from "@/assets/images/service-stump.jpg";
import diseaseImg from "@/assets/images/service-plant-health.jpg";
import propertyImg from "@/assets/images/gallery-property.jpg";
import autumnImg from "@/assets/images/canopy-autumn.jpg";
import lotImg from "@/assets/images/gallery-cleanup.jpg";
import teamImg from "@/assets/images/gallery-team.jpg";
import stormImg from "@/assets/images/gallery-storm-cleanup.jpg";
import lakesideImg from "@/assets/images/hero-lakeside.jpg";

export type ServiceSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export type ServicePage = {
  slug: string;
  name: string;
  heroTitle?: string;
  summary: string;
  description: string;
  image: StaticImageData;
  alt: string;
  extraImages: { image: StaticImageData; alt: string }[];
  sections: ServiceSection[];
  process: { title: string; text: string }[];
  closing: ServiceSection;
  ctaTitle: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "tree-removal",
    name: "Tree Removal",
    summary:
      "Sometimes a tree has reached the end of its useful life. It may be dead, badly damaged, leaning in a dangerous direction, or simply too close to your home or other structures.",
    description:
      "When a tree is dead, damaged, or sitting too close to your home, we'll come look at it and help you decide the safest way to handle it.",
    image: removalImg,
    alt: "A crane lifting a cut section of trunk during a residential tree removal",
    extraImages: [
      { image: removalHouseImg, alt: "Tree removal work close to a house" },
      { image: sparImg, alt: "A tall trunk being removed in sections beside a house" },
    ],
    sections: [
      {
        title: "When You Need Tree Removal",
        paragraphs: [
          "Most homeowners call about tree removal because something about the tree has started to worry them. It may be dead or hollow, leaning toward the house, or sitting too close to a driveway or play area.",
          "We'll come look at it with you. Removal isn't always the answer. If the tree can be pruned and kept safely, we'll say so. If it really does need to come down, we'll explain why.",
        ],
        items: [
          "The tree is dead, hollow, or dropping large pieces of wood",
          "It's leaning toward the house, driveway, or a play area",
          "Storm damage has left it split or hanging",
          "Roots are lifting a walk, or the tree is too close to a structure",
        ],
      },
      {
        title: "Our Tree Removal Process",
        paragraphs: [
          "When a tree is close to a roof, a play set, or a neighbor's garage, we take it down in sections instead of dropping the whole thing. We plan around your house, driveway, fences, and landscaping before the first cut.",
          "When the job is finished, we clean up so you can use the space again.",
        ],
        items: [
          "A careful look at the tree and the things around it",
          "A clear explanation of the work involved",
          "Safety-focused removal, in pieces when the site calls for it",
          "Care around your home, driveway, and landscaping",
          "Cleanup when the job is finished",
        ],
      },
    ],
    process: [
      {
        title: "We Come Take a Look",
        text: "We'll walk the tree, check the lean, and note what's around it before we recommend a plan.",
      },
      {
        title: "You Get Clear Options",
        text: "We'll tell you why it should come down, or why it can stay, and what the work would involve.",
      },
      {
        title: "We Do the Work",
        text: "When it's time, we work in sections around the house and yard instead of rushing the drop.",
      },
      {
        title: "We Clean Up",
        text: "Brush, wood, and chips get cleaned up so you can use the space again.",
      },
    ],
    closing: {
      title: "Keeping Your Home and Yard Safe",
      paragraphs: [
        "We don't always recommend taking the tree down. If it can stay with pruning or continued monitoring, we'll tell you. Removal is for trees that are dead, failing, or sitting where a failure would put your home or family at risk.",
        "Close to a roof or other structures, we take the tree down in sections instead of dropping it, and we work carefully around driveways, fences, and landscaping. When the job is finished, we clean up the brush and wood. If you want the stump gone too, we can grind it.",
        "Give us a call at 608-243-1218 and tell us what you're seeing. If it's a hazard, we'll tell you when we can get there.",
      ],
    },
    ctaTitle: "Need a Tree Removed? Get a Free Estimate",
  },
  {
    slug: "tree-pruning",
    name: "Tree Pruning",
    summary: "Good pruning isn't about taking off as many branches as possible.",
    description:
      "The right cuts can help a tree last. The wrong ones can show up years later. We'll look at the whole tree and prune only what actually needs to come off.",
    image: pruningImg,
    alt: "An arborist pruning the canopy of a large shade tree",
    extraImages: [
      { image: climberImg, alt: "An arborist climbing in a mature tree" },
      { image: atWorkImg, alt: "An arborist in a helmet and harness working among branches" },
    ],
    sections: [
      {
        title: "Why Regular Tree Pruning Matters",
        paragraphs: [
          "Regular pruning helps a tree stay healthy and structurally sound. The goal isn't to make the tree smaller. It's to take off what's dead, damaged, or crowding the canopy, and leave the parts that still have a job to do.",
          "Around Madison, timing matters too, especially with oaks and oak wilt. If it's better to wait, we'll tell you. If a hazard limb needs to come off now, we'll handle that first.",
        ],
      },
      {
        title: "Our Tree Pruning Services",
        paragraphs: [
          "We'll walk the tree with you and look at what's actually causing a problem: limbs growing toward the house, dead wood over a patio, or branches rubbing against each other.",
          "We don't top trees or strip them out. Those cuts can leave a tree weaker for years. The pruning we do is meant to help the tree close over the wound and keep growing well.",
        ],
        items: [
          "Dead or damaged branches",
          "Overgrown or crowded limbs",
          "Structural problems as the tree grows",
          "Branches growing toward the house, roof, or walkways",
          "Improving the tree's overall shape and health",
        ],
      },
    ],
    process: [
      {
        title: "We Come Take a Look",
        text: "We'll look at the tree's health, structure, and what's around it before the first cut.",
      },
      {
        title: "You Get Clear Options",
        text: "You'll know what we're taking off, what we're leaving, and why.",
      },
      {
        title: "We Do the Work",
        text: "Clean, careful pruning that the tree can close over, not topping or hacking.",
      },
      {
        title: "We Clean Up",
        text: "The yard, driveway, and beds get picked up when we're finished.",
      },
    ],
    closing: {
      title: "Pruning Around Your Home",
      paragraphs: [
        "Done well, pruning helps a tree. The trouble starts with the wrong cuts, like topping. We'll take off only what the tree actually needs, and you'll hear the plan before we\u00a0start.",
        "Timing depends on the tree. Oaks need extra care because of oak wilt. If waiting is the smarter choice, we'll say so. If a broken limb is a hazard now, that comes first.",
        "A lot of the pruning we do is for limbs growing toward gutters, roofs, and walkways. We'll work around the house with the same care we bring to a removal.",
      ],
    },
    ctaTitle: "Give Your Trees the Care They Need",
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    summary: "Removing a tree doesn't always mean the job is finished.",
    description:
      "Once the tree is gone, the stump doesn't have to stay. We'll grind it down so you can mow, plant, or make better use of the space.",
    image: stumpImg,
    alt: "A stump grinder removing a tree stump from a lawn",
    extraImages: [
      { image: stumpYardImg, alt: "Stump grinding inside an orange safety perimeter" },
      { image: stumpCloseImg, alt: "A fresh stump left after a removal, before grinding" },
    ],
    sections: [
      {
        title: "Why Remove an Old Stump?",
        paragraphs: [
          "Once a tree is gone, the stump often stays in the way. It can make mowing difficult, take up space you could plant, and slowly become a place for insects and decay.",
          "Grinding the stump below grade lets you use that part of the yard\u00a0again.",
        ],
      },
      {
        title: "Benefits of Stump\u00a0Grinding",
        paragraphs: [
          "We bring a stump grinder to the property, take the stump down below the surrounding grade, and leave you with space you can seed, plant, or mow over.",
          "Many of the stumps we grind are the last step of a removal we already completed. Others have been sitting in a yard for years. Either way, we'll look at access, the size of the stump, and what's around it before we\u00a0start.",
        ],
        items: [
          "Clear space for landscaping or a garden",
          "Make mowing easier",
          "Remove an old, unsightly stump",
          "Finish a removal so the yard feels complete",
          "Prepare the area for something new",
        ],
      },
    ],
    process: [
      {
        title: "We Come Take a Look",
        text: "We'll check the size of the stump, the roots, and what's nearby, including fences, beds, and the lawn.",
      },
      {
        title: "We Do the Work",
        text: "The stump comes down below the surrounding grade so the spot sits lower than the lawn around it.",
      },
      {
        title: "You Get the Space Back",
        text: "You can seed, plant, or simply stop working around it with the mower.",
      },
    ],
    closing: {
      title: "After the Stump Is Gone",
      paragraphs: [
        "We grind the stump below the surrounding grade so the spot sits lower than the lawn around it. That way you can seed, plant, or mow over it later.",
        "Plenty of the stumps we grind have been sitting in a yard for years after someone else's removal, or after a tree came down in a storm. How long it takes depends on the size of the stump and what's around it. We'll look first and give you a clear sense of the work before we\u00a0start.",
      ],
    },
    ctaTitle: "Ready to Get Rid of That Stump?",
  },
  {
    slug: "disease-management",
    name: "Disease Management",
    summary: "A tree that doesn't look right isn't necessarily a tree that needs to come down.",
    description:
      "Leaves changing, branches thinning, or bark that looks off? We'll take a closer look and help you understand what's actually going on.",
    image: diseaseImg,
    alt: "Close view of healthy green leaves in a cared-for tree canopy",
    extraImages: [
      { image: propertyImg, alt: "A cared-for tree on a residential property" },
      { image: autumnImg, alt: "Golden autumn tree canopy against a blue sky" },
    ],
    sections: [
      {
        title: "Signs Your Tree May Be Unhealthy",
        paragraphs: [
          "When a tree starts looking different, it isn't always a sign that it has to come down. Leaves may brown in summer, one side of the canopy may thin, or the bark may look off.",
          "Madison has real issues with oak wilt and emerald ash borer, and other problems can look like them. If the tree just doesn't look like itself, it's worth having someone come see it.",
        ],
        items: [
          "Leaves browning, wilting, or dropping at the wrong time of year",
          "Whole branches dying back, especially high in the canopy",
          "Oaks or ash you're worried about because of wilt or emerald ash borer",
          "Mushrooms, cracks, or cavities on the trunk",
        ],
      },
      {
        title: "How We Diagnose Tree Issues",
        paragraphs: [
          "We'll look at the tree in person, the pattern of dieback, and what's happening around it before we make a recommendation. Photos can help, but they don't replace a visit.",
          "Sometimes the right answer is to watch the tree through the season. Sometimes it's pruning or a change in care. If the tree has become a safety concern, we'll say so plainly.",
        ],
        items: [
          "Monitoring the tree through the season",
          "Pruning affected wood",
          "Treatment when it still makes sense",
          "Removal when the tree has become a safety concern",
        ],
      },
    ],
    process: [
      {
        title: "We Come Take a Look",
        text: "Photos can help, but the tree in person tells us more about pattern, timing, and risk.",
      },
      {
        title: "You Get Clear Options",
        text: "You'll hear what it might be, what it probably isn't, and how sure we are.",
      },
      {
        title: "We Explain Next Steps",
        text: "Watch, prune, treat, or take it down. We'll say which option fits this tree.",
      },
    ],
    closing: {
      title: "When a Tree Can Be Saved",
      paragraphs: [
        "A sick tree can sometimes be saved. It depends on what's going on and how far along it is. We'll look first and tell you if watching, pruning, or treatment still makes sense, or if the tree has become a safety concern.",
        "Oak wilt and emerald ash borer are real issues around Madison, and other problems can look like them. We won't guess from a photo alone. It's better to have us look before you prune, especially on oaks. If a hanging limb is a hazard, call us at 608-243-1218 and we'll tell you when we can get there.",
      ],
    },
    ctaTitle: "Concerned About a Tree? Let's Take a Look",
  },
  {
    slug: "lot-clearing",
    name: "Lot Clearing",
    summary:
      "Getting a property ready for a new project can mean dealing with trees, brush, and other growth that needs to come out of the way.",
    description:
      "Need trees and brush cleared for a project? We'll walk the lot with you, figure out what needs to go, and get the site ready for what's\u00a0next.",
    image: lotImg,
    alt: "An arborist feeding branches into a wood chipper during a cleanup",
    extraImages: [
      { image: teamImg, alt: "The Canopy Tree Care crew out in the field" },
      { image: removalHouseImg, alt: "Clearing work close to a house and yard" },
    ],
    sections: [
      {
        title: "When Lot Clearing Makes Sense",
        paragraphs: [
          "Lot clearing isn't a reason to take every tree on the property. Most of the time you need a corner opened up, a fence line you can walk, a building pad, or an overgrown stretch that's been getting away from you.",
          "We'll walk the lot with you and mark what needs to go and what is worth keeping.",
        ],
        items: [
          "You're getting ready to build, fence, or landscape",
          "Brush and small trees have taken over part of the yard",
          "You want a walking path or fence line opened up",
          "You need trees out of the way, without stripping the whole property",
        ],
      },
      {
        title: "How We Approach the Work",
        paragraphs: [
          "Brush, small trees, and the ones sitting in the way come out. The healthy trees that still make sense for the property can stay.",
          "Then we chip and clean so you're not left with a pile. We work with the rest of the yard in mind, the same way we do on a single-tree job.",
        ],
      },
    ],
    process: [
      {
        title: "We Come Take a Look",
        text: "You'll show us the goal. We'll mark what comes out and what can stay.",
      },
      {
        title: "We Do the Work",
        text: "Brush, small trees, and the ones blocking the project come down carefully.",
      },
      {
        title: "We Clean Up",
        text: "The site is left ready for whatever you're doing next, not buried in debris.",
      },
    ],
    closing: {
      title: "What Stays and What Comes Out",
      paragraphs: [
        "We don't take every tree on the lot. We'll walk it with you and keep the trees that still make sense for the property. The ones in the way of the project come out.",
        "We treat lot clearing with the same care as a single-tree job around a home, driveway, and the rest of the yard. Then we chip and clean so you're not left with a pile.",
      ],
    },
    ctaTitle: "Talk About Your Project",
  },
  {
    slug: "storm-damage",
    name: "Storm Damage",
    summary:
      "Wisconsin weather can be hard on trees. Strong winds, heavy snow, and ice can leave branches broken or trees damaged without much warning.",
    description:
      "If a storm has damaged a tree on your property, don't assume it's safe just because it's still standing. Call us and we'll tell you when we can get there.",
    image: stormImg,
    alt: "Storm-damaged limbs and branches across a driveway, ready for cleanup",
    extraImages: [
      { image: lakesideImg, alt: "A crew member clearing a fallen tree beside a lakeside home" },
      { image: sparImg, alt: "A damaged trunk being taken down in sections" },
    ],
    sections: [
      {
        title: "Storm Damage Can Create Serious Hazards",
        paragraphs: [
          "Wisconsin weather can be hard on trees. Wind, heavy snow, and ice can split a limb, hang a branch over a driveway, or leave a tree standing when it should no longer be trusted.",
          "If a storm has damaged a tree on your property, don't assume it's safe just because it's still standing. A tree can look fine from the house and still be cracked, hung up, or leaning toward a structure.",
        ],
      },
      {
        title: "What to Do After a Storm",
        paragraphs: [
          "Stay clear of hanging wood and trees that have started to lean. Don't try to pull a limb off the roof if it still has weight in the tree.",
          "Call Canopy Tree Care at 608-243-1218 and we'll tell you when we can get there. Let us know what came down, what's still hanging, and whether it's over the house or a drive.",
        ],
        items: [
          "Keep people and pets away from hanging or split trees",
          "Don't assume a standing tree is safe",
          "Call us with what you're seeing so we can plan the visit",
        ],
      },
      {
        title: "Emergency Tree Removal & Cleanup",
        paragraphs: [
          "Some storm work needs to happen right away: a limb on the house, a tree blocking the drive, or wood hanging where it could still come down.",
          "We'll look at immediate hazards first, then the trees that can wait until we can do the job the right way.",
        ],
        items: [
          "Broken or hanging branches",
          "Trees that have partially fallen",
          "Damage near homes, drives, and other structures",
          "Cleanup after the weather passes",
        ],
      },
      {
        title: "How We Handle Storm Damage",
        paragraphs: [
          "We'll look at what's hanging, what's cracked, and what's leaning toward the house. Then we'll help you tell the difference between what has to come down now and what can wait.",
          "Close to a roof or other structures, we work in sections. We clean up the wood so you're not left with a storm pile in the yard.",
        ],
      },
    ],
    process: [
      {
        title: "Give Us a Call",
        text: "Tell us what came down, what's still hanging, and whether it's over the house or a drive.",
      },
      {
        title: "We Come Take a Look",
        text: "We'll look at immediate hazards first, then the trees that can wait a bit.",
      },
      {
        title: "We Do the Work",
        text: "Hanging wood, failed trees, and cleanup get handled in an order that protects the property.",
      },
    ],
    closing: {
      title: "Until We Get There",
      paragraphs: [
        "Stay inside while conditions are still dangerous. Once you can look safely, call us at 608-243-1218. We'll tell you when we can get there and what to keep clear of until we do.",
        "A tree that's still standing can be cracked, hung up, or leaning. Don't assume it's safe just because it didn't fall. Keep people and pets away from hanging wood, and don't try to cut a loaded limb yourself. If a tree is on the house or driveway, that's a lot of the storm work we do, and we'll plan the removal around it.",
      ],
    },
    ctaTitle: "Need Tree Removal from Storm Damage?",
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
