"use client";

import styles from "./About.module.css";

const About = () => (
  <section id="about" className={styles.section}>
    <div className={styles.aboutcontainer}>
      <h2>Sobre Mi</h2>
      <p>
        ¡Hola! Soy Carlos Mendoza, un apasionado de la naturaleza y los desafíos
        al aire libre. Me encanta explorar las montañas y descubrir nuevos
        paisajes que la madre naturaleza tiene para ofrecer. Con cada ascenso,
        encuentro una conexión única con el entorno y una sensación de logro que
        solo los amantes de la montaña entenderán.
      </p>
      <p>
        Mi chaqueta es mi compañera fiel en cada expedición, protegiéndome del
        viento y el frío mientras busco nuevas rutas y vistas impresionantes.
        Soy un entusiasta de la escalada y disfruto cada momento de superación
        personal que este deporte me brinda.
      </p>
      <p>
        Además de la montaña, me gusta compartir mis experiencias y
        conocimientos sobre el aire libre con otros aventureros, animándolos a
        explorar y disfrutar de la naturaleza tanto como yo lo hago.
      </p>
      <p>Únete a mí en esta aventura hacia lo más alto!</p>
    </div>
  </section>
);

export default About;
