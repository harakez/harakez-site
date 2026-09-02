'use client';

import { useEffect, useState } from 'react';

/* ------------------------------------------------------------
   Сигнал «заставка уехала».

   Без него анимация первого экрана проигрывалась за полотном
   заставки: к моменту, когда его убирали, движение уже кончалось,
   и человек видел статичную картинку. Теперь первый экран ждёт
   сигнала и оживает ровно тогда, когда его показывают.
   ------------------------------------------------------------ */

const EVENT = 'harakez:intro-done';

/** Модульный флаг: компонент мог смонтироваться уже после сигнала. */
let introDone = false;

export function markIntroDone(): void {
  if (introDone) return;
  introDone = true;
  window.dispatchEvent(new Event(EVENT));
}

export function useIntroDone(): boolean {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (introDone) {
      setDone(true);
      return;
    }
    const onDone = () => setDone(true);
    window.addEventListener(EVENT, onDone, { once: true });

    /* Страховка: если заставки на странице нет вовсе, не ждём вечно. */
    const failsafe = setTimeout(() => setDone(true), 4200);

    return () => {
      window.removeEventListener(EVENT, onDone);
      clearTimeout(failsafe);
    };
  }, []);

  return done;
}
