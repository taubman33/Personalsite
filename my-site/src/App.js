import React from "react";
import { BrowserRouter as  Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Art from './components/Art'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Music from './components/Music'
import Projects from './components/Projects'



function App() {
  return (

  <Router> 

        <div className="App">

          <header className="App-header">
          <Header />   
          </header>


        <div className="App-main">
        <Main />
        {/* <Switch>          
<Route exact path ='/Art' component= { () => <Art/>}/>
<Route exact path ='/Resume' component= { () => <Resume/>}/>
<Route exact path ='/AboutMe' component= { () => <AboutMe/>}/>
<Route exact path ='/Music' component= { () => <Music/>}/>
<Route exact path ='/Projects' component= { () => <Projects/>}/>


       </Switch>  */}
        </div>



        <footer className="App-footer">
          <Footer />
          </footer> 
          

        </div>
 
        
 </Router>

  );
}

export default App;
