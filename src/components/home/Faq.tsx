'use client';

import React, { useState } from 'react';
import { Container, Section, Eyebrow, Arrow } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { LogoMark } from '@/components/brand/Logo';
import { useFormspree } from '@/lib/useFormspree';
import { useT } from '@/lib/LanguageProvider';
import { formEndpoints } from '@/lib/i18n';

/* ------------------------------------------------------------
   Вопросы.
   Раскрывающийся список плюс форма для своего вопроса — раньше
   человеку было некуда деться, если ответа в списке нет.
   ------------------------------------------------------------ */

const Faq: React.FC = () => {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="border-t border-line">
      <Container size="default">
        <Reveal className="text-center">
          <Eyebrow className="justify-center">{t.faq.eyebrow}</Eyebrow>
          <h2 className="display mt-5 text-[clamp(1.75rem,6.5vw,3rem)]">
            {t.faq.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 sm:mt-14">
          <dl className="border-t border-line">
            {t.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-line">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start justify-between gap-5 py-5 text-left sm:gap-6 sm:py-6"
                    >
                      <span
                        className={`font-[family-name:var(--font-display)] text-[clamp(1.05rem,4vw,1.3rem)] font-medium tracking-[-0.015em] transition-colors duration-300 ${
                          isOpen ? 'text-flame' : 'text-ink group-hover:text-flame'
                        }`}
                      >
                        {item.q}
                      </span>

                      <span className="relative mt-2 block h-3 w-3 shrink-0">
                        <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                        <span
                          className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-300 ease-[var(--ease-brand)] ${
                            isOpen ? 'scale-y-0' : 'scale-y-100'
                          }`}
                        />
                      </span>
                    </button>
                  </dt>

                  {/* Раскрытие через grid-template-rows: браузер сам
                      считает высоту, замерять её скриптом не нужно. */}
                  <dd className={`acc ${isOpen ? 'is-open' : ''}`}>
                    <div>
                      <p className="max-w-[62ch] pb-6 pr-6 text-[15px] leading-relaxed text-ink-2 sm:pb-7 sm:pr-10">
                        {item.a}
                      </p>
                    </div>
                  </dd>
                </div>
              );
            })}
          </dl>
        </Reveal>

        <Reveal delay={0.14} className="mt-12 sm:mt-14">
          <AskForm />
        </Reveal>
      </Container>
    </Section>
  );
};

/* ---------- Свой вопрос ---------- */

const field =
  'w-full min-h-[52px] border border-line bg-paper px-4 py-3.5 text-[16px] text-ink ' +
  'placeholder:text-muted/60 transition-colors duration-300 ' +
  'focus:border-ink focus:outline-none disabled:opacity-50';

const AskForm: React.FC = () => {
  const t = useT();
  const { state, error, submit } = useFormspree(formEndpoints.ask);
  const sending = state === 'sending';

  return (
    <div className="border border-line bg-shell p-5 sm:p-9">
      {state === 'ok' ? (
          <div className="rv is-in flex flex-col items-center gap-3 py-8 text-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-flame text-white">
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                <path
                  d="M1 5.5 5 9.5 13 1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="square"
                />
              </svg>
            </span>
            <p className="text-[15px] text-ink">{t.faq.askSuccess}</p>
          </div>
      ) : (
          <form onSubmit={submit}>
            <div className="mb-6 flex items-start gap-3">
              <LogoMark className="mt-1 h-4 w-4 shrink-0 text-flame" />
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[1.2rem] font-medium tracking-[-0.02em]">
                  {t.faq.askTitle}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">
                  {t.faq.askLead}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <label htmlFor="ask-contact" className="sr-only">
                {t.faq.askContact}
              </label>
              <input
                id="ask-contact"
                name="Контакт"
                required
                disabled={sending}
                placeholder={t.faq.askContact}
                className={field}
              />

              <label htmlFor="ask-question" className="sr-only">
                {t.faq.askQuestion}
              </label>
              <input
                id="ask-question"
                name="Вопрос"
                required
                disabled={sending}
                placeholder={t.faq.askQuestion}
                className={field}
              />

              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <input type="hidden" name="_subject" value="Вопрос с сайта HARAKEZ" />

              <button
                type="submit"
                disabled={sending}
                className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 bg-ink px-7 py-3.5 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-flame disabled:opacity-50"
              >
                {sending ? t.faq.askSending : t.faq.askButton}
                {!sending && <Arrow />}
              </button>
            </div>

            {state === 'error' && error && (
              <p className="mt-4 text-[14px] text-flame-2">{error}</p>
            )}
          </form>
      )}
    </div>
  );
};

export default Faq;
