"use client";

import Link from "next/link";
import { CATEGORIES, SEGMENTS } from "@/lib/site";
import RevealSection from "@/components/RevealSection";

interface FaqItem {
  question: string;
  answer: string;
}

export default function CorumMobilyaImalatiClient({
  faqItems,
}: {
  faqItems: FaqItem[];
}) {
  return (
    <>
      <RevealSection className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <p className="max-w-2xl text-lg leading-relaxed text-black/70">
          Çorum&apos;da <strong>mobilyacı</strong>, <strong>marangoz</strong>{" "}
          veya <strong>mobilya imalatçısı</strong> arıyorsanız aradığınız
          atölye İkram Mobilya. Mutfak dolabından gardırop, vestiyer ve
          portmantoya; yatak odası, oturma grubu ve yemek odası
          takımlarından ofis mobilyasına kadar her kategoride özel ölçü
          üretim yapıyoruz. Bireysel siparişlerin yanı sıra Çorum sanayi
          mobilyacılara toptan/fason üretim ve otel/ofis/restoran gibi
          kurumsal projelere anahtar teslim çözümler sunuyoruz. Kendi
          ürettiğimiz mobilyaların yanı sıra farklı markaların mobilya
          montajını da üstleniyor, oda planlaması ve malzeme seçiminde
          dekorasyon danışmanlığı veriyoruz.
        </p>

        <p className="kicker mt-14">Üretim Kategorileri</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="gold-link border border-[var(--line)] px-5 py-2.5 text-sm hover:border-gold"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <p className="kicker mt-10">Hizmet Türleri</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {SEGMENTS.map((segment) => (
            <Link
              key={segment.slug}
              href={`/hizmetler/${segment.slug}`}
              className="gold-link border border-[var(--line)] px-5 py-2.5 text-sm hover:border-gold"
            >
              {segment.name}
            </Link>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-3xl px-6 pb-24 lg:px-10">
        <p className="kicker">Sıkça Sorulan Sorular</p>
        <div className="mt-6 flex flex-col divide-y divide-[var(--line)]">
          {faqItems.map((item) => (
            <div key={item.question} className="py-6 first:pt-0">
              <h2 className="font-display text-lg">{item.question}</h2>
              <p className="mt-2 text-sm text-black/60">{item.answer}</p>
            </div>
          ))}
        </div>
      </RevealSection>
    </>
  );
}
