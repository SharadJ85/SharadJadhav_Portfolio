import React from "react";
import AaBase from "./aaBase.js"

export default function Portfolio() {
  return (<div>
    <AaBase
    title="Portfolio"
    description=" A simple portfolio designed using React & Tailwindcss."
    tools={['react','tailwindcss']}
    image='portfolio.png'
    sourceCode="https://github.com/SharadJ85/SharadJadhav_Portfolio"
    site="https://sharadjadhav.tk"
    /> 
    </div> 
  );
}
