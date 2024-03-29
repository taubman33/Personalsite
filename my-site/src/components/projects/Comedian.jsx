import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom'
import CW from '../assets/ComedWindow.png';
import CSSlogo from '../assets/Logos/css.svg';
import ReactLogo from '../assets/Logos/react.svg';
import GH from "../assets/GitHub.png";
import Node from "../assets/Logos/node.png";

export default function Comedian () {
return (


<div className="Project-card">   
        <h1>Everyone's a Comedian! </h1>

        <div className="project-desc">
        <p> My first project at General Assembly, tasked to create a site linked to an API. I chose the Dad Joke API and built this, an easy way to search for SFW jokes. 
            After the completion of the class, I re-worked it into a React site.
             Because it is using the Dad Joke API, there are a limited number of key words to choose from. Try 'Dog', 'Cat', 'Man', or 'Pizza' to get some good jokes back. 
            </p>   
            <br/>
            
            </div>

            <h2>Click the image below to open link in a new tab</h2>
            <a href="https://github.com/taubman33/comedian" target="_blank">
            <img src={CW} className="ProjectIcon"  alt="comed"/>
            </a>


            <div className= "languageIconContainer">
                
                <div className ="languageIcons"> 

                <div className="project-icons">
                    <img src ={CSSlogo} alt="icon"className="linkIcon" />
                    <img src ={Node} alt="icon" className="linkIcon" />
                    <img src ={ReactLogo}  alt="icon" className="linkIcon" />
                    
                    <br />
                   <a href="https://github.com/taubman33/Comedian" target="_blank">
                    <img src={GH} alt="icon" className="linkIcon" />
                  </a> 
                  <h2> Link to GitHub Repo</h2>    
            </div>

            <Link to ="/"> Back to Projects Page</Link>
          </div>
       </div>     
</div>
     
 )
}
