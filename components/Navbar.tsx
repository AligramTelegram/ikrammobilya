"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { CATEGORIES, SITE_NAME } from "@/lib/site";

const LINKS = [
  { name: "Hizmetlerimiz", href: "/hizmetler" },
  { name: "Blog", href: "/blog" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur-md">
      <div className="flex w-full items-center justify-start px-6 py-3 lg:px-14 xl:px-20">
        <Link
          href="/"
          className="mr-auto flex shrink-0 items-center lg:ml-6 xl:ml-10"
          aria-label={SITE_NAME}
        >
          <Image
            src="/logo-black.png"
            alt={SITE_NAME}
            width={1994}
            height={495}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="gold-link text-base font-medium">
              Üretim Kategorileri
            </button>
            {categoriesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                className="absolute left-0 top-full flex w-56 flex-col gap-1 border border-[var(--line)] bg-[var(--paper)] p-3 shadow-xl"
              >
                {CATEGORIES.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/${category.slug}`}
                    className="gold-link px-2 py-1.5 text-sm"
                  >
                    {category.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
          {LINKS.map((link) => (
            <span key={link.href} className="flex items-center gap-6">
              <span className="h-4 w-px bg-[var(--line)]" aria-hidden="true" />
              <Link href={link.href} className="gold-link text-base font-medium">
                {link.name}
              </Link>
            </span>
          ))}
        </nav>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Menüyü aç/kapat"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-[var(--ink)] transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-[var(--ink)] transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-[var(--ink)] transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-1 border-t border-[var(--line)] px-6 py-4 lg:hidden"
        >
          <span className="kicker mb-1">Üretim Kategorileri</span>
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {category.name}
            </Link>
          ))}
          <span className="kicker mb-1 mt-3">Diğer</span>
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <span className="mt-2 text-xs opacity-60">{SITE_NAME}</span>
        </motion.nav>
      )}
    </header>
  );
}
