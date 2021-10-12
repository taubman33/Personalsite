import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import SW from "./assets/Surgewindow.jpg";
import BU from "./assets/BottomsWindow.jpg";
import FX from "./assets/FXDBbanner.jpg";
import GH from "./assets/GitHub.png";
import CW from "./assets/ComedWindow.png";
import PW from "./assets/ParkWindow.png";
import LW from "./assets/Letters.png";
import W1 from "./assets/Wumb1.png";

import Bottom from "./projects/Bottom";
import Fxdb from "./projects/Fxdb";
import Stellar from "./projects/Stellar";
import Comedian from "./projects/Comedian";
import Park from "./projects/Park";
import Letters from "./projects/Letters";

function Projects() {


  return (
    <div className="project-container">


      <div className="Projects">
        <div className="title-container">
          <h1>Projects</h1>
          <h2> click a link below to learn more</h2>
        </div>

        <div className="project-links">

          {/* Wumb */}
          <div className="project-window">

        <div className="project-text">
            <h1>WUMB Listen</h1>
            <h3>
              Pulling the recent playlists from the UM Boston radio station and
              connecting them to the Youtube API, giving users the ability to
              hear and save songs they've heard on the radio
            </h3>

            </div>

            <Link to="/Projects/Wumb">
              <img src={W1} alt="link" className="project-link" />
            </Link>
          </div>

          {/* Letters */}
          <div className="project-window" >
            <div className="project-text">
            <h1>Letters to our next student cohort</h1>
            <h3> Project built with a few of my students to display letters that were written for the next cohort at GA.
            </h3>

            </div>
            <Link to="/Projects/Letters">
              <img src={LW} alt="link" className="project-link" />
            </Link>
          </div>

          {/* ParkSafe */}
          <div className="project-window">
            <div className="project-text">
            <h1>Park Safe</h1>
            <h3>
              A COVID help site to safely explore the parks of New York City. React front end with back end created in Ruby on Rails
            </h3>
            </div>

           
            <Link to="/Projects/Park">
              <img src={PW} alt="link" className="project-link" />
            </Link>
          </div>

          {/* FXDB */}
          <div className="project-window">
            <div className="project-text">
            <h1>FXDB</h1>
            <h3> the Guitar FX Database. React front end with back end created in
              Ruby on Rails
            </h3>

            </div>
            <Link to="/Projects/Fxdb">
              <img src={FX} alt="link" className="project-link" />
            </Link>
          </div>

          {/* P3     */}
          <div className="project-window">
            <div className="project-text">
            <h1>Stellar</h1>
            <h3> Orbitz Travel Mockup Site React front end with back end created
              with Express and SQL
            </h3>
            </div>
            <Link to="/Projects/Stellar">
              <img src={SW} alt="link" className="project-link" />
            </Link>
          </div>

          {/* P2 */}
          <div className="project-window" >
            <div className="project-text">
            <h1>Bottoms Up</h1>
            <h3>For lovers of a good libation</h3>
            </div>
            <Link to="/Projects/Bottom">
              <img src={BU} alt="link" className="project-link" />
            </Link>
          </div>

          {/* P1 */}
          <div className="project-window">
            <div className="project-text">
            <h1>Everyone's A Comedian</h1>
            <h3>When you just need that joke</h3>

            </div>
            <Link to="/Projects/Comedian">
              <img src={CW} alt="link" className="project-link" />
            </Link>
          </div>
        </div>



      </div>


    </div>
  );
}
export default Projects;
