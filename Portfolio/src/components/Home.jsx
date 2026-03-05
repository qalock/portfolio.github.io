import React from "react";
import { TypeAnimation } from "react-type-animation";
import developer from "../assets/developer.png";
import Skills from "./Skills";
import Education from "./Education";
import Stats from "./Stats";
import { FaDownload } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
              <h1 className="display-3 fw-bold text-light">
                Hi, I'm Suraj Pandey
              </h1>

              <h3 className="text-warning mt-3">
                <TypeAnimation
                  sequence={[
                    "React Developer",
                    2000,
                    "Django Developer",
                    2000,
                    "Full Stack Developer",
                    2000,
                  ]}
                  speed={50}
                  cursor={true}
                  repeat={Infinity}
                />
              </h3>

              <p className="lead text-light mt-4">
                I build scalable web applications using React, Django and Django
                REST Framework.
              </p>

              <div className="mt-4 d-flex flex-wrap gap-3">
                <a
                  href={`${import.meta.env.BASE_URL}surajresume.pdf`}
                  download="Suraj_Pandey_Resume"
                  className="btn btn-warning px-4 py-2"
                >
                  <FaDownload className="me-2" />
                  Resume
                </a>
        
                <Link to='/projects' className="btn btn-warning px-4 py-2" >VIEW PROJECTS</Link>
                <Link to='/contact' className="btn btn-warning px-4 py-2" >CONTACT ME</Link>

                
              </div>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0" data-aos="fade-left">
              <img
                src={developer}
                alt="developer"
                className="img-fluid hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />
      <Stats />
      <Education />
    </>
  );
}