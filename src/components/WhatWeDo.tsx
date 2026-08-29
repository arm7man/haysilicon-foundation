"use client";

import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";

export default function WhatWeDo() {
  const { t } = useLanguage();

  return (
    <section id="what-we-do" className="relative border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="section-label">{t.whatWeDo.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-ink max-w-2xl">
            {t.whatWeDo.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded overflow-hidden">
          {t.whatWeDo.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="h-full bg-paper-card p-7 hover:bg-paper transition-colors">
                <span className="font-mono-tight text-xs text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-ink-dim leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
