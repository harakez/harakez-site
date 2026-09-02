'use client';

import React from 'react';
import { Container, Section, Eyebrow } from '@/components/ui/primitives';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { useT } from '@/lib/LanguageProvider';

/* ------------------------------------------------------------
   Как это работает.

   Колонки одинаковой высоты, строка результата прижата к низу
   через mt-auto — все четыре результата стоят на одной линии,
   сколько бы ни было текста выше.

   Ховера нет: шаг не кнопка и никуда не ведёт, подсветка только
   обещала клик, которого не будет.
   ------------------------------------------------------------ */

const Process: React.FC = () => {
  const t = useT();

  return (
    <Section id="process">
      <Container size="wide">
        <Reveal className="mx-auto max-w-[38rem] text-center">
          <Eyebrow className="justify-center">{t.process.eyebrow}</Eyebrow>
          <h2 className="display mt-5 text-[clamp(1.75rem,6.5vw,3.25rem)]">
            {t.process.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[42ch] text-[clamp(0.95rem,3.6vw,1.0625rem)] leading-relaxed text-muted">
            {t.process.lead}
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-px border border-line bg-line sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step) => (
            <RevealItem key={step.n} className="flex">
              <article className="flex h-full w-full flex-col bg-paper p-6 sm:p-7">
                <span className="font-[family-name:var(--font-mono)] text-[13px] tracking-[0.16em] text-flame">
                  {step.n}
                </span>

                <h3 className="mt-5 font-[family-name:var(--font-display)] text-[1.3rem] font-medium tracking-[-0.02em] sm:mt-6 sm:text-[1.4rem]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                  {step.body}
                </p>

                {/* результат прижат к низу — так все четыре на одной линии */}
                <p className="mt-6 border-t border-line pt-4 sm:mt-auto">
                  <span className="tag-label !text-ink">{step.result}</span>
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
};

export default Process;
