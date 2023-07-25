import React from "react";
import Logo from "../media/logo/logo.png";
import { Link } from "react-router-dom";
import { useTheme } from "./themecontrol";

function Navigation() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <div className="flex-column justify-content-start align-items-end flex-grow-1">
          <button
            className="btn btn-light"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Contact Me
          </button>
        </div>

        {/* Brand Logo*/}
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <div className="logo-container">
            <Link to="/" className="navbar-brand">
              <img
                src={Logo}
                height="50"
                alt="Profile Logo"
                style={{ margin: "auto" }}
              />
            </Link>
          </div>
        </div>

        {/* Toggle Theme Switch*/}
        <div className="d-flex justify-content-end align-items-center flex-grow-1">
          <button
            className={`btn btn-toggle-theme ${
              darkMode ? "text-warning" : "text-primary"
            }`}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <i className="bi bi-sun-fill"></i>
            ) : (
              <i className="bi bi-moon-fill"></i>
            )}
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactModalLabel">
                Contact Me
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="https://formspree.io/f/xqkvagnr" method="POST">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your message for me...
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
