import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function changeColor() {
    setColor(getRandomColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child changeColor={changeColor} />
      <Child changeColor={changeColor} />
    </div>
  );
}

export default Parent;
