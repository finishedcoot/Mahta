import React from "react";
import "../../../styles/DrawerToggleButton.css";

const DrawerToggleButton = (props) => {
  let burgerAnimation;

  if (props.show) {
    burgerAnimation = "open";
  } else {
    burgerAnimation = "";
  }

  return (
    <button
      className={`toggle-button ${burgerAnimation}`}
      onClick={props.click}
    >
      <div className={"toggle-button_line  "}></div>
    </button>
  );
};

export default DrawerToggleButton;
