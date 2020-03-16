import React, { Component } from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import Resume from './Resume'
import AboutMe from './AboutMe'
import Projects from './Projects'

// import Art from './Art'
// import Music from './Music'

function Main () {
return (
<div className="main">


<AboutMe />
<Resume />

<Projects />

{/* 
<Art />
<Music /> */}

</div>


)
}
export default Main