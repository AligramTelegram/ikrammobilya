import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import RichText from "@/components/RichText";
import { JsonLd, articleSchema, faqPageSchema } from "@/lib/schema";
import { BLOG_CONTENT } from "@/lib/blogContent";
import { BLOG_POSTS, SITE_NAME, getBlogPost } from "@/lib/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const article = BLOG_CONTENT[post.slug];

  return (
    <main>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
        })}
      />
      {article && <JsonLd data={faqPageSchema(article.faq)} />}
      <PageHeader
        kicker="Blog"
        title={post.title}
        breadcrumbItems={[
          { name: SITE_NAME, path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <RevealSection className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <p className="text-sm text-black/40">
          Yayın tarihi:{" "}
          {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {post.updatedAt && post.updatedAt !== post.publishedAt && (
            <>
              {" "}
              · Güncelleme:{" "}
              {new Date(post.updatedAt).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </>
          )}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-black/70">
          {post.excerpt}
        </p>

        {article ? (
          <>
            {article.sections.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="font-display text-xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="mt-3 text-sm leading-relaxed text-black/65">
                    <RichText text={paragraph} />
                  </p>
                ))}
              </section>
            ))}

            <section className="mt-14">
              <h2 className="font-display text-xl">Sıkça Sorulan Sorular</h2>
              <div className="mt-4 flex flex-col divide-y divide-[var(--line)]">
                {article.faq.map((item) => (
                  <div key={item.question} className="py-4 first:pt-0">
                    <h3 className="text-sm font-semibold">{item.question}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-black/60">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : null}

        <Link href="/blog" className="gold-link mt-12 inline-block text-sm">
          ← Blog&apos;a Dön
        </Link>
      </RevealSection>
    </main>
  );
}
