import type { Metadata } from "next";
import Link from "next/link";
import { BackHome, Breadcrumb, PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Policy",
  description: `How ${site.name} uses, and does not use, automated tools in our tree care work and on this website.`,
};

export default function AiPolicyPage() {
  return (
    <>
      <PageHero
        title="AI Policy"
        description="People do the tree work. Software can help us write. It does not decide what happens to your tree."
      />
      <Breadcrumb className="bg-cream-100" items={[{ label: "Home", href: "/" }, { label: "AI Policy" }]} />
      <article className="bg-cream-100 py-20 lg:py-28">
        <div className="container-page">
        <div className="max-w-3xl space-y-8 text-ink-muted">
          <section>
            <h2 className="text-2xl text-forest-900">On the website</h2>
            <p className="mt-3">
              Some pages on this site were drafted with writing software, including AI tools.{" "}
              {site.arborist} checks the facts about our services, our service area, and how to
              reach us before they stay on the site. If a sentence is wrong, tell us and we will
              fix it.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-forest-900">On a job</h2>
            <p className="mt-3">
              We do not use an automated system to price a job, accept a job, or diagnose a tree
              from a photo on this website. A person looks at the tree, tells you what they see,
              and gives you a price before work starts.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-forest-900">What you send us</h2>
            <p className="mt-3">
              Do not put sensitive personal information in the estimate form. A name, a phone
              number, an email, and a note about the tree are enough. We do not use customer
              messages to train a public AI model.
            </p>
          </section>
          <section>
            <h2 className="text-2xl text-forest-900">Questions</h2>
            <p className="mt-3">
              Email{" "}
              <a href={site.emailHref} className="font-semibold text-forest-700 underline">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={site.phoneHref} className="font-semibold text-forest-700 underline">
                {site.phone}
              </a>
              . A plain list of our services for people and assistants is on the{" "}
              <Link
                href="/ai-readiness-service-index"
                className="font-semibold text-forest-800 underline underline-offset-4"
              >
                AI Readiness Service Index
              </Link>
              .
            </p>
            <BackHome />
          </section>
        </div>
        </div>
      </article>
    </>
  );
}
