'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Section, Eyebrow, Arrow } from '@/components/ui/primitives';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { useT } from '@/lib/LanguageProvider';

/* ------------------------------------------------------------
   Дропы.

   Честный статус вместо витрины: ни один дроп не вышел, и раздел
   об этом прямо говорит. Раньше здесь стоял выдуманный архив с
   эскизами вместо настоящих выпусков — он выдавал за состоявшееся
   то, чего не было.

   Основная польза раздела — объяснить, какие проверки проходит
   дизайн, прежде чем превратится в тираж.
   ------------------------------------------------------------ */

const Drops: React.FC = () => {
  const t = useT();

  return (
    <Section id="drops" className="border-y border-line bg-paper-2">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-16">
          <Reveal>
            <Eyebrow>{t.drops.eyebrow}</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.75rem,6.5vw,3.25rem)]">
              {t.drops.title}
            </h2>
            <p className="mt-5 max-w-[52ch] text-[clamp(0.95rem,3.6vw,1.0625rem)] leading-relaxed text-ink-2">
              {t.drops.lead}
            </p>
          </Reveal>

          {/* Карточка статуса */}
          <Reveal delay={0.1}>
            <div className="border border-line bg-shell p-6 sm:p-7">
              <p className="tag-label">{t.drops.statusLabel}</p>

              <div className="mt-4 flex items-center gap-3">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-flame" />
                </span>
                <span className="font-[family-name:var(--font-display)] text-[1.35rem] font-medium tracking-[-0.02em]">
                  {t.drops.statusValue}
                </span>
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <p className="font-[family-name:var(--font-display)] text-[1.05rem] font-medium tracking-[-0.015em]">
                  {t.drops.ctaTitle}
                </p>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-2">
                  {t.drops.ctaBody}
                </p>
                <Link
                  href="/submit"
                  className="group mt-5 inline-flex min-h-[44px] items-center gap-2.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-flame transition-colors duration-300 hover:text-flame-2"
                >
                  {t.drops.ctaLabel}
                  <Arrow />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Проверки перед дропом */}
        <Reveal delay={0.08} className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-[42rem] text-center">
            <h3 className="display text-[clamp(1.4rem,5vw,2.1rem)]">
              {t.drops.checksTitle}
            </h3>
            <p className="mx-auto mt-4 max-w-[46ch] text-[15.5px] leading-relaxed text-muted">
              {t.drops.checksLead}
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-px border border-line bg-line sm:mt-12 sm:grid-cols-2">
          {t.drops.checks.map((check) => (
            <RevealItem key={check.n} className="flex">
              <article className="flex h-full w-full flex-col bg-paper p-6 sm:p-7">
                <span className="font-[family-name:var(--font-mono)] text-[13px] tracking-[0.16em] text-flame">
                  {check.n}
                </span>
                <h4 className="mt-5 font-[family-name:var(--font-display)] text-[1.2rem] font-medium tracking-[-0.02em]">
                  {check.title}
                </h4>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                  {check.body}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
};

export default Drops;
