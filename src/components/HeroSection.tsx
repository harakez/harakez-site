// src/components/HeroSection.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion'; // Импортируем магию анимаций

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="flex items-center h-screen bg-gray-50 text-gray-800 px-6">
      <div className="max-w-6xl mx-auto text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight tracking-tighter"
        >
          Это ваш холст.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl mb-10 font-light text-gray-600 max-w-2xl"
        >
          HARAKEZ — это не одежда. Это отправная точка. Пространство, где ваша индивидуальность встречается с нашей тканью, чтобы создать нечто большее.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a href="#support" className="px-10 py-4 bg-gray-900 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transform hover:scale-105 transition-all duration-300">
            Стать частью истории
          </a>
          <a href="#feedback" className="font-semibold text-gray-700 hover:text-black transition-colors duration-300 py-4">
            Предложить идею →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;