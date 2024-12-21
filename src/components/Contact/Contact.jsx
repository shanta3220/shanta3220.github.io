import "./Contact.scss";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Get in Touch</h2>
      <p className="contact__text">
        Feel free to reach out via email or connect on LinkedIn!
      </p>
      <a href="mailto:example@example.com" className="contact__button">
        Contact Me
      </a>
    </section>
  );
}

export default Contact;
