import React from 'react';
import{ BrowserRouter as Route, Link } from 'react-router-dom'
import SW from './assets/Surgewindow.jpg'
import BU from './assets/BottomsWindow.jpg'
import FX from './assets/FXDBbanner.jpg'
import GH from "./assets/GitHub.png";
import CW from './assets/ComedWindow.png';
// import CSSlogo from './assets/Logos/css.svg'
// import Rails from './assets/Logos/RailsLogo.svg'
// import Ruby from './assets/Logos/ruby.svg'
// import ReactLogo from './assets/Logos/react.svg'
// import SQL from'./assets/Logos/sql.svg'


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
        <Link to='/Projects/Fxdb' className='nav-link'>
        <img src={FX} />

        </Link>
        </div>

        
        {/* P3     */}
        <div id="project-window">
        <h2>Stellar</h2>
       
        <Link to='/Projects/Stellar' className='nav-link'>
        <img src={SW} />

        </Link>
        </div>



        {/* P2 */}
       
        <div id="project-window">
        <h2>Bottoms Up!</h2>
        <Link to='/Projects/Bottoms' className='nav-link'>
        <img src={BU} />
        </Link>
        </div>


        {/* P1 */}
        
        <div id="project-window">
        <h2>Everyone's A Comedian!</h2>
        <Link to='/Projects/Comedian' className='nav-link'>
        <img src={CW} />
        </Link>
        </div>
        
       

        </div>


        <h2> More Projects coming!</h2>
        </div>
    </div>

    )
}

export default Projects