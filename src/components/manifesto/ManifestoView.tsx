'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Eyebrow, Arrow, Rule } from '@/components/ui/primitives';
import { Reveal, useInView } from '@/components/ui/Reveal';
import { LogoMark } from '@/components/brand/Logo';
import { useT } from '@/lib/LanguageProvider';

/* ------------------------------------------------------------
   Манифест: строки набегают по словам.

   Раньше это делала framer-motion, теперь — CSS. Каждое слово
   получает свою задержку переменной, видимость строки включает
   IntersectionObserver.

   Пробелы между словами настоящие (U+00A0), поэтому текст
   копируется и читается вслух как обычное предложение.
   ------------------------------------------------------------ */

const SP = ' ';

const Line: React.FC<{ text: string; className: string }> = ({
  text,
  className,
}) => {
  const { ref, inView } = useInView<HTMLParagraphElement>(0.5);

  return (
    <p ref={ref} className={`${className} ${inView ? 'is-in' : ''}`}>
      {text.split(' ').map((w, i) => (
        <span
          key={i}
          className="rv-word"
          style={{ '--rv-delay': `${i * 55}ms` } as React.CSSProperties}
        >
          {w}
          {SP}
        </span>
      ))}
    </p>
  );
};

const base = 'display flex flex-wrap justify-center text-center leading-[1.35]';

const ManifestoView: React.FC = () => {
  const t = useT();

  return (
    <>
      <section className="pb-12 pt-32 sm:pb-16 sm:pt-44">
        <Container size="narrow" className="text-center">
          <Reveal>
            <LogoMark className="mx-auto h-8 w-8 text-flame" />
            <Eyebrow className="mt-7 justify-center" dot={false}>
              {t.manifesto.eyebrow}
            </Eyebrow>
            <h1 className="display mt-6 text-[clamp(2rem,8vw,3.75rem)]">
              {t.manifesto.pageTitle}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container size="narrow">
          <div className="space-y-8 sm:space-y-11">
            {t.manifesto.lines.map((text, i) => (
              <Line
                key={i}
                text={text}
                className={`${base} text-[clamp(1.15rem,4.6vw,1.95rem)] font-light text-ink`}
              />
            ))}
          </div>

          <div className="mt-16 sm:mt-20">
            <Line
              text={t.manifesto.closing}
              className={`${base} text-[clamp(1.45rem,6vw,2.75rem)] text-flame`}
            />
          </div>
        </Container>
      </section>

      <section className="pb-24 pt-2 sm:pb-28">
        <Container size="narrow">
          <Rule className="mb-12 sm:mb-14" />
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="max-w-[40ch] text-[16px] leading-relaxed text-ink-2">
              {t.manifesto.outro}
            </p>
            <Link
              href="/submit"
              className="group inline-flex min-h-[52px] items-center gap-2.5 bg-flame px-8 py-4 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-flame-2"
            >
              {t.manifesto.outroCta}
              <Arrow />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ManifestoView;
