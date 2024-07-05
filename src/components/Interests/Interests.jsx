"use client";

import { useInView } from "react-intersection-observer";
import styles from "./Interests.module.css";
import "animate.css";

const Interests = () => {
  //Para la visiblidad de los elementos en el navegador
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, //Considera visible al menos el 10% del elemento esta visible dentro del navegador
  });

  return (
    <section
      id="interests"
      className={`${styles.interests} ${
        inView ? "animate__animated animate__lightSpeedInRight" : ""
      }`}
      ref={ref}
    >
      <div className={styles.interestsContainer}>
        <h2>Intereses</h2>
        <ol>
          <li>
            Escalada en Montaña: Explorar nuevas rutas y desafíos verticales en
            diversas montañas.
          </li>
          <br />
          <li>
            Senderismo: Recorrer senderos naturales para disfrutar de la flora y
            fauna local.
          </li>{" "}
          <br />
          <li>
            Fotografía de Naturaleza: Capturar paisajes y momentosúnicos durante
            sus expediciones.
          </li>{" "}
          <br />
          <li>
            Campismo: Acampar en lugares remotos para vivir la experiencia
            completa de la vida al aire libre.
          </li>
          <br />
          <li>
            Geología y Naturaleza: Aprender sobre la formación geológica de las
            montañas y la diversidad de ecosistemas.
          </li>
          <br />
          <li>
            Conservación Ambiental: Contribuir a la protección y conservación de
            los entornos naturales que visita.
          </li>
          <br />
        </ol>
      </div>
    </section>
  );
};

export default Interests;
