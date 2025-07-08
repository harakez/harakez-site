// src/components/Loader.tsx
'use client';
import { useState, useEffect } from 'react';

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Даем сайту загрузиться, затем начинаем анимацию
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Небольшая задержка для плавности
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-900 transition-transform duration-[1200ms] ease-in-out ${
        isLoaded ? '-translate-y-full' : 'translate-y-0' // Уезжает наверх
      }`}
    >
      <h1 className={`text-white text-3xl font-bold transition-opacity duration-500 ${!isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        HARAKEZ
      </h1>
    </div>
  );
};

export default Loader;