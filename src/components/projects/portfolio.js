import React from 'react'

export default function Portfolio() {
    return (
        <div class="project">
          <div class="card">
            <div class="thumb">
              <img
                src={require("../media/portfolio.png")}
                alt="Portfolio"
                className=" rounded h-60 bg-bottom "
              />
            </div>
            <div class="infos">
              <h1 class="title w-full m-b1">Portfolio</h1>
              <span>
                <img
                  class="inline-block px-2 h-6 w-10"
                  src={require("../media/react.png")}
                  alt="react"
                />
                <img
                  class="inline-block px-2 h-6 w-10"
                  src={require("../media/tailwind.png")}
                  alt="tailwindcss"
                />
              </span>
              <p class="txt text-gray-400 mt-5 py-2 border-t border-gray-600">
                A simple portfolio designed using React & Tailwindcss.
              </p>
              <button class="bg-transparent text-teal-700 font-semibold absolute bottom-0 left-0 m-4 py-2 px-4">
                Source code
              </button>
            </div>
          </div>
        </div>
    )
}
