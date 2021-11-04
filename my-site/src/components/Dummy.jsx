import "./Dummy.css";
import React from "react";
import {  Link } from "react-router-dom";
import Stellar from "./projects/Stellar";

function Dummy() {
  return (
    <div className="carousel-container">
      <div className="slider">
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a>

        <div className="slides">
          <div id="slide-1">
          <Link to="/Projects/Wumb">Listen - Wumb</Link>
          </div>
    


          <div id="slide-2">
            Letters

          </div>


          <div id="slide-3">
            Park Safe

          </div>


          <div id="slide-4">
            fxdb

          </div>
          <div id="slide-5">5</div>

          stellar
        </div>
      </div>
    </div>
  );
}

export default Dummy;
