import React from "react";
//import "./App.css";
import "./styles/app.css";
import "./components/Components.css";
import Start from "./components/Welcome.js";
import Profile from "./components/Profile.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App bg-gradient-1">
      <Start />
      <div>
        <Profile name="Sharad Jadhav" type="Web Developer" />
      </div>
      <div>
        <Projects />
      </div>
      {/*<Contact /> */}
    </div>
  );
}

export default App;
