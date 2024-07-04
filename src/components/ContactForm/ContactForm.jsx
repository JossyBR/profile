"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  //   const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    // if (submitted) {
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     [name]: value ? "" : `Debes completar el ${name}`,
    //   }));
    // }
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

  return (
    <section className={styles.contact}>
      <h2>Contacto</h2>
      <form onClick={handleSubmit}>
        <div>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
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
      <footer >
        <p>&#169; 2024 Jossy Benitez</p>
      </footer>
    </section>
  );
};

export default ContactForm;
