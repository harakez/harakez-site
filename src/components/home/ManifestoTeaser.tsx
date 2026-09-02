'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Section, Eyebrow, Arrow } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { LogoMark } from '@/components/brand/Logo';
import { useT } from '@/lib/LanguageProvider';

/* ------------------------------------------------------------
   Отсылка к манифесту.
   Сам манифест живёт на отдельной странице: на главную приходят
   за вещами, а не за текстом о смысле. Здесь — только дверь.
   ------------------------------------------------------------ */

const ManifestoTeaser: React.FC = () => {
  const t = useT();

  return (
    <Section className="border-y border-line bg-ink text-paper">
      <Container size="narrow" className="text-center">
        <Reveal>
          <LogoMark className="mx-auto h-7 w-7 text-flame" />

          <Eyebrow className="mt-7 justify-center !text-paper/45" dot={false}>
            {t.manifesto.eyebrow}
          </Eyebrow>

          <blockquote className="display mt-6 text-[clamp(1.3rem,5.5vw,2.4rem)] font-light leading-[1.25]">
            {t.manifesto.teaser}
          </blockquote>

          <Link
            href="/manifesto"
            className="group mt-9 inline-flex min-h-[44px] items-center gap-2.5 border-b border-paper/25 pb-1.5 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.14em] text-paper/80 transition-colors duration-300 hover:border-flame hover:text-flame"
          >
            {t.manifesto.readMore}
            <Arrow />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
};

export default ManifestoTeaser;
