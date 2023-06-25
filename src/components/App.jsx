import React, { useState } from "react";

function App() {
  const [headingText, setHead] = useState("Hello");
  const [outstyle, setColour] = useState(true);
  //const [instyle, setinColour]= useState(false);

  function outColour() {
    setColour(false);
  }
  function inColour() {
    setColour(true);
  }

  function update() {
    setHead("Submitted");
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={update}
        style={{ backgroundColor: outstyle ? "white" : "black" }}
        // style={{backgroundColor: outstyle? "white": "black"}}
        onMouseOut={outColour}
        onMouseOver={inColour}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
