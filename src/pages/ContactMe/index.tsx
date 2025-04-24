import React from 'react';
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { ScrollGSAP } from "../../AnimationsSroll";

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

  ScrollGSAP(".tiktok", 0, 20)

  return (
    <div className="parallax">
      <footer className="flex justify-center items-center p-4 text-white">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-2xl transition-colors duration-300 hover:text-blue-400"
          >
            {link.icon}
          </a>
        ))}
      </footer>
    </div>
  );
}

export { ContactMe };
