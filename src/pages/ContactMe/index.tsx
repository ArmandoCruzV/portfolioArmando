//import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { ScrollGSAP } from "../../AnimationsSroll";
import "./style.css"

const socialLinks = [
  {
    id: 1,
    icon: <FaTiktok className='tiktok' />,
    url: "https://www.tiktok.com/@yourusername",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/yourusername/",
  },
  {
    id: 3,
    icon: <FaGithub />,
    url: "https://github.com/yourusername",
  },
];

const ContactMe: React.FC = () => {
  // useEffect(() => {
  ScrollGSAP(".planet", 200, 0, "top 90%", "top 30%", 1);
  //}, []);

  return (
    <div className="parallax">
      <div className="background">
        <img src="https://img.freepik.com/free-psd/earth-ball-planet-isolated_23-2151806115.jpg?t=st=1746148283~exp=1746151883~hmac=6304d7dc1ea1828cc5562f69758fc1e358eaf5722174e1894e8ea920b14cde9e&w=740" className="planet2" alt="Planet 1" />
        <img src="https://img.freepik.com/free-psd/earth-ball-planet-isolated_23-2151806115.jpg?t=st=1746148283~exp=1746151883~hmac=6304d7dc1ea1828cc5562f69758fc1e358eaf5722174e1894e8ea920b14cde9e&w=740" className="planet" alt="Planet 2" />
        <img src="https://img.freepik.com/free-vector/astronaut_1308-83240.jpg?t=st=1746150838~exp=1746154438~hmac=3db6643559b11d22b8ad941ac84ddad445392fffbba1c981c09" className="astronaut" alt="Astronaut" />
      </div>
      <footer className="foter">
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
