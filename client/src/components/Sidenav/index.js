import React, { useState, useEffect } from "react";
import "./style.css";
import M from 'materialize-css';

function Nav(props) {
  const [userState, setUserState]=useState(false);

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('#sideNav'),{menuWidth:170});
  }, []);

  return (
    <aside>
      <ul id="sideNav" className="sidenav sidenav-fixed sidenavWrapper">
        <li><div className="user-view">
          <div className="background cyan darken-4"></div>
          {userState?(<div>
            <a href="#profile"><img className="circle" src="https://randomuser.me/api/portraits/men/72.jpg" alt="profile"/></a>
            <a href="#profile"><span className="white-text name">Dohn Joe</span></a>
            <a href="#logout" onClick={()=>setUserState(false)}><span className="white-text email">Log Out</span></a>
          </div>):(<div>
            <a href="#login">
              <i className="material-icons logInIcon">account_circle</i>
              <span className="white-text email" onClick={()=>setUserState(true)}>Log In</span>
            </a>
          </div>)}
        </div></li>

        <li><a href={userState?"#profile":"#login"}><i className="material-icons">account_circle</i>Profile</a></li>

        <li><a href={userState?"#games":"#login"}><i className="material-icons">collections</i>Games</a></li>

        <li><a href={userState?"#friends":"#login"}><i className="material-icons">contacts</i>Friends</a></li>

      </ul>
    </aside>
  );
}

export default Nav;