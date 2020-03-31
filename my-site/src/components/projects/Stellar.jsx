import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom'
import SW from '../assets/Surgewindow.jpg'
import CSSlogo from '../assets/Logos/css.svg'
import SQL from'../assets/Logos/sql.svg'
import ReactLogo from '../assets/Logos/react.svg'
import GH from "../assets/GitHub.png";


function Stellar () {
return (

    <div className="Project-card">
        <h3>Orbitz Travel Mockup Site</h3>

        <div className="project-desc">
        <p>For this project my class at GA was put into groups of 3, and set to collaborate with the UX class to create a full-stack mock up of an existing travel site. 
            I was responsbile for the Back End where I used SQL to create a database of over 100 flights between 6 different airports. 
            As per request of our UX collaborators, we also added an "Eco-friendly" option, where users would be able to select from filitered flights.
            </p>
             <br/>
              </div>   
        
        <a href="https://stellar-travel.surge.sh/" target="_blank">
        <img src={SW} className="ProjectIcon" alt="stellar" />
        </a>



            <div className= "languageIconContainer">
            <div className= "languageIcons">

            <div className="project-icons">
                <img src ={CSSlogo} className="linkIcon" />
                <img src ={ReactLogo} className="linkIcon" />
                <img src ={SQL} className="linkIcon" />
                    <a href="https://github.com/taubman33/Stellar">
                       <img src={GH} className="linkIcon" />
                     </a>
             </div>
            </div> 
        </div>
     </div>

 )
}
 

export default Stellar