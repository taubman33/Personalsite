import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Resume from './Resume'
import Nav from './Nav'


function Header () {
    return (
<div className="header">
<h1>Jeremy Taubman</h1>

  <Nav />
  


  </div>


    )
}

export default Header