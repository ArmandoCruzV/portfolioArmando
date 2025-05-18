import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  threshold?: number; // when to trigger animation, default 0.5
  // optionally you can extend for custom animation classes or styles
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = '',
  style,
  threshold = 0.5,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <>
      <style>{`
        .animate-box {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
          will-change: opacity, transform;
        }
        .animate-box.visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
      <div
        ref={ref}
        className={`animate-box ${isVisible ? 'visible' : ''} ${className}`.trim()}
        style={style}
      >
        {children}
      </div>
    </>
  );
};

export { AnimateOnScroll };
