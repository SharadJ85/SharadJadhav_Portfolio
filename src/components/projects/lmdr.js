import React from 'react'

export default function Lmdr() {
    return (
        <div className="project">
          <div className="card">
            <div className="thumb">
              <img
                src={require("../media/LMDR.jpg")}
                alt="LMDR"
                className=" rounded h-60 bg-bottom "
              />
            </div>
            <div className="infos">
              <h1 className="title w-full m-b1">Land Mine Detection Robot</h1>
              <span>
                <img
                  className="inline-block px-2 h-6 w-10"
                  src={require("../media/python.png")}
                  alt="python"
                />
              </span>
              <p className="txt text-gray-400 mt-5 py-2 border-t border-gray-600">
              Designed a extensible robotic system that can be remotely commanded and monitored. 
              It is equipped with a metal detection sensor,a gps for location tracking, a camera that for real 
              time update of the robot and its surroundings.
              </p>
              <button className="bg-transparent text-teal-700 font-semibold absolute bottom-0 left-0 m-4 py-2 px-4">
                Source code
              </button>
            </div>
          </div>
        </div>
    )
}