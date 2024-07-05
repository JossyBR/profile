"use client";

import { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { useInView } from "react-intersection-observer";
import "animate.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Debes completar el nombre";
    if (!form.email) newErrors.email = "Debes completar el email";
    if (!form.message) newErrors.message = "Debes escribir un mensaje";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmitted(true);
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("¡Mensaje enviado con éxito!");
      setForm({ name: "", email: "", message: "" });
      //   setSubmitted(false);
      setErrors({});
    }
  };

  useEffect(() => {
    let animationInterval;

    if (inView) {
      animationInterval = setInterval(() => {
        setIsAnimating((prevIsAnimating) => !prevIsAnimating);
      }, 3000);
    } else {
      clearInterval(animationInterval);
      setIsAnimating(false);
    }
    return () => clearInterval(animationInterval);
  }, [inView]);

  return (
    <>
      <section id="contact" className={styles.contact}>
        <h2>Contacto</h2>
        <form
          className={`${styles.form} ${
            isAnimating ? "animate__animated animate__pulse" : ""
          }`}
          ref={ref}
          onClick={handleSubmit}
        >
          <h3>¡Contactame!</h3>
          <div>
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Juan Castillo"
              value={form.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="juan@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              value={form.message}
              onChange={handleChange}
              required
            />
            {errors.message && (
              <p className={styles.errorText}>{errors.message}</p>
            )}
          </div>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
