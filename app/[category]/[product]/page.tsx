import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import { JsonLd, productSchema } from "@/lib/schema";
import { BUSINESS_WHATSAPP, CATEGORIES, SITE_NAME, getCategory } from "@/lib/site";

const PLACEHOLDER_PRODUCTS = ["ornek-model"];

export function generateStaticParams() {
  return CATEGORIES.flatMap((category) =>
    PLACEHOLDER_PRODUCTS.map((product) => ({
      category: category.slug,
      product,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}): Promise<Metadata> {
  const { category: slug, product } = await params;
  const category = getCategory(slug);
  if (!category || !PLACEHOLDER_PRODUCTS.includes(product)) return {};

  const title = `${category.name} Örnek Model | Çorum — ${SITE_NAME}`;
  const description = `${category.name} kategorisinde örnek model. Çorum İkram Mobilya atölyesinde özel ölçü üretilir, WhatsApp'tan teklif alın.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${category.slug}/${product}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category: slug, product } = await params;
  const category = getCategory(slug);
  if (!category || !PLACEHOLDER_PRODUCTS.includes(product)) notFound();

  const name = `${category.name} Örnek Model`;
  const description = `${category.name} kategorisinde özel ölçü üretilen örnek model. Çorum İkram Mobilya atölyesinde inceleyin.`;
  const path = `/${category.slug}/${product}`;

  return (
    <main>
      <JsonLd
        data={productSchema({
          name,
          description,
          path,
          category: category.name,
        })}
      />
      <PageHeader
        kicker={category.name}
        title={name}
        description={description}
        breadcrumbItems={[
          { name: SITE_NAME, path: "/" },
          { name: category.name, path: `/${category.slug}` },
          { name, path },
        ]}
      />

      <RevealSection className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <a
          href={BUSINESS_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--ink)] transition-transform hover:scale-[1.03]"
        >
          Bu Model İçin Teklif Al
        </a>
        <Link
          href={`/${category.slug}`}
          className="gold-link mt-8 block text-sm"
        >
          ← {category.name} Kategorisine Dön
        </Link>
      </RevealSection>
    </main>
  );
}
