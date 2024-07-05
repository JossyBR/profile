import styles from "./Interests.module.css";
const Interests = () => {
  return (
    <section id="interests" className={styles.interests}>
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
