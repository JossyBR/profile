"use client";

import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  //   const [activeSection, setActiveSection] = useState("");

  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section");
  //     const scrollPos = window.scrollY + window.innerHeight / 2;

  //     sections.forEach((section) => {
  //       if (
  //         scrollPos >= section.offsetTop &&
  //         scrollPos < section.offsetTop + section.offsetHeight
  //       ) {
  //         setActiveSection(section.id);
  //       }
  //     });
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre Mi</a>
        </li>
        <li>
          <a href="#interests">Intereses</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
