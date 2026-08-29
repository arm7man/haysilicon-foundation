"use client";

import Reveal from "./Reveal";
import BridgeConnector from "./BridgeConnector";
import { useLanguage } from "./LanguageProvider";

export default function WhoWeServe() {
  const { t } = useLanguage();

  return (
    <section id="who-we-serve" className="relative border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
          <Reveal>
            <div>
              <p className="section-label">{t.whoWeServe.label}</p>
              <BridgeConnector className="mt-10 hidden md:block w-28 opacity-80" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink max-w-2xl leading-snug">
                {t.whoWeServe.heading}
              </h2>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {t.whoWeServe.groups.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-ink-dim">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    <span className="leading-relaxed">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
