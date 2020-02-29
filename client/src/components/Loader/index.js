// Dependencies
import React from "react";

// Style Import
import "./style.css";

// The Loader component shows a circle animation for wait times
function Loader() {
  return (
  <div className="preloader-wrapper big active">
    <div className="spinner-layer spinner-cyan-only">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  </div>
  );
}

export default Loader;
