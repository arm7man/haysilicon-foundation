"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line bg-paper-card p-0.5 text-xs font-mono-tight ${className}`}
      role="group"
      aria-label="Language switch"
    >
      {(["en", "hy"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === code ? "bg-navy text-paper" : "text-ink-dim hover:text-navy"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
