import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import { BUSINESS_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "İkram Mobilya web sitesinde kullanılan çerezler ve yönetim seçenekleri hakkında bilgi.",
  alternates: {
    canonical: "/cerez-politikasi",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CerezPolitikasiPage() {
  return (
    <main>
      <PageHeader
        kicker="Yasal"
        title="Çerez Politikası"
        breadcrumbItems={[
          { name: SITE_NAME, path: "/" },
          { name: "Çerez Politikası", path: "/cerez-politikasi" },
        ]}
      />

      <RevealSection className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-8 text-black/70">
          <section>
            <h2 className="font-display text-xl text-black">
              Çerez Nedir?
            </h2>
            <p className="mt-3 leading-relaxed">
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız
              aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.
              corummobilya.com (&quot;{SITE_NAME}&quot;), sitenin düzgün
              çalışmasını sağlamak ve ziyaretçi deneyimini iyileştirmek
              amacıyla sınırlı sayıda çerez kullanabilir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-black">
              Kullandığımız Çerez Türleri
            </h2>
            <p className="mt-3 leading-relaxed">
              Sitemizde, sayfaların temel işlevlerini (menü, sayfa
              gezinme gibi) sağlayan zorunlu/teknik çerezler dışında,
              ziyaretçileri kişisel olarak tanımlayan bir çerez
              kullanılmamaktadır. İleride analiz veya pazarlama amaçlı
              çerezler eklenmesi durumunda bu sayfa güncellenecektir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-black">
              Çerezleri Nasıl Yönetebilirsiniz?
            </h2>
            <p className="mt-3 leading-relaxed">
              Tarayıcınızın ayarlar menüsünden mevcut çerezleri
              silebilir veya yeni çerezlerin kaydedilmesini
              engelleyebilirsiniz. Çerezleri tamamen devre dışı
              bırakmanız durumunda sitenin bazı bölümleri beklendiği
              gibi çalışmayabilir.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-black">İletişim</h2>
            <p className="mt-3 leading-relaxed">
              Çerez politikamızla ilgili sorularınız için{" "}
              <a href={`mailto:${BUSINESS_EMAIL}`} className="gold-link">
                {BUSINESS_EMAIL}
              </a>{" "}
              adresinden bize ulaşabilirsiniz.
            </p>
          </section>
        </div>
      </RevealSection>
    </main>
  );
}
