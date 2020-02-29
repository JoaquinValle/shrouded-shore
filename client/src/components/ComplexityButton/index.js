// Dependencies
import React , { useEffect } from "react";
import M from 'materialize-css';

// Other Components
import MatIcon from "../MatIcon";
import { Col } from "../Grid";

// Style Import
import "./style.css";

// Complexity button displays the different complexities with links to each of its pages
function ComplexityButton(props) {

  useEffect(() => {
    M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  }, []);

  return (
    <Col size="xl4 m6 s10 offset-s1">
      <a href={"/complexity/"+props.children.toLowerCase().replace(" ","-")} data-position="bottom" data-tooltip={props.tooltip}
      className="waves-effect waves-light btn orange btn-large complexityBtn tooltipped">
        <MatIcon extraClass="left">{props.icon}</MatIcon>{props.children}
      </a>
  </Col>
  );
}

export default ComplexityButton;
