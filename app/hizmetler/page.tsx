import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import { JsonLd, collectionPageSchema } from "@/lib/schema";
import { SEGMENTS, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Özel Ölçü, Toptan ve Kurumsal Mobilya Üretimi",
  description:
    "İkram Mobilya atölyesinin hizmet türleri: bireysel özel ölçü sipariş, mobilya mağazalarına toptan/fason üretim, otel/ofis/restoran için kurumsal proje üretimi.",
  alternates: {
    canonical: "/hizmetler",
  },
};

export default function HizmetlerPage() {
  return (
    <main>
      <JsonLd
        data={collectionPageSchema({
          name: "Hizmetlerimiz",
          description:
            "İkram Mobilya atölyesinin sunduğu üretim hizmet türleri.",
          path: "/hizmetler",
        })}
      />
      <PageHeader
        kicker="Hizmetlerimiz"
        title="Her ihtiyaca, tek atölye"
        description="İkram Mobilya atölyesi bireysel, toptan ve kurumsal müşterilere özel üretim hizmeti verir."
        breadcrumbItems={[
          { name: SITE_NAME, path: "/" },
          { name: "Hizmetlerimiz", path: "/hizmetler" },
        ]}
      />

      <RevealSection className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SEGMENTS.map((segment) => (
            <Link
              key={segment.slug}
              href={`/hizmetler/${segment.slug}`}
              className="group border border-[var(--line)] p-7 transition-colors hover:border-gold"
            >
              <h2 className="font-display text-xl">{segment.name}</h2>
              <p className="mt-3 text-sm text-black/55">
                {segment.description}
              </p>
              <span className="gold-link mt-6 inline-block text-sm">
                İncele →
              </span>
            </Link>
          ))}
        </div>
        <Link href="/" className="gold-link mt-12 inline-block text-sm">
          ← Ana Sayfaya Dön
        </Link>
      </RevealSection>
    </main>
  );
}
