import React, { useEffect } from "react";
import "./style.css";
import M from 'materialize-css';

function Nav() {
  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('#slide-out'),{menuWidth:170});
  }, []);

  return (
    <aside>
      <ul id="slide-out" className="sidenav sidenav-fixed sidenavWrapper">

        <li><div class="user-view">
          <div class="background cyan darken-4"></div>
          <a href="#user"><img class="circle" src="https://randomuser.me/api/portraits/men/72.jpg"/></a>
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"><span class="white-text email">dohn_joe@gmail.com</span></a>
        </div></li>

        <li><a className="waves-effect" href="#!"><i class="material-icons">account_circle</i>Profile</a></li>

        <li><a className="waves-effect" href="#!"><i class="material-icons">collections</i>Games</a></li>

        <li><a className="waves-effect" href="#!"><i class="material-icons">contacts</i>Friends</a></li>

      </ul>
    </aside>
  );
}

export default Nav;