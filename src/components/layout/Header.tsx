'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/brand/Logo';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import { useT } from '@/lib/LanguageProvider';

/* ------------------------------------------------------------
   Шапка.

   Мобильное меню лежит ВНУТРИ <header>, а не рядом с ним. Это
   принципиально: у шапки свой контекст наложения, и кнопка закрытия
   внутри неё не могла перекрыть меню, которое было соседом с большим
   z-index. Крестик оказывался под меню, и выйти было нечем.
   Теперь полотно меню и кнопка — в одном контексте, порядок понятен.

   Меню закрывается: крестиком, клавишей Esc, выбором пункта и
   переходом на другую страницу.
   ------------------------------------------------------------ */

const Header: React.FC = () => {
  const t = useT();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Меню не переживает переход на другую страницу */
  useEffect(() => setMenuOpen(false), [pathname]);

  /* Esc закрывает, прокрутка под меню заблокирована */
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 transition-colors duration-500 ease-[var(--ease-brand)] ${
        menuOpen ? 'z-[80]' : 'z-50'
      } ${
        solid
          ? 'border-b border-line bg-paper/90 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      {/* Верхняя полоса — всегда над полотном меню */}
      <div className="relative z-10 mx-auto flex h-16 w-full max-w-[82rem] items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-8">
        <Link
          href="/"
          className="-ml-1 flex min-h-[44px] shrink-0 items-center px-1 transition-colors duration-300 hover:text-flame"
          aria-label="HARAKEZ"
          onClick={() => setMenuOpen(false)}
        >
          <Logo />
        </Link>

        {/* Навигация — только на широких экранах */}
        <nav className="hidden items-center gap-8 lg:flex">
          {t.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative whitespace-nowrap text-[13px] text-ink-2 transition-colors duration-300 hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-flame transition-all duration-300 ease-[var(--ease-brand)] group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />

          <Link
            href={t.hero.primary.href}
            className="hidden whitespace-nowrap bg-ink px-5 py-2.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-flame lg:inline-block"
          >
            {t.hero.primary.label}
          </Link>

          {/* Бургер и крестик — одна кнопка, всегда доступна */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            ref={closeRef}
            className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={menuOpen ? t.common.close : t.common.menu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-all duration-300 ease-[var(--ease-brand)] ${
                  menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[3px]'
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-all duration-300 ease-[var(--ease-brand)] ${
                  menuOpen
                    ? 'top-1/2 -translate-y-1/2 -rotate-45'
                    : 'top-[calc(100%-3px)]'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Полотно меню — в том же контексте, под верхней полосой.

          Закрывается мгновенным размонтированием, без exit-анимации:
          exit опирается на requestAnimationFrame, а тот может встать
          (фоновая вкладка, экономия батареи) — и меню осталось бы
          висеть поверх сайта, перекрывая всё. Открытие анимируем,
          закрытие должно быть безусловным. */}
      {menuOpen && (
          <div
            id="mobile-menu"
            className="animate-[rise_0.28s_var(--ease-brand)_both] fixed inset-0 z-0 flex flex-col overflow-y-auto bg-paper pt-16 sm:pt-[72px] lg:hidden"
          >
            <nav className="flex flex-col px-5 pt-4">
              {t.nav.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rv is-in flex items-center justify-between border-b border-line py-5 text-[1.6rem] font-medium tracking-[-0.02em] transition-colors duration-300 active:text-flame"
                    style={
                      {
                        fontFamily: 'var(--font-display)',
                        '--rv-delay': `${50 + i * 50}ms`,
                      } as React.CSSProperties
                    }
                  >
                    {item.label}
                    <span className="font-[family-name:var(--font-mono)] text-[11px] text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-5 px-5 pb-10 pt-8">
              <Link
                href={t.hero.primary.href}
                onClick={() => setMenuOpen(false)}
                className="block bg-flame px-6 py-4 text-center font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.14em] text-white"
              >
                {t.hero.primary.label}
              </Link>

              <div className="flex items-center justify-between">
                <span className="tag-label">{t.common.language}</span>
                <LanguageSwitcher size="lg" />
              </div>
            </div>
          </div>
      )}
    </header>
  );
};

export default Header;
