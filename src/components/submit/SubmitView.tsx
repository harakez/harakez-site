'use client';

import React from 'react';
import { Container, Eyebrow } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import SubmitForm from '@/components/submit/SubmitForm';
import { useT } from '@/lib/LanguageProvider';

/* ------------------------------------------------------------
   Страница приёма дизайнов.

   На широком экране подсказки закреплены слева и остаются на
   виду, пока заполняется форма. На телефоне они идут перед формой
   обычным блоком: липкая колонка на маленьком экране только
   отъедала бы высоту.
   ------------------------------------------------------------ */

const SubmitView: React.FC = () => {
  const t = useT();

  return (
    <section className="pb-24 pt-28 sm:pb-28 sm:pt-40">
      <Container size="wide">
        <Reveal className="mx-auto max-w-[44rem] text-center">
          <Eyebrow className="justify-center">{t.submit.eyebrow}</Eyebrow>
          <h1 className="display mt-5 text-[clamp(2rem,7.5vw,3.5rem)]">
            {t.submit.title}
          </h1>
          <p className="mx-auto mt-5 max-w-[50ch] text-[clamp(0.95rem,3.6vw,1.0625rem)] leading-relaxed text-ink-2">
            {t.submit.lead}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
          {/* Подсказки */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="tag-label mb-5">{t.submit.hintsTitle}</h2>
            <dl className="border-t border-line">
              {t.submit.hints.map((hint, i) => (
                <div key={hint.k} className="border-b border-line py-4">
                  <dt className="flex items-baseline gap-3">
                    <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.14em] text-flame">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-[1.05rem] font-medium tracking-[-0.015em]">
                      {hint.k}
                    </span>
                  </dt>
                  <dd className="mt-2 pl-[1.9rem] text-[14.5px] leading-relaxed text-ink-2">
                    {hint.v}
                  </dd>
                </div>
              ))}
            </dl>

            <h2 className="tag-label mb-5 mt-10">{t.submit.nextTitle}</h2>
            <ol className="space-y-4 border-t border-line pt-5">
              {t.process.steps.slice(1).map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="mt-0.5 shrink-0 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.14em] text-muted">
                    {step.n}
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-2">
                    <strong className="font-medium text-ink">{step.title}.</strong>{' '}
                    {step.body}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Форма */}
          <Reveal delay={0.1}>
            <SubmitForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default SubmitView;
