import React from "react";
import AaBase from "./aaBase.js"

export default function Lmdr() {
  return (
    <div>
      <AaBase
        title="Land Mine Detection Robot"
        description="Designed a extensible robotic system that can be remotely commanded and monitored. 
      It is equipped with a metal detection sensor,a gps for location tracking, a camera that for real 
      time update of the robot and its surroundings."
        source={false}
        visit={false}
        tools={["python"]}
        image="LMDR.jpg"
        link="https://sharadjadhav.tk"
      />
    </div>
  );
}
