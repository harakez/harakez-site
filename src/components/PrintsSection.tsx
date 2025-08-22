// src/components/PrintsSection.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PrintsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      title: "Цензурная проверка",
      description: "Проверка на соответствие стандартам платформы. Нарушение ведет к исключению дизайнера",
      icon: <ShieldCheckIcon />,
      color: "bg-red-100 text-red-800 border-red-200"
    },
    {
      title: "Проверка уникальности",
      description: "Анализ на оригинальность. При неудаче можно отправить другой дизайн",
      icon: <UniqueIcon />,
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      title: "Правовая проверка",
      description: "Проверка на товарные знаки и получение согласия автора",
      icon: <CopyrightIcon />,
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    {
      title: "Финальное решение",
      description: "Окончательное утверждение принта и определение лимита тиража",
      icon: <ApprovalIcon />,
      color: "bg-green-100 text-green-800 border-green-200"
    }
  ];

  return (
    <section id="prints" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Harakez Prints — Эксклюзивные принты
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Предлагайте свои дизайны и становитесь частью эксклюзивного сообщества создателей
          </motion.p>
        </div>

        {/* Процесс модерации */}
        <motion.div 
          className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">4-этапная система проверки</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`p-4 md:p-6 rounded-xl border-2 transition-all cursor-pointer ${
                  activeStep === index 
                    ? `${step.color.replace('100', '200')} shadow-md border-current` 
                    : 'border-gray-200 bg-gray-50'
                }`}
                whileHover={{ y: -5 }}
                onClick={() => setActiveStep(index)}
              >
                <div className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full mb-3 md:mb-4 ${step.color.split(' ')[0]}`}>
                  {step.icon}
                </div>
                <h4 className={`font-bold text-base md:text-lg mb-2 ${activeStep === index ? step.color.split(' ')[1] : 'text-gray-900'}`}>
                  {step.title}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-4 md:p-6">
            <h4 className="font-bold text-lg text-gray-600 mb-3 md:mb-4">Текущий этап: {processSteps[activeStep].title}</h4>
            <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
              {activeStep === 0 && "Нарушение правил цензуры (запрещенный контент) ведет к немедленному исключению дизайнера из системы без возможности повторной отправки принтов."}
              {activeStep === 1 && "При обнаружении плагиата или недостаточной уникальности дизайна, вы можете отправить другой принт для проверки."}
              {activeStep === 2 && "При нарушении прав на товарные знаки или отказе автора, можно предложить другой дизайн для проверки."}
              {activeStep === 3 && "Финальное решение о принятии принта и определении лимита тиража в зависимости от уникальности дизайна."}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5">
              <div 
                className="bg-blue-600 h-2 md:h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${(activeStep + 1) * 25}%` }}
              ></div>
            </div>
          </div>
        </motion.div>

        {/* Система ограничений */}
        <motion.div 
          className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Эксклюзивность и ценность</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h4 className="font-bold text-lg text-blue-800 mb-3">Ограниченный тираж</h4>
                <p className="text-gray-700">
                  Каждый принятый принт выпускается ограниченным тиражом, что сохраняет его эксклюзивность и ценность.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h4 className="font-bold text-lg text-green-800 mb-3">Качество = Редкость</h4>
                <p className="text-gray-700">
                  Чем уникальнее дизайн, тем меньше тираж и выше ценность каждого изделия для истинных ценителей.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                <h4 className="font-bold text-lg text-amber-800 mb-3">Размеры</h4>
                <p className="text-gray-700">
                  Каждый принт доступен в 4 размерах (S, M, L, XL) для максимального охвата аудитории.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-lg text-gray-800 mb-3">Уникальность дизайна</h4>
                <p className="text-gray-700">
                  Количество единиц зависит от уникальности дизайна. Чем оригинальнее принт, тем меньше тираж.(чтобы сохранить ценность)
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Интеграция с ботом */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 md:p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-4">HarakezPrintsBot</h3>
              <p className="mb-4 md:mb-6 text-sm md:text-base">
                Присоединяйтесь к нашему Telegram-боту, чтобы предложить свой принт и отслеживать статус модерации.
              </p>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <BotIcon />
                  </div>
                  <span className="text-sm md:text-base">Предложение принтов через удобного бота</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <EyeIcon />
                  </div>
                  <span className="text-sm md:text-base">Отслеживание статуса модерации в реальном времени</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <ChartIcon />
                  </div>
                  <span className="text-sm md:text-base">Информация о доступных лимитах</span>
                </div>
              </div>
              
              <a 
                href="https://t.me/HarakezPrints_bot" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 md:px-6 md:py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-md text-sm md:text-base"
              >
                <TelegramIcon className="mr-2" />
                Перейти к HarakezPrintsBot
              </a>
            </div>
            
            <div className="flex-1 flex justify-center mt-6 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-3 md:-inset-4 bg-white/20 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/20 shadow-md max-w-xs">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full mr-3"></div>
                    <div>
                      <div className="font-medium text-white text-sm md:text-base">HarakezPrintsBot</div>
                      <div className="text-xs text-white/70">@HarakezPrints_bot</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                    <div className="bg-white/20 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                      👋 Привет! Готов предложить свой уникальный принт?
                    </div>
                    <div className="bg-white/30 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                      🎨 Выбери действие для начала работы
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-white text-blue-600 text-xs py-1 md:py-2 px-2 md:px-3 rounded font-medium">Предложить принт</button>
                    <button className="bg-white/20 text-white text-xs py-1 md:py-2 px-2 md:px-3 rounded">Мои принты</button>
                    <button className="bg-white/20 text-white text-xs py-1 md:py-2 px-2 md:px-3 rounded">Статистика</button>
                    <button className="bg-white/20 text-white text-xs py-1 md:py-2 px-2 md:px-3 rounded">Помощь</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Иконки
const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const UniqueIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CopyrightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const ApprovalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const BotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const PercentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17h6m-6 0v-2m0 2v-6m0 2h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const TelegramIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 md:h-5 md:w-5 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
  </svg>
);

export default PrintsSection;