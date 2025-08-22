// src/components/InspirationSection.tsx
'use client';
import { motion } from 'framer-motion';

const InspirationSection = () => {
  // Ваша цветовая палитра
  const colors = {
    primary: '#1F3A3D',
    secondary: '#2F353B',
    accent: '#002F55',
    highlight: '#256D7B'
  };

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Динамический фон с анимацией */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231F3A3D' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Обновленное оформление заголовка - теперь в одной строке */}
        <motion.div 
          className="text-center mb-14 md:mb-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 whitespace-nowrap"
          >
            Тут могли быть товары
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Но производство ещё не запущено из-за бюджетных ограничений
          </motion.p>
        </motion.div>

        {/* Контент с адаптивным расположением - БЕЗ ИЗМЕНЕНИЙ */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Текстовая часть - слева на десктопе */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-8">
              {/* Пункт 1 */}
{/* Пункт 1 */}
<motion.div
  className="flex items-start gap-5 p-5 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
  whileInView={{ 
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 } 
  }}
  initial={{ opacity: 0, x: -30 }}
  viewport={{ once: true }}
>
  <div 
    className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 text-white font-bold text-lg shrink-0 shadow"
  >
    1
  </div>
  <div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Присоединяйтесь к сообществу
    </h3>
    <p className="text-gray-700">
      Зайдите в наш Telegram-канал и группу, где собираются единомышленники
    </p>
  </div>
</motion.div>

{/* Пункт 2 */}
<motion.div
  className="flex items-start gap-5 p-5 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
  whileInView={{ 
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.1 } 
  }}
  initial={{ opacity: 0, x: -30 }}
  viewport={{ once: true }}
>
  <div 
    className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-700 text-white font-bold text-lg shrink-0 shadow"
  >
    2
  </div>
  <div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Найдите своё место
    </h3>
    <p className="text-gray-700">
      Общайтесь с начинающими создателями брендов, профессионалами и покупателями. 
      <span className="font-medium"> Станьте одним из них или будьте среди них</span>
    </p>
  </div>
</motion.div>

{/* Пункт 3 */}
<motion.div
  className="flex items-start gap-5 p-5 rounded-xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
  whileInView={{ 
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.2 } 
  }}
  initial={{ opacity: 0, x: -30 }}
  viewport={{ once: true }}
>
  <div 
    className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-600 text-white font-bold text-lg shrink-0 shadow"
  >
    3
  </div>
  <div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Поддержите создание бренда
    </h3>
    <p className="text-gray-700">
    Хотите помочь с бюджетом? Мы ценим любую поддержку
    </p>
  </div>
</motion.div>

              {/* Кнопки */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <a
                  href="https://t.me/harakez_official"
                  className="px-6 py-3 text-white font-medium rounded-lg text-center transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  <span>Официальный канал</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </a>

                <a
                  href="https://t.me/harakez_community"
                  className="px-6 py-3 text-white font-medium rounded-lg text-center transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: colors.highlight }}
                >
                  <span>Сообщество</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Визуальный элемент "Будущие коллекции" - справа на десктопе */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, delay: 0.6 }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-full max-w-md">
              <motion.div
                className="aspect-square rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.highlight} 100%)`
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <motion.div
                      className="text-7xl md:text-8xl mb-4"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      👕
                    </motion.div>
                    <motion.h3
                      className="text-3xl md:text-4xl font-bold mb-2"
                      animate={{ 
                        letterSpacing: ['0em', '0.05em', '0em'],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      HARAKEZ
                    </motion.h3>
                    <p className="text-xl opacity-90">Будущие коллекции</p>
                  </div>
                </div>
                
                {/* Декоративные элементы */}
                <div className="absolute top-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
                     style={{ backgroundColor: colors.primary }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg"
                     style={{ backgroundColor: colors.highlight }}>
                  Coming soon
                </div>
              </motion.div>
              
              {/* Тени и акценты */}
              <div className="absolute -inset-6 z-[-1] opacity-30">
                <div className="absolute inset-0 rounded-3xl" 
                     style={{ backgroundColor: colors.secondary }}></div>
              </div>
              <div className="absolute -inset-3 z-[-2] opacity-20">
                <div className="absolute inset-0 rounded-3xl" 
                     style={{ backgroundColor: colors.primary }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;