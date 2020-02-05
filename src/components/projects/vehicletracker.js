import React from "react";
import AaBase from "./aaBase.js"

export default function vehicletracker() {
  return (
    <div>
      <AaBase
        title="Vehicle Tracker"
        description="Vehicle Tracker is a small-site which gets the data of different
                     vehicles from a json file at the backend and puts it in a tabular
                     form. It also marks the vehicle's location(lat & lon) in the embedded
                     Google map."
        tools={["react", "nodejs", "expressjs"]}
        image='vehicletracker.png'
        sourceCode="https://github.com/SharadJ85/VehicleTracker"
      /> 
    </div>
  );
}
