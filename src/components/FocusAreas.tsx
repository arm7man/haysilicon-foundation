"use client";

import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";

function ChipIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="12" y="12" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.1" />
      {[5, 10, 15, 20].map((y) => (
        <line key={`l${y}`} x1="2" y1={y} x2="8" y2={y} stroke="currentColor" strokeWidth="1.1" />
      ))}
      {[5, 10, 15, 20].map((y) => (
        <line key={`r${y}`} x1="20" y1={y} x2="26" y2={y} stroke="currentColor" strokeWidth="1.1" />
      ))}
      {[5, 10, 15, 20].map((x) => (
        <line key={`t${x}`} x1={x} y1="2" x2={x} y2="8" stroke="currentColor" strokeWidth="1.1" />
      ))}
      {[5, 10, 15, 20].map((x) => (
        <line key={`b${x}`} x1={x} y1="20" x2={x} y2="26" stroke="currentColor" strokeWidth="1.1" />
      ))}
    </svg>
  );
}

export default function FocusAreas() {
  const { t } = useLanguage();

  return (
    <section id="focus-areas" className="relative border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="section-label">{t.focusAreas.label}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-ink max-w-2xl">
            {t.focusAreas.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.focusAreas.items.map((area, i) => (
            <Reveal key={area.title} delay={i * 50}>
              <div className="h-full rounded border border-line bg-paper-card p-6 hover:border-ember/60 transition-colors">
                <div className="text-navy">
                  <ChipIcon />
                </div>
                <h3 className="mt-4 text-base font-medium text-ink">{area.title}</h3>
                <p className="mt-2 text-sm text-ink-dim leading-relaxed">{area.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
