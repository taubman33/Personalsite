import React from 'react';

import FX from '../assets/FXDBbanner.jpg';
import CSSlogo from '../assets/Logos/css.svg';
import Rails from '../assets/Logos/RailsLogo.svg';
import Ruby from '../assets/Logos/ruby.svg';
import ReactLogo from '../assets/Logos/react.svg';
import SQL from'../assets/Logos/sql.svg';
import GH from "../assets/GitHub.png";

function Comedian () {
return (

<div id="slide-1">   
        <h3>FXDB - the Guitar Effects Database </h3>

        <div className="project-type">
        <p> For my capstone project at General Assembly I created a full stack application and database of notable guitar effect pedals, also known as 'Stomp Boxes' that are popular with musicians from John Mayer to Jack White.
                Using a Ruby on Rails backend with a React front end I built up a resource for cover bands and musicians who wanted a streamlined, easy way to search for what specific effect pedals were used on famous songs.
            </p>   
            <br/>
            <p> This project will be re-deployed soon.</p>
            </div>

            
            <a href="https://github.com/taubman33/FXDB">
            <img src={FX} className="ProjectIcon"  alt="fxdb"/>
            </a>


            <div className= "project-desc">
                
                
                <div className="languageIconContainer">
                 <img src ={CSSlogo} className="linkIcon" />
                <img src ={ReactLogo} className="linkIcon" />
                <img src ={SQL} className="linkIcon" /> 
                <img src ={Ruby} className="linkIcon" />
                <img src ={Rails} className="linkIcon" />
                
                </div>
                <a href="https://github.com/taubman33/FXDB">
                <img src={GH} className="linkIcon" />
                </a>

            
                </div>
 </div>       


    
)


}


export default Comedian