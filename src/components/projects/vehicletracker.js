import React from "react"

export default function vehicletracker() {
    return (
      <div className="project">
        <div className="card">
          <div className="thumb">
            <img
              src={require("../media/vehicletracker.png")}
              alt="vehicletracker"
              className=" rounded h-60 bg-bottom "
            />
          </div>
          <div className="infos">
            <h1 className="title w-full m-b1">Vehicle Tracker</h1>
            <span>
              <img
                className="inline-block px-2 h-6 w-10"
                src={require("../media/react.png")}
                alt="react"
              />
              <img
                className="inline-block px-2 h-6 w-10"
                src={require("../media/node.png")}
                alt="nodejs"
                height="20"
                width="20"
              />
              <img
                className="inline-block px-2 h-6 w-10"
                src={require("../media/express.png")}
                alt="expressjs"
                height="20"
                width="20"
              />
            </span>
            <p className="txt text-gray-400 mt-5 py-2 border-t border-gray-600">
              Vehicle Tracker is a small-site which gets the data of different
              vehicles from a json file at the backend and puts it in a tabular
              form. It also marks the vehicle's location(lat & lon) in the embedded
              Google map.
            </p>
            <button className="bg-transparent text-teal-700 font-semibold absolute bottom-0 left-0 m-4 py-2 px-4">
              Source code
            </button>
          </div>
        </div>
      </div>
    );
  }
