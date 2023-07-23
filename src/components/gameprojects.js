import React from 'react';
import { Link } from 'react-router-dom';
import HeroBackground from '../media/background/bg.png';
import game1 from '../media/game/game1.png';
import game2 from '../media/game/game2.png';
import game3 from '../media/game/game3.png';
import game4 from '../media/game/game4.png';
import game5 from '../media/game/game5.png';

const gameProjectsData = [
  {
    title: 'Doors & Keys',
    image: game1,
    description: 'A Simple 2D game where you need to collect coins and keys to pass each level. Dive into the world of exciting adventures and challenging puzzles.',
    tags: ['C#', '2D', 'Unity', '2D Sprites'],
    links: [
      { name: 'Github', url: 'https://github.com/AtarioPZ/Doors-and-Key' }
    ]
  },
  {
    title: 'Jumping Dino',
    image: game2,
    description: 'Simple Web browser game made using Javascript and CSS.',
    tags: ['HTML', 'CSS', 'Javascript'],
    links: [
      { name: 'Github', url: 'https://github.com/AtarioPZ/Jumping-Dino' }
    ]
  },
  // Add other game projects here
  {
    title: 'Lost in Rooms',
    image: game3,
    description: 'A game inspired by Zelda and various other puzzle games. You are trapped inside rooms because of some unforeseen event and now it is your task to solve the puzzles presented in front of you and figure out what happened to you.',
    tags: ['C#', '2D Top Down', 'Unity', 'Aesprites'],
    links: [
      { name: 'Github', url: 'https://github.com/AtarioPZ/Game' },
      { name: 'Itch.io', url: 'https://atariopz.itch.io/lost-in-rooms' }
    ]
  },
  {
    title: 'Robo Cleaner',
    image: game4,
    description: 'A game quickly put together in a day for Wowie Game Jam 4 under the theme of "Collaborate with AI". You assist a robot in getting rid of the pests by controlling a gate.',
    tags: ['C#', '2D Top Down', 'Unity', 'Game Jam'],
    links: [
      { name: 'Itch.io', url: 'https://atariopz.itch.io/robo-cleaner' }
    ]
  },
  {
    title: 'Bottle Flip',
    image: game5,
    description: 'Bottle flip game made using only Python.',
    tags: ['Python'],
    links: [
      { name: 'Github', url: 'https://github.com/AtarioPZ/BottleFlip' }
    ]
  },
];

const GameProjects = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section bg-dark text-white py-5"
        style={{ backgroundImage: `url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="display-4 animate__animated animate__fadeInDown" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Game Projects:
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section py-5 bg-dark bg-gradient text-white">
        <div className="container">
          <div className="row justify-content-center">
            {gameProjectsData.map((project, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm opacity-75 animate__animated animate__fadeInUp">
                  <div className="bg-dark bg-gradient text-white d-flex justify-content-center">
                    <h3>{project.title}</h3>
                  </div>
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body bg-light">
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex justify-content-center my-4">
                      <div className="work-item-tags-container">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} style={{ color: 'white', padding: '8px', background: '#506347', marginRight: '8px' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="accordion" id={`accordionPanelsStayOpenExample${index}`}>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${index}`} aria-expanded="true" aria-controls={`panelsStayOpen-collapse${index}`}>
                              View Project Link
                            </button>
                          </h2>
                          <div id={`panelsStayOpen-collapse${index}`} className="accordion-collapse collapse">
                            <div className="accordion-body">
                              <ul>
                                {project.links.map((link, idx) => (
                                  <li key={idx} className="nav-item">
                                    <a className="nav-link active" target="_blank" aria-current="page" href={link.url}>{link.name}</a>
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameProjects;
