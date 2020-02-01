import React from "react";
import AaBase from "./aaBase.js"

export default function Portfolio() {
  return (<div>
    <AaBase
    title="Portfolio"
    description=" A simple portfolio designed using React & Tailwindcss."
    source={true}
    visit={true}
    tools={['react','tailwindcss']}
    image='portfolio.png'
    link="https://sharadjadhav.tk"/>
    </div>
  );
}
