import React from "react";
import AaBase from "./aaBase.js"


export default function Flame() {
  return (
    <div>
      <AaBase
        title="Flame"
        description="Website"
        source={true}
        visit={false}
        tools={["react", "nodejs", "expressjs", "firebase"]}
        image="vehicletracker.png"
        link="https://sharadjadhav.tk"
      />
    </div>
  );
}
