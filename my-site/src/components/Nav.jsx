import React from "react";
import { Link } from "react-router-dom"



function Navbar () {
return (

<div className="navbar-container">

   <div className= "navbar">
          <Link to='/' className='nav-link'>
               <h4>Home</h4></Link>
          <Link to='/Projects' className='nav-link'>
               <h4>Projects</h4></Link>
          <Link to='/Resume' className='nav-link'>
               <h4>Resume</h4></Link>
          <Link to='/Contact' className='nav-link'>
               <h4>Contact</h4></Link>


   </div>
   
</div>
  )

}

export default Navbar