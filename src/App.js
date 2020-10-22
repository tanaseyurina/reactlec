import React, { Component } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import Top from "./Components/Top";
import AboutMe from './Components/AboutMe.js';
import Works from './Components/Works';
import Skill from './Components/Skill';
import Contact from './Components/Contact';
import Endbar from './Components/Endbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Top 
          title="Top"
          id="top"/>
        <AboutMe
          title="About"
          id="about"
        />
        <Works
          title="Works"
          id="works"
        />
        <Skill
          title="Skill"
          id="skill"
        />
        <Contact
          title="Contact"
          id="contact"
        />
        <Endbar />
      </div>
    );
  }
}

export default App;
