import React, { Component } from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Main from './components/Main'
import Footer from './components/Footer'
import Home from './components/Home'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

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
        <Main
        />
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
