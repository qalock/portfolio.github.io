import React from "react";

export default function Stats() {
  return (
    <section className="stats-section py-5">
      <div className="container">

        <div className="row text-center">

          <div className="col-md-3 col-6 mb-4">
            <div className="stat-box">
              <h2 className="text-warning fw-bold">2+</h2>
              <p className="text-light mb-0">Projects Built</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="stat-box">
              <h2 className="text-warning fw-bold">10+</h2>
              <p className="text-light mb-0">Technologies</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="stat-box">
              <h2 className="text-warning fw-bold">Full Stack</h2>
              <p className="text-light mb-0">Developer</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="stat-box">
              <h2 className="text-warning fw-bold">REST</h2>
              <p className="text-light mb-0">API Development</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}