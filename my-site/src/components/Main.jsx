import React, { Component } from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import Resume from './Resume'
import AboutMe from './AboutMe'
import Projects from './Projects'



function Main () {
return (
<div className="main-container">
            <div className="main">
            <AboutMe />
            <Resume />
            <Projects />
            </div>

</div>

)
}
export default Main