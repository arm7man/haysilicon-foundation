"use client";

import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16">
          <Reveal>
            <div>
              <p className="section-label">{t.contact.label}</p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-ink">
                {t.contact.heading}
              </h2>
              <p className="mt-5 max-w-md text-ink-dim leading-relaxed">{t.contact.body}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-dim">
                  {t.contact.emailLabel}
                </p>
                <a
                  href="mailto:info@haysilicon.am"
                  className="mt-1 block text-lg text-ink hover:text-ember transition-colors"
                >
                  info@haysilicon.am
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-dim">
                  {t.contact.addressLabel}
                </p>
                <p className="mt-1 text-lg text-ink">{t.contact.addressValue}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-dim">
                  {t.contact.legalNameLabel}
                </p>
                <p className="mt-1 text-ink-dim">{t.contact.legalNameValue}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
