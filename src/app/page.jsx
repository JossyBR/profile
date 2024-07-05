"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Interests from "@/components/Interests/Interests";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Nav/NavBar";

const Home = () => {
  const [activeSection, setActiveSection] = useState(""); //Almaceno la seccion activa

  //Manejar el scroll y determinar la seccion activa
  const handleScroll = () => {
    const sections = document.querySelectorAll("section"); //Se obtienen todas las secciones de la pagina
    const scrollPos = window.scrollY + window.innerHeight / 2; //Se calcula la posicion de scroll mas el tamaño de la ventana visible

    sections.forEach((section) => {
      if (
        //Se verifica si el scrol esta dentro de los limites de la seccion actual
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        setActiveSection(section.id); //Se establece sesion activa basada en el ID
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Defino las secciones de la pagina con sus respectivos componentes
  const sections = [
    { id: "header", component: <Header /> },
    { id: "about", component: <About /> },
    { id: "interests", component: <Interests /> },
    { id: "contact", component: <ContactForm /> },
    { id: "footer", component: <Footer /> },
  ];

  return (
    <div>
      <NavBar activeSection={activeSection} />
      {sections.map(({ id, component }) => (
        <section key={id} id={id}>
          {component}
        </section>
      ))}
    </div>
  );
};

export default Home;

// import styles from "./page.module.css";
// import Header from "@/components/Header/Header";
// import About from "@/components/About/About";
// import Interests from "@/components/Interests/Interests";
// import ContactForm from "@/components/ContactForm/ContactForm";
// import NavBar from "@/components/Nav/NavBar";
// import Footer from "@/components/Footer/Footer";

// export default function Home() {
//   return (
//     <div>
//       <NavBar />
//       <Header />
//       <About />
//       <Interests />
//       <ContactForm />
//       <Footer />
//     </div>
//   );
// }
