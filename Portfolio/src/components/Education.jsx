import React from "react";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

export default function Education() {
  return (
    <section className="education-section py-5" data-aos="fade-right">
      <div className="container">

        <h2 className="text-center text-warning mb-5 fw-bold">
          Education & Learning
        </h2>

        <div className="row">

          {/* Education */}
          <div className="col-md-6 mb-4">
            <div className="edu-card p-4 h-100">

              <div className="d-flex align-items-center mb-3">
                <FaGraduationCap size={30} className="text-warning me-3"/>
                <h4 className="mb-0">B.Tech</h4>
              </div>

              <p className="text-warning mb-1">
                DRK Institute of Science & Technology
              </p>

              <p className="text-light">
                Graduated in 2023 with a Bachelor's degree in Technology.
                Built multiple academic and personal projects using
                Django, React and REST APIs.
              </p>

            </div>
          </div>


          {/* Learning */}
          <div className="col-md-6 mb-4">
            <div className="edu-card p-4 h-100">

              <div className="d-flex align-items-center mb-3">
                <FaBookOpen size={30} className="text-warning me-3"/>
                <h4 className="mb-0">Self Learning</h4>
              </div>

              <p className="text-warning mb-1">
                Full Stack Development
              </p>

              <p className="text-light">
                Practicing full stack development using React, Django,
                Django REST Framework, Bootstrap and API integrations.
                Built projects like Inventory Management System and
                Appointment Booking Application.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}