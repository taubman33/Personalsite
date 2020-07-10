import React from 'react';
import Resume1 from './assets/JTaubmanResume.jpg'


function Resume () {
return (
<div className= "resume-container">

<div className="title-container">
<h1> Resume</h1>
</div>
            <div className= "resume">
            
            <img src={Resume1} alt="resume-picture" />

            </div>

</div>
    )
}

export default Resume
