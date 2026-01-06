import React, { useEffect, useState } from "react";
import "../css/Navbar.css";

const sections = ["home", "about", "skills", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">

        {/* Logo */}
        <h2 className="logo">Mohammad</h2>

        {/* Menu */}
        <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className={activeSection === sec ? "active" : ""}
            >
              {sec.toUpperCase()}
            </button>
          ))}

          <button
            className={`resume-btn ${activeSection === "" ? "active" : ""}`}
            onClick={() => scrollToSection("contact")}
          >
            RESUME
          </button>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
