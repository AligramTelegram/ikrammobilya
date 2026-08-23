import type { PageArticle } from "@/lib/categoryContent";

export default function PageArticleSections({ article }: { article: PageArticle }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10">
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
  );
}
