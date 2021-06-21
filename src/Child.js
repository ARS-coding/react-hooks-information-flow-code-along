import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child(props) {
  return <div className="child" onClick={props.changeColor} style={{ backgroundColor: "#FFF" }} />;
}

export default Child;
