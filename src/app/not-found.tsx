'use client';

import Link from 'next/link';
import { Container, Arrow } from '@/components/ui/primitives';
import { LogoMark } from '@/components/brand/Logo';
import { useT } from '@/lib/LanguageProvider';

export default function NotFound() {
  const t = useT();

  return (
    <section className="flex min-h-[70vh] items-center py-24 sm:py-32">
      <Container size="narrow" className="text-center">
        <LogoMark className="mx-auto h-8 w-8 text-flame" />

        <p className="tag-label mt-8">{t.notFound.code}</p>

        <h1 className="display mt-5 text-[clamp(1.75rem,7vw,3.25rem)]">
          {t.notFound.title}
        </h1>

        <p className="mx-auto mt-5 max-w-[38ch] text-[16px] leading-relaxed text-ink-2">
          {t.notFound.body}
        </p>

        <Link
          href="/"
          className="group mt-9 inline-flex min-h-[52px] items-center gap-2.5 bg-ink px-8 py-4 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-flame"
        >
          {t.common.toHome}
          <Arrow />
        </Link>
      </Container>
    </section>
  );
}
