import React from 'react';
import SW from './assets/Surgewindow.jpg'
import BU from './assets/BottomsWindow.jpg'
import FX from './assets/FXDBbanner.jpg'
import GH from "./assets/GitHub.png";
import CSSlogo from './assets/Logos/css.svg'
import Rails from './assets/Logos/RailsLogo.svg'
import Ruby from './assets/Logos/ruby.svg'
import ReactLogo from './assets/Logos/react.svg'
import SQL from'./assets/Logos/sql.svg'


import Bottom from './projects/Bottom'
import Fxdb from './projects/Fxdb'
import Stellar from './projects/Stellar'

function Projects () {
return (

   <div className="project-container">
 
        <div className= "Projects">
        <h1>Projects</h1>


                    <div className= "project-links"> 


                <a href="#slide-1"><h3>FXDB</h3></a>
                <a href="#slide-2"><h3>Stellar</h3></a>
                <a href="#slide-3"><h3>Bottoms Up</h3></a>
                </div>

        {/* P4 */}
        <div id="slide-1">   
        <h3>FXDB - the Guitar Effects Database </h3>
        </div>

        
        {/* P3     */}
        <div id="slide-2">
        <h3>Orbitz Travel Mockup Site</h3>
        </div>



                    {/* P2 */}
                    <div id="slide-3">
                    <h3>React Cocktail Recipe and Information App</h3>
                    </div>

        

        <h2> More Projects coming!</h2>

        </div>

    </div>

    )
}

export default Projects