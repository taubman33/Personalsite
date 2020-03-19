import React from 'react';
import { Link, Route } from 'react-router-dom'
import GH from "./assets/GitHub.png";
import LI from "./assets/LinkedIn.png"


function Footer () {
return (

    
<div className= "footer">
   



  
<div className= "footer-links"></div> 

<a href="https://github.com/taubman33">
  <img src={GH} className="linkIcon" />
</a>

<h3> 2020 Jeremy Taubman</h3>


<a href="https://www.linkedin.com/in/jeremy-taubman-23736460">
  <img src={LI} className="linkIcon" />
</a>

</div>
    )
}

export default Footer