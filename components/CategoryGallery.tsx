"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CategoryGallery({
  images,
  categoryName,
}: {
  images: string[];
  categoryName: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, prev, next]);

  return (
    <>
      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`${categoryName} örnek çalışma ${i + 1} — büyüt`}
            className="group relative aspect-[4/3] w-[78%] shrink-0 snap-center overflow-hidden border border-[var(--line)] sm:w-auto sm:shrink"
          >
            <Image
              src={src}
              alt={`${categoryName} örnek çalışma ${i + 1}, İkram Mobilya atölyesi`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 78vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--ink)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                  <circle cx="10" cy="10" r="6.5" />
                  <path d="M15 15 20 20M10 7.5v5M7.5 10h5" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs text-black/40 sm:hidden">
        Görselleri kaydırarak inceleyebilirsiniz →
      </p>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--ink)]/95 px-2 py-16 sm:px-16 sm:py-8"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Kapat"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-bright hover:text-gold-bright sm:right-8 sm:top-8"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Önceki görsel"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-bright hover:text-gold-bright sm:left-6"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                <path d="m15 5-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Sonraki görsel"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-bright hover:text-gold-bright sm:right-6"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative h-full w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[openIndex]}
                alt={`${categoryName} örnek çalışma ${openIndex + 1}, İkram Mobilya atölyesi`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50 sm:bottom-8">
              {openIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
