import React, { Component } from "react";
import "../styles/app.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile" id="Profile">
        <div className="bg-gradient-1">
          <div className="bg-gradient-slanted-1-0">
            <div className=" mx-auto px-22 pb-12 ">
              <div className="text-5xl text-center text-dark-cyan uppercase font-bold mb-5">
                about me
              </div>
              <div className="flex flex-wrap items-start mx-auto ">
                <div className="w-full lg:w-1/2 xl:w-1/2 h-auto  xl:pb-10 pl-5">
                  <div className="md:flex-shrink-0 max-w-xs flex-wrap p-10 md:mx-auto md:mx-auto xl:pr-5 ">
                    <div className="rounded-1">
                      <img
                        src={require("./media/sharad.jpg")}
                        alt="Sharad_Jadhav_img"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex max-w-xl pr-10">
                  <div className="w-full text-left text-black text-xl">
                    <div className="my-10">
                      I am a fullstack web developer specializing in frontend
                      frameworks like reactjs, bootstrap,tailwindcss etc with
                      nodejs,expressjs as backend.
                    </div>
                    <div className="my-10">
                      I have also worked with other web development platforms
                      such as wordpress and python.
                    </div>
                    <div className="my-10">
                      <button
                        className="
                         outline-none bg-dark-cyan  text-white items-center font-semibold py-1 px-4 border-dark-cyan rounded-full shadow-huge"
                      >
                        <a
                          href="https://drive.google.com/open?id=14MDvhH8tRiF9PottHzt8uGz94sAio16w"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Resume
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
