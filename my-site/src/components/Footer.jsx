import React from 'react';
import GH from "./assets/GitHub2.png";
import LI from "./assets/LinkedIn.png"



function Footer () {
return (

    
<div className= "footer">
   



  
<div className= "footer-links"></div> 

<a href="https://github.com/taubman33" target="_blank" alt="GHIcon">
  <img src={GH} className="footer-linkIcon" />
</a> 

<a href="https://www.linkedin.com/in/jeremy-taubman-23736460" target="_blank" alt="LIIcon">
  <img src={LI} className="footer-linkIcon" />
</a>

</div>
    )
}

export default Footer