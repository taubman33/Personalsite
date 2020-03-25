import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom'
import CW from '../assets/ComedWindow.png';
import CSSlogo from '../assets/Logos/css.svg';
import ReactLogo from '../assets/Logos/react.svg';
import GH from "../assets/GitHub.png";

function Comedian () {
return (

<div id="slide-1">   
        <h3>Everyone's A Comedian </h3>

        <div className="project-type">
        <p> My first project at General Assembly, tasked to create a site linked to an API. I chose the Dad Joke API and built this, an easy way to search for SFW jokes. 
            After the completion of the class, I re-worked it into a React site.
            </p>   
            <br/>
            
            </div>

            
            <a href="https://github.com/taubman33/FXDB">
            <img src={CW} className="ProjectIcon"  alt="comed"/>
            </a>


            <div className= "project-desc">
                
                
                <div className="languageIconContainer">
                 <img src ={CSSlogo} className="linkIcon" />
                <img src ={ReactLogo} className="linkIcon" />
        
                
                </div>
                <a href="https://github.com/taubman33/Comedian">
                <img src={GH} className="linkIcon" />
                </a>

            
                </div>



            <Link to='/Projects' className='nav-link'> <h2> Back to Projects</h2>
        </Link>
 </div>       


    
)


}


export default Comedian