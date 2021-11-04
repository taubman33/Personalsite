import "./Dummy.css";
import React from "react";
import {  Link } from "react-router-dom";
import SW from "./assets/Surgewindow.jpg";
import BU from "./assets/BottomsWindow.jpg";
import FX from "./assets/FXDBbanner.jpg";
import CW from "./assets/ComedWindow.png";
import PW from "./assets/ParkWindow.png";
import LW from "./assets/Letters.png";
import W1 from "./assets/Wumb1.png";

function Dummy() {
  return (
    <div className="carousel-container">
      <div className="slider">
        <a href="#slide-1">LW</a>
        <a href="#slide-2">NC</a>
        <a href="#slide-3">PS</a>
        <a href="#slide-4">FX</a>
        <a href="#slide-5">ST</a>

        <div className="slides">


          <div className= "slide" id="slide-1">
          <h1> Listen-Wumb</h1>
              <p> Pulling Youtube videos from WUMB Radio playlist</p>
          <Link to="/Projects/Wumb">
              <img src={W1} className ="carousel-icon"/>
              </Link>
          </div>
    


          <div className= "slide" id="slide-2">
            Letters

          </div>


          <div className= "slide" id="slide-3">
            Park Safe

          </div>


          <div className= "slide" id="slide-4">
            fxdb

          </div>
          <div className= "slide" id="slide-5">5</div>

          stellar
        </div>
      </div>
    </div>
  );
}

export default Dummy;
