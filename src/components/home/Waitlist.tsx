'use client';

import React from 'react';
import { Container, Section, Eyebrow, Arrow } from '@/components/ui/primitives';
import { LogoMark } from '@/components/brand/Logo';
import { useFormspree } from '@/lib/useFormspree';
import { useT } from '@/lib/LanguageProvider';
import { formEndpoints } from '@/lib/i18n';

/* ------------------------------------------------------------
   Список ожидания.
   Отправка без ухода со страницы, с честным состоянием
   «отправляем / готово / ошибка».

   Размер шрифта в поле — 16px: на iOS всё, что меньше, заставляет
   Safari приближать страницу при фокусе, и вёрстка уезжает.
   ------------------------------------------------------------ */

const Waitlist: React.FC = () => {
  const t = useT();
  const { state, error, submit } = useFormspree(formEndpoints.waitlist);

  return (
    <Section id="waitlist">
      <Container size="default">
        <div className="relative overflow-hidden border border-line bg-shell px-5 py-12 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(127deg, currentColor 0 1.5px, transparent 1.5px 18px)',
            }}
          />

          <div className="relative mx-auto max-w-xl">
            <LogoMark className="mx-auto h-6 w-6 text-flame" />

            <Eyebrow className="mt-6 justify-center" dot={false}>
              {t.waitlist.eyebrow}
            </Eyebrow>

            <h2 className="display mt-5 text-[clamp(1.6rem,6vw,2.75rem)]">
              {t.waitlist.title}
            </h2>

            <p className="mx-auto mt-5 max-w-[42ch] text-[15.5px] leading-relaxed text-ink-2">
              {t.waitlist.lead}
            </p>

            <div className="mt-9 min-h-[7rem]">
              {state === 'ok' ? (
                  <div className="rv is-in flex flex-col items-center gap-3 border border-flame/35 bg-flame-soft px-5 py-7">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-flame text-white">
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                        <path
                          d="M1 5.5 5 9.5 13 1"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                    <p className="text-[15px] text-ink">{t.waitlist.success}</p>
                  </div>
              ) : (
                  <form
                    onSubmit={submit}
                    className="mx-auto flex max-w-lg flex-col gap-2.5 sm:flex-row"
                  >
                    <label htmlFor="waitlist-email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      placeholder={t.waitlist.placeholder}
                      disabled={state === 'sending'}
                      className="min-h-[52px] min-w-0 flex-1 border border-line bg-paper px-4 py-3.5 text-[16px] text-ink placeholder:text-muted/70 transition-colors duration-300 focus:border-ink focus:outline-none disabled:opacity-50"
                    />

                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <button
                      type="submit"
                      disabled={state === 'sending'}
                      className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2.5 bg-ink px-7 py-3.5 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-flame disabled:opacity-50"
                    >
                      {state === 'sending' ? t.waitlist.sending : t.waitlist.button}
                      {state !== 'sending' && <Arrow />}
                    </button>
                  </form>
              )}

              {state === 'error' && error && (
                <p className="mt-4 text-[14px] text-flame-2">{error}</p>
              )}
            </div>

            <p className="tag-label mt-2 text-[10px] !text-muted/80">
              {t.waitlist.note}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Waitlist;
