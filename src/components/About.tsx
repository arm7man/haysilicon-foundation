"use client";

import Reveal from "./Reveal";
import MissionTree from "./MissionTree";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
          <Reveal>
            <div>
              <p className="section-label">{t.about.label}</p>
              <MissionTree className="mt-10 hidden md:block w-28 opacity-80" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-ink leading-snug">
                {t.about.heading}
              </h2>
              <p className="mt-6 text-ink-dim leading-relaxed">{t.about.body1}</p>
              <p className="mt-4 text-ink-dim leading-relaxed">{t.about.body2}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
