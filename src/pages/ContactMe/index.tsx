import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { ScrollGSAP } from "../../AnimationsSroll";
import luna from "../../assets/contactMe/luna.png";
import tierra from "../../assets/contactMe/tierra.png";
import astronauta from "../../assets/contactMe/astronauta.png";
import { AnimatedOvni } from '../../AnimationsSroll/AnimationOvni.tsx';
import "./style.css"

const socialLinks = [
  {
    id: 1,
    icon: <FaTiktok className='contactMe-tiktok' />,
    url: "https://www.tiktok.com/@haok2d",
  },
  {
    id: 2,
    icon: <FaLinkedin className='contactMe-linkedin' />,
    url: "https://www.linkedin.com/in/armando-cruz-2a5897236/",
  },
  {
    id: 3,
    icon: <FaGithub className='contactMe-github' />,
    url: "https://github.com/ArmandoCruzV",
  },
];

const ContactMe: React.FC = () => {
  // useEffect(() => {
  ScrollGSAP(".planet", 200, 0, "top 100%", "top 30%", 1);
  ScrollGSAP(".luna", 0, 200, "top 90%", "top 30%", 1);
  //
  ScrollGSAP(".contactMe-tiktok", 200, -200, "top 150%", "top 70%", 1);
  ScrollGSAP(".contactMe-github", 200, 200, "top 150%", "top 70%", 1);
  ScrollGSAP(".contactMe-linkedin", -200, 0, "top 150%", "top 70%", 1);

  return (
    <div id='contacto' className="parallax">

      <AnimatedOvni />

      <div className="background">
        <img src={luna} className="luna" alt="Planet 1" loading="lazy" />
        <img src={tierra} className="planet" alt="Planet 2" loading="lazy" />
        <img src={astronauta} className="astronaut" alt="Astronaut" loading="lazy" />
      </div>
      <footer className="footer">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {link.icon}
          </a>
        ))}
      </footer>
    </div>
  );
}

export { ContactMe };
