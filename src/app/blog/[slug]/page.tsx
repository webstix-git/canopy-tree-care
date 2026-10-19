import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Breadcrumb, PageHero } from "@/components/PageHero";
import { getPost, posts } from "@/lib/posts";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

function PhoneText({ text }: { text: string }) {
  const parts = text.split(site.phone);
  if (parts.length === 1) return text;

  return parts.map((part, index) => (
    <span key={`${index}-${part}`}>
      {index > 0 ? (
        <a href={site.phoneHref} className="inline-flex items-center gap-1 font-semibold text-forest-800">
          <Phone className="size-3.5" aria-hidden="true" />
          {site.phone}
        </a>
      ) : null}
      {part}
    </span>
  ));
}

export const instant = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.text };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((item) => item.slug !== post.slug);

  return (
    <>
      <PageHero title={post.title} description={post.text} />
      <Breadcrumb
        className="bg-white"
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.crumb },
        ]}
      />

      <div className="bg-white py-14 lg:py-20">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1.4fr_0.7fr] lg:gap-16">
          <article>
            <p className="mb-6 text-sm text-ink-muted">
              By {site.name} · {post.minutes} min read
            </p>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink-muted">{post.caption}</figcaption>
            </figure>

            <div className="mt-8 max-w-3xl space-y-5 text-ink-muted">
              {post.blocks.map((block, index) => {
                if (block.kind === "h2") {
                  return (
                    <h2 key={block.text} className="pt-4 text-3xl text-forest-900">
                      {block.text}
                    </h2>
                  );
                }
                if (block.kind === "ul") {
                  return (
                    <ul key={`list-${index}`} className="space-y-2">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-[#689838]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={block.text}>
                    <PhoneText text={block.text} />
                  </p>
                );
              })}
            </div>

            {post.ending ? (
              <div className="mt-10 max-w-3xl border-t border-forest-900/10 pt-8">
                <h2 className="text-3xl text-forest-900">{post.ending.title}</h2>
                <p className="mt-4 leading-relaxed text-ink-muted">{post.ending.text}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-forest-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-forest-900"
                  >
                    Get a Free Estimate
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-forest-800 px-6 py-3 font-semibold text-forest-900 transition-colors hover:bg-cream-100"
                  >
                    Call <Phone className="size-4" aria-hidden="true" /> {site.phone}
                  </a>
                </div>
              </div>
            ) : null}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-[1.5rem] bg-forest-800 p-7 text-cream-50">
              <p className="text-xs font-bold tracking-[0.18em] text-sun-400 uppercase">Free estimates</p>
              <h2 className="mt-3 text-2xl text-white">Worried About a Tree?</h2>
              <p className="mt-3 text-cream-100">
                Tell us what&apos;s going on and we&apos;ll come take a look. There&apos;s never any
                pressure to book.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-forest-900 hover:bg-cream-100"
              >
                Get a Free Estimate
              </Link>
              <a href={site.phoneHref} className="mt-5 flex items-center gap-2 font-bold text-white hover:text-sun-400">
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
              </a>
            </div>

            <div className="rounded-[1.5rem] bg-cream-50 p-6 ring-1 ring-forest-900/10">
              <h2 className="text-xl">More Blog Posts</h2>
              <ul className="mt-4 space-y-4">
                {more.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/blog/${item.slug}`} className="flex items-center gap-3">
                      <span className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <Image src={item.image} alt="" fill placeholder="blur" sizes="64px" className="object-cover" />
                      </span>
                      <span className="font-semibold text-forest-900">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
