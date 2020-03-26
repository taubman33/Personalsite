import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import Navbar from './Nav'


function Header () {
    return (
<div className="header">

  <div className="header-container">
      <div className = "header-title">
         <h1>Jeremy Taubman</h1>
      </div>
  <h3>NYC Software Engineer</h3>
  
    <Navbar />

    </div>
    


  </div>


    )
}

export default Header