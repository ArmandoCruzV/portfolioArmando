import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollGSAP = (className: string, y: number, x: number, start: string = 'top 80%', end: string = 'top 30%', opacity: number = 0) => {
  useEffect(() => {
    gsap.fromTo(`${className}`,
      { opacity: opacity, y: y, x: x },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: `${className}`,
          start: start, // La animación empieza cuando el elemento esté en un 80% de la altura de la ventana
          end: end,   // La animación termina cuando el elemento esté al 30%
          scrub: true,       // Hace que la animación se sincronice con el desplazamiento
        },
      }
    );
  }, []);
};

export { ScrollGSAP };
