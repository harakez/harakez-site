'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Arrow } from '@/components/ui/primitives';
import { LogoMark } from '@/components/brand/Logo';
import { useFormspree } from '@/lib/useFormspree';
import { useT } from '@/lib/LanguageProvider';
import { formEndpoints } from '@/lib/i18n';

/* ------------------------------------------------------------
   Форма предложения дизайна.

   Описание разбито на конкретные части: крой, ткань, деталь.
   Заполнить их отпиской не выйдет, а автору не нужно гадать, что
   вообще писать.

   У главного описания стоит минимум символов со счётчиком, чтобы
   ограничение было видно заранее, а не всплывало при отправке.

   Все поля 16px: на iOS всё, что меньше, заставляет Safari
   приближать страницу при фокусе, и вёрстка уезжает вбок.
   ------------------------------------------------------------ */

const MIN_DESCRIPTION = 120;

const fieldClass =
  'w-full min-h-[52px] border border-line bg-paper px-4 py-3.5 text-[16px] text-ink ' +
  'placeholder:text-muted/60 transition-colors duration-300 ' +
  'focus:border-ink focus:outline-none disabled:opacity-50';

const labelClass = 'tag-label mb-2.5 block';

const SubmitForm: React.FC = () => {
  const t = useT();
  const f = t.submit.fields;
  const { state, error, submit: send } = useFormspree(formEndpoints.submit);
  const [kind, setKind] = useState('');
  const [description, setDescription] = useState('');
  const sending = state === 'sending';

  const left = MIN_DESCRIPTION - description.trim().length;
  const short = left > 0;

  return (
    <div className="border border-line bg-shell p-5 sm:p-9">
      {state === 'ok' ? (
          <div className="rv is-in flex flex-col items-center gap-5 py-12 text-center sm:py-14">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-flame text-white">
              <svg width="18" height="14" viewBox="0 0 14 11" fill="none">
                <path
                  d="M1 5.5 5 9.5 13 1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="square"
                />
              </svg>
            </span>

            <div>
              <p className="font-[family-name:var(--font-display)] text-[1.3rem] font-medium tracking-[-0.02em]">
                {t.submit.success}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                {t.submit.successNote}
              </p>
            </div>

            <Link
              href="/"
              className="group mt-2 inline-flex min-h-[44px] items-center gap-2.5 border-b border-ink/25 pb-1.5 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.14em] transition-colors duration-300 hover:border-flame hover:text-flame"
            >
              {t.common.toHome}
              <Arrow />
            </Link>
          </div>
      ) : (
          <form onSubmit={send} className="space-y-6">
            {/* Предупреждение о требованиях */}
            <div className="flex gap-3.5 border-l-2 border-flame bg-flame-soft/60 px-4 py-4">
              <LogoMark className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
              <p className="text-[14px] leading-relaxed text-ink-2">
                {t.submit.warning}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  {f.name}
                </label>
                <input
                  id="name"
                  name="Имя"
                  required
                  autoComplete="name"
                  placeholder={f.namePlaceholder}
                  disabled={sending}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="contact" className={labelClass}>
                  {f.contact}
                </label>
                <input
                  id="contact"
                  name="Контакт"
                  required
                  placeholder={f.contactPlaceholder}
                  disabled={sending}
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="kind" className={labelClass}>
                {f.kind}
              </label>
              <select
                id="kind"
                name="Тип вещи"
                required
                value={kind}
                onChange={(e) => setKind(e.target.value)}
                disabled={sending}
                className={`${fieldClass} appearance-none bg-[length:11px] bg-[right_1rem_center] bg-no-repeat pr-11`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7' viewBox='0 0 11 7' fill='none'%3E%3Cpath d='M1 1l4.5 4.5L10 1' stroke='%237A7365' stroke-width='1.4'/%3E%3C/svg%3E\")",
                }}
              >
                <option value="" disabled>
                  {f.kindPlaceholder}
                </option>
                {t.submit.kinds.map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>

            {/* Своя категория — появляется только когда нужна */}
            <div className={`acc ${kind === t.submit.otherKind ? 'is-open' : ''}`}>
              <div>
                <label htmlFor="kind-own" className={labelClass}>
                  {f.ownKind}
                </label>
                <input
                  id="kind-own"
                  name="Своя категория"
                  required={kind === t.submit.otherKind}
                  disabled={sending || kind !== t.submit.otherKind}
                  placeholder={f.ownKindPlaceholder}
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="idea" className={labelClass}>
                {f.description}
              </label>
              <textarea
                id="idea"
                name="Описание"
                required
                rows={6}
                minLength={MIN_DESCRIPTION}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={sending}
                placeholder={f.descriptionPlaceholder}
                className={`${fieldClass} resize-y leading-relaxed`}
              />
              <p
                className={`tag-label mt-2 text-[10px] leading-[1.5] ${
                  short ? '!text-flame-2' : '!text-muted'
                }`}
              >
                {short ? t.submit.counterShort(left) : t.submit.counterOk}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="fit" className={labelClass}>
                  {f.fit}
                </label>
                <input
                  id="fit"
                  name="Крой и посадка"
                  required
                  placeholder={f.fitPlaceholder}
                  disabled={sending}
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="fabric" className={labelClass}>
                  {f.fabric}
                </label>
                <input
                  id="fabric"
                  name="Ткань"
                  required
                  placeholder={f.fabricPlaceholder}
                  disabled={sending}
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="detail" className={labelClass}>
                {f.detail}
              </label>
              <input
                id="detail"
                name="Деталь"
                required
                placeholder={f.detailPlaceholder}
                disabled={sending}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="ref" className={labelClass}>
                {f.reference}
              </label>
              <input
                id="ref"
                name="Эскиз или референс"
                type="url"
                inputMode="url"
                placeholder="https://"
                disabled={sending}
                className={fieldClass}
              />
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                {t.submit.sketchNote}
              </p>
            </div>

            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <input type="hidden" name="_subject" value="Дизайн с сайта HARAKEZ" />

            <div className="flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="tag-label flex items-center gap-2 text-[10px]">
                <LogoMark className="h-3 w-3 shrink-0 text-flame" />
                {t.submit.manualNote}
              </p>

              <button
                type="submit"
                disabled={sending}
                className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 bg-ink px-8 py-4 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-flame disabled:opacity-50"
              >
                {sending ? t.submit.sending : t.submit.button}
                {!sending && <Arrow />}
              </button>
            </div>

            {state === 'error' && error && (
              <p className="text-[14px] text-flame-2">{error}</p>
            )}
          </form>
      )}
    </div>
  );
};

export default SubmitForm;
