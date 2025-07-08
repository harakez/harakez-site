// src/components/InspirationSection.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  // Замените на ваши фото, когда они появятся
  "https://images.unsplash.com/photo-1551232864-3f0890e58e48?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622396333629-3b6b6b4b4b4b?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?q=80&w=1887&auto=format&fit=crop",
];

const InspirationSection: React.FC = () => {
  return (
    <section id="inspiration" className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter">Найдите свое вдохновение</h2>
        <p className="text-xl font-light text-gray-500">Что для вас значат комфорт, текстура, силуэт? Расскажите нам.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <motion.div 
            key={index} 
            className="overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={src} alt={`Inspiration ${index + 1}`} className="w-full h-full object-cover aspect-[3/4]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;