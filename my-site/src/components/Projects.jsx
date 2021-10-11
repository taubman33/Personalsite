import React from 'react';
import{ BrowserRouter as Route, Link } from 'react-router-dom'
import SW from './assets/Surgewindow.jpg'
import BU from './assets/BottomsWindow.jpg'
import FX from './assets/FXDBbanner.jpg'
import GH from "./assets/GitHub.png";
import CW from './assets/ComedWindow.png';
import PW from './assets/ParkWindow.png'
import LW from "./assets/Letters.png"
import W1 from "./assets/Wumb1.png"

import Bottom from './projects/Bottom';
import Fxdb from './projects/Fxdb';
import Stellar from './projects/Stellar';
import Comedian from './projects/Comedian';
import Park from './projects/Park'
import Letters from './projects/Letters'



function Projects () {
return (

   <div className="project-container">
     
        <div className= "Projects">

        <div className="title-container">    
        <h1 style ={{fontSize:"7rem"}}>Projects</h1>
        <h2 style ={{fontWeight:"300"}}> click a link below to learn more</h2>
        </div>

        <div className= "project-links"> 


    {/* Wumb */}
    <div id="project-window" style={{paddingTop: "-3rem", backgroundColor:"#012C49", padding:"3rem", marginBottom: "2rem"}}>
        <h1>WUMB Listen</h1>
        <h3> Pulling the recent playlists from the UM Boston radio station and connecting them to the Youtube API, giving users the ability to hear and save songs they've heard on the radio</h3>
        <Link to='/Projects/Wumb' >
        <img src={W1} className="project-link" />

        </Link>
        </div>



    {/* Letters */}
    <div id="project-window" style={{paddingTop: "-3rem", backgroundColor:"#012C49", padding:"3rem", marginBottom: "2rem"}}>
        <h1>Letters to our next student cohort</h1>
        <h3> Project built with a few of my students to display letters that they wrote for the next cohort.  React front end with Django back end written in Python</h3>
        <Link to='/Projects/Letters' >
        <img src={LW} className="project-link" />

        </Link>
        </div>


    {/* ParkSafe */}
    <div id="project-window" style={{paddingTop: "-3rem", backgroundColor:"#012C49", padding:"3rem", marginBottom: "2rem"}}>
        <h1>Park Safe</h1>
        <h3> A COVID help site to safely explore the parks of New York City. React front end with back end created in Ruby on Rails</h3>
        <Link to='/Projects/Park' >
        <img src={PW} className="project-link" />

        </Link>
        </div>


        {/* P4 */}
        <div id="project-window" style={{paddingTop: "-3rem", backgroundColor:"#012C49", padding:"3rem", marginBottom: "2rem"}}>
        <h1>FXDB</h1>
        <h3> the Guitar FX Database.  React front end with back end created in Ruby on Rails</h3>
        <Link to='/Projects/Fxdb' >
        <img src={FX} className="project-link" />

        </Link>
        </div>

        
        {/* P3     */}
        <div id="project-window" style={{backgroundColor:"#012C49", padding:"3rem", marginBottom: "2rem"}}>
        <h1>Stellar</h1>
       <h3> Orbitz Travel Mockup Site React front end with back end created with Express and SQL</h3>
        <Link to='/Projects/Stellar' >
        <img src={SW} className="project-link" />

        </Link>
        </div>



        {/* P2 */}
       
        <div id="project-window" style={{backgroundColor:"#012C49", padding:"3rem", marginBottom: "2rem"}}>
        <h1>Bottoms Up</h1>
        <h3>For lovers of a good libation</h3>
        <Link to='/Projects/Bottom' >
        <img src={BU} className="project-link" />
        </Link>
        </div>


        {/* P1 */}
        
        <div id="project-window" style={{backgroundColor:"#012C49", padding:"3rem", marginBottom: "2rem"}}>
        <h1>Everyone's A Comedian</h1>
        <h3>When you just need that joke</h3>
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