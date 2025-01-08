import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { getTransition } from "../../scripts/utils";

import "./ContactPage.scss";

const ContactPage = () => {
  const formRef = useRef(); // Add formRef
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (!name || !email || !message) {
      setFormStatus({ submitted: false, error: "All fields are required." });
      return;
    }

    if (!validateEmail(email)) {
      setFormStatus({
        submitted: false,
        error: "Please enter a valid email address.",
      });
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setFormStatus({ submitted: true, error: null });
          formRef.current.reset();
        },
        (error) => {
          console.error("Email failed:", error.text);
          setFormStatus({
            submitted: false,
            error: "Failed to send message. Please try again later.",
          });
        }
      );
  };

  return (
    <motion.div className="contact" {...getTransition(0, 0.8)}>
      <h1 className="contact__title">Get in Touch</h1>
      <p className="contact__subtitle">
        Have a project in mind? Feel free to reach out, and let's create
        something amazing!
      </p>

      <motion.form
        {...getTransition(0.2, 0.7)}
        ref={formRef}
        className="contact__form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="to_name" value="Recipient Name" />
        <div className="contact__form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            name="from_name"
            placeholder="Your Name"
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            name="user_email"
            placeholder="Your Email"
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            ref={messageRef}
            name="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit" className="contact__submit">
          Send Message
        </button>
        {formStatus.error && (
          <p className="contact__error">{formStatus.error}</p>
        )}
        {formStatus.submitted && (
          <p className="contact__success">Message sent successfully!</p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default ContactPage;
