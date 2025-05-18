import { TbArrowBigLeftFilled } from "react-icons/tb";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
import { GrArchlinux } from "react-icons/gr";
import { SiGnubash } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import './style.css'
import { useEffect, useState } from "react";
import { ScrollGSAP } from "../../AnimationsSroll";

const Skills: React.FC = () => {

  ScrollGSAP(".skills-container-h1", 50, 0);
  ScrollGSAP(".skills-cards", 50, 0);

  const arraySkills = [
    { id: 1, element: <div className="container-card-skills" > <FaReact className="react" /> <div className="title-skills" >React</div> </div> },
    { id: 2, element: <div className="container-card-skills" > <FaCss3Alt className="css" /> <div className="title-skills" >CSS</div> </div> },
    { id: 3, element: <div className="container-card-skills" ><FaHtml5 className="html" /> <div className="title-skills" >HTML</div> </div> },
    { id: 4, element: <div className="container-card-skills" ><IoLogoJavascript className="js" /> <div className="title-skills" >Javascript</div> </div> },
    { id: 5, element: <div className="container-card-skills" ><SiSpringboot className="springboot" /> <div className="title-skills" >Springboot</div> </div> },
    { id: 6, element: <div className="container-card-skills" ><FaJava className="java" /> <div className="title-skills" >Java</div> </div> },
    { id: 7, element: <div className="container-card-skills" ><SiMysql className="mysql" /> <div className="title-skills" >MySQL</div> </div> },
    { id: 8, element: <div className="container-card-skills" ><FaGit className="git" /> <div className="title-skills" >Git</div> </div> },
    { id: 9, element: <div className="container-card-skills" ><FaGithub className="github" /> <div className="title-skills" >Github</div> </div> },
    { id: 10, element: <div className="container-card-skills" ><FaUbuntu className="ubuntu" /> <div className="title-skills" >Ubuntu</div> </div> },
    { id: 11, element: <div className="container-card-skills" ><GrArchlinux className="archlinux" /> <div className="title-skills" >ArchLinux</div> </div> },
    { id: 12, element: <div className="container-card-skills" ><SiGnubash className="bash" /> <div className="title-skills" >Bash</div> </div> },
    { id: 13, element: <div className="container-card-skills" ><SiTypescript className="ts" /> <div className="title-skills" >TypeScript</div> </div> },
  ]

  const animationSkills = [
    [
      { transform: 'translateX(0px) scale(1)', transition: 'transform 2s ease', zIndex: '4' },
      { transform: 'translateX(100px) scale(0.8)', transition: 'transform 2s ease', zIndex: '2', opacity: '0.8' },
      { transform: 'translateX(200px) scale(0.6)', transition: 'transform 2s ease', zIndex: '0', opacity: '0.6' },
      { transform: 'translateX(-200px) scale(0.6)', transition: 'transform 2s ease', zIndex: '0', opacity: '0.6' },
      { transform: 'translateX(-100px) scale(0.8)', transition: 'transform 2s ease', zIndex: '2', opacity: '0.8' },
    ],
    [
      { transform: 'translateX(-100px) scale(0.8)', transition: 'transform 2s ease', zIndex: '2', opacity: '0.8' },
      { transform: 'translateX(0px) scale(1)', transition: 'transform 2s ease', zIndex: '4' },
      { transform: 'translateX(100px) scale(0.8)', transition: 'transform 2s ease', zIndex: '2', opacity: '0.8' },
      { transform: 'translateX(200px) scale(0.6)', transition: 'transform 2s ease', zIndex: '0', opacity: '0.6' },
      { transform: 'translateX(-200px) scale(0.6)', transition: 'transform 2s ease', zIndex: '0', opacity: '0.6' },
    ],
    [
      { transform: 'translateX(-200px) scale(0.6)', transition: 'transform 2s ease', zIndex: '0', opacity: '0.6' },
      { transform: 'translateX(-100px) scale(0.8)', transition: 'transform 2s ease', zIndex: '2', opacity: '0.8' },
      { transform: 'translateX(0px) scale(1)', transition: 'transform 2s ease', zIndex: '4' },
      { transform: 'translateX(100px) scale(0.8)', transition: 'transform 2s ease', zIndex: '2', opacity: '0.8' },
      { transform: 'translateX(200px) scale(0.6)', transition: 'transform 2s ease', zIndex: '0', opacity: '0.6' },
    ],
    [
      { transform: 'translateX(100px) scale(0.8)', transition: 'transform 2s ease', zIndex: '2', opacity: '0.8' },
      { transform: 'translateX(200px) scale(0.6)', transition: 'transform 2s ease', zIndex: '0', opacity: '0.6' },
      { transform: 'translateX(-200px) scale(0.6)', transition: 'transform 2s ease', zIndex: '0', opacity: '0.6' },
      { transform: 'translateX(-100px) scale(0.8)', transition: 'transform 2s ease', zIndex: '2', opacity: '0.8' },
      { transform: 'translateX(0px) scale(1)', transition: 'transform 2s ease', zIndex: '4' },
    ],
    [
      { transform: 'translateX(200px) scale(0.6)', transition: 'transform 2s ease', zIndex: '0', opacity: '0.6' },
      { transform: 'translateX(-200px) scale(0.6)', transition: 'transform 2s ease', zIndex: '0', opacity: '0.6' },
      { transform: 'translateX(-100px) scale(0.8)', transition: 'transform 2s ease', zIndex: '2', opacity: '0.8' },
      { transform: 'translateX(0px) scale(1)', transition: 'transform 2s ease', zIndex: '4' },
      { transform: 'translateX(100px) scale(0.8)', transition: 'transform 2s ease', zIndex: '2', opacity: '0.8' },
    ]
  ]

  const [state, setState] = useState({
    1: animationSkills[0][0],
    2: animationSkills[1][0],
    3: animationSkills[2][0],
    4: animationSkills[3][0],
    5: animationSkills[4][0],
  });
  const [num, setNum] = useState(0);

  let isActive = true;

  const manejarClickRight = () => {

    isActive = false;

    if (num < 4) {
      setNum(num + 1);
      const position = num + 1;
      setState({
        1: animationSkills[0][position],
        2: animationSkills[1][position],
        3: animationSkills[2][position],
        4: animationSkills[3][position],
        5: animationSkills[4][position],
      })
    } else {
      setNum(0)
      setState({
        1: animationSkills[0][0],
        2: animationSkills[1][0],
        3: animationSkills[2][0],
        4: animationSkills[3][0],
        5: animationSkills[4][0],
      })
    }
  };

  const manejarClickLeft = () => {

    isActive = false

    if (num > 0) {
      setNum(num - 1);
      const position = num - 1;
      setState({
        1: animationSkills[0][position],
        2: animationSkills[1][position],
        3: animationSkills[2][position],
        4: animationSkills[3][position],
        5: animationSkills[4][position],
      })
    } else {
      setNum(4)
      setState({
        1: animationSkills[0][4],
        2: animationSkills[1][4],
        3: animationSkills[2][4],
        4: animationSkills[3][4],
        5: animationSkills[4][4],
      })
    }
  };


  //animcion 
  const animationClickRight = () => {
    if (num < 4) {
      setNum(num + 1);
      const position = num + 1;
      setState({
        1: animationSkills[0][position],
        2: animationSkills[1][position],
        3: animationSkills[2][position],
        4: animationSkills[3][position],
        5: animationSkills[4][position],
      })
    } else {
      setNum(0)
      setState({
        1: animationSkills[0][0],
        2: animationSkills[1][0],
        3: animationSkills[2][0],
        4: animationSkills[3][0],
        5: animationSkills[4][0],
      })
    }
  };

  ////
  const [contador, setContador] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isActive) {
        animationClickRight()
      }
      setContador(prevContador => prevContador + 1);
    }, 2500);

    // Limpieza del efecto
    return () => clearTimeout(timer);
  }, [contador]); // Dependencia para que se ejecute cada vez que cambia el contador

  /////

  return (
    <div id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-container-titles">
          <h1 className="skills-container-h1" ><span className="skills-container-h1--1" >S</span><span className="skills-container-h1--2" >kills</span></h1>
          <h2 className="skills-container-h2">My skill set</h2>
          <h3 className="skills-container-h3">Specialization in Full-Stack Development</h3>
        </div>

        <TbArrowBigLeftFilled onClick={manejarClickLeft} className="arrow-left" />
        <TbArrowBigRightFilled onClick={manejarClickRight} className="arrow-right" />
        <div className="skills-circle"></div>
        <div className="skills-circle2"></div>

        <div className="skills-cards" >
          <div className="card-0" style={state[3]}>
            <div className="card-0--1" >{arraySkills[6].element}</div>
            <div className="card-0--2" >{arraySkills[7].element}</div>
            <div className="card-0--3" >{arraySkills[8].element}</div>
          </div>
          <div className="card-1" style={state[2]}>
            <div className="card-1--1" >{arraySkills[3].element}</div>
            <div className="card-1--2" >{arraySkills[4].element}</div>
            <div className="card-1--3" >{arraySkills[5].element}</div>
          </div>
          <div className="card-2" style={state[1]} >
            <div className="card-2--1" >{arraySkills[0].element}</div>
            <div className="card-2--2" >{arraySkills[1].element}</div>
            <div className="card-2--3" >{arraySkills[2].element}</div>
          </div>
          <div className="card-3" style={state[4]}>
            <div className="card-3--1" >{arraySkills[9].element}</div>
            <div className="card-3--2" >{arraySkills[10].element}</div>
            <div className="card-3--3" >{arraySkills[11].element}</div>
          </div>
          <div className="card-4" style={state[5]}>
            <div className="card-4--1" >{arraySkills[12].element}</div>
            <div className="card-4--2" >{arraySkills[1].element}</div>
            <div className="card-4--3" >{arraySkills[2].element}</div>
          </div>
        </div>

      </div >
    </div >
  )
}

export { Skills };
