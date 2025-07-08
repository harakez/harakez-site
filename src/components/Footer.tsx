// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-6xl mx-auto py-12 px-6 text-center text-gray-500">
        <h3 className="text-xl font-bold text-gray-800 mb-4">HARAKEZ</h3>
        <p className="mb-6">Одежда, которая слушает.</p>
        <div className="flex justify-center space-x-6 mb-8">
          {/* Замените # на реальные ссылки на ваши соцсети */}
          <a href="#" className="hover:text-gray-900">Instagram</a>
          <a href="#" className="hover:text-gray-900">Telegram</a>
          <a href="#" className="hover:text-gray-900">Facebook</a>
        </div>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} HARAKEZ. Все права защищены.</p>
          <p className="mt-1">Сделано с идеей. Для вас.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;