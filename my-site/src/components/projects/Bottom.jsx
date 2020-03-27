import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom'
import BU from '../assets/BottomsWindow.jpg'
import CSSlogo from '../assets/Logos/css.svg'
import ReactLogo from '../assets/Logos/react.svg'
import SQL from'../assets/Logos/sql.svg'
import GH from "../assets/GitHub.png";
 
function Bottom () {
return (
<div className="Project-card">

    {/* <div className="project-desc" */}
                    <h3>React Cocktail Recipe and Information App</h3>

                        <div className="project-desc">
                        <p>For my second project at GA and my first full React build, I created a mobile responsive site that allowed users to search 
                        different recipes for different cocktails, with a section to learn about the different types of alcohols and spirits that we commmonly find in stores and bars today.</p>
                        </div>
                        
                        <a href="http://jtp2.surge.sh/" >
                        <img src={BU} className="ProjectIcon"  alt="bottoms" />
                        </a>
                    <div className= "project-icons">
                            

                        <div className="languageIconContainer">
                            <img src ={CSSlogo} className="linkIcon" />
                            <img src ={ReactLogo} className="linkIcon" />
                            <img src ={SQL} className="linkIcon" />
                          <a href="https://github.com/taubman33/bottomsup">
                              <img src={GH} className="linkIcon" />
                          </a>
                 </div>      
          </div>
     </div>
 )
}


export default Bottom