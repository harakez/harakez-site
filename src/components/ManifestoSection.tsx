// src/components/ManifestoSection.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ManifestoSection: React.FC = () => {
  // Текст стал короче и сильнее, как вы и просили
  const text = "Одежда не должна диктовать. Она должна помогать вам рассказать вашу историю.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }} // Анимация начнется, когда 80% блока будет видно
      >
        {/* ИСПРАВЛЕНИЕ ЗДЕСЬ: Добавляем flex flex-wrap для переноса слов */}
        <p className="flex flex-wrap justify-center text-3xl md:text-4xl font-light text-gray-800 leading-relaxed">
          {words.map((word, index) => (
            // ИСПРАВЛЕНИЕ ЗДЕСЬ: Убираем style и добавляем пробел после слова
            <motion.span variants={child} key={index} className="mr-2">
              {word}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </section>
  );
};

export default ManifestoSection;