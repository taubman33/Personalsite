import React from "react";
import { Link } from "react-router-dom";
import SW from "./assets/Surgewindow.jpg";
import FX from "./assets/FXDBbanner.jpg";
import PW from "./assets/ParkWindow.png";
import LW from "./assets/Letters.png";
import W1 from "./assets/Wumb1.png";

function Projects() {
  return (
    <div className="carousel-container">

<div className="warning">
        <h4 id="project-warning"> Full-Stack Apps may be stuck in Load screens as back-ends need to be re-deployed </h4>
      </div>


      <div className="slider">
        
      <button className="slider-button">
        <a className="slider-text" href="#slide-1">
          WL
        </a>
      </button>

      <button className="slider-button">
        <a className="slider-text" href="#slide-2">
          SL
        </a>
      </button>

      <button className="slider-button">
        <a className="slider-text" href="#slide-3">
          PS
        </a>
      </button>

      <button className = "slider-button">
        <a className="slider-text" href="#slide-4">
          FX
        </a>
      </button>

      <button className = "slider-button">
        <a className="slider-text" href="#slide-5">
          ST
        </a>
      </button >

      </div>



    
        <div className="slides">

          <div className="slide" id="slide-1">
            <div className="carousel-text-container">
              <h1 className="project-title"> WUMB-Listen</h1>
              <p>
                {" "}
                Pulling Youtube videos from WUMB Radio playlist. <br /> Built on
                the MERN stack.
              </p>
            </div>

            <div className="icon-container">
              <Link to="/Projects/Wumb">
                {" "}
                <img src={W1} alt="icon" className="carousel-icon" />{" "}
              </Link>
            </div>
          </div>

          <div className="slide" id="slide-2">
            <div className="carousel-text-container">
              <h1 className="project-title"> Student Letters </h1>
              <p style={{paddingLeft: "2rem", paddingRight: "2rem"}}>
                {" "}
                Letters written by our students on our final day of class to
                give our next class. <br /> Built in Django and React.
              </p>
            </div>

            <div className="icon-container">
              <Link to="/Projects/Letters">
                <img src={LW} alt="icon" className="carousel-icon big" />
              </Link>
            </div>
          </div>

          <div className="slide" id="slide-3">
            <div className="carousel-text-container">
              <h1 className="project-title">Park Safe</h1>
              <p>
                {" "}
                A helpful aid for exploring New York City parks during the COVID
                19 scare <br /> Built in React and Ruby on Rails
              </p>
            </div>
            <div className = "project-container">
            <Link to="/Projects/Park">
              <img src={PW} alt="icon" className="carousel-icon big" />
            </Link>
            </div>
          </div>
          </div>

          <div className="slide" id="slide-4">
            <div className="carousel-text-container">
              <h1 className="project-title" > FXDB</h1>
              <p>
                {" "}
                The Guitar FX Database <br /> Built in React and Ruby on Rails
              </p>
            </div>
            <div className="icon-container">
              <Link to="/Projects/fxdb">
                <img src={FX} alt="icon" className="carousel-icon" />
              </Link>
            </div>
          </div>

          <div className="slide" id="slide-5">
            <div className="carousel-text-container">
              <h1 className="project-title" > Stellar</h1>
              <p>
                {" "}
                Mock version of Stellar Travel site <br /> Built on the MERN
                stack
              </p>
            </div>
            <div className="icon-container">
              <Link to="/Projects/Stellar">
                <img src={SW} alt="icon" className="carousel-icon" />
              </Link>
            </div>
          </div>
        </div>

      
  );
}
export default Projects;
