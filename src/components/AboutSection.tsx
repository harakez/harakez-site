// src/components/AboutSection.tsx
import React from 'react';

const ValueCard: React.FC<{ title: string; description: string; icon: React.ReactNode; }> = ({ title, icon, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border">
    <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 font-light leading-relaxed">{description}</p>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 text-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter">Ваша история. Наша ткань.</h2>
          <p className="text-xl font-light text-gray-500">
            Каждый элемент HARAKEZ — это не просто деталь кроя. Это возможность для вашего самовыражения, основанная на четырех чувствах.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard title="Чувство Комфорта" description="Физическая свобода. Когда тело дышит, а мысли летят. Ничто не сковывает, ничто не отвлекает от главного." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>} />
          <ValueCard title="Чувство Стиля" description="Визуальная гармония. Не кричащая мода, а ваш собственный, уверенный почерк, который читается без слов." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.25m0 0h6m-6 0h-1.5m1.5 0l-1.5-1.5m0 0l-1.5 1.5m1.5-1.5V10.5m3 1.5V7.5m3 4.5V10.5m-3 3V15m-6-1.5v3m6-3v3m-6-3h.008v.008H7.5v-.008zm3 0h.008v.008H10.5v-.008zm3 0h.008v.008H13.5v-.008z" /></svg>} />
          <ValueCard title="Чувство Уверенности" description="Внутренняя сила. Когда ваш внешний вид — это не маска, а прямое отражение вашей внутренней гармонии." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /></svg>} />
          <ValueCard title="Чувство Свободы" description="Ментальная легкость. Возможность быть собой, не оглядываясь на рамки и условности. Создавать свои правила." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;