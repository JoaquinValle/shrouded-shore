import React from "react";
import MatIcon from "../MatIcon";
import { Col } from "../Grid";
import "./style.css";

function ComplexityButton(props) {
  return (
    <Col size="xl4 m6 s10 offset-s1">
      <a href={"/complexity/"+props.children.toLowerCase().replace(" ","-")} className="waves-effect waves-light btn orange btn-large complexityBtn">
        <MatIcon extraClass="left">{props.icon}</MatIcon>{props.children}
      </a>
  </Col>
  );
}

export default ComplexityButton;
