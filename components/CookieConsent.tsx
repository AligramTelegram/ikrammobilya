"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "ikram-mobilya-cerez-onay";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  function acceptCookies() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-[var(--line)] bg-[var(--paper)] px-6 py-5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:px-10"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-black/70">
              Sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.
              Detaylar için{" "}
              <Link href="/cerez-politikasi" className="gold-link">
                Çerez Politikası
              </Link>{" "}
              sayfamızı inceleyebilirsiniz.
            </p>
            <button
              onClick={acceptCookies}
              className="shrink-0 bg-[var(--ink)] px-6 py-2.5 text-sm font-medium tracking-wide text-gold-bright transition-transform hover:scale-[1.03]"
            >
              Kabul Et
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
