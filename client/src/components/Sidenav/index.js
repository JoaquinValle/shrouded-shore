import React, { useEffect } from "react";
import "./style.css";
import M from 'materialize-css';

function Nav() {
  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('#slide-out'));
  }, []);

  return (
    <aside>
      <ul id="slide-out" className="sidenav sidenav-fixed sidenavWrapper">
        <li><a href="#!">User</a></li>
        <li><a href="#!">Games</a></li>
      </ul>
    </aside>
  );
}

export default Nav;
