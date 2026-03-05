import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 backdrop-blur shadow-sm sticky-top">
      <div className="container">

        {/* Brand */}
        <NavLink className="navbar-brand fw-bold fs-4 text-info" to="/">
          PortFolio
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-lg-4 text-center">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link fw-semibold text-info"
                    : "nav-link text-white"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link fw-semibold text-info"
                    : "nav-link text-white"
                }
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link fw-semibold text-info"
                    : "nav-link text-white"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link fw-semibold text-info"
                    : "nav-link text-white"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}