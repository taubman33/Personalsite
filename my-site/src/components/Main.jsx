import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"

import Resume from './Resume'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import City from "./assets/city2.png"

export default function Main({}) {
return (


<div className="main-container">
    
<div className="main">
   
            <Route exact path ="/" component={AboutMe}/>
            <Route exact path ="/Resume" component={Resume}/>
            <Route exact path="/Projects"component={Projects}/>
            <Route exact path="/Contact"component={Contact}/>
    
   
            </div> 
            <div className="city-image">
<img src={City} />

</div>
</div>
)

}
