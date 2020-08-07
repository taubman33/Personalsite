import React, { Component } from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header' 
import Main from './components/Main'
import Footer from './components/Footer'


import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

import Stellar from './components/projects/Stellar'
import Fxdb from './components/projects/Fxdb'
import Bottom from './components/projects/Bottom'
import Comedian from './components/projects/Comedian'
import Park from './components/projects/Park'


const routes = [
  
  {
    path: "/AboutMe",
    component: AboutMe
  },
  {
    path: "/Resume",
    component: Resume
  },
  {
    path: "/Projects",
    component: Projects
  },
  {
    path: "/Contact",
    component: Contact
  },
  {
    path: "/Projects/Stellar",
    component: Stellar
  },
  {
    path: "/Projects/Fxdb",
    component: Fxdb
  },
  {
    path: "/Projects/Bottom",
    component: Bottom
  },
  {
    path: "/Projects/Comedian",
    component: Comedian
  },
  {
    path: "/Projects/Park",
    component: Park
  }
];

class App extends Component {
  render() {
  return (

  <Router> 

        <div className="App">

          <header className="App-header">
          <Header />   
          </header>

    
          <div className="App-main">
          <Main />
          </div>

        <footer className="App-footer">
          <Footer />
          </footer> 
          

   </div>

 
  </Router>

  );  
 }
}


export default App;
