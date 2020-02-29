// Dependencies
import React, { useEffect } from "react";
import M from 'materialize-css';

// Style Import
import "./style.css";

// The Mat (Materialize) Icon component receives the name of the icon and if its has a tooltip
function MatIcon(props) {
  useEffect(() => {
    if(props.tooltip)M.Tooltip.init(document.querySelectorAll('.iconTooltip'));
  }, [props.tooltip]);

  return (
    <i className={"material-icons "+props.extraClass+(props.tooltip?" iconTooltip":"")}
    data-position="bottom" data-tooltip={props.tooltip}>{props.children}</i>
  );
}

export default MatIcon;
