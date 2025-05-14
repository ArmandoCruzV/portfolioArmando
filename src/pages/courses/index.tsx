import React, { useRef, useEffect } from 'react';
import "./style.css";
import platzi from '../../assets/platzi.png';
import alura from '../../assets/alura.png';
import { ScrollGSAP } from '../../AnimationsSroll/index.tsx';
import { ImgCourses } from './ImgCourses';

const Courses: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250, behavior: 'smooth' }); // Ajusta el valor de desplazamiento según sea necesario
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' }); // Ajusta el valor de desplazamiento según sea necesario
    }
  };

  let intervalId: number;

  const scrollRight2 = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      // Desplazar el carrusel
      carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' });

      // Verificar si hemos llegado al final
      if (scrollLeft + clientWidth >= scrollWidth) {
        // Reiniciar el desplazamiento al inicio después de un pequeño retraso
        setTimeout(() => {
          carouselRef.current!.scrollTo({ left: 0, behavior: 'smooth' });
        }, 1000); // Esperar 1 segundo antes de reiniciar
      }
    }
  };

  const startAutoScroll = () => {
    intervalId = window.setInterval(scrollRight2, 3000);
  };

  const stopAutoScroll = () => {
    window.clearInterval(intervalId);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll(); // Limpiar el intervalo al desmontar
  }, []);

  //animacion al hacer scoll
  ScrollGSAP(".courses", 50, 0, 'top 90%', 'top 40%');


  return (
    <div>
      <div id="courses" className="courses">

        <div className="h1-courses" ><span className="h1-courses-1" >C</span><span className="h1-courses-2" >ourses</span></div>
        <div className="h1-courses-bg" >Courses</div>

        <div className="btn-course--container" >
          <button onClick={scrollLeft} className="buttonStyleLeft">❮</button>
          <button onClick={scrollRight} className="buttonStyleRight">❯</button>
        </div>

        <div className="courses-card--container" ref={carouselRef} >
          <ImgCourses />
        </div>

      </div>

      <div className="animated-div" >

        <a className="platzi" href="https://platzi.com/p/hao_2-d364/" target="_blank" >
          <h3 className="h3-platzi">Platzi</h3>
          <div className="top-platzi"></div>
          <div className="bottom-platzi"></div>
          <div className="left-platzi"></div>
          <div className="right-platzi"></div>
          <img src={platzi} alt="Imagen 1" className="image-platzi" loading="lazy" />
        </a>

        <a className="alura" href="https://app.aluracursos.com/user/hao-2-d/fullCertificate/88f128d66f368013cc3fb3d4987fc2c1" target="_blank" >
          <h3 className="h3-alura">Alura</h3>
          <div className="top-alura"></div>
          <div className="bottom-alura"></div>
          <div className="left-alura"></div>
          <div className="right-alura"></div>
          <img src={alura} alt="Imagen 1" className="image-alura" loading="lazy" />
        </a>

      </div>

    </div >
  )
}

export { Courses }
