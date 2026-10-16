import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import oakWilt from "@/assets/images/blog-oak-wilt.jpg";
import ashBorer from "@/assets/images/blog-emerald-ash-borer.jpg";
import planting from "@/assets/images/gallery-property.jpg";

const posts: {
  href: string;
  tag: string;
  title: string;
  text: string;
  more: string;
  image: StaticImageData;
  alt: string;
}[] = [
  {
    href: "/blog/oak-wilt",
    tag: "Tree Disease",
    title: "Oak Wilt: What Every Oak Owner Should Know",
    text: "Oak wilt can move quickly through red oaks. Here's what to look for and why the timing of pruning matters.",
    more: "Read About Oak Wilt",
    image: oakWilt,
    alt: "Oak tree with browning, wilting leaves in its crown, a typical sign of oak wilt",
  },
  {
    href: "/blog/emerald-ash-borer",
    tag: "Pests",
    title: "Emerald Ash Borer: Is Your Ash Tree at Risk?",
    text: "Still have an ash tree in your yard? Here's what to look for and when it's worth having the tree checked.",
    more: "Read About Emerald Ash Borer",
    image: ashBorer,
    alt: "Adult emerald ash borer beetle on a chewed ash leaf",
  },
  {
    href: "/blog/planting-a-tree",
    tag: "Planting",
    title: "How to Plant a Tree That Lasts",
    text: "A few simple decisions on planting day can make a big difference years down the road.",
    more: "Read Our Planting Tips",
    image: planting,
    alt: "Mature tree growing on a well-kept residential lawn",
  },
];

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-28 bg-cream-100 py-24 lg:py-32" aria-labelledby="blog-title">
      <div className="container-page">
      <header className="mx-auto max-w-2xl text-center">
        <p className="eyebrow justify-center">From the Canopy crew</p>
        <h2 id="blog-title" className="mt-4 text-4xl leading-tight sm:text-5xl">
          Tree Tips From Our Crew
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Simple, practical advice for taking care of the trees around your home.
        </p>
      </header>
      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.href}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-forest-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(20_48_31/0.35)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-forest-900/90 px-3 py-1 text-xs font-semibold text-cream-100">
                  {post.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl">
                  <Link href={post.href} className="after:absolute after:inset-0">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{post.text}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-forest-700">
                  {post.more}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex rounded-full border border-forest-800/20 bg-white px-7 py-3.5 font-semibold text-forest-900 transition-all hover:-translate-y-0.5 hover:border-forest-800/40"
        >
          View more blog posts
        </Link>
      </div>
      </div>
    </section>
  );
}
