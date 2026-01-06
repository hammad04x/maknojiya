import React from "react";
import {
  Code2,
  Smartphone,
  Layers3,
  Monitor
} from "lucide-react";
import "../css/Services.css";

const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="services-container">

          <span className="services-tag">I AM GREAT AT</span>
          <h2 className="services-title">
            I do Awesome Services for our Clients
          </h2>

          <div className="services-grid">

            {/* Card 1 */}
            <div className="service-card">
              <div className="service-icon">
                <Code2 size={32} />
              </div>
              <h3>Web Development</h3>
              <p>Create website with frontend, backend and Rest API</p>
            </div>

            {/* Card 2 */}
            <div className="service-card">
              <div className="service-icon">
                <Smartphone size={32} />
              </div>
              <h3>Mobile Application</h3>
              <p>Create mobile application using React Native for android & ios</p>
            </div>

            {/* Card 3 */}
            <div className="service-card">
              <div className="service-icon">
                <Layers3 size={32} />
              </div>
              <h3>Web Design</h3>
              <p>Prepare easy user interface and work smoothly</p>
            </div>

            {/* Card 4 */}
            <div className="service-card">
              <div className="service-icon">
                <Monitor size={32} />
              </div>
              <h3>Desktop Application</h3>
              <p>Create desktop application using java and electron js</p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="contact-banner">
        <div className="contact-banner-container">
          <h2>Have a project on your mind.</h2>
          <p>
            If you have an Idea, you can share your idea with me and i will return
            your idea with beautiful design
          </p>
          <button id="contact" className="contact-btn">Contact me</button>
        </div>
      </section>
    </>
  );
};

export default Services;
