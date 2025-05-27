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
import Tux3D from '../../assets/world.tsx'
import { AnimateOnScroll } from '../../AnimationsSroll/AnimateOnScroll.tsx';
import { AnimatedOvni } from "../../AnimationsSroll/AnimationOvni.tsx";

function Projects() {
  ScrollGSAP(".portfolio-title--container", 0, -50);

  const [showDescriptions, setShowDescriptions] = useState(Array(5).fill(false));

  const toggleDescription = (index: number) => {
    // Crea una copia del estado actual
    const newShowDescriptions = [...showDescriptions];
    // Cambia el estado del índice correspondiente
    newShowDescriptions[index] = !newShowDescriptions[index];
    // Actualiza el estado
    setShowDescriptions(newShowDescriptions);
  };

  const description = [
    {
      id: 1,
      label: <div className="container-img--card" >
        <div className="card-img" ><img src={products} className='products' loading="lazy" /></div>
        <div className="card-title-h3" >Product and Service</div>

        <span className="previousText" >This project is an interactive web application developed using TypeScript, React, and CSS...</span>
        <ul className="icon-container--card" >
          <li><TbFileTypeTsx className="tsx-card" /><span className="span-cards">TSX</span></li>
          <li><BiLogoTypescript className="ts-card" /><span className="span-cards">TS</span></li>
          <li><FaCss3Alt className="css-card" /><span className="span-cards">Css</span></li>
          <li><FaReact className="react-card" /><span className="span-cards">React</span></li>
        </ul>

      </div>,
      text: "This project is an interactive web application developed using TypeScript, React, and CSS, designed to provide a smooth and engaging user experience. The application focuses on showcasing a business and its products and services, allowing users to easily explore the available information.",
      url: "https://omarmantenimiento.netlify.app/",
    },
    {
      id: 2,
      label: <div className="container-img--card" >
        <div className="card-img" ><img src={portafolio} className='portafolio' loading="lazy" /></div>
        <div className="card-title-h3" >Portfolio</div>

        <span className="previousText" >This project is a personal portfolio designed to showcase my skills and projects...</span>
        <ul className="icon-container--card" >
          <li><TbFileTypeTsx className="tsx-card" /><span className="span-cards">TSX</span></li>
          <li><BiLogoTypescript className="ts-card" /><span className="span-cards">TS</span></li>
          <li><FaCss3Alt className="css-card" /><span className="span-cards">Css</span></li>
          <li><FaReact className="react-card" /><span className="span-cards">React</span></li>
        </ul>
      </div>,
      text: "This project is a personal portfolio designed to showcase my skills and projects as a frontend developer. Built with TypeScript, React, and CSS, this portfolio not only highlights my technical abilities but also provides an engaging and seamless user experience.",
      url: "https://armandocruzv.github.io/portafolio/",
    },
    {
      id: 3,
      label: <div className="container-img--card" >
        <div className="card-img" ><img src={todo} className='todo' loading="lazy" /></div>
        <div className="card-title-h3" >Todo-list</div>

        <span className="previousText" >This project focuses on developing a task list application...</span>
        <ul className="icon-container--card" >
          <li><TbFileTypeJsx className="jsx-card" /><span className="span-cards">JSX</span></li>
          <li><FaReact className="react-card" /><span className="span-cards">React</span></li>
          <li><FaCss3Alt className="css-card" /><span className="span-cards">Css</span></li>
        </ul>
      </div>,
      text: "This project focuses on developing a to-do list application using React.js. The application allows users to add new tasks, delete existing ones, and mark them as completed. It features an intuitive and responsive interface for managing daily tasks with ease.",
      url: "https://armandocruzv.github.io/todo_list/",
    },
    {
      id: 4,
      label: <div className="container-img--card" >
        <div className="card-img" ><img src={router} className='router' loading="lazy" /></div>
        <div className="card-title-h3" >React-router</div>

        <span className="previousText" >This project develops a blog using React.js and React Router DOM for smooth navigation...</span>
        <ul className="icon-container--card" >
          <li><TbFileTypeJsx className="jsx-card" /><span className="span-cards">JSX</span></li>
          <li><FaCss3Alt className="css-card" /><span className="span-cards">Css</span></li>
          <li><FaReact className="react-card" /><span className="span-cards">React</span></li>
        </ul>

      </div>,
      text: "This project involves developing a blog using React.js and React Router DOM for smooth navigation. Security measures are implemented with Node.js to handle endpoints, along with user authentication, roles, and permissions, ensuring that only authorized users can perform certain actions.",
      url: "https://armandocruzv.github.io/React-router-navegacion/",
    },
    {
      id: 5,
      label: <div className="container-img--card" >
        <div className="card-img" ><img src={encriptador} className='encriptador' /></div>
        <div className="card-title-h3" >Encryptor</div>

        <span className="previousText" >This project focuses on creating a web application for message encryption...</span>
        <ul className="icon-container--card" >
          <li><IoLogoJavascript className="js-card" /><span className="span-cards">JS</span></li>
          <li><FaCss3Alt className="css-card" /><span className="span-cards">Css</span></li>
          <li><FaHtml5 className="html-card" /><span className="span-cards">HTML</span></li>
        </ul>

      </div>,
      text: "This project focuses on creating a web application for message encryption using HTML, CSS, and JavaScript. The application allows users to input a message and convert it into an encrypted format to ensure the privacy and confidentiality of the information.",
      url: "https://armandocruzv.github.io/encriptador/",
    },
    {
      id: 6,
      label: <div className="container-img--card" >
        <div className="card-img" ><img src={landing} className='landing' loading="lazy" /></div>
        <div className="card-title-h3" >Landing Page</div>

        <span className="previousText" >This project develops a web application for a blades and mills company...</span>
        <ul className="icon-container--card" >
          <li><TbFileTypeJsx className="jsx-card" /><span className="span-cards">JSX</span></li>
          <li><FaCss3Alt className="css-card" /><span className="span-cards">Css</span></li>
          <li><FaReact className="react-card" /><span className="span-cards">React</span></li>
        </ul>
      </div>,
      text: "This project involves developing a web application for a company specializing in blades and mills for the plastic industry, using React.js and React Router DOM. The application allows users to explore products, access detailed information, and contact the sales team, offering smooth navigation and a modern interface.",
      url: "https://elegant-sunshine-437c40.netlify.app/nosotros",
    },
    {
      label: <div className="container-img--card" >
        <div className="card-img" ><img src={commerce} className='e-commerce' loading="lazy" /></div>
        <div className="card-title-h3" >E-commerce</div>

        <span className="previousText" >This project develops an online store (e-commerce) using React.js...</span>
        <ul className="icon-container--card" >
          <li><TbFileTypeJsx className="jsx-card" /><span className="span-cards">JSX</span></li>
          <li><RiTailwindCssFill className="tailwind-card" /><span className="span-cards">Tailwind</span></li>
          <li><FaReact className="react-card" /><span className="span-cards">React</span></li>
        </ul>
      </div>,
      text: "Este proyecto desarrolla una tienda en línea (e-commerce) utilizando React.js, que se conecta a una API de productos para mostrar y gestionar inventario. La aplicación permite a los usuarios explorar productos, agregar artículos al carrito y realizar compras, ofreciendo una experiencia de compra fluida y moderna.",
      url: "https://armandocruzv.github.io/react-shop/",
    },
    {
      id: 7,
      label: <div className="container-img--card" >
        <div className="card-img" ><img src={Crud} className='crud' loading="lazy" /></div>
        <div className="card-title-h3" >CRUD(SpringBoot)</div>

        <span className="previousText" >This project involves the development of a CRUD application (Create, Read, Update, Delete)...</span>
        <ul className="icon-container--card" >
          <li><FaJava className="java-card" /><span className="span-cards">Java</span></li>
          <li> <TbBrandMysql className="mysql-card" /><span className="span-cards">MySQL</span></li>
          <li><SiSpringboot className="springBoot" /><span className="span-cards">SpringBoot</span></li>
        </ul>
      </div>,
      text: "This project consists of developing a CRUD (Create, Read, Update, Delete) application using Java and Spring Boot. The application connects to a MySQL database, which was specifically designed and configured for this project.",
      url: "https://github.com/ArmandoCruzV/crudExample/tree/main/src/main/java/com/api/crudExample",
    },
    {
      id: 8,
      label: <div className="container-img--card" >
        <div className="card-img" ><img src={dataServer} className='dataServer' loading="lazy" /></div>
        <div className="card-title-h3" >Java connection</div>

        <span className="previousText" >CRUD, using Java and direct SQL queries to interact with a MySQL database...</span>
        <ul className="icon-container--card" >
          <li><FaJava className="java-card" /><span className="span-cards">Java</span></li>
          <li> <TbBrandMysql className="mysql-card" /><span className="span-cards">MySQL</span></li>
        </ul>
      </div>,
      text: "This project focuses on developing a CRUD (Create, Read, Update, Delete) application using Java and direct SQL queries to interact with a MySQL database. The database was manually designed and created to meet the specific needs of the project.",
      url: "https://github.com/ArmandoCruzV/mensajes-app-java/tree/master/src/main/java",
    },
    {
      id: 9,
      label: <div className="container-img--card" >
        <div className="card-img" ><img src={javaImg} className='dataServer' loading="lazy" /></div>
        <div className="card-title-h3" >Java project</div>

        <span className="previousText" >This project involves the development of a medical appointment management system using Java...</span>
        <ul className="icon-container--card" >
          <li><FaJava className="java-card" /><span className="span-cards">Java</span></li>
        </ul>

      </div>,
      text: "This project involves the development of a medical appointment management system using Java. The goal is to facilitate the scheduling, tracking, and management of appointments between patients and healthcare professionals.",
      url: "https://github.com/ArmandoCruzV/MyMedicalAppointments/tree/main/src",
    },
    {
      id: 10,
      label: <div className="container-img--card" >
        <div className="card-img" ><img src={nodeImg} className='nodeImg' loading="lazy" /></div>
        <div className="card-title-h3" >Node project</div>

        <span className="previousText" >CRUD (Create, Read, Update, Delete) using Node.js and the Express framework...</span>
        <ul className="icon-container--card" >
          <li><FaNodeJs className="node-card" /><span className="span-cards">NodeJS</span></li>
          <li><SiExpress className="express-card" /><span className="span-cards">Express</span></li>
        </ul>
      </div>,
      text: "This project focuses on developing a CRUD (Create, Read, Update, Delete) application using Node.js and the Express framework. The goal is to build a RESTful API that enables efficient data management through basic operations on a database.",
      url: "https://github.com/ArmandoCruzV/nodeProject",
    },
  ]

  return (
    <div id="projects" className="projects">

      <Tux3D />
      <AnimatedOvni startx={0} endx={2} starty={4} endy={2} />

      <div className="portfolio-title--container" >
        <div className="portfolio-title" ><span className="portfolio-title-1" >P</span><span className="portfolio-title-2">rojects</span></div>
        <h2 className="portfolio-h2" >Recent projects</h2>
        <h3 className="portfolio-h3" >showcasing some of my best work</h3>
      </div>

      <div className="grid-container">
        {Array.from({ length: description.length }).map((_, index) => (
          <AnimateOnScroll key={index}>
            <div className="grid-item" key={description[index].id}>
              {description[index].label}
              <div className={`description ${showDescriptions[index] ? 'show' : ''}`}>
                <button onClick={() => toggleDescription(index)} className="container-close" ><FaWindowClose className="close-project" /></button>
                {description[index].text}
              </div>
              <div className="card-buttons">
                <button onClick={() => toggleDescription(index)} className="btn-description" >
                  {showDescriptions[index] ? 'Hide Description' : 'Show Description'}
                </button>
                <a className="btn-sendPage" href={description[index].url} target="_blank">Go page</a>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  )
}

export { Projects };
