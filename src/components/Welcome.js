import React from "react";
import "../styles/app.css";

// import {Button} from "react-bootstrap/Button";

export default function Start() {
  return (
    <div className="welcome">
      <div className="lolol11">
        <div className="Welcome-txt">
          <h1 className="welcome-txt-0">
            <big>
                Hi, my name is{" "}
                <big>
                  <span className="welcome-txt-name">Sharad Jadhav</span>
                </big>
            </big>
          </h1>
          <h1 className="welcome-txt-0">
            <big>
              I'm a Web Developer.
            </big>
          </h1>
          <div className="welcome-button">
             <button className="welcome-button-knowmore">
              <span><a href="#Profile">Know more</a></span>
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
}
