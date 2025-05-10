import React, { useState, useEffect } from 'react';
import { LiaDev } from "react-icons/lia";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import './style.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const sectionIds = ["about", "skills", "projects", "courses", "contacto"];

    for (let i = 0; i < sectionIds.length; i++) {
      const sectionId = sectionIds[i];
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const offsetTop = sectionElement.offsetTop;
        const offsetHeight = sectionElement.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call initially in case page is already scrolled
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="logo">
        <a href="#about"><LiaDev className='logo-icon' /></a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} />
      </button>
      <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <button className="hamburger" onClick={toggleMenu}>
          <IoCloseSharp className='hamburger-icon--active' />
        </button>
        <li><a className={activeSection === "about" ? "active" : ""} href="#about">Me</a></li>
        <li><a className={activeSection === "skills" ? "active" : ""} href="#skills">Skills</a></li>
        <li><a className={activeSection === "projects" ? "active" : ""} href="#projects">Projects</a></li>
        <li><a className={activeSection === "courses" ? "active" : ""} href="#courses">Courses</a></li>
        <li><a className={activeSection === "contacto" ? "active" : ""} href="#contacto">ContactMe</a></li>
      </ul>
    </nav>
  );
};

export { Navbar };

