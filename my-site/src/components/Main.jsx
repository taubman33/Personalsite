import React from "react";
import {Route, Routes } from "react-router-dom";

import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Bottom from "./projects/Bottom";
import Fxdb from "./projects/Fxdb";
import Stellar from "./projects/Stellar";
import Comedian from "./projects/Comedian";
import Park from "./projects/Park";
import Letters from "./projects/Letters";
import Wumb from "./projects/Wumb";

import City from "./assets/city2.png";

export default function Main() {
  return (
    <div className="main-container">
      <div className="main">
        <Routes>
          <Route exact path="/" element={<AboutMe/>} />
          <Route exact path="/Resume" element={<Resume/>} />
          <Route exact path="/Projects" element={<Projects/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route exact path="/Projects/Stellar" element={<Stellar/>} />
          <Route exact path="/Projects/Fxdb" element={<Fxdb/>} />
          <Route exact path="/Projects/Bottom" element={<Bottom/>} />
          <Route exact path="/Projects/Comedian" element={<Comedian/>} />
          <Route exact path="/Projects/Park" element={<Park/>} />
          <Route exact path="/Projects/Letters" element={<Letters/>} />
          <Route exact path="/Projects/Wumb" element={<Wumb/>} />
        </Routes>
      </div>
      <div className="city-image">
        <img src={City} />
      </div>
    </div>
  );
}
