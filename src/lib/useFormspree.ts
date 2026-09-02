'use client';

import { useState, useCallback } from 'react';
import { useT } from '@/lib/LanguageProvider';

export type FormState = 'idle' | 'sending' | 'ok' | 'error';

/* ------------------------------------------------------------
   Отправка формы на Formspree через fetch.

   Старый сайт делал обычный POST и уводил человека на чужую
   страницу Formspree. Здесь отправка идёт на месте: пользователь
   остаётся на сайте и сразу видит результат.

   Тексты ошибок берутся из словаря, поэтому они на языке страницы.
   ------------------------------------------------------------ */

export function useFormspree(endpoint: string) {
  const t = useT();
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      setState('sending');
      setError(null);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          form.reset();
          setState('ok');
          return;
        }

        const data = await response.json().catch(() => null);
        setError(data?.errors?.[0]?.message ?? t.errors.generic);
        setState('error');
      } catch {
        setError(t.errors.offline);
        setState('error');
      }
    },
    [endpoint, t],
  );

  const reset = useCallback(() => {
    setState('idle');
    setError(null);
  }, []);

  return { state, error, submit, reset };
}
