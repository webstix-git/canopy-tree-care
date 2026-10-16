import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tree tips from Canopy Tree Care in Madison: oak wilt, emerald ash borer, and how to plant a tree that lasts.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" description="Practical tree care advice for Madison homeowners." />
      <Breadcrumb className="bg-cream-50" items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="container-page">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-forest-900/10">
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
                    <h2 className="text-2xl">
                      <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 leading-relaxed text-ink-muted">{post.text}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-forest-700">
                      {post.more}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
