import type { StaticImageData } from "next/image";
import oakWilt from "@/assets/images/blog-oak-wilt.jpg";
import ashBorer from "@/assets/images/blog-emerald-ash-borer.jpg";
import planting from "@/assets/images/gallery-property.jpg";

export type PostBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "ul"; items: string[] };

export type Post = {
  slug: string;
  crumb: string;
  tag: string;
  title: string;
  cardTitle?: string;
  text: string;
  excerpt: string;
  more: string;
  ending?: { title: string; text: string };
  image: StaticImageData;
  alt: string;
  caption: string;
  minutes: number;
  blocks: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "oak-wilt",
    crumb: "Oak Wilt",
    tag: "Tree Disease",
    title: "Oak Wilt: What Every Oak Owner Should Know",
    cardTitle: "Oak Wilt: What Every Oak Owner in Madison Should Know",
    text: "Oak wilt can kill a red oak in a matter of weeks. Learn what oak wilt looks like, how it spreads, and what Madison-area homeowners can do to protect their trees.",
    excerpt:
      "Oak wilt is a serious tree disease that can spread quickly between oak trees. Learn what the early signs look like, how oak wilt spreads, and why timing matters when you suspect a problem.",
    more: "Learn About Oak Wilt",
    image: oakWilt,
    alt: "Oak tree with browning, wilting leaves in its crown, a typical sign of oak wilt",
    caption: "Browning leaves in the crown can be one of the first signs of oak wilt.",
    minutes: 4,
    ending: {
      title: "Worried About an Oak Tree?",
      text: "Not sure whether the browning leaves you're seeing are normal or a sign of oak wilt? Give us a call. We'll take a look at the tree, explain what we're seeing, and help you understand your options.",
    },
    blocks: [
      {
        kind: "p",
        text: "Oak wilt is one of the most serious diseases affecting oak trees in Wisconsin. It blocks the tree's ability to move water, causing leaves to wilt and turn brown surprisingly fast.",
      },
      {
        kind: "p",
        text: "Red oaks are especially vulnerable. A healthy-looking red oak can go from showing its first symptoms to dying within a matter of weeks.",
      },
      {
        kind: "p",
        text: "The good news is that knowing what to look for can help you catch a problem early. And when it comes to oak wilt, timing matters.",
      },
      { kind: "h2", text: "How Does Oak Wilt Spread?" },
      {
        kind: "p",
        text: "Oak wilt can spread in a couple of different ways, and both are important for homeowners to understand.",
      },
      {
        kind: "p",
        text: "The disease can move from tree to tree through connected root systems. When oak roots grow together underground, the fungus can travel from an infected tree into nearby healthy oaks.",
      },
      {
        kind: "p",
        text: "Oak wilt can also spread through small insects that carry fungal spores from infected trees to fresh wounds on healthy oaks.",
      },
      {
        kind: "p",
        text: "That's why fresh pruning cuts can be a concern during the warmer months. If you have oak trees on your property, it's important to think about when pruning or other tree work is done.",
      },
      { kind: "h2", text: "Signs of Oak Wilt to Watch For" },
      {
        kind: "p",
        text: "Oak wilt doesn't always look the same from tree to tree, but there are a few warning signs worth knowing.",
      },
      { kind: "p", text: "Look for:" },
      {
        kind: "ul",
        items: [
          "Leaves turning brown or bronze starting near the top of the tree",
          "Leaves wilting or dropping earlier than expected",
          "Leaves that appear to have lost their normal green color",
          "Branches dying back unexpectedly",
          "Several nearby oak trees showing similar symptoms",
        ],
      },
      {
        kind: "p",
        text: "Red oaks can decline quickly once they're infected. White oaks tend to respond differently and may survive for several years while showing more gradual symptoms.",
      },
      {
        kind: "p",
        text: "If you notice unusual browning or leaf loss on an oak, it's worth having the tree looked at rather than waiting to see what happens.",
      },
      { kind: "h2", text: "Why We Don't Prune Oaks in Spring" },
      { kind: "p", text: "When it comes to oak trees, timing matters." },
      {
        kind: "p",
        text: "The Wisconsin Department of Natural Resources recommends avoiding pruning and other activities that create fresh wounds on oak trees during the months when oak wilt can spread most easily.",
      },
      {
        kind: "p",
        text: "For homeowners, the simple takeaway is this: don't schedule routine oak pruning during the high-risk season unless there's a safety reason that requires immediate work.",
      },
      {
        kind: "p",
        text: "If a storm damages an oak or a branch becomes a hazard, don't leave it alone just because it's the wrong time of year. Safety comes first. An arborist can help determine the safest way to handle the situation.",
      },
      { kind: "h2", text: "What If My Oak Already Has Oak Wilt?" },
      {
        kind: "p",
        text: "If you think an oak on your property may have oak wilt, don't panic, but don't wait too long to have it checked.",
      },
      {
        kind: "p",
        text: "There isn't a simple cure for an oak that's already heavily infected. In some cases, removing the affected tree and addressing the connections between nearby oak trees can help prevent the disease from spreading further.",
      },
      {
        kind: "p",
        text: "Every property is different. The location of the tree, nearby oaks, the severity of the symptoms, and the overall health of the tree all matter.",
      },
      {
        kind: "p",
        text: "If you're not sure what's happening with your oak, having an experienced arborist take a look is a good place to start.",
      },
    ],
  },
  {
    slug: "emerald-ash-borer",
    crumb: "Emerald Ash Borer",
    tag: "Tree Pests",
    title: "Emerald Ash Borer: What to Look for in Your Ash Tree",
    text: "Emerald ash borer has damaged millions of ash trees across Wisconsin. Learn what to look for, how to tell if your ash tree is affected, and when it's time to call an arborist.",
    excerpt:
      "Emerald ash borer has caused serious damage to ash trees across Wisconsin. If you have an ash tree on your property, learn the signs of an infestation and when it may be time to call a local arborist.",
    more: "Learn About Emerald Ash Borer",
    image: ashBorer,
    alt: "Adult emerald ash borer beetle on a chewed ash leaf",
    caption: "Adult emerald ash borers are small and metallic green. Most of the damage happens underneath the bark.",
    minutes: 4,
    ending: {
      title: "Not Sure If Your Ash Tree Is at Risk?",
      text: "Not sure if your ash tree is showing signs of emerald ash borer? We'll take a look, explain what we're seeing, and help you understand your options.",
    },
    blocks: [
      {
        kind: "p",
        text: "Emerald ash borer, often called EAB, is a small green beetle that attacks ash trees. The adults are easy to miss, but the larvae underneath the bark are what cause the real damage.",
      },
      {
        kind: "p",
        text: "They feed on the tissue that carries water and nutrients through the tree. As the infestation gets worse, the tree becomes weaker from the inside out.",
      },
      {
        kind: "p",
        text: "Emerald ash borer has been found throughout Wisconsin, including the Madison area. If you have an ash tree in your yard, knowing the early warning signs can help you decide what to do before the tree becomes a safety problem.",
      },
      { kind: "h2", text: "What Does Emerald Ash Borer Look Like?" },
      {
        kind: "p",
        text: "You don't have to be an expert to notice that something may be wrong with your ash tree.",
      },
      { kind: "p", text: "Keep an eye out for:" },
      {
        kind: "ul",
        items: [
          "A thinning or dying crown, often starting near the top",
          "Woodpecker activity or patches of bark being removed",
          "New shoots growing from the trunk or larger branches",
          "Vertical cracks in the bark",
          "Small, D-shaped exit holes in the bark",
        ],
      },
      {
        kind: "p",
        text: "You may not see all of these signs at once. In fact, an ash tree can look relatively healthy during the early stages of an infestation.",
      },
      {
        kind: "p",
        text: "As the damage progresses, the tree loses more of its canopy and becomes increasingly stressed. Once a large portion of the crown has died, the tree may be much harder and more expensive to save.",
      },
      { kind: "h2", text: "Can an Ash Tree Survive Emerald Ash Borer?" },
      { kind: "p", text: "Sometimes, yes." },
      {
        kind: "p",
        text: "Healthy ash trees can sometimes be protected with professional insecticide treatments. Treatment works best when the tree is still in reasonably good health and has enough live canopy left to respond.",
      },
      {
        kind: "p",
        text: "We don't recommend trying to treat an ash tree without first having it properly evaluated. The right approach depends on the tree's size, health, location, and how far the infestation has progressed.",
      },
      {
        kind: "p",
        text: "If your ash tree is already declining badly, standing near your home, or has large dead branches, removal may be the safer option.",
      },
      { kind: "p", text: "The first step is figuring out what you're dealing with." },
      { kind: "h2", text: "Not Sure If It's an Ash Tree?" },
      {
        kind: "p",
        text: "If you're not even sure whether the tree in your yard is an ash, that's okay.",
      },
      {
        kind: "p",
        text: "Ash trees have leaves made up of several smaller leaflets, usually arranged in pairs along a central stem. They also produce distinctive paddle-shaped seeds, sometimes called keys.",
      },
      {
        kind: "p",
        text: "If you're seeing unusual leaf loss, dead branches, or other changes and aren't sure what kind of tree you have, send us a photo or give us a call. We'll help you figure out what's going on.",
      },
      {
        kind: "p",
        text: "If a branch is hanging over your home, driveway, or another area where someone could get hurt, don't wait for it to come down on its own.",
      },
      {
        kind: "p",
        text: "Call Canopy Tree Care at 608-243-1218 and we'll come take a look.",
      },
    ],
  },
  {
    slug: "planting-a-tree",
    crumb: "Planting a Tree",
    tag: "Tree Planting",
    title: "How to Plant a Tree That Will Thrive in Wisconsin",
    text: "Planting a tree is about more than digging a hole and putting it in the ground. A few simple choices like where you plant it and how deep you dig can make a big difference in how well that tree grows for years to come.",
    excerpt:
      "Choosing the right tree is only the first step. Learn how to choose a good planting location, prepare the soil, and plant your tree properly so it has a better chance of growing strong for years to come.",
    more: "Read Our Tree Planting Tips",
    image: planting,
    alt: "Mature tree growing on a well-kept residential lawn",
    caption: "A tree planted at the right depth has plenty of room to grow into a healthy, long-lived tree.",
    minutes: 3,
    ending: {
      title: "Planting a Tree? Let's Get It Right.",
      text: "The right tree in the right place can become part of your property for decades. If you're planning to plant a tree or aren't sure what will work best in your yard, we're here to help.",
    },
    blocks: [
      {
        kind: "p",
        text: "A lot of young trees that struggle in Madison yards were planted too deep. The trunk stays wet, the roots can't get the oxygen they need, and the tree may start showing problems years later.",
      },
      {
        kind: "p",
        text: "The good news? Planting a tree correctly isn't complicated. A little extra care when you first put it in the ground can help it get off to a much healthier start.",
      },
      { kind: "h2", text: "Find the Root Flare" },
      {
        kind: "p",
        text: "Before you start digging, take a good look at the base of the tree. When planting trees in Madison, WI, finding the root flare is one of the most important parts of tree planting.",
      },
      {
        kind: "p",
        text: "The root flare is where the trunk starts to widen and the first major roots spread out. That part of the tree should sit right at, or just slightly above, the soil line.",
      },
      {
        kind: "p",
        text: "If the trunk goes straight into the ground without any visible flare, the tree may be planted too deeply. Before adding soil around the tree, gently clear away any extra soil or mulch that's piled against the trunk.",
      },
      { kind: "h2", text: "Dig Wide, Not Deep" },
      {
        kind: "p",
        text: "When planting a tree, it's tempting to dig a deep hole. But a wider hole is usually much more helpful than a deeper one.",
      },
      {
        kind: "p",
        text: "A good rule of thumb is to make the hole about two to three times wider than the tree's root ball, while keeping the depth no deeper than the root ball itself.",
      },
      { kind: "p", text: "When you're ready to plant:" },
      {
        kind: "ul",
        items: [
          "Make the hole wide enough for the roots to spread naturally.",
          "Keep the top of the root ball level with the surrounding soil.",
          "Backfill with the soil you removed from the hole.",
          "Water the tree thoroughly so the soil settles around the roots.",
        ],
      },
      {
        kind: "p",
        text: "You don't need to fill the hole with a lot of compost or special soil. The roots need to grow outward into the soil around them, so giving them room to spread is more important.",
      },
      { kind: "h2", text: "Mulch, Water, and Skip the Volcano" },
      {
        kind: "p",
        text: "Mulch can help a newly planted tree hold moisture and protect its roots, but there's a right and wrong way to use it.",
      },
      {
        kind: "p",
        text: "Spread mulch in a wide, shallow ring around the tree, rather than piling it against the trunk. Those familiar \"mulch volcanoes\" can trap moisture against the bark and cause problems over time.",
      },
      {
        kind: "p",
        text: "Water the tree deeply, especially during its first couple of growing seasons. Don't just give it a quick splash every day. The goal is to get moisture down into the soil where the roots can use it.",
      },
      {
        kind: "p",
        text: "And don't forget about the tree's location. Choose a species that fits the space, soil, sunlight, and conditions on your property. A tree that's a good fit for its surroundings will have a much better chance of thriving.",
      },
      { kind: "h2", text: "Planting a Tree in Madison? Start With the Right Tree" },
      {
        kind: "p",
        text: "The best tree for your property isn't always the one that looks best at the garden center.",
      },
      {
        kind: "p",
        text: "Think about how much space you have, how much sunlight the area receives, the type of soil on your property, and how large the tree will eventually become. Planting the right tree in the right place can save you a lot of trouble down the road.",
      },
      {
        kind: "p",
        text: "If you're not sure what will work well in your yard, we're happy to take a look and point you in the right direction.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
