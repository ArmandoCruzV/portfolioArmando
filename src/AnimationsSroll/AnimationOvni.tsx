import { useEffect, useRef, useState } from 'react';
import { PlatilloVoladorMetalSlug } from '../assets/PlatilloVolador.tsx';
import { num } from '../assets/animate-type';


const AnimatedOvni = ({ startx, endx, starty, endy }: num) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > -200) {
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
      {isAnimating && <PlatilloVoladorMetalSlug
        startx={startx}
        endx={endx}
        starty={starty}
        endy={endy}
      />}
    </div>
  );
};

export { AnimatedOvni };

