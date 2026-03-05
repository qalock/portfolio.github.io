import React from "react";
import aboutImg from "../assets/developer.png";

export default function About() {
  return (
    <section className="about-section py-5">
      <div className="container">

        <h2 className="text-center text-warning fw-bold mb-5">
          About Me
        </h2>

        <div className="row align-items-center">

          {/* Image */}
          <div className="col-lg-5 text-center mb-4">
            <img
              src={aboutImg}
              alt="about"
              className="img-fluid rounded about-img"
            />
          </div>

          {/* Text */}
          <div className="col-lg-7">

            <h3 className="text-light fw-bold mb-3">
              Full Stack Developer
            </h3>

            <p className="text-light">
              I am <span className="text-warning">Suraj Pandey</span>, a
              Full Stack Developer specializing in building modern web
              applications using React and Django.
            </p>

            <p className="text-light">
              I focus on creating scalable backend systems with
              <span className="text-warning"> Django & Django REST Framework</span> 
               and responsive frontend interfaces using
              <span className="text-warning"> React and Bootstrap</span>.
            </p>

            <p className="text-light">
              I have built projects like an
              <span className="text-warning"> Inventory & Warehouse Management System</span>
               and an
              <span className="text-warning"> Appointment Booking Application</span>
               using full stack technologies.
            </p>

            {/* Highlights */}
            <div className="row mt-4">

              <div className="col-md-6 mb-3">
                <div className="about-box">
                  <h5 className="text-warning">Frontend</h5>
                  <p className="text-light mb-0">
                    React, HTML, CSS, Bootstrap
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="about-box">
                  <h5 className="text-warning">Backend</h5>
                  <p className="text-light mb-0">
                    Django, DRF, PostgreSQL
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="about-box">
                  <h5 className="text-warning">Tools</h5>
                  <p className="text-light mb-0">
                    Git, Postman, Oracle
                  </p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="about-box">
                  <h5 className="text-warning">Testing</h5>
                  <p className="text-light mb-0">
                    Selenium, TestNG, Manual Testing
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}