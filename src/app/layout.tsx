import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import './globals.css';

import Loader from '@/components/Loader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/lib/LanguageProvider';
import { socials } from '@/lib/i18n';

/* ------------------------------------------------------------
   Шрифты
   Inter Tight — заголовки и логотипное начертание
   Inter       — основной текст
   JetBrains   — мономаркировка, как печать на бирке
   ------------------------------------------------------------ */

const interTight = Inter_Tight({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-mono-tag',
  display: 'swap',
});

/* ------------------------------------------------------------
   Метаданные.

   Отдаются на русском: это язык по умолчанию и то, что увидит
   поисковик. Переключатель языка меняет интерфейс на клиенте,
   а заодно и атрибут lang у страницы.
   ------------------------------------------------------------ */

const siteUrl = 'https://harakez.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'HARAKEZ (Харакез) — одежда по дизайнам сообщества',
    template: '%s — HARAKEZ',
  },
  description:
    'Официальный сайт бренда одежды HARAKEZ (Харакез). Вещи создаются ' +
    'по дизайнам сообщества и выходят ограниченными пронумерованными ' +
    'тиражами. Базируемся в Ташкенте, отправляем по всему миру.',
  applicationName: 'HARAKEZ',
  keywords: [
    'HARAKEZ',
    'Харакез',
    'харакез бренд одежды',
    'harakez бренд',
    'харакез одежда',
    'бренд одежды',
    'лимитированная одежда',
    'дроп одежды',
    'streetwear',
    'дизайн от сообщества',
  ],
  authors: [{ name: 'HARAKEZ' }],
  creator: 'HARAKEZ',
  publisher: 'HARAKEZ',
  alternates: { canonical: '/' },
  /* Иконка объявлена явно и лежит в public.
     Соглашение app/icon.svg перестало собираться в Next 16. */
  icons: {
    /* PNG идёт первым: поисковики увереннее работают с растром,
       именно эта иконка попадает в выдачу рядом с адресом сайта.
       SVG остаётся для вкладки браузера — он резкий на любом экране. */
    icon: [
      { url: '/icon-96.png', type: 'image/png', sizes: '96x96' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/icon-96.png', sizes: '96x96' }],
    shortcut: [{ url: '/icon-96.png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'HARAKEZ',
    title: 'HARAKEZ (Харакез) — одежда по дизайнам сообщества',
    description:
      'Один дизайн от сообщества — одна вещь, один тираж, один дроп.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HARAKEZ (Харакез) — одежда по дизайнам сообщества',
    description: 'Одежда по дизайнам сообщества. Ограниченные пронумерованные тиражи.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  themeColor: '#F5F2EA',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  // не запрещаем масштабирование: это ломает доступность
  maximumScale: 5,
};

/* ------------------------------------------------------------
   Структурированные данные.

   Задача — объяснить поиску, что HARAKEZ это бренд одежды, а не
   портфолио фрилансера. Для этого:
     · тип Brand рядом с Organization,
     · sameAs со ссылками на профили бренда — они связывают сайт
       и аккаунты в одну сущность,
     · город и охват, чтобы бренд не путали с однофамильцами,
     · WebSite отдельным узлом, иначе поиск считает сайт безымянным.
   ------------------------------------------------------------ */

const orgId = `${siteUrl}/#organization`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'Brand'],
      '@id': orgId,
      name: 'HARAKEZ',
      alternateName: ['Харакез', 'harakez', 'HARAKEZ clothing'],
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icon-96.png`,
        width: 96,
        height: 96,
      },
      image: `${siteUrl}/icon-96.png`,
      description:
        'HARAKEZ — бренд одежды. Вещи создаются по дизайнам сообщества ' +
        'и выпускаются ограниченными пронумерованными тиражами.',
      slogan: 'Одежда по дизайнам сообщества',
      knowsAbout: [
        'бренд одежды',
        'лимитированные тиражи одежды',
        'дизайн одежды',
        'streetwear',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ташкент',
        addressCountry: 'UZ',
      },
      areaServed: 'Worldwide',
      sameAs: socials.map((s) => s.href),
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'HARAKEZ',
      inLanguage: 'ru-RU',
      publisher: { '@id': orgId },
      description:
        'Официальный сайт бренда одежды HARAKEZ (Харакез).',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${interTight.variable} ${mono.variable}`}
    >
      <head>
        {/* Без скриптов заставку нужно убрать, иначе она закроет
            сайт навсегда, а свёрнутые блоки — раскрыть.
            Скрытие блоков до появления живёт в globals.css под
            медиапризнаком scripting: enabled. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '.acc{grid-template-rows:1fr!important}' +
                '[role="status"]{display:none!important}',
            }}
          />
        </noscript>
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            К содержимому
          </a>
          <Loader />
          <Header />
          <main id="content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
