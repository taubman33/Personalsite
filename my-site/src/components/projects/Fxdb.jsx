import React from 'react';
import { Link} from 'react-router-dom'
import FX from '../assets/FXDBbanner.jpg';
import Rails from '../assets/Logos/RailsLogo.svg';
import ReactLogo from '../assets/Logos/react.svg';
import GH from "../assets/GitHub2.png";

function Fxdb () {
return (

<div className="Project-card"> 
<div className ="project-title-container"> 
    <h1 style={{letterSpacing: "2rem", fontWeight:"600"}}>FXDB </h1>
    <h2>The Guitar Effects Database</h2>
</div>


       <div className="project-desc">
            <p> For my capstone project at General Assembly I created a full stack application and database of notable guitar effect pedals, also known as 'Stomp Boxes' that are popular with musicians from John Mayer to Jack White.
                Using a Ruby on Rails backend with a React front end I built up a resource for cover bands and musicians who wanted a streamlined, easy way to search for what specific effect pedals were used on famous songs.
            </p>   
          
       </div>
       <h2>Click the image below to open link in a new tab</h2>
            <a href="http://fxdbtest.surge.sh/" target="_blank">
            <img src={FX} className="ProjectIcon"  alt="fxdb"/>
            </a>


             <div className= "languageIconContainer">
                
             <div className= "languageIcons">
            
                        <div className="project-icons">
                            <img src ={ReactLogo} alt="icon" className="linkIcon" /> 
                            <img src ={Rails} alt="icon" className="linkIcon" />

                            <br />
                        <a href="https://github.com/taubman33/FXDB" target="_blank">
                            <img src={GH} className="linkIcon" />
                        </a>

                        </div>
              </div>
              <Link to ="/projects"> Back to Projects Page</Link>
              </div>
 </div>       
 )
}


export default Fxdb