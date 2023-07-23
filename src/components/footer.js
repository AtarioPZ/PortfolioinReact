import React from 'react';
import githubLogo from '../media/logo/github.png';
import twitterLogo from '../media/logo/twitter.png';
import discordLogo from '../media/logo/discord.png';
import cvLogo from '../media/logo/cv.png';

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-fluid">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="https://github.com/AtarioPZ" target="_blank" className="nav-link px-2">
              <img src={githubLogo} height="50" alt="Github" style={{ width: '50px', height: '50px' }} />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com/V_BTY" target="_blank" className="nav-link px-2">
              <img src={twitterLogo} height="50" alt="Twitter" style={{ width: '50px', height: '50px' }} />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://discordapp.com/users/163320954817216513" target="_blank" className="nav-link px-2">
              <img src={discordLogo} height="50" alt="Discord" style={{ width: '50px', height: '50px' }} />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://1drv.ms/b/s!Aujv1vHzpbxyjUkbkA4g6Q_xl9XI?e=1Xmna0" target="_blank" className="nav-link px-2">
              <img src={cvLogo} height="50" alt="CV" style={{ width: '50px', height: '50px' }} />
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid bg-dark text-white text-center py-3">
        <p className="mb-0">© 2023 Victor Basumatary</p>
      </div>
    </footer>
  );
}

export default Footer;
