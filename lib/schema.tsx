import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_GEO,
  BUSINESS_HOURS,
  BUSINESS_PHONE,
  CATEGORIES,
  SITE_NAME,
  SITE_URL,
} from "./site";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * İkram Mobilya bir imalat atölyesi (bireysel özel ölçü + toptan/B2B +
 * kurumsal proje üretimi), hazır ürün satan bir mağaza değil — bu yüzden
 * "FurnitureStore" yerine "LocalBusiness"+"Organization" ile imalat vurgusu
 * (makesOffer + knowsAbout) kullanılıyor.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${SITE_URL}#business`,
    name: SITE_NAME,
    description:
      "İkram Mobilya, Çorum'da özel ölçü mobilya imalatı yapan bir atölyedir. Bireysel müşterilere özel ölçü üretim, mobilya mağazalarına toptan/fason üretim ve otel/ofis/restoran gibi kurumsal projelere üretim hizmeti verir.",
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_GEO.latitude,
      longitude: BUSINESS_GEO.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Çorum" },
      { "@type": "Country", name: "Türkiye" },
    ],
    openingHours: BUSINESS_HOURS,
    priceRange: "₺₺",
    foundingDate: "1976",
    founder: {
      "@type": "Person",
      name: "Fazlı Doğan",
      jobTitle: "Kurucu Usta",
    },
    employee: [
      {
        "@type": "Person",
        name: "Enes Doğan",
        jobTitle: "İkinci Kuşak Usta",
      },
      {
        "@type": "Person",
        name: "Fatih Doğan",
        jobTitle: "İkinci Kuşak Usta",
      },
    ],
    knowsAbout: CATEGORIES.map((c) => c.name),
    makesOffer: CATEGORIES.map((c) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: c.name,
        category: c.name,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function collectionPageSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function productSchema(opts: {
  name: string;
  description: string;
  path: string;
  image?: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    category: opts.category,
    image: opts.image ? `${SITE_URL}${opts.image}` : undefined,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: { "@type": "City", name: "Çorum" },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    datePublished: opts.publishedAt,
    dateModified: opts.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export function faqPageSchema(qa: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
