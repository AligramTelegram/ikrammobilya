import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd, articleSchema, collectionPageSchema, faqPageSchema } from "@/lib/schema";
import {
  CATEGORIES,
  SEGMENTS,
  SITE_TITLE,
  categoryImage,
  type SegmentSlug,
} from "@/lib/site";
import {
  HOME_ARTICLE_FAQ,
  HOME_ARTICLE_PUBLISHED_AT,
  HOME_ARTICLE_TITLE,
} from "@/lib/homeArticle";
import Hero from "@/components/Hero";
import RevealSection from "@/components/RevealSection";
import ServiceIcon from "@/components/ServiceIcon";
import HomeArticle from "@/components/HomeArticle";
import { StaggerGroup, StaggerItem } from "@/components/StaggerReveal";

const PRIMARY_SEGMENTS: SegmentSlug[] = [
  "bireysel-ozel-olcu-siparis",
  "toptan-uretim",
  "kurumsal-proje-uretimi",
];
const SECONDARY_SEGMENTS: SegmentSlug[] = [
  "mobilya-montaj-hizmeti",
  "dekorasyon-danismanligi",
];

export const metadata: Metadata = {
  title: SITE_TITLE,
  description:
    "İkram Mobilya, Çorum'da özel ölçü mobilya imalatı yapan bir atölyedir. Bireysel özel ölçü sipariş, mobilya mağazalarına toptan üretim ve kurumsal proje üretimi.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <JsonLd
        data={collectionPageSchema({
          name: SITE_TITLE,
          description:
            "İkram Mobilya ana sayfası — Çorum'daki mobilya imalat kategorileri ve hizmetleri.",
          path: "/",
        })}
      />

      <Hero />

      <RevealSection className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <p className="kicker">Üretim Kategorileri</p>
        <h2 className="font-display mt-3 max-w-lg text-3xl sm:text-4xl">
          Her odaya, özel ölçüyle
        </h2>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-px overflow-hidden bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, i) => (
            <StaggerItem key={category.slug}>
              <Link
                href={`/${category.slug}`}
                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-[var(--paper)] p-8 transition-colors hover:bg-[var(--paper-warm)]"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 overflow-hidden rounded-full opacity-80 blur-[0.5px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-0">
                  <Image
                    src={categoryImage(category.slug)}
                    alt=""
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>

                <span className="font-display relative z-10 text-sm text-gold-deep">
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl">{category.name}</h3>
                  <p className="mt-2 text-sm text-black/55">
                    {category.description}
                  </p>
                  <span className="gold-rule mt-6 transition-all group-hover:w-16" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </RevealSection>

      <RevealSection className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <p className="kicker">Hizmetlerimiz</p>
        <h2 className="font-display mt-3 max-w-lg text-3xl sm:text-4xl">
          Her ihtiyaca, tek atölye
        </h2>
        <p className="mt-4 max-w-xl text-sm text-black/55">
          Bireysel özel ölçü siparişten Çorum sanayi mobilyacılara toptan
          üretime, otel/ofis/restoran kurumsal projelerinden mobilya
          montajı ve dekorasyon danışmanlığına kadar tek atölyeden hizmet
          alın.
        </p>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SEGMENTS.filter((s) => PRIMARY_SEGMENTS.includes(s.slug)).map(
            (segment) => (
              <StaggerItem key={segment.slug}>
                <Link
                  href={`/hizmetler/${segment.slug}`}
                  className="group block h-full border border-[var(--line)] p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-[0_12px_30px_rgba(21,19,15,0.08)]"
                >
                  <ServiceIcon
                    slug={segment.slug}
                    className="inline-flex h-7 w-7 text-gold-deep transition-colors group-hover:text-gold-bright"
                  />
                  <h3 className="font-display mt-5 text-xl">{segment.name}</h3>
                  <p className="mt-3 text-sm text-black/55">
                    {segment.description}
                  </p>
                  <span className="gold-rule mt-6 transition-all group-hover:w-16" />
                </Link>
              </StaggerItem>
            )
          )}
        </StaggerGroup>

        <p className="kicker mt-14">Ek Hizmetler</p>
        <StaggerGroup className="mt-5 flex flex-col gap-3 sm:flex-row">
          {SEGMENTS.filter((s) => SECONDARY_SEGMENTS.includes(s.slug)).map(
            (segment) => (
              <StaggerItem key={segment.slug} className="flex-1">
                <Link
                  href={`/hizmetler/${segment.slug}`}
                  className="group flex items-center gap-4 border border-[var(--line)] px-6 py-4 transition-colors hover:border-gold"
                >
                  <ServiceIcon
                    slug={segment.slug}
                    className="inline-flex h-5 w-5 shrink-0 text-gold-deep transition-colors group-hover:text-gold-bright"
                  />
                  <span className="text-sm font-medium">{segment.name}</span>
                  <span className="gold-link ml-auto text-xs">İncele →</span>
                </Link>
              </StaggerItem>
            )
          )}
        </StaggerGroup>
      </RevealSection>

      <RevealSection className="border-t border-[var(--line)] bg-[var(--paper-warm)] py-24">
        <JsonLd
          data={articleSchema({
            title: HOME_ARTICLE_TITLE,
            description:
              "Çorum'da özel ölçü mobilya imalatı, mutfak dolabı, gardırop, toptan üretim, kurumsal proje, montaj ve dekorasyon danışmanlığı hakkında kapsamlı rehber.",
            path: "/",
            publishedAt: HOME_ARTICLE_PUBLISHED_AT,
          })}
        />
        <JsonLd data={faqPageSchema(HOME_ARTICLE_FAQ)} />
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="kicker">Blog</p>
          <div className="mt-3">
            <HomeArticle />
          </div>
        </div>
      </RevealSection>

      <RevealSection className="bg-[var(--ink)] py-24 text-[var(--paper)]">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
          <p className="kicker text-gold-bright">Çorum Mobilya İmalatı</p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl">
            Ölçünüzü alalım, tasarımı birlikte konuşalım.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-white/60">
            Bireysel sipariş, toptan üretim veya kurumsal proje — fark etmez.
            WhatsApp&apos;tan yazın, size özel bir teklif hazırlayalım.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/corum-mobilya-imalati"
              className="bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--ink)] transition-transform hover:scale-[1.03]"
            >
              Çorum Mobilya İmalatı
            </Link>
            <Link
              href="/iletisim"
              className="border border-white/25 px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:border-gold-bright hover:text-gold-bright"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </RevealSection>
    </main>
  );
}
