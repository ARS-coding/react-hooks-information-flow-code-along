import React from "react";
import { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {

  const randomColor = getRandomColor(); // returns a random color

  const [parentColor, setParentColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("FFF");

  function changeParentColor() {
    setParentColor(getRandomColor)
    console.log("parent")
  }

  function changeChildColor() {
    setChildrenColor(getRandomColor)
    console.log("child")

  }

  return (
    <div className="parent" style={{ backgroundColor: parentColor }}>
      <Child backgroundColor={childrenColor} functions={{changeParentColor: changeParentColor, changeChildColor: changeChildColor}} />
      <Child backgroundColor={childrenColor} functions={{changeParentColor: changeParentColor, changeChildColor: changeChildColor}} />
    </div>
  );
}

export default Parent;
