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
  text: string;
  more: string;
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
    text: "Oak wilt can kill a red oak in a single summer. Here's how it spreads, what to watch for, and why we leave oaks alone in spring.",
    more: "Read about oak wilt",
    image: oakWilt,
    alt: "Oak tree with browning, wilting leaves in its crown, a typical sign of oak wilt",
    caption: "Browning in the crown is often the first thing we notice on a red oak.",
    minutes: 4,
    blocks: [
      {
        kind: "p",
        text: "Oak wilt is a fungus that clogs the water-carrying tissue inside oak trees. Red oaks get hit the hardest. A big, healthy red oak can go from looking fine to dead in a few weeks of summer, and once it starts, there's no saving that tree. So most of the real work is prevention, and most of prevention comes down to timing.",
      },
      { kind: "h2", text: "How It Spreads" },
      {
        kind: "p",
        text: "There are two routes. The first is underground. Oaks growing close together often have roots that have fused, and the fungus travels through those connections from one tree to the next. That's why you'll sometimes see a row of oaks die one after another.",
      },
      {
        kind: "p",
        text: "The second route is beetles. Small sap beetles feed on the fungus on infected trees, then land on fresh wounds on healthy oaks and bring spores with them. They're busiest in spring and early summer, which is exactly when a fresh pruning cut is most risky.",
      },
      { kind: "h2", text: "Signs to Watch For" },
      { kind: "p", text: "Leaves wilting and browning from the top of the tree down." },
      {
        kind: "ul",
        items: [
          "Leaves turning bronze or brown from the edges in",
          "Leaves dropping in summer, sometimes while they're still partly green",
          "Several oaks nearby going downhill one after another",
        ],
      },
      {
        kind: "p",
        text: "Red oaks have pointed tips on their leaves and usually die within a season. White oaks have rounded tips and hold on much longer, often losing a branch here and there over several years.",
      },
      { kind: "h2", text: "Why We Don't Prune Oaks in Spring" },
      {
        kind: "p",
        text: "The Wisconsin DNR advises against pruning or wounding oaks from April through July, and we stick to that. Unless a branch is dangerous, oak pruning waits until late fall or winter.",
      },
      {
        kind: "p",
        text: "If an oak gets damaged during those months, from a storm or a mower bumping the trunk, paint over the wound straight away with tree wound dressing. We don't usually recommend wound paint, but oaks in summer are the exception.",
      },
      { kind: "h2", text: "What If My Oak Already Has It?" },
      {
        kind: "p",
        text: "A badly infected red oak can't be cured. What you can do is stop it from taking the oaks around it. That might mean removing the sick tree, cutting the root connections to its neighbors, or treating valuable oaks nearby to help protect them.",
      },
      {
        kind: "p",
        text: "Every yard is different, so it's worth having someone look before you decide anything.",
      },
      {
        kind: "p",
        text: "Worried about one of your oaks? Call us at 608-243-1218 and we'll come take a look.",
      },
    ],
  },
  {
    slug: "emerald-ash-borer",
    crumb: "Emerald Ash Borer",
    tag: "Pests",
    title: "Emerald Ash Borer: Is Your Ash Tree at Risk?",
    text: "This little green beetle has killed millions of Wisconsin's ash trees. If you still have an ash, here's what to watch for.",
    more: "Read about emerald ash borer",
    image: ashBorer,
    alt: "Adult emerald ash borer beetle on a chewed ash leaf",
    caption: "Emerald ash borer adults are small and green. The damage is under the bark.",
    minutes: 4,
    blocks: [
      {
        kind: "p",
        text: "Emerald ash borer is a small green beetle that lives under the bark of ash trees. The larvae chew through the wood that moves water, and the crown thins out from the top. A lot of Dane County ash are already gone. The ones that still look fine can be infested anyway.",
      },
      { kind: "h2", text: "What to Look For" },
      {
        kind: "ul",
        items: [
          "A thinning crown, often starting at the top",
          "Woodpecker flecks on the trunk where birds are hunting larvae",
          "Sprouts shooting from the base or along the trunk",
          "Small D-shaped holes where the adults leave the tree",
        ],
      },
      {
        kind: "p",
        text: "By the time half the crown is dead, the tree is usually too far along to save. Dead ash also gets brittle, which makes a later removal harder and more expensive.",
      },
      { kind: "h2", text: "Can You Keep It?" },
      {
        kind: "p",
        text: "A healthy ash can sometimes be protected with treatments from a qualified applicator, and those treatments have to keep going. We don't sell a spray on this site, and we won't promise a beetle treatment will bring a dying tree back.",
      },
      {
        kind: "p",
        text: "If the ash stands over a house, a walk, or the street and the crown is already failing, removal is often the safer call. We'll tell you which one you're looking at.",
      },
      { kind: "h2", text: "Not Sure It's an Ash?" },
      {
        kind: "p",
        text: "Ash leaves sit in pairs along the stem, usually five to nine leaflets, and the seeds are those paddle-shaped keys. If you're guessing, send a photo of the leaves and bark, or have us stop by.",
      },
      {
        kind: "p",
        text: "Call 608-243-1218 if a branch is hanging or the tree is dropping big limbs. We'll come look before it fails.",
      },
    ],
  },
  {
    slug: "planting-a-tree",
    crumb: "Planting a Tree",
    tag: "Planting",
    title: "How to Plant a Tree That Lasts",
    text: "A lot of young trees that struggle were simply planted too deep. A few small steps on planting day can save years of trouble.",
    more: "Read our planting tips",
    image: planting,
    alt: "Mature tree growing on a well-kept residential lawn",
    caption: "A tree that was planted at the right depth has room to grow into a yard like this.",
    minutes: 3,
    blocks: [
      {
        kind: "p",
        text: "Most young trees that fail in a Madison yard were planted too deep. The trunk stays wet, the roots circle, and a few years later the tree looks tired for no obvious reason. Planting day is the easy time to get this right.",
      },
      { kind: "h2", text: "Find the Root Flare" },
      {
        kind: "p",
        text: "The root flare is the point where the trunk widens into the first roots. Set that flare at the soil line, or a little above it. Scrape back any soil or burlap piled against the trunk before you measure. Buried bark holds moisture and invites rot.",
      },
      { kind: "h2", text: "Dig Wide, Not Deep" },
      {
        kind: "ul",
        items: [
          "Make the hole two to three times as wide as the root ball",
          "Keep it no deeper than the ball itself",
          "Backfill with the soil you took out",
          "Water it in so the soil settles against the roots",
        ],
      },
      {
        kind: "p",
        text: "You don't need a thick layer of compost in the hole. The roots have to learn the soil they'll live in.",
      },
      { kind: "h2", text: "Mulch, Water, and Skip the Volcano" },
      {
        kind: "p",
        text: "Mulch in a wide ring, a few inches deep, and keep it off the trunk. A mulch pile against the bark does more harm than good. Water deeply through the first two summers whenever the soil a few inches down is dry.",
      },
      {
        kind: "p",
        text: "Stake the tree only if the site is very windy, and take the stake off after a year. Pick a species that fits the spot when it's grown, not when it's in the pot. If we took a tree down for you, we're glad to talk through what belongs there next.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
