import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "kumaranlaxi",
      "template_jsi98rj",
      form.current,
      "aeAPnRHwWQeo1rm_-"
    );
    e.target.reset();
  };

  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contactcontainer">
        <div className="contactoptions">
          <article className="contactoption">
            <MdOutlineEmail className="contactoption-icon" />
            <h4>Email</h4>
            <h5>siva98kumarane@gmail.com</h5>
            <a href="mailto:siva98kumarane@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
