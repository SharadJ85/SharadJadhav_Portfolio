import React from 'react'

export default function Portfolio() {
    return (
        <div className="project">
          <div className="card">
            <div className="thumb">
              <img
                src={require("../media/portfolio.png")}
                alt="Portfolio"
                className=" rounded h-60 bg-bottom "
              />
            </div>
            <div className="infos">
              <h1 className="title w-full m-b1">Portfolio</h1>
              <span>
                <img
                  className="inline-block px-2 h-6 w-10"
                  src={require("../media/react.png")}
                  alt="react"
                />
                <img
                  className="inline-block px-2 h-6 w-10"
                  src={require("../media/tailwind.png")}
                  alt="tailwindcss"
                />
              </span>
              <p className="txt text-gray-400 mt-5 py-2 border-t border-gray-600">
                A simple portfolio designed using React & Tailwindcss.
              </p>
              <button className="bg-transparent text-teal-700 font-semibold absolute bottom-0 left-0 m-4 py-2 px-4">
                Source code
              </button>
            </div>
          </div>
        </div>
    )
}
