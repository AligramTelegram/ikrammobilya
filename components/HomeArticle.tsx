"use client";

import { useState } from "react";
import {
  HOME_ARTICLE_CLOSING,
  HOME_ARTICLE_FAQ,
  HOME_ARTICLE_INTRO,
  HOME_ARTICLE_SECTIONS,
  HOME_ARTICLE_TITLE,
} from "@/lib/homeArticle";

export default function HomeArticle() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={
          expanded
            ? "max-h-[75vh] overflow-y-auto pr-2"
            : "max-h-[460px] overflow-hidden"
        }
      >
        <article>
          <h2 className="font-display text-3xl sm:text-4xl">
            {HOME_ARTICLE_TITLE}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70">
            {HOME_ARTICLE_INTRO}
          </p>

          {HOME_ARTICLE_SECTIONS.map((section) => (
            <section key={section.heading} className="mt-10 max-w-3xl">
              <h3 className="font-display text-xl">{section.heading}</h3>
              {section.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-3 text-sm leading-relaxed text-black/65"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="mt-10 max-w-3xl">
            <h3 className="font-display text-xl">Sıkça Sorulan Sorular</h3>
            <div className="mt-4 flex flex-col divide-y divide-[var(--line)]">
              {HOME_ARTICLE_FAQ.map((item) => (
                <div key={item.question} className="py-4 first:pt-0">
                  <h4 className="text-sm font-semibold">{item.question}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-black/60">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <p className="mt-10 max-w-3xl text-base leading-relaxed text-black/70">
            {HOME_ARTICLE_CLOSING}
          </p>
        </article>
      </div>

      {!expanded && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--paper)] to-transparent" />
      )}

      <button
        onClick={() => setExpanded((v) => !v)}
        className="gold-link relative z-10 mt-6 text-sm font-medium"
      >
        {expanded ? "Daralt ↑" : "Devamını Oku →"}
      </button>
    </div>
  );
}
