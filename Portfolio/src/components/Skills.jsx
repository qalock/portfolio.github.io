import React from "react";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiJavascript,
  SiPostman
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-5" data-aos="zoom-in">
      <div className="container text-center">

        <h2 className="text-warning mb-5 fw-bold">Tech Stack</h2>

        <div className="row g-4">

          <div className="col-md-3">
            <div className="skill-card">
              <FaHtml5 size={50} className="skill-icon"/>
              <h5>HTML</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="skill-card">
              <FaCss3Alt size={50} className="skill-icon"/>
              <h5>CSS</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="skill-card">
              <FaBootstrap size={50} className="skill-icon"/>
              <h5>Bootstrap</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="skill-card">
              <FaReact size={50} className="skill-icon"/>
              <h5>React</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="skill-card">
              <SiDjango size={50} className="skill-icon"/>
              <h5>Django</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="skill-card">
              <FaPython size={50} className="skill-icon"/>
              <h5>Python</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="skill-card">
              <SiJavascript size={50} className="skill-icon"/>
              <h5>JavaScript</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="skill-card">
              <SiMysql size={50} className="skill-icon"/>
              <h5>MySQL</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="skill-card">
              <FaDatabase size={50} className="skill-icon"/>
              <h5>Oracle</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="skill-card">
              <FaDatabase size={50} className="skill-icon"/>
              <h5>PL/SQL</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="skill-card">
              <SiPostman size={50} className="skill-icon"/>
              <h5>Postman</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="skill-card">
              <FaGitAlt size={50} className="skill-icon"/>
              <h5>Git</h5>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}