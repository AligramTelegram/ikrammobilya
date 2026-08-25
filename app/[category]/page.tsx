import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import { JsonLd, collectionPageSchema, faqPageSchema } from "@/lib/schema";
import { CATEGORIES, CATEGORY_GALLERY, SITE_NAME, getCategory, getSegment } from "@/lib/site";
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

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const article = CATEGORY_CONTENT[category.slug];
  const gallery = CATEGORY_GALLERY[category.slug];

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

      {gallery && gallery.length > 0 && (
        <RevealSection className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <p className="kicker">Örnek Görseller</p>
          <h2 className="font-display mt-3 max-w-lg text-3xl sm:text-4xl">
            Atölyemizden {category.name.toLowerCase()} örnekleri
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden border border-[var(--line)]"
              >
                <Image
                  src={src}
                  alt={`${category.name} örnek çalışma ${i + 1} — İkram Mobilya`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </RevealSection>
      )}

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
