'use client';

import React, { useEffect, useState } from 'react';
import { LogoMarkDrawn } from '@/components/brand/Logo';
import { useT } from '@/lib/LanguageProvider';
import { markIntroDone } from '@/lib/intro';

/* ------------------------------------------------------------
   Загрузочная заставка.

   Сценарий и его тайминг:
     0.10–1.17  прочерчиваются диагонали знака
     0.78–1.53  круг опускается в центр и остаётся
     0.90–1.80  набегает название по буквам
     1.50–2.20  раскрывается линия
     1.85–2.45  появляется строка о бренде
     2.90       полотно уезжает вверх

   Раньше здесь была «короткая версия для повторного захода»: на
   первом кадре компонент считал версию полной и ставил буквам
   задержку 0.9 c, а затем из sessionStorage узнавал, что заход
   повторный, и сокращал таймер до 0.9 c. Окно уезжало ровно тогда,
   когда название только начинало появляться. Версия теперь одна,
   и уход гарантированно позже последней анимации.

   Всё на CSS: exit через requestAnimationFrame замирает в фоновой
   вкладке, и сайт рисковал остаться под чёрным полотном навсегда.
   ------------------------------------------------------------ */

const NAME = 'HARAKEZ'.split('');
/** Последняя анимация заканчивается на 2.45 c — уходим позже. */
const MIN_VISIBLE = 2900;
const EXIT_MS = 950;

type Phase = 'visible' | 'leaving' | 'gone';

const Loader: React.FC = () => {
  const t = useT();
  const [phase, setPhase] = useState<Phase>('visible');

  useEffect(() => {
    const start = Date.now();
    const timers: ReturnType<typeof setTimeout>[] = [];

    const dismiss = () => {
      const wait = Math.max(0, MIN_VISIBLE - (Date.now() - start));
      timers.push(
        setTimeout(() => {
          setPhase('leaving');
          // первый экран ждёт этого сигнала, чтобы начать анимацию
          markIntroDone();
          timers.push(setTimeout(() => setPhase('gone'), EXIT_MS));
        }, wait),
      );
    };

    if (document.readyState === 'complete') {
      dismiss();
    } else {
      window.addEventListener('load', dismiss, { once: true });
      // страховка: если load не придёт, человека не держим
      timers.push(setTimeout(dismiss, 4500));
    }

    return () => {
      window.removeEventListener('load', dismiss);
      timers.forEach(clearTimeout);
    };
  }, []);

  /* Прокрутка заблокирована, пока заставка на экране */
  useEffect(() => {
    document.body.style.overflow = phase === 'visible' ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [phase]);

  /* Возврат к якорю: браузер прыгает к #раздел, пока прокрутка
     заблокирована, и промах остаётся навсегда. Доводим сами, в
     несколько заходов — вёрстка ещё досчитывается. */
  useEffect(() => {
    if (phase !== 'leaving') return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const timers = [100, 420, 900, 1500].map((delay) =>
      setTimeout(() => {
        const target = document.getElementById(id);
        if (!target) return;
        const off = target.getBoundingClientRect().top;
        if (Math.abs(off) < 4) return;
        window.scrollTo({
          top: window.scrollY + off,
          behavior: delay === 100 ? 'smooth' : 'auto',
        });
      }, delay),
    );
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink px-6 text-paper transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === 'leaving' ? 'pointer-events-none -translate-y-full' : ''
      }`}
      style={{ transitionDuration: `${EXIT_MS}ms` }}
      aria-hidden={phase === 'leaving'}
      role="status"
    >
      <div className="grain-layer pointer-events-none absolute inset-0" />

      <div className="relative flex w-full max-w-sm flex-col items-center">
        <LogoMarkDrawn className="h-12 w-12 text-paper sm:h-14 sm:w-14" />

        <div className="mt-7 flex overflow-hidden" aria-label="HARAKEZ">
          {NAME.map((letter, i) => (
            <span
              key={i}
              className="intro-letter wordmark text-[clamp(1.5rem,8vw,2.5rem)] leading-none"
              style={{ '--d': `${900 + i * 50}ms` } as React.CSSProperties}
            >
              {letter}
            </span>
          ))}
        </div>

        <span className="intro-rule mt-6 block h-px bg-paper/25" />

        <p className="intro-tagline tag-label mt-5 text-center leading-[1.6] !text-paper/60">
          {t.loader.tagline}
        </p>
      </div>

      <div className="intro-progress absolute bottom-0 left-0 h-px bg-flame" />
    </div>
  );
};

export default Loader;
