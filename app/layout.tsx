import type { Metadata } from "next";
import { Dancing_Script, Inter, Oswald } from "next/font/google";
import "./globals.css";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import ScrollProgress from "@/components/ScrollProgress";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "İkram Mobilya, Çorum'da özel ölçü mobilya imalatı yapan bir atölyedir. Bireysel özel ölçü sipariş, mobilya mağazalarına toptan üretim ve kurumsal proje üretimi.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description:
      "Çorum'da özel ölçü mobilya imalatı — İkram Mobilya atölyesi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Çorum'da özel ölçü mobilya imalatı — İkram Mobilya atölyesi.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
    shortcut: "/favicon.png?v=2",
  },
  verification: {
    google: "ws4R3rTMTvGGYSCnOtRXn4_6MJsOVwUieyB1oHVf9pU",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${oswald.variable} ${inter.variable} ${dancingScript.variable}`}
    >
      <head>
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="min-h-screen antialiased">
        <div className="grain-overlay" />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
