import React from "react";

import './App.css';
import Header from './components/Header' 
import Main from './components/Main'
import Footer from './components/Footer'

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
