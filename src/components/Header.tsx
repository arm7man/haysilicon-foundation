"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#what-we-do", label: t.nav.whatWeDo },
    { href: "#focus-areas", label: t.nav.focusAreas },
    { href: "#who-we-serve", label: t.nav.whoWeServe },
    { href: "#collaboration", label: t.nav.collaboration },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative flex h-8 w-8 items-center justify-center rounded border border-navy/40 text-navy font-mono-tight text-xs">
            AS
          </span>
          <span className="font-semibold tracking-tight text-ink text-[15px]">
            ASTech <span className="text-ink-dim font-normal">Foundation</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-dim hover:text-ember transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitch />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitch />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded border border-line"
          >
            <span
              className={`block h-px w-4 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-paper/95 backdrop-blur px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-ink-dim hover:text-ember transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
