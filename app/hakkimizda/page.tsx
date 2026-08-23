import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda | Çorum Mobilya Atölyesi",
  description:
    "İkram Mobilya, Çorum'da özel ölçü mobilya imalatı yapan bir atölyedir. Bireysel, toptan ve kurumsal projelere üretim hizmeti verir.",
  alternates: {
    canonical: "/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <main>
      <PageHeader
        kicker="Hakkımızda"
        title="Zanaat, ölçüye sadık kalır"
        breadcrumbItems={[
          { name: SITE_NAME, path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ]}
      />

      <RevealSection className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <p className="text-lg leading-relaxed text-black/70">
          İkram Mobilya, Çorum&apos;da özel ölçü mobilya imalatı yapan bir
          atölyedir. Bireysel müşterilere özel ölçü üretim, mobilya
          mağazalarına toptan/fason üretim ve otel/ofis/restoran gibi
          kurumsal projelere üretim hizmeti sunar.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-black/70">
          Her sipariş, ölçü alımından montaja kadar atölyemizde tek elden
          takip edilir — hazır ürün değil, ihtiyaca özel üretim yapıyoruz.
        </p>
      </RevealSection>
    </main>
  );
}
