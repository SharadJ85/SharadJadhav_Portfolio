import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Start from "./components/Welcome.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() { 
  return (
    <div className="App">
      <Start/>
       {/*<div>
        <Profile name='Sharad Jadhav' type='Web Developer'/>
      </div>
       <div>
        <Projects/>
      </div>  
        <Contact /> */}
    </div> 
  );
}

export default App;
