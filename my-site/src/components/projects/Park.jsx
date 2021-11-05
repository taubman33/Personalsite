import React from 'react';
import { Link} from 'react-router-dom'
import ParkWindow from '../assets/ParkWindow.png';
import Rails from '../assets/Logos/RailsLogo.svg';
import ReactLogo from '../assets/Logos/react.svg';
import SQL from'../assets/Logos/sql.svg';
import GH from "../assets/GitHub2.png";

export default function Park () {
return (

<div className="Project-card"> 
<div className ="project-title-container"> 
    <h3>Park Safe </h3>
    <h2>NYC Park Social Distancing App</h2>
</div>


       <div className="project-desc">
            <p> During the COVID 2020 pandemic, a former classmate and I decided to build a project that 
                allowed us to rate and measure how safe various park zones in NYC were based on people's
                social distancing, and wearing of masks.  </p>   
          
       </div>
       <h2>Click the image below to open link in a new tab</h2>
            <a href="https://parksafe.netlify.app/" target="_blank">
            <img src={ParkWindow} className="ProjectIcon"  alt="park"/>
            </a>


             <div className= "languageIconContainer">
                
             <div className= "languageIcons">
            
                        <div className="project-icons">
                       
                            <img src ={ReactLogo} alt="icon" className="linkIcon" />
                            <img src ={SQL}  alt="icon" className="linkIcon" /> 
                            <img src ={Rails} alt="icon" className="linkIcon" />

                            <br />
                        <a href="https://github.com/taubman33/covidparkapp" target="_blank">
                            <img src={GH} alt="icon" className="linkIcon" />
                        </a>

                        
                        <h2> Link to GitHub Repo</h2>
                        </div>
              </div>

              <Link to ="/projects"> Back to Projects Page</Link>
              </div>
 </div>       
 )
}


