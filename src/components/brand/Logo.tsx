import React from 'react';

/**
 * Фирменный знак HARAKEZ: две параллельные диагонали и круг между ними.
 * Композиция симметрична при повороте на 180°.
 * Рисуется currentColor — чёрная и белая версии получаются сами.
 */
export const LogoMark: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = 'w-8 h-8',
  ...props
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M7.5 61 L50 6"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <circle cx="50" cy="50" r="14.5" fill="currentColor" />
    <path
      d="M50 94 L92.5 39"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Тот же знак, но собирается на глазах: сначала прочерчиваются
 * диагонали, затем в центр опускается круг — и остаётся там.
 *
 * Никаких утилит Tailwind для масштаба: scale-0 в Tailwind 4 — это
 * отдельное свойство `scale`, оно перемножается с `transform` из
 * кейфреймов, и круг схлопывался в ноль сразу после появления.
 * Здесь всё состояние держат только кейфреймы.
 */
export const LogoMarkDrawn: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = 'w-8 h-8',
  ...props
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      className="mark-stroke mark-stroke-1"
      d="M7.5 61 L50 6"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      pathLength={1}
    />
    <path
      className="mark-stroke mark-stroke-2"
      d="M50 94 L92.5 39"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      pathLength={1}
    />
    <circle className="mark-dot" cx="50" cy="50" r="14.5" fill="currentColor" />
  </svg>
);

/** Текстовое начертание названия — широкий трекинг, как на бирке. */
export const Wordmark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`wordmark ${className}`}>Harakez</span>
);

/** Знак + название в строку. Основной вариант для шапки. */
export const Logo: React.FC<{ className?: string; markClass?: string }> = ({
  className = '',
  markClass = 'w-[18px] h-[18px]',
}) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <LogoMark className={markClass} />
    <Wordmark className="text-[15px] leading-none pt-px" />
    <span className="sr-only">HARAKEZ</span>
  </span>
);

export default Logo;
