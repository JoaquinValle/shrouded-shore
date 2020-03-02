// Dependencies
import React from "react";

// Other Components
import MatIcon from "../MatIcon";

// Style Import
import "./style.css";

// Likes Button component determines if it's liked or not, and displays the appropriate star icon
function LikesButton(props) {
  return (
    <a className="orange-text" href="#like" onClick={props.onClick}>
      <span className="likesText">{props.likes}</span>
      <MatIcon extraClass="addBtn" tooltip={props.liked?"dislike":"like"}>{props.liked?"star":"star_border"}</MatIcon>
    </a>
  );
}

export default LikesButton;
