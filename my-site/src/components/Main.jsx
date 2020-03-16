import React, { Component } from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import Resume from './Resume'
import Art from './Art'
import AboutMe from './AboutMe'
import Music from './Music'
import Projects from './Projects'

function Main () {
return (
<div className="main">


<AboutMe />
<Resume />
<Art />
<Music />
<Projects />

</div>


)
}
export default Main