import React from "react";
import "../../styles/BackDrop.css";

function BackDrop(props) {
  return <div className="backdrop" onClick={props.click}></div>;
}

export default BackDrop;
