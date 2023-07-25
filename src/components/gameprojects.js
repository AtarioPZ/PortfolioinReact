import React, { useState, useEffect } from "react";
import { useTheme } from "./themecontrol";
import game1 from "../media/game/game1.png";
import game2 from "../media/game/game2.png";
import game3 from "../media/game/game3.png";
import game4 from "../media/game/game4.png";
import game5 from "../media/game/game5.png";

const gameProjectsData = [
  {
    title: "Doors & Keys",
    image: game1,
    description:
      "A Simple 2D game where you need to collect coins and keys to pass each level. Dive into the world of exciting adventures and challenging puzzles.",
    tags: ["C#", "2D", "Unity", "2D Sprites"],
    links: [
      { name: "Github", url: "https://github.com/AtarioPZ/Doors-and-Key" },
    ],
  },
  {
    title: "Jumping Dino",
    image: game2,
    description: "Simple Web browser game made using Javascript and CSS.",
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      { name: "Github", url: "https://github.com/AtarioPZ/Jumping-Dino" },
    ],
  },
  // Add other game projects here
  {
    title: "Lost in Rooms",
    image: game3,
    description:
      "A game inspired by Zelda and various other puzzle games. You are trapped inside rooms because of some unforeseen event and now it is your task to solve the puzzles presented in front of you and figure out what happened to you.",
    tags: ["C#", "2D Top Down", "Unity", "Aesprites"],
    links: [
      { name: "Github", url: "https://github.com/AtarioPZ/Game" },
      { name: "Itch.io", url: "https://atariopz.itch.io/lost-in-rooms" },
    ],
  },
  {
    title: "Robo Cleaner",
    image: game4,
    description:
      'A game quickly put together in a day for Wowie Game Jam 4 under the theme of "Collaborate with AI". You assist a robot in getting rid of the pests by controlling a gate.',
    tags: ["C#", "2D Top Down", "Unity", "Game Jam"],
    links: [{ name: "Itch.io", url: "https://atariopz.itch.io/robo-cleaner" }],
  },
  {
    title: "Bottle Flip",
    image: game5,
    description: "Bottle flip game made using only Python.",
    tags: ["Python"],
    links: [{ name: "Github", url: "https://github.com/AtarioPZ/BottleFlip" }],
  },
];

const tagColor = "#ff9800"; // Orange color

const GameProjects = () => {
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
                Game Projects:
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div
        className={`projects-section py-5 ${
          darkMode ? 'bg-dark bg-gradient' : 'bg-light bg-gradient light-mode-gradient'
        } text-${darkMode ? 'white' : 'black'}`}
      >
        <div className="container">
          <div className="row justify-content-center">
            {gameProjectsData.map((project, index) => (
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

export default GameProjects;
