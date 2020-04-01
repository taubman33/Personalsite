import React from 'react';
import{ BrowserRouter as Route, Link } from 'react-router-dom'
import SW from './assets/Surgewindow.jpg'
import BU from './assets/BottomsWindow.jpg'
import FX from './assets/FXDBbanner.jpg'
import GH from "./assets/GitHub.png";
import CW from './assets/ComedWindow.png';

import Bottom from './projects/Bottom';
import Fxdb from './projects/Fxdb';
import Stellar from './projects/Stellar';
import Comedian from './projects/Comedian';



function Projects () {
return (

   <div className="project-container">
            <Route exact path ="/Projects/Fxdb" component={Fxdb}/>
            <Route exact path ="/Projects/Stellar" component={Stellar}/>
            <Route exact path="/Projects/Bottom"component={Bottom}/>
            <Route exact path="/Projects/Comedian"component={Comedian}/>


        <div className= "Projects">

        <div className="title-container">    
        <h1>Projects</h1>
        <h2> Click a link to open a new window</h2>
        </div>

        <div className= "project-links"> 


        {/* P4 */}
        <div id="project-window">
        <h3>FXDB</h3>
        <p> The Guitar Effects Database</p>
        <Link to='/Projects/Fxdb' >
        <img src={FX} className="project-link" />

        </Link>
        </div>

        
        {/* P3     */}
        <div id="project-window">
        <h3>Stellar</h3>
       <p> Orbitz Travel Mockup Site</p>
        <Link to='/Projects/Stellar' >
        <img src={SW} className="project-link" />

        </Link>
        </div>



        {/* P2 */}
       
        <div id="project-window">
        <h3>Bottoms Up</h3>
        <p>For all lovers of a good libation</p>
        <Link to='/Projects/Bottom' >
        <img src={BU} className="project-link" />
        </Link>
        </div>


        {/* P1 */}
        
        <div id="project-window">
        <h3>Everyone's A Comedian</h3>
        <p>Dad joke finder, for when you need a cheesey joke</p>
        <Link to='/Projects/Comedian' >
        <img src={CW} className="project-link"/>
        </Link>
        </div>
        
       

        </div>
        </div>
    </div>

    )
}

export default Projects