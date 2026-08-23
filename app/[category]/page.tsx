import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import { JsonLd, collectionPageSchema, faqPageSchema } from "@/lib/schema";
import { CATEGORIES, SITE_NAME, getCategory, getSegment } from "@/lib/site";
import { CATEGORY_CONTENT } from "@/lib/categoryContent";
import PageArticleSections from "@/components/PageArticleSections";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `/${category.slug}`,
    },
  };
}

const PLACEHOLDER_PRODUCTS = ["ornek-model"];

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const article = CATEGORY_CONTENT[category.slug];

  return (
    <main>
      <JsonLd
        data={collectionPageSchema({
          name: category.name,
          description: category.description,
          path: `/${category.slug}`,
        })}
      />
      <JsonLd data={faqPageSchema(article.faq)} />
      <PageHeader
        kicker="Üretim Kategorisi"
        title={`${category.name} Modelleri`}
        description={category.description}
        breadcrumbItems={[
          { name: SITE_NAME, path: "/" },
          { name: category.name, path: `/${category.slug}` },
        ]}
      />

      <RevealSection className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <p className="kicker">Modeller</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PLACEHOLDER_PRODUCTS.map((productSlug) => (
            <Link
              key={productSlug}
              href={`/${category.slug}/${productSlug}`}
              className="group border border-[var(--line)] p-7 transition-colors hover:border-gold"
            >
              <h3 className="font-display text-xl">
                {category.name} Örnek Model
              </h3>
              <span className="gold-link mt-4 inline-block text-sm">
                İncele →
              </span>
            </Link>
          ))}
        </div>
      </RevealSection>

      <div className="border-t border-[var(--line)] bg-[var(--paper-warm)]">
        <PageArticleSections article={article} />
      </div>

      <RevealSection className="mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-10">
        <p className="kicker">İlgili Hizmetler</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {category.relatedSegments.map((segmentSlug) => {
            const segment = getSegment(segmentSlug);
            if (!segment) return null;
            return (
              <Link
                key={segment.slug}
                href={`/hizmetler/${segment.slug}`}
                className="gold-link border border-[var(--line)] px-5 py-2.5 text-sm hover:border-gold"
              >
                {segment.name}
              </Link>
            );
          })}
        </div>
        <Link href="/" className="gold-link mt-12 inline-block text-sm">
          ← Ana Sayfaya Dön
        </Link>
      </RevealSection>
    </main>
  );
}
