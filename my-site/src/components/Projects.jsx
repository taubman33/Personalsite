import React from 'react';
import SW from './assets/Surgewindow.jpg'
import BU from './assets/BottomsWindow.jpg'
import FX from './assets/FXDBbanner.jpg'
import GH from "./assets/GitHub.png";
import CSSlogo from './assets/Logos/css.svg'
import Rails from './assets/Logos/RailsLogo.svg'
import Ruby from './assets/Logos/ruby.svg'
import ReactLogo from './assets/Logos/react.svg'
import SQL from'./assets/Logos/sql.svg'

function Projects () {
return (

   <div className="project-container">
  <div class="slider">



        <div className= "Projects">

        <h1>Projects</h1>
   
<a href="#slide-1"><h3>FXDB</h3></a>
  <a href="#slide-2"><h3>Stellar</h3></a>
  <a href="#slide-3"><h3>Bottoms Up</h3></a>
 

        {/* P4 */}
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
            <a href="https://github.com/taubman33/FXDB">
                
                
                <div className="languageIconContainer">
                {/* <img src ={CSSlogo} className="linkIcon" />
                <img src ={ReactLogo} className="linkIcon" />
                <img src ={SQL} className="linkIcon" /> */}
                <img src ={Ruby} className="linkIcon" />
                <img src ={Rails} className="linkIcon" />
                
                </div>

                <img src={GH} className="linkIcon" />
                </a>

            
                </div>
         </div>       
                <br></br>



        
        {/* P3     */}
        <div id="slide-2">
        <h3>Orbitz Travel Mockup Site</h3>

        <div className="project-type">
            <p>For this project my class at GA was put into groups of 3, and set to collaborate with the UX class to create a full-stack mock up of an existing travel site. 
                I was responsbile for the Back End where I used SQL to create a database of over 100 flights between 6 different airports. 
                As per request of our UX collaborators, we also added an "Eco-friendly" option, where users would be able to select from filitered flights.</p>  
                </div>   
            
            <a href="https://stellar-travel.surge.sh/" >
            <img src={SW} className="ProjectIcon" alt="stellar" />
            </a>
                <div className= "project-desc">
                <a href="https://github.com/taubman33/Stellar">

                <div className="languageIconContainer">
                <img src ={CSSlogo} className="linkIcon" />
                <img src ={ReactLogo} className="linkIcon" />
                <img src ={SQL} className="linkIcon" />
                </div>

                <img src={GH} className="linkIcon" />
                </a>

            </div>
                </div>
                <br></br>




                    {/* P2 */}
                    <div id="slide-3">
                    <h3>React Cocktail Recipe and Information App</h3>

                        <div className="project-type">
                        <p>For my second project at GA and my first full React build, I created a mobile responsive site that allowed users to search 
                        different recipes for different cocktails, with a section to learn about the different types of alcohols and spirits that we commmonly find in stores and bars today.</p>
                        </div>
                        
                        <a href="http://jtp2.surge.sh/" >
                        <img src={BU} className="ProjectIcon"  alt="bottoms" />
                        </a>
                            <div className= "project-desc">
                            <a href="https://github.com/taubman33/bottomsup">

                            <div className="languageIconContainer">
                            <img src ={CSSlogo} className="linkIcon" />
                            <img src ={ReactLogo} className="linkIcon" />
                            <img src ={SQL} className="linkIcon" />
                            </div>

                            <img src={GH} className="linkIcon" />
                            </a>
                            </div> 
                            </div>
                            <br></br>

        

        <h2> More Projects coming!</h2>

        </div>

    </div>


</div>
    )
}

export default Projects