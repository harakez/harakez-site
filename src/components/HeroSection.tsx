'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const textLines = [
  'У всех рано или поздно появляется вопрос: в чём же смысл жизни?',
  'Так смысл жизни в том что у каждого из нас есть своя чистая книга, автор которой — мы сами.',
  'Каждая эмоция, каждый момент, каждое решение — это строчки, которые наполняют страницы.',
  'С Harakez каждая глава твоей жизни становится шедевром.',
];

const autograph = 'Harakez — будь автором своей жизни.';

export default function HeroSection() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showAutograph, setShowAutograph] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  // Мягкая печатная анимация
  const LETTER_DELAY = 70; // мс между буквами (чуть медленнее)
  const LINE_DELAY = 1500; // пауза между строками

  useEffect(() => {
    const typeText = () => {
      if (currentLineIndex >= textLines.length) {
        setShowAutograph(true);
        return;
      }

      const line = textLines[currentLineIndex];
      let charIndex = 0;

      const typeChar = () => {
        if (charIndex <= line.length) {
          setDisplayedText(line.substring(0, charIndex));
          charIndex++;
          timeoutRef.current = window.setTimeout(typeChar, LETTER_DELAY);
        } else {
          timeoutRef.current = window.setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
            setDisplayedText('');
          }, LINE_DELAY);
        }
      };

      typeChar();
    };

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(typeText, 600); // небольшая стартовая пауза

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentLineIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-white px-6">
      <div
        className="w-full text-center"
        style={{
          maxWidth: '1100px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <div className="min-h-[10rem] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!showAutograph && currentLineIndex < textLines.length && (
              <motion.h1
                key={currentLineIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug"
              >
                {Array.from(displayedText).map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  className="ml-1 text-gray-400"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  |
                </motion.span>
              </motion.h1>
            )}

            {showAutograph && (
              <motion.div
                key="autograph"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-2xl md:text-3xl italic font-semibold text-gray-700 mt-6"
              >
                {autograph}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
