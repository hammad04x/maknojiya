import React, { useEffect, useState } from "react";
import "../css/Home.css";

const Home = () => {
  const roles = ["App Developer", "Web Developer", "Web Designer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero"
 
    >
      <div className="hero-wrap">

        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-top">
            <span className="circle-home"></span>
            <span className="quote">
              WEBSITES PROMOTE YOU 24/7: NO EMPLOYEE WILL DO THAT.
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I’m <span>Mohammad Maknojiya</span>
          </h1>

          <h2 className="hero-subtitle">
            And I am <span className="typing">{roles[roleIndex]}</span>
          </h2>

          <p className="hero-desc">
            Passionate about Web Development. Goal is to achieve a good position
            by doing satisfying work in the IT field.
          </p>

          <div className="hero-buttons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <button className="btn primary">GitHub</button>
            </a>

            <a
              href="https://www.linkedin.com/in/maknojiya-mohammed-b4b22b3a2/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn secondary">LinkedIn</button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE (agar rakhni ho to rahegi, warna hata sakte ho) */}
        {/* <div className="hero-right">
          <img src={heroImg} alt="hero" />
        </div> */}

      </div>
    </section>
  );
};

export default Home;
