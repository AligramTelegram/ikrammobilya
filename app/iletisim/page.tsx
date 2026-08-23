import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_WHATSAPP,
  SITE_NAME,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim | İkram Mobilya",
  description:
    "İkram Mobilya atölyesi ile iletişime geçin. Çorum adresimiz, telefon ve WhatsApp bilgilerimiz.",
  alternates: {
    canonical: "/iletisim",
  },
};

export default function IletisimPage() {
  return (
    <main>
      <PageHeader
        kicker="İletişim"
        title="Atölyeyle konuşun"
        breadcrumbItems={[
          { name: SITE_NAME, path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ]}
      />

      <RevealSection className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <dt className="kicker">Adres</dt>
            <dd className="mt-3 text-black/70">
              {BUSINESS_ADDRESS.streetAddress}
              <br />
              {BUSINESS_ADDRESS.addressLocality}
            </dd>
          </div>
          <div>
            <dt className="kicker">Telefon</dt>
            <dd className="mt-3 text-black/70">{BUSINESS_PHONE_DISPLAY}</dd>
          </div>
          <div>
            <dt className="kicker">WhatsApp</dt>
            <dd className="mt-3">
              <a
                href={BUSINESS_WHATSAPP}
                className="font-semibold text-whatsapp-dark hover:text-whatsapp"
              >
                WhatsApp&apos;tan Yazın
              </a>
            </dd>
          </div>
          <div>
            <dt className="kicker">E-posta</dt>
            <dd className="mt-3 text-black/70">{BUSINESS_EMAIL}</dd>
          </div>
        </dl>
      </RevealSection>
    </main>
  );
}
