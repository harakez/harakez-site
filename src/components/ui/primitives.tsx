import React from 'react';
import Link from 'next/link';

/* ------------------------------------------------------------
   Container — вся вёрстка живёт внутри него.
   Контент не растягивается на всю ширину экрана: глазу не нужно
   бегать от края до края.
   ------------------------------------------------------------ */

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** narrow — для текста, wide — для сеток и галерей */
  size?: 'narrow' | 'default' | 'wide';
};

const sizes = {
  narrow: 'max-w-[46rem]',
  default: 'max-w-[68rem]',
  wide: 'max-w-[82rem]',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
}) => (
  <div className={`mx-auto w-full px-5 sm:px-8 ${sizes[size]} ${className}`}>
    {children}
  </div>
);

/* ------------------------------------------------------------
   Section — вертикальный ритм страницы
   ------------------------------------------------------------ */

export const Section: React.FC<{
  children: React.ReactNode;
  id?: string;
  className?: string;
}> = ({ children, id, className = '' }) => (
  <section id={id} className={`py-16 sm:py-24 lg:py-32 ${className}`}>
    {children}
  </section>
);

/* ------------------------------------------------------------
   Eyebrow — мономаркировка над заголовком, как на бирке
   ------------------------------------------------------------ */

export const Eyebrow: React.FC<{
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}> = ({ children, className = '', dot = true }) => (
  <p className={`tag-label flex items-center gap-2.5 ${className}`}>
    {dot && (
      <span className="inline-block h-[5px] w-[5px] rounded-full bg-flame" />
    )}
    {children}
  </p>
);

/* ------------------------------------------------------------
   Rule — тонкая линия-разделитель
   ------------------------------------------------------------ */

export const Rule: React.FC<{ className?: string }> = ({ className = '' }) => (
  <hr className={`border-0 border-t border-line ${className}`} />
);

/* ------------------------------------------------------------
   Button — три варианта, все с одинаковой геометрией
   ------------------------------------------------------------ */

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  variant?: 'solid' | 'outline' | 'flame';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  solid:
    'bg-ink text-paper hover:bg-flame',
  flame:
    'bg-flame text-white hover:bg-flame-2',
  outline:
    'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper',
};

const buttonBase =
  'group relative inline-flex items-center justify-center gap-2.5 ' +
  'min-h-[52px] px-7 py-4 text-[13px] font-medium tracking-[0.06em] uppercase ' +
  'font-[family-name:var(--font-mono)] ' +
  'transition-all duration-300 ease-[var(--ease-brand)] ' +
  'disabled:opacity-40 disabled:pointer-events-none';

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  type = 'button',
  variant = 'solid',
  className = '',
  disabled,
  onClick,
}) => {
  const cls = `${buttonBase} ${variants[variant]} ${className}`;

  if (href) {
    const external = href.startsWith('http');
    if (external) {
      return (
        <a href={href} className={cls} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

/* ------------------------------------------------------------
   Arrow — стрелка, которая едет вправо при наведении на кнопку
   ------------------------------------------------------------ */

export const Arrow: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    aria-hidden="true"
    className={`transition-transform duration-300 ease-[var(--ease-brand)] group-hover:translate-x-1 ${className}`}
  >
    <path
      d="M0 5h12M8.5 1.5 12 5l-3.5 3.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
    />
  </svg>
);
