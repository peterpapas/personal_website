import React from "react";
import "./button.css";

function Button(props) {
  return (
    <a href={props.href}>
      {props.icon}
      {props.name}
    </a>
  );
}

export default Button;
