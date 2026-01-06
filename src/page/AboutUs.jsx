import React from "react";
import "../css/AboutUs.css";
import aboutMO from "../../public/mm.png";

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="about-wrap">

        {/* LEFT IMAGE */}
        <div className="about-left">
          <img
            src={aboutMO}            alt="About Me"
            className="about-img"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
          <span className="about-tag">MY INTRO</span>
          <h2 className="about-title">About Me</h2>

          <p className="about-desc">
            I am student of BSC IT (Bachelor of Science in Information
            Technology ). I am now working as a Web developer and
            Mobile Application Developer
          </p>

          <div className="about-info">
            <p><strong>Name:</strong> <span>Maknojiya Mohammad</span></p>
            <p><strong>Date of birth:</strong> <span>Sept 02, 2006</span></p>
            <p><strong>Address:</strong> <span>Ahmadabad, India</span></p>
            <p><strong>Zip code:</strong> <span>385210</span></p>
            {/* <p><strong>Email:</strong> <span>mak.mohammad29@gmail.com</span></p> */}
            <p><strong>Phone:</strong> <span>+91 7276778597</span></p>
          </div>

          <div className="about-hobbies">
            <div>🎧 Music</div>
            <div>✈️ Travel</div>
            <div>🎬 Movie</div>
            <div>⚽ Sports</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
