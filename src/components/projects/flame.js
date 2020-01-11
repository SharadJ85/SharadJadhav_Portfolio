import React from 'react'

export default function Flame() {
    return (
        <div className="project">
          <div className="card">
            <div className="thumb">
              <img
                src={require("../media/flame.png")}
                alt="flame"
                className=" rounded h-60 bg-bottom "
              />
            </div>
            <div className="infos">
              <h1 className="title w-full m-b1">Flame</h1>
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
                />
                <img
                  className="inline-block px-2 h-6 w-10"
                  src={require("../media/express.png")}
                  alt="expressjs"
                />
                <img
                  className="inline-block px-2 h-6 w-10"
                  src={require("../media/firebase.png")}
                  alt="firebase"
                />
              </span>
              <p className="txt text-gray-400 mt-5 py-2 border-t border-gray-600">
                --------------
              </p>
              <button className="bg-transparent text-teal-700 font-semibold absolute bottom-0 left-0 m-4 py-2 px-4">
                Source code
              </button>
            </div>
          </div>
        </div>
    )
}
