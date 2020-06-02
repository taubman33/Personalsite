import React from 'react';
import ProfPic from './assets/ProfPic2.jpg'

function AboutMe () {
return (
<div className= "aboutMe-Container">
 
    <br />
    <div className="title-container">
           <h1> About Me</h1>
           </div> 
    <div className= "aboutMe">
    <h2> With a history in education, creating and running my own business, and a lifetime of studying music and the arts, I am a passionate and dedicated learner who believes in using the creative mind to find solutions and solve any problem that comes my way. 
        Playing in bands for most of my life has taught the values of collaboration, and whether it is working with my students, playing jazz guitar, or learning different programming languages, I believe that with time and dedicated practice, anything is achievable. 
        Working to bring together my interests in technology and my love for learning, I am seeking a software engineer position where growth, development, and collaboration are valued so that I may let these traits shine.
        </h2>
    </div>
 
    <div className = "pic-container">
    <img src={ProfPic} className = "prof-pic" alt="prof-picture" />
    </div>


</div>
    )
}

export default AboutMe