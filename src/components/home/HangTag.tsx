'use client';

import React from 'react';
import { LogoMark } from '@/components/brand/Logo';
import { useT } from '@/lib/LanguageProvider';

/* ------------------------------------------------------------
   Бирка, нарисованная вёрсткой, а не картинкой.
   Масштабируется без потери резкости и меняет номер по пропсу.
   Повторяет систему TAG A / TAG B из фирменного стиля.
   ------------------------------------------------------------ */

type Variant = 'paper' | 'ink' | 'flame';

const skins: Record<
  Variant,
  { face: string; dim: string; rule: string; hole: string }
> = {
  paper: {
    face: 'bg-[#F2EFE7] text-ink border-black/[0.08]',
    dim: 'text-ink/45',
    rule: 'border-ink/12',
    hole: 'bg-paper-2 ring-black/10',
  },
  ink: {
    face: 'bg-[#191713] text-[#F2EFE7] border-white/10',
    dim: 'text-[#F2EFE7]/45',
    rule: 'border-white/15',
    hole: 'bg-paper-2 ring-white/20',
  },
  flame: {
    face: 'bg-flame text-white border-black/10',
    dim: 'text-white/60',
    rule: 'border-white/25',
    hole: 'bg-paper-2 ring-white/30',
  },
};

export const HangTag: React.FC<{
  variant?: Variant;
  serial?: string;
  edition?: number;
  drop?: string;
  className?: string;
}> = ({
  variant = 'paper',
  serial = '047',
  edition = 150,
  drop = 'Ghost Run',
  className = '',
}) => {
  const t = useT();
  const s = skins[variant];

  return (
    <div
      className={`relative flex w-full flex-col rounded-[10px] border px-5 pb-5 pt-9 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.5)] ${s.face} ${className}`}
    >
      {/* отверстие под шнур */}
      <span
        className={`absolute left-1/2 top-4 h-[9px] w-[9px] -translate-x-1/2 rounded-full ring-1 ${s.hole}`}
      />

      <div className="flex-1">
        <p className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.18em] opacity-50">
          Drop
        </p>
        <p className="mt-1 font-[family-name:var(--font-display)] text-[15px] font-semibold uppercase tracking-[0.08em]">
          {drop}
        </p>

        <p className="mt-6 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.18em] opacity-50">
          Serial
        </p>
        <p className="mt-0.5 font-[family-name:var(--font-mono)] text-[2.6rem] font-bold leading-none tracking-tight">
          {serial}
        </p>
        <p
          className={`mt-1 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.14em] ${s.dim}`}
        >
          of {edition} — worldwide
        </p>

        <div className={`mt-5 space-y-[3px] border-t pt-4 ${s.rule}`}>
          {t.authenticity.tagSpec.map((line) => (
            <p
              key={line}
              className="font-[family-name:var(--font-mono)] text-[8.5px] uppercase tracking-[0.12em] opacity-70"
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      <div
        className={`mt-6 flex items-end justify-between gap-3 border-t pt-3.5 ${s.rule}`}
      >
        <p
          className={`font-[family-name:var(--font-mono)] text-[8px] uppercase leading-[1.5] tracking-[0.1em] ${s.dim}`}
        >
          {t.authenticity.tagVerify}
          <br />
          harakez.com/verify/{serial}
        </p>
        <LogoMark className="h-4 w-4 shrink-0 opacity-70" />
      </div>
    </div>
  );
};

/** Узкая бирка: только имя бренда вдоль полосы. */
export const HeroTag: React.FC<{ variant?: Variant; className?: string }> = ({
  variant = 'ink',
  className = '',
}) => {
  const s = skins[variant];
  return (
    <div
      className={`relative flex items-center justify-center rounded-[10px] border px-4 pb-5 pt-9 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.5)] ${s.face} ${className}`}
    >
      <span
        className={`absolute left-1/2 top-4 h-[9px] w-[9px] -translate-x-1/2 rounded-full ring-1 ${s.hole}`}
      />
      <p className="wordmark text-[13px] [writing-mode:vertical-rl]">Harakez</p>
    </div>
  );
};

export default HangTag;
