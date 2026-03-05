import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer-section text-center text-light py-4">

      <div className="container">

        <h5 className="mb-3 text-warning">Suraj Pandey</h5>

        <p className="mb-3">
          Full Stack Developer | React • Django • DRF
        </p>

        {/* Social Icons */}
        <div className="social-icons mb-3">

          <a
            href="https://github.com/qalock"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pandeythetester/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:surajpandey2007@gmail.com?subject=Portfolio Contact"
            className="icon"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="small">
          © {new Date().getFullYear()} Suraj Pandey. All rights reserved.
        </p>

      </div>

      {/* Scroll To Top Button */}
      {showTop && (
        <button className="scroll-top" onClick={scrollTop}>
          <FaArrowUp />
        </button>
      )}

    </footer>
  );
}