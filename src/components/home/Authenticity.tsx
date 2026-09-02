'use client';

import React from 'react';
import { Container, Section, Eyebrow } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { HangTag, HeroTag } from '@/components/home/HangTag';
import { useT } from '@/lib/LanguageProvider';

/* ------------------------------------------------------------
   Подлинность.

   Бирка здесь не украшение, а доказательство: номер, автор,
   проверка.

   На телефоне боковые узкие бирки скрыты: втроём они сжимались
   до нечитаемых полосок. Остаётся одна главная, крупная.
   ------------------------------------------------------------ */

const Authenticity: React.FC = () => {
  const t = useT();
  const a = t.authenticity;

  return (
    <Section id="authenticity">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Бирки */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto flex max-w-md items-end justify-center gap-4">
              <HeroTag
                variant="flame"
                className="hidden h-64 w-[4.5rem] shrink-0 -rotate-6 sm:flex"
              />
              <HangTag
                variant="paper"
                serial={a.sampleSerial}
                edition={a.sampleEdition}
                drop={a.sampleDrop}
                className="max-w-[17rem] flex-1 sm:max-w-[15rem]"
              />
              <HeroTag
                variant="ink"
                className="hidden h-64 w-[4.5rem] shrink-0 rotate-6 sm:flex"
              />
            </div>
          </Reveal>

          {/* Текст */}
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <Eyebrow>{a.eyebrow}</Eyebrow>

            <h2 className="display mt-5 text-[clamp(1.75rem,6.5vw,3.25rem)]">
              {a.title}
            </h2>

            <p className="mt-5 max-w-[48ch] text-[clamp(0.95rem,3.6vw,1.0625rem)] leading-relaxed text-ink-2">
              {a.lead}
            </p>

            <dl className="mt-9 border-t border-line">
              {a.points.map((p) => (
                <div
                  key={p.k}
                  className="grid gap-1.5 border-b border-line py-4 sm:grid-cols-[7rem_1fr] sm:gap-6"
                >
                  <dt className="tag-label pt-0.5">{p.k}</dt>
                  <dd className="text-[15px] leading-relaxed text-ink-2">{p.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};

export default Authenticity;
