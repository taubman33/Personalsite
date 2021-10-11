import React from 'react';
import CSSlogo from '../assets/Logos/css.svg';
import ReactLogo from '../assets/Logos/react.svg';
import GH from "../assets/GitHub.png";
import W1 from "../assets/Wumb1.png"
import DJ from "../assets/Logos/DJSVG.svg"
import Py from "../assets/Logos/PySVG.svg"



function Wumb(props) {
    return (
<div className="Project-card">   
        <h3>WUMB Listen </h3>
        <div className="project-desc">
        <p>
        Build with my co-teacher and a previous student, WUMB Listen pulls data from the UM Boston radio station,
        displaying the song title, recording artist, length of the song, as well as the top Youtube video.
        Users can search through the calendar and go through the times to find a Youtube video of that great song they heard driving earlier.     
       </p>   
            <br/>
            
            </div>

            <h2>Click the image below to open link in a new tab</h2>
            <a href="https://wumb-proxy-2.herokuapp.com/" target="_blank">
            <img src={W1} className="ProjectIcon"  alt="letters"/>
            </a>


            <div className= "languageIconContainer">
                
                <div className ="languageIcons"> 

                <div className="project-icons">
                    <img src ={CSSlogo} className="linkIcon" />
                    <img src ={ReactLogo} className="linkIcon" />
                    <img src ={Py} className="linkIcon" />
                    <img src ={DJ} className="linkIcon" />
                    
                    <br />
                   <a href="https://github.com/taubman33/wumb-front" target="_blank">
                    <img src={GH} className="linkIcon" />
                  </a> 
                  <h2> Link to GitHub Repo</h2>    
            </div>
          </div>
       </div>   
       </div>  
    );
}

export default Wumb;