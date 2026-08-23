"use client";

import { motion } from "framer-motion";
import { BUSINESS_WHATSAPP } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={BUSINESS_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan yazın"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.29 4.93L2 22l5.29-1.38a9.86 9.86 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.37-.5.07-1.09.1-1.76-.11-.4-.13-.92-.3-1.58-.59-2.78-1.2-4.59-4.01-4.73-4.2-.14-.19-1.13-1.5-1.13-2.86s.7-2.03.95-2.31c.24-.27.53-.34.71-.34.18 0 .35.001.5.008.16.007.38-.06.6.46.24.55.8 1.91.87 2.05.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.17-.2.71-.83.9-1.11.19-.29.38-.24.63-.14.26.1 1.61.76 1.89.9.28.14.46.21.53.33.07.13.07.72-.17 1.4Z" />
      </svg>
    </motion.a>
  );
}
