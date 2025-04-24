import { FaWindowClose } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbFileTypeJsx } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbFileTypeTsx } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import Crud from '../../assets/crud.png';
import landing from '../../assets/landing.png';
import commerce from '../../assets/commerce.png';
import todo from '../../assets/list.png';
import dataServer from '../../assets/data-server.png';
import javaImg from '../../assets/java.png';
import nodeImg from '../../assets/nodeImg.png';
import encriptador from '../../assets/encriptador.png';
import router from '../../assets/router.png';
import products from '../../assets/products.png';
import portafolio from '../../assets/portafolio.png';
import { useState } from 'react';
import './style.css';
import { ScrollGSAP } from '../../AnimationsSroll/index.tsx';

function Projects() {

  ScrollGSAP(".grid-container", 0, 50);
  ScrollGSAP(".portfolio-title--container", 0, -50);

  const [showDescriptions, setShowDescriptions] = useState(Array(5).fill(false));

  const toggleDescription = (index) => {
    // Crea una copia del estado actual
    const newShowDescriptions = [...showDescriptions];
    // Cambia el estado del índice correspondiente
    newShowDescriptions[index] = !newShowDescriptions[index];
    // Actualiza el estado
    setShowDescriptions(newShowDescriptions);
  };

  const description = [
    {
      title: <h2 className="card-title" >Product and Service</h2>,
      label: <div className="container-img--card" >
        <div className="icon-container--card" >
          <TbFileTypeTsx className="tsx-card" />
          <BiLogoTypescript className="ts-card" />
          <FaReact className="react-card" />
          <FaCss3Alt className="css-card" />
        </div>
        <div className="card-img" ><img src={products} className='products' /></div>
      </div>,
      text: "Este proyecto es una aplicación web interactiva desarrollada utilizando TypeScript, React y CSS, diseñada para ofrecer una experiencia de usuario fluida y atractiva. La aplicación se centra en  mostrar un negocio y sus productos y servicios, permitiendo a los usuarios explorar fácilmente la información disponible.",
      url: "https://omarmantenimiento.netlify.app/",
    },
    {
      title: <h2 className="card-title" >Portfolio</h2>,
      label: <div className="container-img--card" >
        <div className="icon-container--card" >
          <TbFileTypeTsx className="tsx-card" />
          <BiLogoTypescript className="ts-card" />
          <FaReact className="react-card" />
          <FaCss3Alt className="css-card" />
        </div>
        <div className="card-img" ><img src={portafolio} className='portafolio' /></div>
      </div>,
      text: "Este proyecto es un portafolio personal diseñado para mostrar mis habilidades y proyectos como programador frontend. Desarrollado con TypeScript, React y CSS, este portafolio no solo resalta mis capacidades técnicas, sino que también proporciona una experiencia de usuario atractiva y fluida.",
      url: "https://armandocruzv.github.io/portafolio/",
    },
    {
      title: <h2 className="card-title" >Todo-list</h2>,
      label: <div className="container-img--card" >
        <div className="icon-container--card" >
          <TbFileTypeJsx className="jsx-card" />
          <FaReact className="react-card" />
          <FaCss3Alt className="css-card" />
        </div>
        <div className="card-img" ><img src={todo} className='todo' /></div>
      </div>,
      text: "Este proyecto se enfoca en desarrollar una aplicación de lista de tareas (to-do) utilizando React.js. La aplicación permite a los usuarios agregar nuevas tareas, eliminar tareas existentes y marcarlas como completadas. Con una interfaz intuitiva y responsiva para gestionar las tareas diarias de manera sencilla.",
      url: "https://armandocruzv.github.io/todo_list/",
    },
    {
      title: <h2 className="card-title" >React-router</h2>,
      label: <div className="container-img--card" >
        <div className="icon-container--card" >
          <TbFileTypeJsx className="jsx-card" />
          <FaReact className="react-card" />
          <FaCss3Alt className="css-card" />
        </div>
        <div className="card-img" ><img src={router} className='router' /></div>
      </div>,
      text: "Este proyecto desarrolla un blog utilizando React.js y React Router DOM para una navegación fluida. Se implementan medidas de seguridad con Node.js para manejar endpoints, junto con autenticación de usuarios, roles y permisos, asegurando que solo los usuarios autorizados puedan realizar ciertas acciones.",
      url: "https://armandocruzv.github.io/React-router-navegacion/",
    },
    {
      title: <h2 className="card-title" >Encryptor</h2>,
      label: <div className="container-img--card" >
        <div className="icon-container--card" >
          <IoLogoJavascript className="js-card" />
          <FaHtml5 className="html-card" />
          <FaCss3Alt className="css-card" />
        </div>
        <div className="card-img" ><img src={encriptador} className='encriptador' /></div>
      </div>,
      text: "Este proyecto se centra en la creación de una aplicación web para el encriptado de mensajes utilizando HTML, CSS y JavaScript. La aplicación permite a los usuarios ingresar un mensaje y convertirlo en un formato encriptado para asegurar la privacidad y confidencialidad de la información.",
      url: "https://armandocruzv.github.io/encriptador/",
    },
    {
      title: <h2 className="card-title" >Landing Page</h2>,
      label: <div className="container-img--card" >
        <div className="icon-container--card" >
          <TbFileTypeJsx className="jsx-card" />
          <FaReact className="react-card" />
          <FaCss3Alt className="css-card" />
        </div>
        <div className="card-img" ><img src={landing} className='landing' /></div>
      </div>,
      text: "Este proyecto desarrolla una aplicación web para una empresa de cuchillas y molinos para la industria del plástico, usando React.js y React Router DOM. La aplicación permite explorar productos, obtener información detallada y contactar con el equipo comercial, ofreciendo una navegación fluida y una interfaz moderna.",
      url: "https://elegant-sunshine-437c40.netlify.app/nosotros",
    },
    {
      title: <h2 className="card-title" >E-commerce</h2>,
      label: <div className="container-img--card" >
        <div className="icon-container--card" >
          <TbFileTypeJsx className="jsx-card" />
          <FaReact className="react-card" />
          <RiTailwindCssFill className="tailwind-card" />
        </div>
        <div className="card-img" ><img src={commerce} className='e-commerce' /></div>
      </div>,
      text: "Este proyecto desarrolla una tienda en línea (e-commerce) utilizando React.js, que se conecta a una API de productos para mostrar y gestionar inventario. La aplicación permite a los usuarios explorar productos, agregar artículos al carrito y realizar compras, ofreciendo una experiencia de compra fluida y moderna.",
      url: "https://armandocruzv.github.io/react-shop/",
    },
    {
      title: <h2 className="card-title" >CRUD(SpringBoot)</h2>,
      label: <div className="container-img--card" >
        <div className="icon-container--card" >
          <FaJava className="java-card" />
          <TbBrandMysql className="mysql-card" />
          <SiSpringboot className="springBoot" />
        </div>
        <div className="card-img" ><img src={Crud} className='crud' /></div>
      </div>,
      text: "Este proyecto consiste en el desarrollo de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Java y Spring Boot. La aplicacíon se conecta a una base de datos MySQL, la cual fue diseñada y configurada especificamente para este proyecto.",
      url: "https://github.com/ArmandoCruzV/crudExample/tree/main/src/main/java/com/api/crudExample",
    },
    {
      title: <h2 className="card-title" >Java connection</h2>,
      label: <div className="container-img--card" >
        <div className="icon-container--card" >
          <FaJava className="java-card" />
          <TbBrandMysql className="mysql-card" />
        </div>
        <div className="card-img" ><img src={dataServer} className='dataServer' /></div>
      </div>,
      text: "Este proyecto se centra en el desarrollo de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Java y consultas SQL directas para interactuar con una base de datos MySQL. La base de datos fue diseñada y creada manualmente para satisfacer las necesidades específicas del proyecto.",
      url: "https://github.com/ArmandoCruzV/mensajes-app-java/tree/master/src/main/java",
    },
    {
      title: <h2 className="card-title" >Java project</h2>,
      label: <div className="container-img--card" >
        <div className="icon-container--card" >
          <FaJava className="java-card" />
        </div>
        <div className="card-img" ><img src={javaImg} className='dataServer' /></div>
      </div>,
      text: "Este proyecto consiste en el desarrollo de un sistema de gestión de citas médicas utilizando Java. El objetivo es facilitar la programación, seguimiento y gestión de citas entre pacientes y profesionales de la salud.",
      url: "https://github.com/ArmandoCruzV/MyMedicalAppointments/tree/main/src",
    },
    {
      title: <h2 className="card-title" >Node project</h2>,
      label: <div className="container-img--card" >
        <div className="icon-container--card" >
          <FaNodeJs className="node-card" />
          <SiExpress className="express-card" />
        </div>
        <div className="card-img" ><img src={nodeImg} className='nodeImg' /></div>
      </div>,
      text: "Este proyecto se enfoca en el desarrollo de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Node.js y el framework Express. El objetivo es construir una API RESTful que permita gestionar datos de manera eficiente a través de operaciones básicas sobre una base de datos.",
      url: "https://github.com/ArmandoCruzV/nodeProject",
    },
  ]

  return (
    <div id="projects" className="projects">

      <div className="portfolio-title--container" >
        <h1 className="portfolio-title">PROJECTS</h1>
      </div>

      <div className="grid-container">
        {Array.from({ length: description.length }).map((_, index) => (
          <div className="grid-item" key={index}>
            {description[index].title}
            {description[index].label}
            <div className={`description ${showDescriptions[index] ? 'show' : ''}`}>
              <button onClick={() => toggleDescription(index)} className="container-close" ><FaWindowClose className="close" /></button>
              {description[index].text}
            </div>
            <div className="card-buttons">
              <button onClick={() => toggleDescription(index)} className="btn-description" >
                {showDescriptions[index] ? 'Hide Description' : 'Show Description'}
              </button>
              <a className="btn-sendPage" href={description[index].url} target="_blank">Go page</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Projects };
