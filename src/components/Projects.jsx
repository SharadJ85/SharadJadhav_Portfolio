import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';
import "./Components.css";

const Projects = props => {
  console.log(props);
  return (
    <div>
      <div className="projects">
        <CardDeck>
          <Card className="cards">
            <Card.Img variant="left" src={require("../media/vehicletracker.png")} alt="Vehicle Tracker"/>
            <Card.Body>
              <Card.Title>Vehicle Tracker</Card.Title>
            </Card.Body>
          </Card>
          <Card className="cards">
            <Card.Img variant="top" src={require("../media/LMDR.jpg")} alt="Land Mine Detection Robot"/>
            <Card.Body>
              <Card.Title>Land Mine Detection Robot</Card.Title>
            </Card.Body>
          </Card>
          <Card className="cards">
            <Card.Img variant="top" src={require("../media/flame.png")} alt="Flame" fluid="True"/>
            <Card.Body>
              <Card.Title>Flame</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
};

export default Projects;
