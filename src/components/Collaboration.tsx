"use client";

import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";

export default function Collaboration() {
  const { t } = useLanguage();

  return (
    <section id="collaboration" className="relative border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="section-label">{t.collaboration.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-ink max-w-2xl">
            {t.collaboration.heading}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-ink-dim leading-relaxed">{t.collaboration.body}</p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {t.collaboration.types.map((p, i) => (
            <Reveal key={p} delay={i * 40}>
              <span className="inline-block rounded-full border border-line px-4 py-2 text-sm text-ink-dim hover:border-ember hover:text-ember transition-colors">
                {p}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
