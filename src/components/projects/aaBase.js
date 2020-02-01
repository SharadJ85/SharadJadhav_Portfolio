import React from "react";

const AaBase = props => {
const tolozz=props.tools.map(tool=>{return <img
    className="inline-block px-2 h-6 w-10"
    src={require('../media/'+tool+'.png')}
    alt={tool}
    />})

  return (
    <div className="project">
      <div className="card">
        <div className="thumb">
          <img
            src={require("../media/"+props.image)}
            alt={props.image}
            className=" rounded h-60 bg-bottom "
          />
        </div>
        <div className="infos">
          <h1 className="title w-full m-b1">{props.title}</h1>
          <span>
            {tolozz}
          </span>
          <p className="txt text-gray-400 mt-5 py-2 border-t border-gray-600">
            {props.description}
          </p>
          {props.source ? (
            <button className="bg-transparent text-teal-700 font-semibold absolute bottom-0 left-0 m-4 py-2 px-4">
              Source code
            </button>
          ) : null}
          {props.visit ? (
            <button className="bg-transparent text-teal-700 font-semibold absolute bottom-0 right-0 m-4 py-2 px-4">
              <a href={props.link} target="_blank" rel="noopener norefetooler">
                Visit
              </a>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AaBase;
