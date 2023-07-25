import React, { useState, useEffect } from 'react';
import other1 from '../media/app/other1.png';
import other2 from '../media/app/other2.png';
import other3 from '../media/app/other3.png';
import other4 from '../media/app/other4.png';
import { useTheme } from "./themecontrol";

const appProjectsData = [
    {
      title: 'Hostel Management System',
      image: other1,
      description:
        'A database management system made for an institute for an offline system to manage the allocation and deallocation of rooms for students and employees of an institute.',
      features: ['Admin Mode', 'Manage Rooms', 'Manage Residents', 'Check Records'],
      tags: ['VB.NET', 'Visual Studio', 'MSSQL'],
      links: [{ name: 'Github', url: 'https://github.com/AtarioPZ/Hostel-management' }],
    },
    {
      title: 'React MySQL',
      image: other2,
      description: 'Connection between MySQL using React to view contents of a database. Database is stored in the localhost.',
      tags: ['React', 'MySQL', 'Apache'],
      links: [{ name: 'Github', url: 'https://github.com/AtarioPZ/ReactMySQL' }],
    },
    // Add other app projects here
    {
      title: 'Automate certificate creation',
      image: other3,
      description:
        'Tired of manually writing the names while creating a certificate? Use this script to automate the creation of certificates by giving it access to the names list.',
      features: ['One Click use', 'Easy configuration of path location', 'PPTX to PDF conversion'],
      tags: ['Python', 'PPTX, PPT support', 'PDF conversion'],
      links: [{ name: 'Github', url: 'https://github.com/AtarioPZ/CertificateAutomation' }],
    },
    {
      title: 'Chatbot Flow Builder',
      image: other4,
      description: 'A simple Chatbot flow builder using React and extensible to easily add new features like more custom nodes.',
      tags: ['React', 'React Flow', 'Javascript'],
      links: [
        { name: 'Github', url: 'https://github.com/AtarioPZ/chatbot' },
        { name: 'Vercel', url: 'https://chatbot-atariopz.vercel.app/' },
      ],
    },
  ];

const tagColor = "#ff9800";

const AppProjects = () => {
  const { darkMode } = useTheme();
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setShowProjects(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className={`hero-section ${
          darkMode ? 'bg-dark' : 'bg-light bg-gradient light-mode-gradient-header'
        } text-${darkMode ? 'white' : 'black'} py-5`}
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-8 text-center ">
              <h1
                className="display-4 animate__animated animate__fadeInDown"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Other Projects:
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        className={`projects-section py-5 ${
          darkMode ? 'bg-dark bg-gradient' : 'bg-light bg-gradient light-mode-gradient'
        } text-${darkMode ? 'white' : 'black'}`}
      >
        <div className="container my-2">
          <div className="row justify-content-center">
            {appProjectsData.map((project, index) => (
              <div
              key={index}
              className={`col-md-6 mb-4 ${
                showProjects
                  ? "animate__animated animate__fadeInLeft"
                  : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
                <div
                  className={`card h-100 shadow-sm opacity-90 ${
                    darkMode ? "bg-secondary" : "bg-light"
                  }`}
                  style={{
                    background: darkMode ? "#303030" : "#f0f0f0",
                    border: `1px solid ${tagColor}`,
                  }}
                >
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img
                        src={project.image}
                        className="img-fluid rounded"
                        alt={project.title}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h3
                          className={`card-title ${
                            darkMode ? "text-white" : "text-dark"
                          }`}
                          style={{ color: "#d4e157" }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`card-text ${
                            darkMode ? "text-white" : "text-dark"
                          }`}
                        >
                          {project.description}
                        </p>
                        <div className="d-flex justify-content-center my-4">
                          <div className="work-item-tags-container">
                            {project.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className={`work-item-tag capsule ${
                                  darkMode
                                    ? "text-white bg-secondary"
                                    : "text-dark bg-light"
                                }`}
                                style={{ background: '#FFA500' }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div
                            className="accordion"
                            id={`accordionPanelsStayOpenExample${index}`}
                          >
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#panelsStayOpen-collapse${index}`}
                                  aria-expanded="true"
                                  aria-controls={`panelsStayOpen-collapse${index}`}
                                >
                                  View Project Link
                                </button>
                              </h2>
                              <div
                                id={`panelsStayOpen-collapse${index}`}
                                className="accordion-collapse collapse"
                              >
                                <div className="accordion-body">
                                  <ul>
                                    {project.links.map((link, idx) => (
                                      <li key={idx} className="nav-item">
                                        <a
                                          className="nav-link active"
                                          target="_blank"
                                          aria-current="page"
                                          href={link.url}
                                        >
                                          {link.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppProjects;
