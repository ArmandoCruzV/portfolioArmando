import React, { useState } from 'react';
import { LiaDev } from "react-icons/lia";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import './style.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <a href="#"><LiaDev className='logo-icon' /></a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} />
      </button>
      <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <button className="hamburger" onClick={toggleMenu}>
          <IoCloseSharp className='hamburger-icon--active' />
        </button>
        <li><a href="#about">Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#contacto">ContactMe</a></li>
      </ul>
    </nav>
  );
};

export { Navbar };

