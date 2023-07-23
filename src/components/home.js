import React from 'react';
import { Link } from 'react-router-dom';
import Software from '../media/logo/software.png';
import GameDev from '../media/logo/gamedev.png';
import HeroBackground from '../media/background/bg.png';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section bg-dark text-white py-5 position-relative"
        style={{ backgroundImage: `url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <div className="hero-content" style={{ background: 'rgba(0, 0, 0, 0.6)', padding: '20px' }}>
                <h1 className="display-4 animate__animated animate__fadeInDown" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  Welcome to My Portfolio!
                </h1>
                <p className="lead animate__animated animate__fadeInUp" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  I'm a passionate Full-Stack Web Developer and Game Developer with a strong enthusiasm for creating engaging
                  and interactive experiences. My journey in software development started with my love for games and evolved
                  into building robust web applications. Check out my projects:
                </p>
                <div className="animate__animated animate__fadeInUp">
                  <Link className="btn btn-primary btn-lg" to="/gameprojects">View Game Projects</Link>
                  <Link className="btn btn-primary btn-lg ms-2" to="/appprojects">View Other Projects</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section py-5 bg-dark bg-gradient text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm opacity-75">
                <img src={GameDev} className="card-img-top" alt="Game Dev" />
                <div className="card-body bg-secondary">
                  <h3 className="card-title">Game Projects</h3>
                  <p className="card-text">
                    Explore my game development projects and games made with love and creativity. Dive into the world of
                    exciting adventures and challenging puzzles.
                  </p>
                  <Link className="btn btn-warning" to="/gameprojects">Explore Games</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm opacity-75">
                <img src={Software} className="card-img-top" alt="Software Dev" />
                <div className="card-body bg-secondary">
                  <h3 className="card-title">Other Projects</h3>
                  <p className="card-text">
                    Discover my other web and software development projects beyond games. From modern web applications
                    to utility software, there's a lot to explore.
                  </p>
                  <Link className="btn btn-warning" to="/appprojects">Explore Others</Link>
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
