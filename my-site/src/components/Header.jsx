import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import Navbar from './Nav'


function Header () {
    return (
<div className="header">
<h1>Jeremy Taubman</h1>
<h3>NYC Software Engineer</h3>

  <Navbar />
  


  </div>


    )
}

export default Header