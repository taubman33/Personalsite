import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"



function Nav () {
return (
<div className= "navbar">

<Router>

<Link to='/AboutMe' className='nav-link'><h4>About Me</h4></Link>
<Link to='/Projects' className='nav-link'><h4>Projects</h4></Link>
<Link to='/Resume' className='nav-link'><h4>Resume</h4></Link>
<Link to='/' className='nav-link'><h4>Home</h4></Link>

{/* <Link to='/Art' className='nav-link'><h4>Art</h4></Link>
<Link to='/Music' className='nav-link'><h4>Music</h4></Link> */}








</Router>


</div>
    )
}

export default Nav