import React from "react";
import { Link } from "react-router-dom";
import SW from "../assets/Surgewindow.jpg";
import SQL from "../assets/Logos/sql.svg";
import ReactLogo from "../assets/Logos/react.svg";
import GH from "../assets/GitHub2.png";

function Stellar() {
  return (
    <div className="Project-card">
      <div className="project-title-container">
        <h1>Orbitz Travel Mockup Site</h1>
      </div>

      <div className="project-window">
        <div className="project-desc">
          <p>
            This was a group project at GA collaborating with the UX class to create a full-stack mock up of an
            existing travel site. I was responsbile for the Back End where I used SQL to create a database of over 100 flights between 6
            different airports. As per request of our UX collaborators, we also added an "Eco-friendly" option, where users would be able to select
            from filitered flights.
          </p>
        </div>
        <div className="project-icon-container">
          <a href="https://stellar-travel.surge.sh/" target="_blank">
            <img src={SW} className="ProjectIcon" alt="stellar" />
          </a>
        </div>
      </div>

      <div className="languageIconContainer">
        <div className="languageIcons">
          <div className="project-icons">
            <img src={ReactLogo} alt="icon" className="linkIcon" />
            <img src={SQL} alt="icon" className="linkIcon" />
            <a href="https://github.com/taubman33/Stellar" target="_blank">
              <img src={GH} alt="icon" className="linkIcon" />
            </a>
          </div>
        </div>
        <Link to="/projects"> Back to Projects Page</Link>
      </div>
    </div>
  );
}

export default Stellar;
