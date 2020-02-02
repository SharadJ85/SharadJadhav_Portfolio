import React from "react";
import AaBase from "./aaBase.js"


export default function Flame() {
  return (
    <div>
      <AaBase
        title="Flame"
        description="Website"
        tools={["react", "nodejs", "expressjs", "firebase"]}
        image="flame.png"
        sourceCode="https://github.com/SharadJ85/Flame"
        site={false}
      />
    </div>
  );
}
