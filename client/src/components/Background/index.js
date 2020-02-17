import React, { useEffect } from "react";
import "./style.css";
import M from 'materialize-css';

function Background({children}) {
  
    useEffect(() => {
        M.Parallax.init(document.querySelectorAll('.parallax'));
    }, []);
  
    return (
    <div class="parallax-container">
        <div class="parallax"><img src={require("./images/monopoly-board-game-on-brown-wooden-tabletop-776654.jpg")}/></div>{children}
    </div>);
      
}

export default Background;