import { ImageResponse } from 'next/og';

/* ------------------------------------------------------------
   Картинка для превью ссылки в мессенджерах и соцсетях.
   Генерируется на лету, отдельный файл держать не нужно.
   ------------------------------------------------------------ */

export const alt = 'HARAKEZ — одежда по дизайнам сообщества';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F5F2EA',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Верх: знак и маркировка */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="46" height="46" viewBox="0 0 100 100">
            <path
              d="M7.5 61 L50 6"
              stroke="#16140F"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="50" cy="50" r="14.5" fill="#16140F" />
            <path
              d="M50 94 L92.5 39"
              stroke="#16140F"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span
            style={{
              fontSize: 26,
              letterSpacing: 12,
              color: '#16140F',
              fontWeight: 600,
            }}
          >
            HARAKEZ
          </span>
        </div>

        {/* Середина: заявление */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span
            style={{
              fontSize: 74,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              color: '#16140F',
              maxWidth: 900,
            }}
          >
            Одежда, которую придумали не мы
          </span>
          <span style={{ fontSize: 27, color: '#7A7365', maxWidth: 780 }}>
            Дизайны сообщества уходят в ограниченный пронумерованный тираж
          </span>
        </div>

        {/* Низ: строка спецификации, как на бирке */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #D9D3C5',
            paddingTop: 26,
          }}
        >
          <span style={{ fontSize: 20, letterSpacing: 3, color: '#7A7365' }}>
            DROP 001 — GHOST RUN
          </span>
          <span
            style={{
              fontSize: 20,
              letterSpacing: 3,
              color: '#FFFFFF',
              background: '#E04A1B',
              padding: '10px 20px',
            }}
          >
            150 WORLDWIDE
          </span>
        </div>
      </div>
    ),
    size,
  );
}
