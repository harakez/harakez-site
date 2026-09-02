'use client';

import React from 'react';
import Link from 'next/link';
import { LogoMark } from '@/components/brand/Logo';
import { Container } from '@/components/ui/primitives';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import { useT } from '@/lib/LanguageProvider';

/* ------------------------------------------------------------
   Подвал.
   Колонки со смыслом, ряд мономаркировки как на бирке и крупное
   имя бренда, срезанное нижним краем экрана.

   На телефоне колонки идут в две по ширине, а не растягиваются
   в одну длинную простыню.
   ------------------------------------------------------------ */

const Footer: React.FC = () => {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-paper-2 pt-14 sm:pt-20">
      <Container size="wide">
        <div className="grid grid-cols-2 gap-10 pb-12 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10 lg:pb-16">
          {/* Кто мы */}
          <div className="col-span-2 lg:col-span-1">
            <LogoMark className="mb-5 h-6 w-6 text-ink" />
            <p className="max-w-[30ch] text-[15px] leading-relaxed text-ink-2">
              {t.footer.about}
            </p>
          </div>

          {/* Разделы */}
          <nav aria-label={t.footer.sections}>
            <h2 className="tag-label mb-5">{t.footer.sections}</h2>
            <ul className="-my-1.5">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-[44px] items-center text-[15px] text-ink-2 transition-colors duration-300 hover:text-flame"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/submit"
                  className="flex min-h-[44px] items-center text-[15px] text-ink-2 transition-colors duration-300 hover:text-flame"
                >
                  {t.footer.submitLink}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Соцсети */}
          <nav aria-label={t.footer.contact}>
            <h2 className="tag-label mb-5">{t.footer.contact}</h2>
            <ul className="-my-1.5">
              {['Instagram', 'Telegram', 'TikTok'].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="group flex min-h-[44px] items-center gap-2 text-[15px] text-ink-2 transition-colors duration-300 hover:text-flame"
                  >
                    {label}
                    <span className="text-[11px] opacity-0 transition-opacity duration-300 group-hover:opacity-60">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Статус */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="tag-label mb-5">{t.footer.status}</h2>
            <div className="border border-line bg-shell p-5">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-flame" />
                </span>
                <span className="font-[family-name:var(--font-display)] text-[1.05rem] font-medium tracking-[-0.015em]">
                  {t.footer.statusValue}
                </span>
              </div>
              <p className="mt-3 border-t border-line pt-3 text-[14px] leading-relaxed text-muted">
                {t.footer.statusNote}
              </p>
            </div>
          </div>
        </div>

        {/* Мономаркировка и язык */}
        <div className="flex flex-col gap-5 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2.5 sm:gap-1.5">
            <p className="tag-label">
              © {year} HARAKEZ — {t.footer.rights}
            </p>
            <p className="tag-label">{t.footer.origin}</p>
          </div>
          <LanguageSwitcher className="inline-flex self-start sm:self-auto" />
        </div>
      </Container>

      {/* Крупное имя, срезанное нижним краем */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none px-5 sm:px-8"
      >
        <p className="wordmark -mb-[0.18em] translate-y-[0.1em] text-center text-[clamp(2.5rem,15vw,12rem)] leading-[0.8] text-ink/[0.07]">
          Harakez
        </p>
      </div>
    </footer>
  );
};

export default Footer;
