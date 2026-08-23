import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import RevealSection from "@/components/RevealSection";
import { StaggerGroup, StaggerItem } from "@/components/StaggerReveal";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda | 1976'dan Bugüne Bir Aile Atölyesi",
  description:
    "İkram Mobilya'nın hikayesi 1976'da Fazlı Usta'nın Çorum'da açtığı küçük bir marangoz atölyesiyle başladı. Bugün oğulları Enes Doğan ve Fatih Doğan aynı zanaati sürdürüyor.",
  alternates: {
    canonical: "/hakkimizda",
  },
};

const TIMELINE = [
  {
    year: "1976",
    title: "Bir tezgah, bir usta",
    text: "Fazlı Usta, Çorum Yeniyol Mahallesi'nde tek başına çalıştığı küçük bir marangoz atölyesi açtı. Elindeki birkaç el aleti ve komşu esnafın güveniyle işe başladı.",
  },
  {
    year: "1990'lar",
    title: "İsim, elden ele yayıldı",
    text: "Sipariş defteri kalınlaştıkça atölye büyüdü. Fazlı Usta'nın elinden çıkan mutfak dolapları ve yatak odası takımları, tanıdıktan tanıdığa Çorum'un dört bir yanına ulaştı.",
  },
  {
    year: "2000'ler",
    title: "İkinci kuşak çırak masasında",
    text: "Enes Doğan ve Fatih Doğan, daha çocukken babalarının yanında talaş süpürmeye başladı. Zamanla testereyi, sonra ölçüyü, sonra da müşteriyle konuşmayı öğrendiler.",
  },
  {
    year: "Bugün",
    title: "İkram Mobilya çatısı altında",
    text: "Atölye artık İkram Mobilya adıyla anılıyor. Enes ve Fatih Doğan, babalarından öğrendikleri işi bireysel siparişten kurumsal projelere kadar genişleterek sürdürüyor.",
  },
];

const VALUES = [
  {
    title: "Ölçü, göz kararı değildir",
    text: "Fazlı Usta'nın en çok tekrarladığı söz buydu: bir milim fark, kapıyı çarpan bir dolap demek. Bu alışkanlığı bugün de aynı titizlikle sürdürüyoruz.",
  },
  {
    title: "İş, sözle değil elle biter",
    text: "Atölyede söz vermek kolay, teslim etmek zor işin asıl kısmı. Bir siparişi kabul ettiğimizde, o tarihe kadar bitireceğimizi biliriz.",
  },
  {
    title: "Baba-oğul, aynı tezgahta",
    text: "Enes ve Fatih Doğan farklı işleri yürütse de kararı birlikte alıyor. Bu, müşteriye tek bir ağızdan, tutarlı bir söz verilmesini sağlıyor.",
  },
];

export default function HakkimizdaPage() {
  return (
    <main>
      <PageHeader
        kicker="Hakkımızda"
        title="1976'da bir tezgahla başladı"
        description="Çorum'da elli yılı geride bırakan bir aile atölyesinin hikayesi: Fazlı Usta'dan oğulları Enes ve Fatih Doğan'a."
        breadcrumbItems={[
          { name: SITE_NAME, path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ]}
      />

      <RevealSection className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <p className="text-lg leading-relaxed text-black/70">
          1976 yılında Çorum&apos;da bir marangoz atölyesi açıldı. Sahibi
          Fazlı Doğan&apos;dı, elinde birkaç el aleti ve mahalledeki birkaç
          tanıdığın güveni vardı. O yıllarda büyük vaatlerde bulunmadı;
          sadece aldığı ölçüyü doğru tutmaya, verdiği sözü zamanında yerine
          getirmeye çalıştı.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-black/70">
          Yıllar geçtikçe atölyenin adı Çorum&apos;da elden ele dolaştı.
          Fazlı Usta&apos;nın elinden çıkan bir mutfak dolabını beğenen
          komşusu, kendi kayınvalidesine onu tavsiye etti; o da bir başkasına.
          Reklam değil, iş büyüttü.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-black/70">
          Bugün aynı atölyeyi Fazlı Usta&apos;nın oğulları Enes Doğan ve
          Fatih Doğan yürütüyor. İkram Mobilya adını taşıyan bu çatı altında
          artık sadece komşuya değil, Çorum&apos;un dört bir yanındaki
          ailelere, mobilya mağazalarına ve kurumsal projelere üretim
          yapıyoruz. Değişen ölçek, değişmeyen tek şey var: babalarından
          öğrendikleri, milimin bile önemli olduğu.
        </p>
      </RevealSection>

      <RevealSection className="border-y border-[var(--line)] bg-[var(--paper-warm)] py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="kicker">Elli Yıllık Yolculuk</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            Bir tezgahtan aile atölyesine
          </h2>

          <StaggerGroup className="mt-12 flex flex-col">
            {TIMELINE.map((item, i) => (
              <StaggerItem key={item.year}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold bg-[var(--paper)] text-xs text-gold-deep">
                      {item.year}
                    </span>
                    {i < TIMELINE.length - 1 && (
                      <span className="mt-2 w-px flex-1 bg-[var(--gold-line)]" />
                    )}
                  </div>
                  <div className="pt-2.5">
                    <h3 className="font-display text-xl">{item.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-black/60">
                      {item.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <p className="kicker">İlkelerimiz</p>
        <h2 className="font-display mt-3 max-w-lg text-3xl sm:text-4xl">
          Fazlı Usta&apos;dan kalan üç alışkanlık
        </h2>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <div className="h-full border border-[var(--line)] p-7">
                <span className="gold-rule" />
                <h3 className="font-display mt-5 text-lg">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/55">
                  {value.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </RevealSection>

      <RevealSection className="bg-[var(--ink)] py-20 text-[var(--paper)]">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="kicker text-gold-bright">İkinci Kuşak</p>
          <h2 className="font-display mx-auto mt-4 max-w-xl text-3xl sm:text-4xl">
            Enes Doğan &amp; Fatih Doğan
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/60">
            Babalarının yanında talaş süpürerek başladıkları işi bugün
            kendi çocuklarına anlatacakları bir hikayeye dönüştürdüler.
            Atölyenin adı değişti, adresi büyüdü; ama ölçüye verdikleri
            önem hiç değişmedi.
          </p>
        </div>
      </RevealSection>
    </main>
  );
}
