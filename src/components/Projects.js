import React, { Component } from "react";
import Vehicletracker from "./projects/vehicletracker.js";
import Lmdr from "./projects/lmdr.js";
import Flame from "./projects/flame.js";
import Portfolio from "./projects/portfolio.js";

const projectList = [<Portfolio/>, <Lmdr/>, <Vehicletracker/>, <Flame/>];
const propJects= projectList.map(namee => (
  <div className="lg:w-1/3 xl:w-1/3 w-full py-6 px-5" key={projectList.indexOf(namee)}>
    {namee} 
  </div>
));

export default class Projects extends Component {
  render() {
    return (
      <div className="bg-dark-cyan">
        <div className="text-5xl font-semibold text-center uppercase welcome-txt-name pt-16">
          Projects
        </div>
        <div className="p-10 flex flex-wrap flex-1-mx-2">
          {propJects}
        </div>
      </div>
    );
  }
}