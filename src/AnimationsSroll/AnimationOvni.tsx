import { useEffect, useRef, useState } from 'react';
import { PlatilloVoladorMetalSlug } from '../assets/PlatilloVolador.tsx';


const AnimatedOvni = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsAnimating(true);
      } else {
        setIsAnimating(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={ref}>
      {/* Aquí puedes agregar tu lógica de animación de Three.js */}
      {isAnimating && < PlatilloVoladorMetalSlug />}
    </div>
  );
};

export { AnimatedOvni };

