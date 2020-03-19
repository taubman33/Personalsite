import React from 'react';
import SW from './assets/Surgewindow.jpg'
import BU from './assets/BottomsWindow.jpg'

function Projects () {
return (
<div className= "Projects">


   
  <h1>Projects</h1>

  <h3>Orbitz Travel Mockup Site</h3>
  <p>For this project I was put into a group of 3, and set to collaborate with the General Assembly's UX class to create a full-stack mock up of an existing travel site. 
    I was responsbile for the Back End where I used Ruby on Rails </p>
 <a href="https://stellar-travel.surge.sh/">
  <img src={SW} className="ProjectIcon" />
</a>


<h3>React Cocktail Recipe and Information App</h3>
<p>For my second project at GA and my first full React build, I created a mobile responsive site that allowed users to search different recipes for different cocktails, with a section to learn about the different types of alcohols and spirits that we commmonly find in stores and bars today.</p>
<a href="http://jtp2.surge.sh/">
  <img src={BU} className="ProjectIcon" />
</a>


<h2> More Projects coming!</h2>

</div>
    )
}

export default Projects