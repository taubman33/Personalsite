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
        <h1>Projects</h1>


        <div className= "project-links"> 


        {/* P4 */}
        <div id="project-window">
        <h2>FXDB</h2>
        <Link to='/Projects/Fxdb' >
        <img src={FX} className="project-link" />

        </Link>
        </div>

        
        {/* P3     */}
        <div id="project-window">
        <h2>Stellar</h2>
       
        <Link to='/Projects/Stellar' >
        <img src={SW} className="project-link" />

        </Link>
        </div>



        {/* P2 */}
       
        <div id="project-window">
        <h2>Bottoms Up!</h2>
        <Link to='/Projects/Bottom' >
        <img src={BU} className="project-link" />
        </Link>
        </div>


        {/* P1 */}
        
        <div id="project-window">
        <h2>Everyone's A Comedian</h2>
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