import React from "react";
import { Link } from "react-router-dom";
import ReactLogo from "../assets/Logos/react.svg";
import GH from "../assets/GitHub2.png";
import LW from "../assets/Letters.png";
import DJ from "../assets/Logos/DJSVG.svg";

function Letters() {
  return (
    <div className="Project-card">


      <div className="project-title-container">
        <h1>Letters to our Next Students </h1>
      </div>

      <div className="project-window">
          <div className="project-desc">
          <p>
           
            This project was built up myself and 3 of my students, after an
            activity writing "Letters to the next cohort" on our class's last
            day. Our students impart some wisdom, guidence and experience, to
            our next batch of developers. 
          </p>
          </div>

        <div className="project-icon-container">
        <a href="https://1130studentletters.surge.sh/" target="_blank">
          <img src={LW} className="ProjectIcon" alt="letters" />
          </a>
          </div>

    </div>

      <div className="languageIconContainer">
        <div className="languageIcons">
          <div className="project-icons">
            <img src={ReactLogo} alt="icon" className="lang linkIcon" />
            <img src={DJ} alt="icon" className="lang linkIcon" />
            <a
              href="https://github.com/taubman33/studentlettersFE"
              target="_blank"
            >
              <img src={GH} alt="icon" className="linkIcon" />
            </a>
          </div>
        </div>
        <Link to="/projects"> Back to Projects Page</Link>
      </div>
    </div>
  );
}

export default Letters;
