import React from "react";
import MatIcon from "../MatIcon";
import "./style.css";

function LikesButton(props) {
  return (
    <a className="orange-text" href="#like" onClick={props.onClick}>
      <span className="likesText">{props.likes}</span>
      <MatIcon extraClass="addBtn">{props.liked?"star":"star_border"}</MatIcon>
    </a>
  );
}

export default LikesButton;
