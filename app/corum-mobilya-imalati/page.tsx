import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { JsonLd, faqPageSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import CorumMobilyaImalatiClient from "./CorumMobilyaImalatiClient";

export const metadata: Metadata = {
  title: "Çorum Mobilyacı, Marangoz ve Mobilya İmalatçısı",
  description:
    "Çorum'da mobilyacı, marangoz veya mobilya imalatçısı arıyorsanız İkram Mobilya atölyesiyle iletişime geçin. Özel ölçü, toptan/fason ve kurumsal proje üretimi bir arada.",
  alternates: {
    canonical: "/corum-mobilya-imalati",
  },
  openGraph: {
    title: "Çorum Mobilyacı, Marangoz ve Mobilya İmalatçısı — İkram Mobilya",
    description:
      "Çorum'da mobilyacı, marangoz veya mobilya imalatçısı arıyorsanız İkram Mobilya atölyesiyle iletişime geçin.",
    url: `${SITE_URL}/corum-mobilya-imalati`,
    locale: "tr_TR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "İkram Mobilya Çorum'da nerede?",
    answer:
      "İkram Mobilya atölyesi, Çorum Yeniyol Mahallesi Mobilyacılar Caddesi üzerindedir. Güncel adres ve konum için iletişim sayfamızı inceleyebilirsiniz.",
  },
  {
    question: "İkram Mobilya bir mobilyacı mı, marangoz mu, yoksa imalatçı mı?",
    answer:
      "Üçü de. İkram Mobilya; Çorum'da hem klasik bir marangoz/mobilyacı gibi bireysel siparişler alan, hem de mobilya mağazalarına toptan üretim yapan bir imalat atölyesidir. Hangi terimi kullanırsanız kullanın, aradığınız hizmet aynı atölyede karşılanır.",
  },
  {
    question: "İkram Mobilya hangi tür üretim yapıyor?",
    answer:
      "İkram Mobilya; bireysel müşterilere özel ölçü mobilya üretimi, mobilya mağazalarına toptan/fason üretim ve otel/ofis/restoran gibi kurumsal projelere üretim hizmeti sunar.",
  },
  {
    question: "Hangi mobilya kategorilerinde üretim yapılıyor?",
    answer:
      "Mutfak dolabı, gardırop/vestiyer/portmanto, yatak odası, oturma grubu, yemek odası ve ofis/ticari mobilya kategorilerinde özel ölçü üretim yapılmaktadır.",
  },
  {
    question: "Fiyat bilgisi nasıl alabilirim?",
    answer:
      "Üretim fiyatları ölçü, malzeme ve sipariş türüne (bireysel/toptan/kurumsal) göre değişir. Güncel teklif için WhatsApp üzerinden veya atölyeyi ziyaret ederek bilgi alabilirsiniz.",
  },
  {
    question: "Teslimat, montaj ve dekorasyon danışmanlığı yapılıyor mu?",
    answer:
      "Çorum ve çevresine teslimat ve montaj hizmeti sunulmaktadır. Kendi ürettiğimiz mobilyaların yanı sıra farklı markaların mobilyalarının montajını da yapıyoruz. Ayrıca oda planlaması ve malzeme/renk seçiminde dekorasyon danışmanlığı da veriyoruz.",
  },
];

export default function CorumMobilyaImalatiPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(faqItems)} />
      <main>
        <PageHeader
          kicker="Yerel Hizmet"
          title="Çorum Mobilya İmalatı"
          breadcrumbItems={[
            { name: SITE_NAME, path: "/" },
            { name: "Çorum Mobilya İmalatı", path: "/corum-mobilya-imalati" },
          ]}
        />
        <CorumMobilyaImalatiClient faqItems={faqItems} />
      </main>
    </>
  );
}
