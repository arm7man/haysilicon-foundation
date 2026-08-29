"use client";

import ChipAnimation from "./ChipAnimation";
import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-gradient-to-b from-paper-dim via-paper to-paper" />
      <ChipAnimation className="absolute inset-0 h-full w-full opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-paper from-10% via-paper/88 via-45% to-paper/30" />
      <div className="grain-overlay" />

      <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-28 md:pt-48 md:pb-36">
        <Reveal>
          <p className="section-label mb-6">{t.hero.eyebrow}</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-ink max-w-3xl leading-[1.08]">
            {t.hero.title}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-3 text-xl md:text-2xl text-ember font-mono-tight">
            {t.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 max-w-xl text-base md:text-lg text-ink-dim leading-relaxed">
            {t.hero.description}
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center rounded-sm bg-ember px-6 py-3 text-sm font-medium text-paper hover:bg-ember-dim transition-colors"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm border border-navy/30 px-6 py-3 text-sm font-medium text-navy hover:border-navy hover:bg-navy-soft transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
