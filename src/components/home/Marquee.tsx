'use client';

import React from 'react';
import { LogoMark } from '@/components/brand/Logo';
import { useT } from '@/lib/LanguageProvider';

/* ------------------------------------------------------------
   Бегущая строка со свойствами тиража.

   Лента едет на -50%, то есть ровно на одну половину. Чтобы шва не
   было видно, половина обязана быть шире экрана — иначе к концу
   цикла справа открывается пустота. Поэтому список повторяется
   трижды внутри половины, и половин ровно две.

   Скорость задана в globals.css: около 36 px/с, чтобы слова
   успевали читаться.
   ------------------------------------------------------------ */

const REPEATS = 3;

const Marquee: React.FC = () => {
  const t = useT();

  const Half = ({ hidden }: { hidden?: boolean }) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? 'true' : undefined}
    >
      {Array.from({ length: REPEATS }).flatMap((_, r) =>
        t.marquee.map((word) => (
          <span key={`${r}-${word}`} className="flex items-center whitespace-nowrap">
            <span className="tag-label px-5 !text-paper/75 sm:px-7">{word}</span>
            <LogoMark className="h-3 w-3 shrink-0 text-flame" />
          </span>
        )),
      )}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-line bg-ink py-3.5 text-paper sm:py-4">
      <div className="flex w-max animate-marquee items-center">
        <Half />
        {/* вторая половина — та же лента, нужна для бесшовной склейки */}
        <Half hidden />
      </div>
    </div>
  );
};

export default Marquee;
