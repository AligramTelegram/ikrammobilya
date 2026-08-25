"use client";

import { useState } from "react";
import type { PageArticle } from "@/lib/categoryContent";

export default function PageArticleSections({ article }: { article: PageArticle }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
      <div className="relative">
        <div
          className={
            expanded
              ? "max-h-[75vh] overflow-y-auto pr-2"
              : "max-h-[420px] overflow-hidden"
          }
        >
          {article.sections.map((section) => (
            <section key={section.heading} className="mt-10 first:mt-0">
              <h2 className="font-display text-xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-black/65">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="mt-14">
            <h2 className="font-display text-xl">Sıkça Sorulan Sorular</h2>
            <div className="mt-4 flex flex-col divide-y divide-[var(--line)]">
              {article.faq.map((item) => (
                <div key={item.question} className="py-4 first:pt-0">
                  <h3 className="text-sm font-semibold">{item.question}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-black/60">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--paper-warm)] to-transparent" />
        )}

        <button
          onClick={() => setExpanded((v) => !v)}
          className="gold-link relative z-10 mt-6 text-sm font-medium"
        >
          {expanded ? "Daralt ↑" : "Devamını Oku →"}
        </button>
      </div>
    </div>
  );
}
