// src/components/SupportSection.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SupportSection: React.FC = () => {
  // Состояние для обратного отсчёта
  const [timeLeft, setTimeLeft] = useState({ 
    days: '000', 
    hours: '00',
    minutes: '00',
    seconds: '00'
  });
  
  // Рассчёт времени до 1 января 2026
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('January 1, 2026 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        return {
          days: days.toString().padStart(3, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0')
        };
      }
      return { 
        days: '000', 
        hours: '00', 
        minutes: '00',
        seconds: '00'
      };
    };

    // Инициализация
    setTimeLeft(calculateTimeLeft());
    
    // Таймер обновления каждую секунду
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Функция для копирования ссылки
  const handleShare = () => {
    try {
      if (navigator.share) {
        navigator.share({
          title: 'HARAKEZ',
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Ссылка скопирована! Поделитесь ею вручную.');
      }
    } catch (error) {
      navigator.clipboard.writeText(window.location.href);
      alert('Ссылка скопирована! Поделитесь ею вручную.');
    }
  };

  return (
    <section id="support" className="bg-white py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Декоративный фон - очень тонкие элементы */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border-2 border-gray-300"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full border-2 border-gray-300"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full border-2 border-gray-300"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Заголовок */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Помогите нам запустить первые партии до 1 января 2026
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Станьте частью создания HARAKEZ - ваше участие ускорит появление наших вещей
          </p>
        </motion.div>

        {/* Обратный отсчёт */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-mono font-bold text-gray-900 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                {timeLeft.days}
              </div>
              <div className="text-sm uppercase tracking-widest mt-2 text-gray-500">дней</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-mono font-bold text-gray-900 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                {timeLeft.hours}
              </div>
              <div className="text-sm uppercase tracking-widest mt-2 text-gray-500">часов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-mono font-bold text-gray-900 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                {timeLeft.minutes}
              </div>
              <div className="text-sm uppercase tracking-widest mt-2 text-gray-500">минут</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-mono font-bold text-gray-900 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                {timeLeft.seconds}
              </div>
              <div className="text-sm uppercase tracking-widest mt-2 text-gray-500">секунд</div>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500">
            до запуска первых партий одежды • 1 января 2026
          </div>
        </motion.div>

        {/* Способы помочь */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Способ 1: Рассказать */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Рассказать друзьям</h3>
            <p className="text-gray-600 mb-5 text-center">
              Помогите нам найти единомышленников - поделитесь страницей
            </p>
            <div className="text-center">
              <button 
                onClick={handleShare}
                className="px-5 py-2 bg-white border border-blue-600 text-blue-600 font-medium rounded-full transition-colors inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Поделиться
              </button>
            </div>
          </div>
          
          {/* Способ 2: Идеи */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Предложить идею</h3>
            <p className="text-gray-600 mb-5 text-center">
              Поделитесь вашим видением будущих коллекций
            </p>
            <div className="text-center">
              <a href="#ideas" className="px-5 py-2 bg-white border border-amber-600 text-amber-600 font-medium rounded-full transition-colors inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Предложить идею
              </a>
            </div>
          </div>
          
          {/* Способ 3: Подписаться */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Быть в курсе</h3>
            <p className="text-gray-600 mb-5 text-center">
              Подпишитесь на обновления, чтобы первыми узнавать о запуске
            </p>
            <div className="text-center">
              <a 
                href="https://t.me/harakez_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2 bg-white border border-green-600 text-green-600 font-medium rounded-full transition-colors inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Подписаться
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;