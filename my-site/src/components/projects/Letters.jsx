import React from 'react';
import { Link} from 'react-router-dom'
import ReactLogo from '../assets/Logos/react.svg';
import GH from "../assets/GitHub.png";
import LW from "../assets/Letters.png"
import DJ from "../assets/Logos/DJSVG.svg"
import Py from "../assets/Logos/PySVG.svg"



function Letters(props) {
    return (
<div className="Project-card">   
        <h3>Letters to the next Cohort </h3>
        <div className="project-desc">
        <p>
            
        On the last day of our class, we had an activity writing "Letters to the next cohort", where our students could write to their past selves and impart some wisdom,
          guidence and experience, as a way to help out the students in our next cohort. After the completion of our class, I asked students to volunteer to help build a full-stack project 
          where we could store and display the letters that the class wrote. This project was built up myself and 3 of my students, where I focused mainly on the front-end and advised in version control and deployment.</p>   
            <br/>
            
            </div>

            <h2>Click the image below to open link in a new tab</h2>
            <a href="http://seir-letters.surge.sh/" target="_blank">
            <img src={LW} className="ProjectIcon"  alt="letters"/>
            </a>


            <div className= "languageIconContainer">
                
                <div className ="languageIcons"> 

                <div className="project-icons">
                    <img src ={ReactLogo} alt="icon" className="linkIcon" />
                    <img src ={Py} alt="icon" className="linkIcon" />
                    <img src ={DJ} alt="icon" className="linkIcon" />
                    
                    <br />
                   <a href="https://github.com/taubman33/studentlettersFE" target="_blank">
                    <img src={GH} alt="icon"  className="linkIcon" />
                  </a> 
                  <h2> Link to GitHub Repo</h2>    
            </div>
          </div>
          <Link to ="/projects"> Back to Projects Page</Link>
       </div>   
       </div>  
    );
}

export default Letters;