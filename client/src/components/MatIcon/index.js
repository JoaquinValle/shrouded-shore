import React from "react";
import "./style.css";

function MatIcon({children,extraClass}) {
  return (
    <i className={"material-icons "+extraClass}>{children}</i>
  );
}

export default MatIcon;
