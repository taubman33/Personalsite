import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"



function Navbar () {
return (

<div className="navbar-container">

   <div className= "navbar">


          <Link to='/' className='nav-link'>
               <h4 style={{fontWeight:"350"}}>Home</h4></Link>
          <Link to='/Projects' className='nav-link'>
               <h4 style={{fontWeight:"350"}}>Projects</h4></Link>
          <Link to='/Resume' className='nav-link'>
               <h4 style={{fontWeight:"350"}}>Resume</h4></Link>
          <Link to='/Contact' className='nav-link'>
               <h4 style={{fontWeight:"350"}}>Contact</h4></Link>


   </div>
   
</div>
  )

}

export default Navbar