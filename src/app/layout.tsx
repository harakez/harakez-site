import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Loader from '@/components/Loader';

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HARAKEZ - Одежда, которая слушает',
  description:
    'HARAKEZ — это философия, а не просто бренд. Мы создаем одежду, вдохновляясь вашими идеями и вашим видением комфорта, стиля и свободы.',
  openGraph: {
    title: 'HARAKEZ - Одежда, которая слушает',
    description: 'Присоединяйтесь к созданию бренда, где ваша идея — главный эскиз.',
    url: 'https://harakez.vercel.app/',
    siteName: 'HARAKEZ',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        {/* --- ДОБАВЛЕНА ТОЛЬКО ЭТА СТРОКА, КАК ВЫ ПРОСИЛИ --- */}
        <meta name="google-site-verification" content="Nc8XZonH8aRMqkUftAR_-qd03A_xogGUUIlsU5PHZag" />
      </head>
      <body className={rubik.className}>
        <Loader />
        {children}
      </body>
    </html>
  );
}