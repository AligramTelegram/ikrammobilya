export const SITE_URL = "https://corummobilya.com";
export const SITE_NAME = "İkram Mobilya";
export const SITE_TITLE = "İkram Mobilya | Çorum Mobilya İmalatı";
export const BUSINESS_PHONE = "+903641234567";
export const BUSINESS_PHONE_DISPLAY = "0364 123 45 67";
export const BUSINESS_WHATSAPP = "https://wa.me/903641234567";
export const BUSINESS_EMAIL = "info@corummobilya.com";
export const BUSINESS_ADDRESS = {
  streetAddress: "Yeniyol Mahallesi, Mobilyacılar Caddesi No:1",
  addressLocality: "Çorum",
  addressRegion: "Çorum",
  postalCode: "19000",
  addressCountry: "TR",
};
export const BUSINESS_GEO = {
  latitude: 40.5506,
  longitude: 34.9556,
};
export const BUSINESS_HOURS = "Mo-Sa 09:00-19:00";

export type CategorySlug =
  | "mutfak-dolabi"
  | "gardirop"
  | "yatak-odasi"
  | "oturma-grubu"
  | "yemek-odasi"
  | "ofis-ticari-mobilya";

export interface CategoryDef {
  slug: CategorySlug;
  name: string;
  title: string;
  description: string;
  /** Sitemap priority — mutfak dolabı/gardırop en öncelikli kategoriler. */
  priority: number;
  relatedSegments: SegmentSlug[];
}

export const CATEGORIES: CategoryDef[] = [
  {
    slug: "mutfak-dolabi",
    name: "Mutfak Dolabı",
    title: "Özel Ölçü Mutfak Dolabı İmalatı | Çorum",
    description:
      "Çorum'da özel ölçü mutfak dolabı imalatı. Ahşap/MDF kaplama mutfak dolabı modelleri, ölçü alımından montaja kadar İkram Mobilya atölyesinde üretilir.",
    priority: 0.9,
    relatedSegments: ["bireysel-ozel-olcu-siparis", "kurumsal-proje-uretimi"],
  },
  {
    slug: "gardirop",
    name: "Gardırop / Vestiyer",
    title: "Özel Ölçü Gardırop, Vestiyer, Portmanto İmalatı | Çorum",
    description:
      "Çorum'da özel ölçü gardırop, vestiyer ve portmanto imalatı. Giyinme odası ve yatak odasına özel tasarlanan gardırop modelleri İkram Mobilya atölyesinde üretilir.",
    priority: 0.9,
    relatedSegments: [
      "bireysel-ozel-olcu-siparis",
      "kurumsal-proje-uretimi",
      "dekorasyon-danismanligi",
    ],
  },
  {
    slug: "yatak-odasi",
    name: "Yatak Odası",
    title: "Yatak Odası Mobilyası İmalatı | Çorum",
    description:
      "Çorum'da yatak odası mobilyası imalatı: yatak başlığı, komodin ve şifonyer setleri özel ölçüyle üretilir. İkram Mobilya atölyesinden bireysel ve toptan sipariş alınır.",
    priority: 0.7,
    relatedSegments: [
      "bireysel-ozel-olcu-siparis",
      "toptan-uretim",
      "mobilya-montaj-hizmeti",
    ],
  },
  {
    slug: "oturma-grubu",
    name: "Oturma Grubu",
    title: "Koltuk Takımı ve Oturma Grubu İmalatı | Çorum",
    description:
      "Çorum'da koltuk takımı ve oturma grubu imalatı: köşe koltuk, kanepe ve berjer üretimi. İkram Mobilya atölyesi hem bireysel siparişe hem mağazalara toptan üretime bakar.",
    priority: 0.7,
    relatedSegments: [
      "bireysel-ozel-olcu-siparis",
      "toptan-uretim",
      "mobilya-montaj-hizmeti",
    ],
  },
  {
    slug: "yemek-odasi",
    name: "Yemek Odası",
    title: "Yemek Odası Mobilyası İmalatı | Çorum",
    description:
      "Çorum'da yemek odası mobilyası imalatı: masa, sandalye ve vitrin üretimi, mekanınızın ölçüsüne göre planlanır. İkram Mobilya atölyesinden özel ölçü ve toptan sipariş alınır.",
    priority: 0.7,
    relatedSegments: [
      "bireysel-ozel-olcu-siparis",
      "toptan-uretim",
      "mobilya-montaj-hizmeti",
    ],
  },
  {
    slug: "ofis-ticari-mobilya",
    name: "Ofis / Ticari Mobilya",
    title: "Ofis ve Ticari Mobilya İmalatı | Çorum",
    description:
      "Çorum'da ofis ve ticari mekanlara özel mobilya imalatı: masa, dolap, banko üretimi. Otel, ofis ve restoran projelerine özel çözümler.",
    priority: 0.7,
    relatedSegments: ["kurumsal-proje-uretimi", "toptan-uretim"],
  },
];

export function getCategory(slug: string): CategoryDef | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function categoryImage(slug: CategorySlug): string {
  return `/kategori-${slug}.webp`;
}

export type SegmentSlug =
  | "bireysel-ozel-olcu-siparis"
  | "toptan-uretim"
  | "kurumsal-proje-uretimi"
  | "mobilya-montaj-hizmeti"
  | "dekorasyon-danismanligi";

export interface SegmentDef {
  slug: SegmentSlug;
  name: string;
  title: string;
  description: string;
  relatedCategories: CategorySlug[];
}

export const SEGMENTS: SegmentDef[] = [
  {
    slug: "bireysel-ozel-olcu-siparis",
    name: "Bireysel Özel Ölçü Sipariş",
    title: "Özel Ölçü Mobilya Siparişi Nasıl Verilir? | Çorum",
    description:
      "Evinize özel ölçü mobilya siparişi: ölçü alımı, tasarım onayı, üretim ve montaj süreci. Çorum İkram Mobilya atölyesinde bireysel müşterilere özel üretim.",
    relatedCategories: ["mutfak-dolabi", "gardirop", "yatak-odasi"],
  },
  {
    slug: "toptan-uretim",
    name: "Toptan Üretim (Bayilere Fason)",
    title: "Çorum Sanayi Mobilyacılar İçin Toptan / Fason Üretim",
    description:
      "Mobilya mağazalarına toptan ve fason üretim hizmeti. Çorum Organize Sanayi Bölgesi'ndeki (OSB) sanayi mobilyacılara özel kapasite ve teslim süreleriyle B2B üretim sağlıyoruz.",
    relatedCategories: ["yatak-odasi", "oturma-grubu", "yemek-odasi"],
  },
  {
    slug: "kurumsal-proje-uretimi",
    name: "Kurumsal Proje Üretimi",
    title: "Otel, Ofis, Restoran Mobilya Üretimi | Çorum",
    description:
      "Otel, ofis ve restoran projelerine özel mobilya üretimi. Çorum İkram Mobilya atölyesi, kurumsal projelere anahtar teslim üretim çözümleri sunar.",
    relatedCategories: ["ofis-ticari-mobilya", "mutfak-dolabi", "gardirop"],
  },
  {
    slug: "mobilya-montaj-hizmeti",
    name: "Mobilya Montaj Hizmeti",
    title: "Çorum Mobilya Montaj Ustası | Her Marka Mobilya Montajı",
    description:
      "Çorum'da mobilya montaj ustası arıyorsanız İkram Mobilya'yı arayın. Kendi ürettiğimiz mobilyaların yanı sıra farklı markaların mobilyalarının montajını da yapıyoruz.",
    relatedCategories: ["yatak-odasi", "oturma-grubu", "yemek-odasi"],
  },
  {
    slug: "dekorasyon-danismanligi",
    name: "Dekorasyon Danışmanlığı",
    title: "Çorum Dekorasyon Danışmanlığı | İç Mekan Mobilya Planlaması",
    description:
      "Çorum'da dekorasyoncu arıyorsanız İkram Mobilya atölyesinden dekorasyon danışmanlığı alabilirsiniz. Oda planlaması, malzeme ve renk seçiminde imalat tecrübemizle size yol gösteriyoruz.",
    relatedCategories: ["gardirop", "yatak-odasi", "ofis-ticari-mobilya"],
  },
];

export function getSegment(slug: string): SegmentDef | undefined {
  return SEGMENTS.find((s) => s.slug === slug);
}

export interface BlogPostDef {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
}

export const BLOG_POSTS: BlogPostDef[] = [
  {
    slug: "ozel-olcu-gardirop-fiyatlari-nasil-belirlenir",
    title: "Özel Ölçü Gardırop Fiyatları Nasıl Belirlenir?",
    description:
      "Özel ölçü gardırop fiyatını etkileyen faktörler: ölçü, malzeme, kapak seçeneği ve montaj. Çorum İkram Mobilya'dan bilgiler.",
    excerpt:
      "Özel ölçü gardırop fiyatı; oda ölçüsü, kullanılan malzeme (MDF/lam/ahşap kaplama), kapak sistemi ve iç düzenleme aksesuarlarına göre değişir.",
    publishedAt: "2026-08-01",
  },
  {
    slug: "mutfak-dolabi-secerken-nelere-dikkat-edilir",
    title: "Mutfak Dolabı Seçerken Nelere Dikkat Edilmeli?",
    description:
      "Mutfak dolabı seçerken malzeme kalitesi, ölçü uyumu ve menteşe/çekmece sistemleri hakkında bilmeniz gerekenler.",
    excerpt:
      "Mutfak dolabı seçimi; malzeme kalitesi, nem dayanımı, menteşe/çekmece sistemi ve ölçü uyumuna göre yapılmalıdır. Nemli ortamda kullanılacak mutfak dolabında suya dayanıklı MDF veya masif ahşap kaplama tercih edilmelidir — düşük kaliteli malzeme zamanla şişer ve kapanmaz hale gelir. Çekmece ve menteşe sisteminde yumuşak kapanma (soft-close) mekanizması hem kullanım konforu hem uzun ömür sağlar. En kritik adım ise doğru ölçü alımıdır: standart hazır dolaplar mutfağınızın gerçek ölçüsüne nadiren tam oturur, bu yüzden özel ölçü üretim tercih edilmelidir. İkram Mobilya atölyesinde her mutfak dolabı, mutfağınızın kendi ölçüsüne göre üretilir; hazır modül değil, size özel tasarım sunulur.",
    publishedAt: "2026-08-10",
  },
  {
    slug: "toptan-mobilya-uretimi-nasil-isler",
    title: "Toptan Mobilya Üretimi (Fason) Nasıl İşler?",
    description:
      "Mobilya mağazaları için fason/toptan üretim süreci: numune onayı, kapasite planlama ve teslim süreleri.",
    excerpt:
      "Fason mobilya üretiminde süreç numune onayı ile başlar, kapasite planlaması yapılır ve anlaşılan teslim takvimine göre üretim devam eder.",
    publishedAt: "2026-08-15",
  },
];

export function getBlogPost(slug: string): BlogPostDef | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
