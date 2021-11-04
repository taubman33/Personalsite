
import React from "react";
import { Link } from "react-router-dom";
import SW from "./assets/Surgewindow.jpg";
import FX from "./assets/FXDBbanner.jpg";
import PW from "./assets/ParkWindow.png";
import LW from "./assets/Letters.png";
import W1 from "./assets/Wumb1.png";


function Dummy() {


    return (
      <div className="project-container">
  
  
        <div className="Projects">
          <div className="title-container">
            <h1>Projects</h1>
            <h2> click a link to learn more</h2>
          </div>
  
          <div className="project-links">
  
           
  
            {/* Letters */}
            <div className="project-window" >
              <div className="project-text">
              <h1>Letters to our Future Students</h1>
              <h3>  Built with a few former students to display letters that were written for my next cohort at GA.
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
                A site to help users safely explore the parks of New York City during the COVID lockdowns.
                
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
              <h3> The Guitar Effects Database
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
              <h3> Orbitz Travel Mockup Site
              </h3>
              </div>
              <Link to="/Projects/Stellar">
                <img src={SW} alt="link" className="project-link" />
              </Link>
            </div>
  
            {/* P2 */}
            {/* <div className="project-window" >
              <div className="project-text">
              <h1>Bottoms Up</h1>
              <h3>For lovers of a good libation</h3>
              </div>
              <Link to="/Projects/Bottom">
                <img src={BU} alt="link" className="project-link" />
              </Link>
            </div> */}
  
            {/* P1 */}
            {/* <div className="project-window">
              <div className="project-text">
              <h1>Everyone's A Comedian</h1>
              <h3>When you just need that joke</h3>
  
              </div>
              <Link to="/Projects/Comedian">
                <img src={CW} alt="link" className="project-link" />
              </Link>
            </div>
         */}
  
  
  </div>
        </div>
  
  
      </div>
    );
  }
  export default Dummy;