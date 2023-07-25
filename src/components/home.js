import React from 'react';
import { Link } from 'react-router-dom';
import Software from '../media/logo/software.png';
import GameDev from '../media/logo/gamedev.png';
import { useTheme } from './themecontrol';

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <>
      {/* Hero Section */}
      <div
        className={`hero-section ${
          darkMode ? 'bg-dark' : 'bg-light bg-gradient light-mode-gradient-header'
        } text-${darkMode ? 'white' : 'black'} py-5 position-relative`}
        style={{
          background: darkMode ? 'rgba(0, 0, 0, 0.15)' : '#f8f9fa',
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <div className="hero-content" style={{ background: darkMode ? 'rgba(0, 0, 0, 0.15)' : 'transparent', padding: '20px' }}>
                <h1 className={`display-4 animate__animated animate__fadeInDown ${darkMode ? 'text-white' : 'text-dark'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', marginTop: '100px' }}>
                  Welcome to My Portfolio!
                </h1>
                <p className={`lead animate__animated animate__fadeInUp ${darkMode ? 'text-white' : 'text-dark'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  I'm a passionate Full-Stack Web Developer and Game Developer with a strong enthusiasm for creating engaging
                  and interactive experiences. My journey in software development started with my love for games and evolved
                  into building robust web applications. Check out my projects:
                </p>
                <div className={`d-flex flex-wrap justify-content-center animate__animated animate__fadeInUp ${darkMode ? 'text-white' : 'text-dark'}`}>
                  <Link className={`btn btn-primary btn-lg ${darkMode ? 'btn-light' : 'btn-dark'} me-2 mb-3`} to="/gameprojects">View Game Projects</Link>
                  <Link className={`btn btn-primary btn-lg ${darkMode ? 'btn-light' : 'btn-dark'} mb-3`} to="/appprojects">View Other Projects</Link>
                </div>
              </div>
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
        <div className="container">
          <div className="row justify-content-center">
            {/* Game Projects */}
            <div className="col-md-6 mb-4">
              <div className={`card h-100 shadow-sm opacity-75 ${darkMode ? 'bg-secondary' : 'bg-light'}`}>
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src={GameDev} className="card-img" alt="Game Dev" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h3 className={`card-title ${darkMode ? 'text-white' : 'text-dark'}`}>Game Projects</h3>
                      <p className={`card-text ${darkMode ? 'text-white' : 'text-dark'}`}>
                        Explore my game development projects and games made with love and creativity. Dive into the world of
                        exciting adventures and challenging puzzles.
                      </p>
                      <Link className={`btn btn-warning ${darkMode ? 'btn-dark' : 'btn-light'}`} to="/gameprojects">Explore Games</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Projects */}
            <div className="col-md-6 mb-4">
              <div className={`card h-100 shadow-sm opacity-75 ${darkMode ? 'bg-secondary' : 'bg-light'}`}>
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src={Software} className="card-img" alt="Software Dev" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h3 className={`card-title ${darkMode ? 'text-white' : 'text-dark'}`}>Other Projects</h3>
                      <p className={`card-text ${darkMode ? 'text-white' : 'text-dark'}`}>
                        Discover my other web and software development projects beyond games. From modern web applications
                        to utility software, there's a lot to explore.
                      </p>
                      <Link className={`btn btn-warning ${darkMode ? 'btn-dark' : 'btn-light'}`} to="/appprojects">Explore Others</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
