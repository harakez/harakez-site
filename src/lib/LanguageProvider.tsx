'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { dictionaries, type Dict, type Lang, LANGS } from '@/lib/i18n';

/* ------------------------------------------------------------
   Язык интерфейса.

   Выбор хранится в localStorage и восстанавливается при заходе.
   Первый заход: берём язык браузера, если он русский — ru, иначе en.

   Начальное значение всегда 'ru', и только после монтирования
   применяется сохранённое. Иначе сервер и клиент отрисуют разный
   текст, и React ругнётся на несовпадение разметки.
   ------------------------------------------------------------ */

const STORAGE_KEY = 'harakez-lang';

type Ctx = {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
  ready: boolean;
};

const LanguageContext = createContext<Ctx | null>(null);

const isLang = (v: unknown): v is Lang =>
  typeof v === 'string' && (LANGS as readonly string[]).includes(v);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Lang>('ru');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let next: Lang = 'ru';
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) {
        next = saved;
      } else if (!navigator.language.toLowerCase().startsWith('ru')) {
        next = 'en';
      }
    } catch {
      /* приватный режим или запрет на хранилище — остаёмся на ru */
    }
    setLangState(next);
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* не удалось сохранить — выбор проживёт до перезагрузки */
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, t: dictionaries[lang], setLang, ready }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage вызван вне LanguageProvider');
  }
  return ctx;
}

/** Короткий доступ к словарю текущего языка. */
export function useT(): Dict {
  return useLanguage().t;
}
