import Image from "next/image";
import Link from "next/link";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  CATEGORIES,
  SEGMENTS,
  SITE_NAME,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/logo-gold.png"
            alt={SITE_NAME}
            width={1939}
            height={481}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Çorum&apos;da özel ölçü mobilya imalatı, montaj ve dekorasyon
            danışmanlığı: bireysel, toptan ve kurumsal projelere üretim.
          </p>
          <div className="gold-rule mt-6" />
        </div>

        <div>
          <p className="kicker mb-4 text-gold-bright">Kategoriler</p>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/${category.slug}`}
                  className="transition-colors hover:text-gold-bright"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="kicker mb-4 text-gold-bright">Hizmetler</p>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            {SEGMENTS.map((segment) => (
              <li key={segment.slug}>
                <Link
                  href={`/hizmetler/${segment.slug}`}
                  className="transition-colors hover:text-gold-bright"
                >
                  {segment.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="transition-colors hover:text-gold-bright"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="kicker mb-4 text-gold-bright">İletişim</p>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            <li>
              {BUSINESS_ADDRESS.streetAddress}, {BUSINESS_ADDRESS.addressLocality}
            </li>
            <li>{BUSINESS_PHONE_DISPLAY}</li>
            <li>{BUSINESS_EMAIL}</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 border-t border-white/10 px-6 py-6 text-center lg:px-10">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {SITE_NAME}. Tüm hakları saklıdır.{" "}
          <span className="mx-1 text-white/20">·</span>{" "}
          <Link
            href="/cerez-politikasi"
            className="transition-colors hover:text-gold-bright"
          >
            Çerez Politikası
          </Link>
        </p>

        <a
          href="https://cihanbeytech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-60 transition-opacity hover:opacity-100"
        >
          <Image
            src="/cihanbeylogobeyaz.png"
            alt="cihanbeytech"
            width={1882}
            height={227}
            className="h-4 w-auto"
          />
        </a>
      </div>
    </footer>
  );
}
