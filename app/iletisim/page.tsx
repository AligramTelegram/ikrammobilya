import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_GEO,
  BUSINESS_HOURS,
  BUSINESS_PHONE,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_WHATSAPP,
  SITE_NAME,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim | Çorum Mobilya Atölyesi",
  description:
    "İkram Mobilya atölyesi ile iletişime geçin. Çorum adresimiz, telefon, WhatsApp ve konum bilgilerimiz.",
  alternates: {
    canonical: "/iletisim",
  },
};

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${BUSINESS_GEO.latitude},${BUSINESS_GEO.longitude}&z=15&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${BUSINESS_GEO.latitude},${BUSINESS_GEO.longitude}`;

const CONTACT_ITEMS = [
  {
    label: "Adres",
    value: (
      <>
        {BUSINESS_ADDRESS.streetAddress}
        <br />
        {BUSINESS_ADDRESS.addressLocality}
      </>
    ),
    href: MAP_LINK,
    linkLabel: "Yol Tarifi Al →",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="2.75" />
      </svg>
    ),
  },
  {
    label: "Telefon",
    value: BUSINESS_PHONE_DISPLAY,
    href: `tel:${BUSINESS_PHONE}`,
    linkLabel: "Hemen Ara →",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 4h3.2l1.6 4.2-2 1.6a12.8 12.8 0 0 0 5.9 5.9l1.6-2 4.2 1.6v3.2c0 1-.9 1.7-1.9 1.5-3.6-.7-7-2.5-9.7-5.2S2.7 8.6 2 5c-.2-1 .5-1.9 1.5-1.9Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "Yazılı teklif ve fotoğraf paylaşımı için",
    href: BUSINESS_WHATSAPP,
    linkLabel: "WhatsApp'tan Yazın →",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.29 4.93L2 22l5.29-1.38a9.86 9.86 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.37-.5.07-1.09.1-1.76-.11-.4-.13-.92-.3-1.58-.59-2.78-1.2-4.59-4.01-4.73-4.2-.14-.19-1.13-1.5-1.13-2.86s.7-2.03.95-2.31c.24-.27.53-.34.71-.34.18 0 .35.001.5.008.16.007.38-.06.6.46.24.55.8 1.91.87 2.05.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.17-.2.71-.83.9-1.11.19-.29.38-.24.63-.14.26.1 1.61.76 1.89.9.28.14.46.21.53.33.07.13.07.72-.17 1.4Z" />
      </svg>
    ),
  },
  {
    label: "E-posta",
    value: BUSINESS_EMAIL,
    href: `mailto:${BUSINESS_EMAIL}`,
    linkLabel: "E-posta Gönder →",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 6 8.5 6.5L20.5 6" />
      </svg>
    ),
  },
];

export default function IletisimPage() {
  return (
    <main>
      <PageHeader
        kicker="İletişim"
        title="Atölyeyle konuşun"
        description="Ölçünüzü almamız, örnek malzemeleri elinizle tutmanız veya sadece bir fikir almanız için atölyemize bekleriz."
        breadcrumbItems={[
          { name: SITE_NAME, path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ]}
      />

      <RevealSection className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex flex-col divide-y divide-[var(--line)]">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex gap-5 py-6 first:pt-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold-line)] text-gold-deep [&>svg]:h-5 [&>svg]:w-5">
                    {item.icon}
                  </span>
                  <div>
                    <p className="kicker">{item.label}</p>
                    <p className="mt-1.5 text-black/70">{item.value}</p>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="gold-link mt-2 inline-block text-sm"
                    >
                      {item.linkLabel}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[var(--line)] pt-8">
              <a
                href={BUSINESS_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-transform hover:scale-[1.03]"
              >
                WhatsApp&apos;tan Teklif Al
              </a>
              <a
                href={`tel:${BUSINESS_PHONE}`}
                className="border border-[var(--line)] px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--ink)] transition-colors hover:border-gold"
              >
                {BUSINESS_PHONE_DISPLAY}
              </a>
            </div>

            <p className="mt-8 text-sm text-black/50">
              <span className="font-medium text-black/70">Çalışma Saatleri:</span>{" "}
              Pazartesi - Cumartesi, 09:00 - 19:00
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden border border-[var(--line)] lg:min-h-0">
            <iframe
              src={MAP_EMBED_SRC}
              title="İkram Mobilya konumu"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05]"
            />
          </div>
        </div>
      </RevealSection>
    </main>
  );
}
