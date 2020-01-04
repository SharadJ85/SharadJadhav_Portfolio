import React from "react";
import { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default class Profile extends Component {
  render() {
    return ( 
      <div className="Prof">
        <div className="Abt">
           <Container>
            *<Row>
              <Col>
                <div className="image">
                  <Image src={require("../media/sharad.jpg")} className="image-sharad" rounded  />
                </div>
              </Col>
              <Col className="Bio">
                <div className="Profile">
                  <div className="Profile-txt">
                    <div> 
                      <p>
                        I am a fullstack web developer specializing in frontend
                        frameworks like reactjs, bootstarp, etc with
                        nodejs,expressjs backends.
                      </p>
                     </div>
                    <div>
                      <p>
                        I have also worked with other web development platforms
                        such as wordpress and python.
                      </p>
                    </div>
                  </div>
                  <div className="Profile-button" >
                    <button
                      className="Profile-button-Resume"
                      href="https://drive.google.com/open?id=14MDvhH8tRiF9PottHzt8uGz94sAio16w"
                      target="_blank"
                    >
                      <span>Resume</span>
                    </button> 
                  </div>
                </div>
              </Col>
            </Row>
          </Container> 
        </div>
      </div>
    );
  }
}
