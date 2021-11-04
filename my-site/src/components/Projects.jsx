import React from "react";
import './Projects.css'
import {  Link } from "react-router-dom";
import SW from "./assets/Surgewindow.jpg";
import BU from "./assets/BottomsWindow.jpg";
import FX from "./assets/FXDBbanner.jpg";
import CW from "./assets/ComedWindow.png";
import PW from "./assets/ParkWindow.png";
import LW from "./assets/Letters.png";
import W1 from "./assets/Wumb1.png";

function Projects() {


  return (
    <div className="carousel-container">
      <div className="slider">
        <a href="#slide-1">LW</a>
        <a href="#slide-2">NC</a>
        <a href="#slide-3">PS</a>
        <a href="#slide-4">FX</a>
        <a href="#slide-5">ST</a>

        <div className="slides">

          <div className="slide" id="slide-1 wumb">

            <div className="carousel-text-container">
              <h1> Listen-Wumb</h1>
              <p> Pulling Youtube videos from WUMB Radio playlist. <br/> Built on the MERN stack.</p>
            </div>

            <div className="icon-container">
            <Link to="/Projects/Wumb"> <img src={W1} alt="icon" className="carousel-icon" /> </Link>
            </div> 

          </div>


          <div className="slide" id="slide-2 letters">

            <div className="carousel-text-container">
              <h1> Letters to our Future Students  </h1>
              <p> Letters written by our students on our final day of class to give our next class. <br/> Built in Django and React.</p>
            </div>

            <div className="icon-container">
            <Link to="/Projects/Letters">
              <img src={LW} alt="icon" className="carousel-icon big" />
            </Link>
            </div>
        

          </div>

          <div className="slide" id="slide-3 park">
            <div className="carousel-text-container">
              <h1>Park Safe</h1>
              <p> A helpful aid for exploring New York City parks during the COVID 19 scare <br/> Built in React and Ruby on Rails</p>
            </div>
            <Link to="/Projects/Park">
              <img src={PW} alt="icon" className="carousel-icon big" />
            </Link>
          </div>


          <div className="slide" id="slide-4 fxdb">
            <div className="carousel-text-container">
              <h1> FXDB</h1>
              <p> The Guitar FX Database <br/> Built in React and Ruby on Rails</p>
            </div>
            <div className="icon-container">
            <Link to="/Projects/fxdb">
              <img src={FX} alt="icon" className="carousel-icon" />
            </Link>
            </div>
          </div>


          <div className="slide" id="slide-5 stellar">
            <div className="carousel-text-container">
              <h1> Stellar</h1>
              <p> Mock version of Stellar Travel site <br/> Built on the MERN stack</p>
            </div>
            <div className="icon-container">
            <Link to="/Projects/Stellar">
              <img src={SW} alt="icon" className="carousel-icon" />
            </Link>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
}
export default Projects;
