import React from "react";
import { Link } from "react-router-dom";
import Logo from "../media/logo/logo.png";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/projects"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </Link>
              <ul className="dropdown-menu bg-secondary">
                <li>
                  <Link to="/gameprojects" className="dropdown-item">
                    Games
                  </Link>
                </li>
                <li>
                  <Link to="/appprojects" className="dropdown-item">
                    Others
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/" className="navbar-brand">
          <img src={Logo} height="50" alt="Profile Logo" />
        </Link>
        <div className="d-flex flex-column-reverse">
          <div className="p-2">
            <div className="bd-example">
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                >
                  Contact Me
                </button>
              </p>
            </div>
          </div>
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
