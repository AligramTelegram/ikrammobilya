import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import { JsonLd, serviceSchema, faqPageSchema } from "@/lib/schema";
import { SEGMENTS, SITE_NAME, getCategory, getSegment } from "@/lib/site";
import { SEGMENT_CONTENT } from "@/lib/categoryContent";
import PageArticleSections from "@/components/PageArticleSections";

export function generateStaticParams() {
  return SEGMENTS.map((segment) => ({ segment: segment.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ segment: string }>;
}): Promise<Metadata> {
  const { segment: slug } = await params;
  const segment = getSegment(slug);
  if (!segment) return {};

  return {
    title: segment.title,
    description: segment.description,
    alternates: {
      canonical: `/hizmetler/${segment.slug}`,
    },
  };
}

export default async function SegmentPage({
  params,
}: {
  params: Promise<{ segment: string }>;
}) {
  const { segment: slug } = await params;
  const segment = getSegment(slug);
  if (!segment) notFound();
  const article = SEGMENT_CONTENT[segment.slug];

  return (
    <main>
      <JsonLd
        data={serviceSchema({
          name: segment.name,
          description: segment.description,
          path: `/hizmetler/${segment.slug}`,
        })}
      />
      <JsonLd data={faqPageSchema(article.faq)} />
      <PageHeader
        kicker="Hizmet"
        title={segment.name}
        description={segment.description}
        breadcrumbItems={[
          { name: SITE_NAME, path: "/" },
          { name: "Hizmetlerimiz", path: "/hizmetler" },
          { name: segment.name, path: `/hizmetler/${segment.slug}` },
        ]}
      />

      <RevealSection className="border-t border-[var(--line)] bg-[var(--paper-warm)]">
        <PageArticleSections article={article} />
      </RevealSection>

      <RevealSection className="mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-10">
        <p className="kicker">İlgili Üretim Kategorileri</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {segment.relatedCategories.map((categorySlug) => {
            const category = getCategory(categorySlug);
            if (!category) return null;
            return (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group border border-[var(--line)] p-6 transition-colors hover:border-gold"
              >
                <h3 className="font-display text-lg">{category.name}</h3>
                <span className="gold-link mt-3 inline-block text-sm">
                  İncele →
                </span>
              </Link>
            );
          })}
        </div>
        <Link href="/hizmetler" className="gold-link mt-12 block text-sm">
          ← Hizmetlerimize Dön
        </Link>
      </RevealSection>
    </main>
  );
}
