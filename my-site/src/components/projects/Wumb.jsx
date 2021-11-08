import React from "react";
import { Link } from "react-router-dom";
import ReactLogo from "../assets/Logos/react.svg";
import GH from "../assets/GitHub2.png";
import W1 from "../assets/Wumb1.png";
import DJ from "../assets/Logos/DJSVG.svg";

function Wumb() {
  return (
    <div className="Project-card">

      <div className="project-title-container">
        <h1>WUMB Listen </h1>
      </div>

      <div className="project-window">
        <div className="project-desc" style={{}}>
          <p>
            Built with a fellow instructor and previous student, WUMB
            Listen pulls data from the UM Boston radio station and links to the top 
            Youtube video for that song. Users can search through the calendar and go through
            the times to find a Youtube video of that great song they heard
            driving earlier.
          </p>
        </div>

        <div className="project-icon-container">
          <a
            href="https://wumb-proxy-2.herokuapp.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={W1} className="ProjectIcon" alt="letters" />
          </a>
        </div>

      </div>


      <div className="languageIconContainer">
      <div className="languageIcons">
          <div className="project-icons">
            <img src={ReactLogo} alt="icon" className="lang linkIcon" />
            <img src={DJ} alt="icon" className="lang linkIcon" />
            <a href="https://github.com/taubman33/wumb-front" target="_blank">
              <img src={GH} alt="icon" className="linkIcon" />
            </a>


          </div>
        </div>

        <Link to="/projects"> Back to Projects Page</Link>
      </div>
    </div>
  );
}

export default Wumb;
