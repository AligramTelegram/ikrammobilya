import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import { JsonLd, collectionPageSchema } from "@/lib/schema";
import { BLOG_POSTS, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | İkram Mobilya",
  description:
    "Özel ölçü mobilya, mutfak dolabı ve toptan üretim hakkında İkram Mobilya'dan bilgilendirici yazılar.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main>
      <JsonLd
        data={collectionPageSchema({
          name: "Blog",
          description: "İkram Mobilya blog yazıları.",
          path: "/blog",
        })}
      />
      <PageHeader
        kicker="Blog"
        title="Atölyeden notlar"
        breadcrumbItems={[
          { name: SITE_NAME, path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <RevealSection className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <div className="flex flex-col divide-y divide-[var(--line)]">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group py-8 first:pt-0"
            >
              <h2 className="font-display text-2xl transition-colors group-hover:text-gold-deep">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-black/55">{post.excerpt}</p>
              <span className="gold-link mt-4 inline-block text-sm">
                Devamını Oku →
              </span>
            </Link>
          ))}
        </div>
      </RevealSection>
    </main>
  );
}
