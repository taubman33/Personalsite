import React from 'react';
import GH from "./assets/GitHub2.png";
import LI from "./assets/LinkedIn.png"



function Footer () {
return (

    
<div className= "footer">
   



  
<div className= "footer-links"></div> 

<a href="https://github.com/taubman33">
  <img src={GH} className="linkIcon" />
</a>

{/* <a href="mailto:taubman33@gmail.com?subject=JobOpportunity">
  <img src={GM} className="linkIcon" />
</a> */}

<h4> Jeremy Taubman 2020</h4>


<a href="https://www.linkedin.com/in/jeremy-taubman-23736460">
  <img src={LI} className="linkIcon" />
</a>

</div>
    )
}

export default Footer