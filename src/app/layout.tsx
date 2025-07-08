// src/app/layout.tsx
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google'; // 1. Импортируем шрифт
import './globals.css';
import Loader from '@/components/Loader';

// 2. Настраиваем шрифт с нужными "весами" (толщиной)
const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-manrope', // Создаем CSS-переменную для шрифта
});

// src/app/layout.tsx

// ... (импорты оставляем как есть)

export const metadata: Metadata = {
  title: 'HARAKEZ - Одежда, которая слушает',
  description: 'HARAKEZ — это философия, а не просто бренд. Мы создаем одежду, вдохновляясь вашими идеями и вашим видением комфорта, стиля и свободы.',
  openGraph: {
    title: 'HARAKEZ - Одежда, которая слушает',
    description: 'Присоединяйтесь к созданию бренда, где ваша идея — главный эскиз.',
    // Важно: Поместите картинку для превью в папку public/ и укажите здесь путь
    // Например, /og-image.png
    // images: ['/og-image.png'], 
    url: 'https://harakez.com', // Замените на ваш будущий домен
    siteName: 'HARAKEZ',
    locale: 'ru_RU',
    type: 'website',
  },
};

// ... (остальной код файла layout.tsx оставляем без изменений)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      {/* 3. Применяем шрифт ко всему сайту */}
      <body className={`${manrope.variable} font-sans`}>
        <Loader /> {/* Добавляем нашу анимацию загрузки */}
        {children}
      </body>
    </html>
  );
}