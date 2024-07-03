const ContactForm = () => {
  return (
    <section>
      <h2>Contacto</h2>

      <form>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="">Mensaje</label>
          <textarea id="message" name="message" required />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
