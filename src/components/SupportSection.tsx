// src/components/SupportSection.tsx
'use client';
// ... код остается прежним, меняется только форма
// Просто убедитесь, что у вас последняя версия кода из моего предыдущего ответа,
// и я сейчас добавлю вашу ссылку
import React from 'react';

const SupportSection: React.FC = () => {
  return (
    <section id="support" className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tighter">Станьте частью истории HARAKEZ</h2>
        <p className="text-xl font-light text-gray-600 mb-10">Прямо сейчас наш бренд находится на стадии идеи. Ваш интерес, ваши мысли и поддержка — это топливо, которое превратит эскизы в реальность.</p>
        <div className="bg-gray-100 p-8 rounded-2xl border">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Оставайтесь на связи</h3>
          <p className="text-gray-600 mb-6">Оставьте свой email, чтобы первыми узнать о запуске и получить эксклюзивный доступ.</p>
          <form action="https://formspree.io/f/mwpboeoa" method="POST" className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input type="email" name="Email" placeholder="Ваш email" className="flex-grow bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-4 transition" required />
            <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-8 py-4 transition-colors duration-300">Я в деле!</button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default SupportSection;