'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------
   Появление при прокрутке.

   Тот же интерфейс, что был раньше, но без framer-motion: класс
   переключает IntersectionObserver, анимацию делает CSS. Это
   убрало 46 КБ скрипта и всю работу с анимацией из главного потока.

   Если IntersectionObserver почему-то недоступен, элемент просто
   считается видимым — контент никогда не остаётся скрытым.
   ------------------------------------------------------------ */

function useInView<T extends HTMLElement>(amount = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: amount },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  return { ref, inView };
}

/** Один блок: всплывает, когда попадает в кадр. */
export const Reveal: React.FC<{
  children: React.ReactNode;
  /** задержка в секундах, как было раньше */
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      className={`rv ${inView ? 'is-in' : ''} ${className}`}
      style={{ '--rv-delay': `${delay * 1000}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

/* Дети всплывают друг за другом. Порядок задаётся индексом:
   родитель раздаёт задержки, чтобы не считать их в каждой секции. */

const StaggerContext = React.createContext(false);

export const RevealGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <StaggerContext.Provider value={inView}>
      <div ref={ref} className={className}>
        {React.Children.map(children, (child, i) =>
          React.isValidElement<{ style?: React.CSSProperties }>(child)
            ? React.cloneElement(child, {
                style: {
                  ...child.props.style,
                  '--rv-delay': `${i * 90}ms`,
                } as React.CSSProperties,
              })
            : child,
        )}
      </div>
    </StaggerContext.Provider>
  );
};

export const RevealItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, className = '', style }) => {
  const inView = React.useContext(StaggerContext);

  return (
    <div className={`rv ${inView ? 'is-in' : ''} ${className}`} style={style}>
      {children}
    </div>
  );
};

export { useInView };
export default Reveal;
