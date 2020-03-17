import React from 'react';
import { Link, Route } from 'react-router-dom'
import GH from "./GH.png";
import LI from "./LI.png"

function Footer () {
return (

    
<div className= "footer">
   



  
 <Link to="https://github.com/taubman33">
  <img src={GH} className="githubIcon" />
</Link>

<h4> 2020 Jeremy Taubman</h4>

<Link to="https://www.linkedin.com/in/jeremy-taubman-23736460">
  <img src={LI} className="linkedInIcon" />
</Link>
     

       {/* <Route path='/taubman33' component={() => window.location = 'https://github.com/taubman33'}/>
    <Route path='/jeremy-taubman-23736460/' component={() => window.location = 'https://www.linkedin.com/in/jeremy-taubman-23736460/'}/>
     
    <a href="/taubman33"> <h4>GitHub</h4> </a>
 
    <a href="/jeremy-taubman-23736460/"> <h4>LinkedIn</h4> </a>
 */}

</div>
    )
}

export default Footer