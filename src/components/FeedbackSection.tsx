// src/components/FeedbackSection.tsx
import React from 'react';
const FeedbackSection: React.FC = () => {
  return (
    <section id="feedback" className="bg-gray-50 text-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-gray-900">Ваш Холст. Наше Вдохновение.</h2>
            <p className="text-lg text-gray-600 mb-4">Философия HARAKEZ проста: лучший дизайн рождается в диалоге. Каждая вещь, которую мы создаем, начинается с чистого листа, а ваши идеи — это кисть и краски.</p>
            <p className="text-lg text-gray-600 mb-8">Поделитесь мыслями: какой должна быть идеальная вещь для вас? Что для вас значат комфорт, стиль и уверенность? Ваш голос формирует будущее HARAKEZ.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <form action="https://formspree.io/f/meokgjgz" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Имя *</label>
                <input type="text" id="name" name="Имя" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 transition" placeholder="Ваше имя" required />
              </div>
              <div>
                <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-700">Email или Телефон *</label>
                <input type="text" id="contact" name="Контакт" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 transition" placeholder="your@email.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Ваше сообщение *</label>
                <textarea id="message" name="Сообщение" rows={5} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 transition" placeholder="Опишите вашу идею или предложение здесь..." required></textarea>
              </div>
              <div className="text-center pt-2">
                <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-12 py-3 transition-colors duration-300">Отправить Идею</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeedbackSection; 