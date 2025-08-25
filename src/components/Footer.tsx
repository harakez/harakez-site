"use client";

import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* 3D элементы на заднем плане */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-lg transform rotate-45 blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full transform -rotate-12 blur-2xl"></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-pink-500/10 transform rotate-12 blur-xl"></div>
      
      {/* Градиентная верхняя линия */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Основное содержимое футера */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Колонка 1: Лого и описание бренда */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Harakez
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
Жизнь — искусство, одежда — его проявление. Создавай каждый день как шедевр, носи каждый момент как произведение.              </p>
            </div>
            
            {/* Колонка 2: Наши Telegram-ресурсы */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Наши ресурсы
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://t.me/harakez_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">C</span>
                    </div>
                    <div>
                      <div className="font-medium">Официальный канал</div>
                      <div className="text-xs text-gray-500">Новые коллекции и анонсы</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/harakez_community"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">G</span>
                    </div>
                    <div>
                      <div className="font-medium">Сообщество</div>
                      <div className="text-xs text-gray-500">Обсуждение и идеи</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/HarakezPrints_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">B</span>
                    </div>
                    <div>
                      <div className="font-medium">Бот для принтов</div>
                      <div className="text-xs text-gray-500">Предложите свой дизайн</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Колонка 3: О нашем боте */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                Harakez Prints Bot
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-purple-500 rounded-full"></span>
              </h3>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300 text-sm mb-3">
                  Предлагайте свои дизайны и становитесь частью эксклюзивного сообщества создателей через нашего Telegram-бота.
                </p>
                <ul className="text-xs text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>4-этапная система проверки дизайнов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Ограниченный тираж для эксклюзивности</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Отслеживание статуса модерации</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>4 размера на выбор (S, M, L, XL)</span>
                  </li>
                </ul>
                <a
                  href="https://t.me/HarakezPrints_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                >
                  Предложить принт
                </a>
              </div>
            </div>
          </div>
          
          {/* Нижняя часть футера */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Harakez все права защищены. Все права на контент принадлежат их владельцам. Использование материалов сайта возможно только с разрешения правообладателей.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  