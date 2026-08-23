"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BUSINESS_WHATSAPP } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const ringY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[72vh] overflow-hidden border-b border-[var(--line)] lg:min-h-[78vh]"
    >
      {/* Görsel: her zaman ekranın sağ kenarına yapışık, tam ekran genişliğinin yarısı */}
      <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <motion.div style={{ y: imageY }} className="absolute inset-0 -top-10 -bottom-10">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/hero2.webp"
              alt="İkram Mobilya atölyesinde özel ölçü mobilya imalatı"
              fill
              priority
              sizes="52vw"
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: ringY, rotate: ringRotate }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute right-16 top-10 h-64 w-64 rounded-full border border-gold-bright/50"
        />
        <motion.div
          style={{ y: ringY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute bottom-10 left-10 h-32 w-32 rounded-full border border-gold-bright/40"
        />
      </div>

      {/* Mobil/tablet: görsel tam genişlik, üstte */}
      <div className="relative h-[42vh] w-full overflow-hidden lg:hidden">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/hero2.webp"
            alt="İkram Mobilya atölyesinde özel ölçü mobilya imalatı"
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </motion.div>
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex min-h-[30vh] w-full max-w-xl flex-col justify-center px-6 py-12 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[48%] lg:max-w-none lg:min-h-0 lg:py-0 lg:pl-32 lg:pr-6 xl:pl-40"
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-xl text-4xl sm:text-5xl lg:text-6xl"
        >
          Ölçüsü size,
          <br />
          <span className="font-script text-5xl font-bold text-gold-deep sm:text-6xl lg:text-7xl">
            Zanaati bize ait.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 max-w-sm text-base text-black/65 sm:text-lg"
        >
          Çorum&apos;da özel ölçü mobilya imalatı ve montajı.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href={BUSINESS_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--ink)] transition-transform hover:scale-[1.03]"
          >
            WhatsApp&apos;tan Teklif Al
          </a>
          <Link
            href="/hakkimizda"
            className="gold-link px-1 py-3.5 text-sm font-medium tracking-wide"
          >
            Atölyeyi Tanıyın →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
