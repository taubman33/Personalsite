import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"

import Resume from './Resume'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'


import Bottom from './projects/Bottom';
import Fxdb from './projects/Fxdb';
import Stellar from './projects/Stellar';
import Comedian from './projects/Comedian';

import City from "./assets/city2.png"

export default function Main() {
return (


<div className="main-container">
    
<div className="main"
style={{
    margin: "5rem", backgroundColor: "#ffe9ca", borderRadius: "10px"}}>

   
            <Route exact path ="/" component={AboutMe}/>
            <Route exact path ="/Resume" component={Resume}/>
            <Route exact path="/Projects"component={Projects}/>
            <Route exact path="/Contact"component={Contact}/>


            <Route exact path="/Projects/Stellar" component={Stellar}/>
            <Route exact path="/Projects/Fxdb" component={Fxdb}/>
            <Route exact path="/Projects/Bottom" component={Bottom}/>
            <Route exact path="/Projects/Comedian" component={Comedian}/>
    
   
            </div> 
            <div className="city-image">
<img src={City} />

</div>
</div>
)

}
