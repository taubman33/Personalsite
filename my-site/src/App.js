import React from "react";

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


function App() {

  return (


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

 


  );  
 }


export default App;
