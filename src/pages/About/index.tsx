import React, { useState, useEffect, useRef } from 'react';
import Onepiece from '../../assets/onepiece.jpg';
import { AnimateOnScroll } from '../../AnimationsSroll/AnimateOnScroll.tsx';
import { AnimatedOvni } from '../../AnimationsSroll/AnimationOvni.tsx';
import './style.css'

const About: React.FC = () => {

  // Estado para almacenar las coordenadas x y y del cursor
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Función común para actualizar la posición basada en clientX y clientY
    const actualizarPosicion = (clientX: number, clientY: number) => {
      if (!containerRef.current) return;

      const container = containerRef.current.getBoundingClientRect();

      // Limitar las posiciones según restricciones (igual que el original)
      const x = Math.max(30, Math.min(clientX - container.left - 120, container.width));
      const y = Math.max(100, Math.min(clientY - container.top, container.height));

      setPosition({ x, y });
    };

    // Manejador para movimiento de mouse
    const manejadorMouseMove = (event: MouseEvent) => {
      actualizarPosicion(event.clientX, event.clientY);
    };

    // Manejador para movimiento táctil (touchmove)
    const manejadorTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        actualizarPosicion(touch.clientX, touch.clientY);
        // Prevenir el comportamiento por defecto para evitar que la página haga scroll mientras se arrastra
        //event.preventDefault();
      }
    };

    // Añadir los event listeners para mouse y touch
    window.addEventListener('mousemove', manejadorMouseMove);
    window.addEventListener('touchmove', manejadorTouchMove);

    // Limpiar los listeners cuando el componente se desmonte
    return () => {
      window.removeEventListener('mousemove', manejadorMouseMove);
      window.removeEventListener('touchmove', manejadorTouchMove);
    };
  }, []);


  const styles = {
    //right: `${position.x}px`,
    left: `${position.x}px`,
    top: `${position.y}px`,
    //buttom: `${position.y}px`
  }

  //animacion de texto h1
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);

  const handleScroll = () => {
    if (componentRef.current) {
      const componentHeight = componentRef.current.clientHeight;
      const componentBottom = componentRef.current.getBoundingClientRect().bottom;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Verifica si el scroll ha llegado a la mitad del componente
      if (scrollPosition <= componentBottom + componentHeight * 1) {
        setIsAnimationTriggered(true); // Activa la animación si está en la mitad o más abajo
      } else {
        setIsAnimationTriggered(false); // Desactiva la animación si está por encima de la mitad
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const className = isAnimationTriggered ? 'H1active' : 'H1inactive';
  return (
    <div id='about' className='about'>

      <AnimatedOvni startx={0} endx={-2} starty={5} endy={-4} />

      <div className='about-container' ref={componentRef} >

        <div>
          <div className='img-profile--container'>
            <img src={Onepiece} className='img-profile' loading="lazy" />
          </div>

          <div className='h1-container' >
            <h1 className={className}>Armando CV </h1>
          </div>
          <AnimateOnScroll>
            <h3>Full-Stack</h3>
          </AnimateOnScroll>
          <p>
            I am a passionate full-stack developer who enjoys tackling complex challenges that require both creativity and an analytical approach. My innate curiosity and desire to learn drive me to constantly explore new technologies and methodologies, allowing me to stay at the forefront of a constantly evolving field.<br />
            <br />
            I deeply value feedback as an essential tool for growth, both personally and professionally. I am always open to receiving constructive criticism, as I believe it is fundamental to refining my skills and ensuring that the products and solutions I develop not only meet but exceed my clients' expectations.
          </p>
        </div>

        <div ref={containerRef} className='tree'>
          <div className='body' style={styles} >
            <div className='head' >
              <div className='eyebrow' ></div>
              <div className='eyes' >
                <div className='eye1' >
                  <div className='pupila' >
                    <div className='brillo' ></div>
                  </div>
                </div>
                <div className='eye2' >
                  <div className='pupila' >
                    <div className='brillo' ></div>
                  </div>
                </div>
              </div>
              <div className='beak' >
                <div className='beak-top' ></div>
                <div className='beak-down' ></div>
              </div>
            </div>
            <div className='stomach-container' >
              <div className='wing-left' ></div>
              <div className='stomach' ></div>
              <div className='wing-right' ></div>
            </div>
            <div className='legs' >
              <div className='leg-left' >
                <div className='leg-left-foot' ></div>
                <div className='left-foot' ></div>
              </div>
              <div className='leg-right' >
                <div className='leg-right-foot' ></div>
                <div className='right-foot' ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export { About }
