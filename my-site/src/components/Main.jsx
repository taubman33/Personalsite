import React from "react";
import {Route } from "react-router-dom";

import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Dummy from "./Dummy"
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
        <Route exact path="/" render={AboutMe} />
        <Route exact path="/Resume" render={Resume} />
        <Route exact path="/Projects" render={Projects} />
        <Route exact path="/Contact" render={Contact} />
        
        <Route exact path="/dummy" render={Dummy} />

        <Route exact path="/Projects/Stellar" component={Stellar} />
        <Route exact path="/Projects/Fxdb" component={Fxdb} />
        <Route exact path="/Projects/Bottom" component={Bottom} />
        <Route exact path="/Projects/Comedian" component={Comedian} />
        <Route exact path="/Projects/Park" component={Park} />
        <Route exact path="/Projects/Letters" component={Letters} />
        <Route exact path="/Projects/Wumb" component={Wumb} />
      </div>
      <div className="city-image">
        <img src={City} />
      </div>
    </div>
  );
}
