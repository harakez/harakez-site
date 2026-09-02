'use client';

import React from 'react';
import { Container, Button, Arrow } from '@/components/ui/primitives';
import { useT } from '@/lib/LanguageProvider';
import { useIntroDone } from '@/lib/intro';

/* ------------------------------------------------------------
   Главный экран.

   Только заявление и два действия — без картинок: нарисованные
   эскизы вместо товара выглядели неуверенно. Вернём изображения,
   когда появятся снимки настоящих дропов.

   Появление начинается после ухода заставки, иначе движение
   проигрывалось бы за чёрным полотном впустую.
   ------------------------------------------------------------ */

const Hero: React.FC = () => {
  const t = useT();
  const started = useIntroDone();

  /** Готовые пропсы появления: класс + задержка одной переменной. */
  const rv = (delay: number, extra = '') => ({
    className: `rv ${started ? 'is-in' : ''} ${extra}`,
    style: { '--rv-delay': `${delay}ms` } as React.CSSProperties,
  });

  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[44rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(224,74,27,0.10), transparent 65%)',
        }}
      />

      <Container size="narrow" className="relative text-center">
        <div {...rv(50, 'mb-7')}>
          <span className="inline-flex items-center gap-2.5 border border-line bg-shell px-4 py-2">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-flame" />
            </span>
            <span className="tag-label text-left !text-ink-2">{t.hero.eyebrow}</span>
          </span>
        </div>

        <h1 {...rv(130, 'display text-[clamp(2.15rem,8.5vw,4.75rem)]')}>
          {t.hero.title}
        </h1>

        <p
          {...rv(
            220,
            'mx-auto mt-6 max-w-[38ch] text-[clamp(0.975rem,4vw,1.15rem)] leading-relaxed text-ink-2',
          )}
        >
          {t.hero.lead}
        </p>

        <div
          {...rv(
            310,
            'mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center',
          )}
        >
          <Button href={t.hero.primary.href} variant="flame">
            {t.hero.primary.label}
            <Arrow />
          </Button>
          <Button href={t.hero.secondary.href} variant="outline">
            {t.hero.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
