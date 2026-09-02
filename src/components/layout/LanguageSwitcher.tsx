'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageProvider';
import { LANGS, langNames } from '@/lib/i18n';

/* ------------------------------------------------------------
   Переключатель языка.
   Оба варианта видны сразу — так понятнее, чем выпадающий список
   с одним пунктом, и попасть пальцем проще.
   ------------------------------------------------------------ */

/**
 * Класс отображения (inline-flex / hidden) задаёт вызывающая сторона.
 * В базовом классе его держать нельзя: Tailwind выводит display-утилиты
 * в своём порядке, и `inline-flex` перебивал переданный `hidden` —
 * переключатель вылезал в шапке на телефоне, где ему не место.
 */
export const LanguageSwitcher: React.FC<{
  className?: string;
  size?: 'sm' | 'lg';
}> = ({ className = 'inline-flex', size = 'sm' }) => {
  const { lang, setLang, t } = useLanguage();

  /* Минимум 44px по высоте: меньше — палец промахивается. */
  const pad =
    size === 'lg'
      ? 'min-h-[48px] min-w-[64px] px-5 text-[13px]'
      : 'min-h-[44px] min-w-[48px] px-3.5 text-[11px]';

  return (
    <div
      className={`items-center border border-line ${className}`}
      role="group"
      aria-label={t.common.language}
    >
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={`inline-flex items-center justify-center font-[family-name:var(--font-mono)] uppercase tracking-[0.12em] transition-colors duration-300 ${pad} ${
              active
                ? 'bg-ink text-paper'
                : 'text-muted hover:text-ink'
            }`}
          >
            {langNames[l]}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
