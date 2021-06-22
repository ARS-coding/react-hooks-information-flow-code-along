import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({backgroundColor, functions}) {
  return <div className="child" onClick={() => {functions.changeParentColor(); functions.changeChildColor()}} style={{ backgroundColor: backgroundColor }} />;
}

export default Child;
