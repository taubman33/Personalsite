import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom'
import FX from '../assets/FXDBbanner.jpg';
import CSSlogo from '../assets/Logos/css.svg';
import Rails from '../assets/Logos/RailsLogo.svg';
import Ruby from '../assets/Logos/ruby.svg';
import ReactLogo from '../assets/Logos/react.svg';
import SQL from'../assets/Logos/sql.svg';
import GH from "../assets/GitHub.png";

function Fxdb () {
return (

<div className="Project-card">   
    <h3>FXDB - the Guitar Effects Database </h3>
 
       <div className="project-desc">
            <p> For my capstone project at General Assembly I created a full stack application and database of notable guitar effect pedals, also known as 'Stomp Boxes' that are popular with musicians from John Mayer to Jack White.
                Using a Ruby on Rails backend with a React front end I built up a resource for cover bands and musicians who wanted a streamlined, easy way to search for what specific effect pedals were used on famous songs.
            </p>   
          
       </div>

            <br/>
            <p> This project will be re-deployed with functioning search engine soon.</p>
            
            <a href="https://github.com/taubman33/FXDB" target="_blank">
            <img src={FX} className="ProjectIcon"  alt="fxdb"/>
            </a>


             <div className= "languageIconContainer">
                
                
             <div className= "languageIcons">
                
                        <div className="project-icons">
                            <img src ={CSSlogo} className="linkIcon" />
                            <img src ={ReactLogo} className="linkIcon" />
                            <img src ={SQL} className="linkIcon" /> 
                            <img src ={Rails} className="linkIcon" />

                            <br />
                        <a href="https://github.com/taubman33/FXDB" target="_blank">
                            <img src={GH} className="linkIcon" />
                        </a>
                        </div>
              </div>
              </div>
 </div>       
 )
}


export default Fxdb