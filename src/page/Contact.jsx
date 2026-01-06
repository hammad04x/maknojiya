import React from "react";
import "../css/Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <span className="contact-tag">CONTACT US</span>
        <h2 className="contact-title">Have a Project?</h2>
        <p className="contact-desc">
          Have a Project ? If yes you can share with me
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <div className="contact-icon"><i class="fa-brands fa-github"></i></div>
            <h4>Github</h4>
          </div>

          <div className="contact-card">
            <a href="https://www.linkedin.com/in/maknojiya-mohammed-b4b22b3a2/" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon"><i class="fa-brands fa-linkedin"></i></div>
            </a>
            <h4>LinkedIn</h4>
          </div>

          <div className="contact-card">
            <a
              href="mailto:maknojiamohammednew@gmail.com?subject=Project Inquiry&body=Hello Mohammad,"
              className="contact-link"
            >
              <div className="contact-icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <h4>Email</h4>
            </a>
          </div>


          <div className="contact-card">
            <a
              href="https://wa.me/917276778597"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <h4>WhatsApp</h4>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
