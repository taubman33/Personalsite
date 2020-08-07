import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"

import Resume from './Resume'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'


import Bottom from './projects/Bottom';
import Fxdb from './projects/Fxdb';
import Stellar from './projects/Stellar';
import Comedian from './projects/Comedian';
import Park from './projects/Park';

import City from "./assets/city2.png"


export default function Main() {
return (


<div className="main-container">


<div className="main">

   
            <Route exact path ="/" component={AboutMe}/>
            <Route exact path ="/Resume" component={Resume}/>
            <Route exact path="/Projects"component={Projects}/>
            <Route exact path="/Contact"component={Contact}/>


            <Route exact path="/Projects/Stellar" component={Stellar}/>
            <Route exact path="/Projects/Fxdb" component={Fxdb}/>
            <Route exact path="/Projects/Bottom" component={Bottom}/>
            <Route exact path="/Projects/Comedian" component={Comedian}/>
            <Route exact path="/Projects/Park" component={Park}/>
    
   
            </div> 
            <div className="city-image">
<img src={City} />

</div>
</div>
)

}
