import React from "react";

export default function Projects() {
  return (
    <React.Fragment>
      <section className="projects-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center text-light mb-5">Projects</h2>

          <div className="row g-4 justify-content-center">
            {/* Project 1 */}
            <div className="col-md-5" data-aos="fade-up">
              <div className="project-card">
                <h4>Inventory & Warehouse Management System</h4>

                <p>
                  A web application for managing products, warehouses and
                  inventory stock levels. Built using Django MVT architecture
                  with a responsive Bootstrap interface.
                </p>

                <div className="project-tech">Django | Bootstrap | SQLite</div>

                <div className="mt-3">

                  <a
                    href="https://github.com/sssituser/Python5thBatch_Team6/tree/main/Mini%20Project/Inventory_Warehouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-5" data-aos="fade-up">
              <div className="project-card">
                <h4>Appointment Booking System</h4>

                <p>
                  Full stack appointment scheduling application with React
                  frontend and Django REST Framework backend APIs. Users can
                  book time slots with real-time availability.
                </p>

                <div className="project-tech">
                  React | Django REST | Bootstrap
                </div>

                <div className="mt-3">
                

                  <a
                    href="https://github.com/qalock/appointmentbooking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
