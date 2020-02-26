import React, { useState, useEffect } from "react";
import "./style.css";
import M from 'materialize-css';
import { useLocation } from 'react-router-dom';
import MatIcon from "../MatIcon"

function Nav() {
  const location = useLocation();
  const [locationState, setLocationState] = useState("/");


  useEffect(() => {
    setLocationState(location.pathname);
  }, [location]);

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('#ham-nav'),{edge:'right',closeOnClick: true});
  }, []);

  return (
  <>
    <div className="navbar-fixed">
      <nav className="teal">
        <div className="nav-wrapper">
          {/* <a href="/" className="brand-logo left"><img src={require("./ntsg_square.png")} alt="ntsg logo" height="64px"/></a> */}
          <a href="/" className="brand-logo left"><img src={require("./ntsg_horizontal.png")} alt="ntsg logo" height="40px"/></a>
          <a href="#" data-target="ham-nav" className="sidenav-trigger right"><MatIcon>menu</MatIcon></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <form>
                <div className="input-field">
                  <input id="search" type="search" required />
                  <label className="label-icon" htmlFor="search"><MatIcon>search</MatIcon></label>
                  <MatIcon>close</MatIcon>
                </div>
              </form>
            </li>
            <li className={locationState === "/" ? "active orange" : "not-active"}><a href="/">New</a></li>
            <li className={locationState === "/top" ? "active orange" : "not-active"}><a href="/top">Top</a></li>
            <li className={locationState === "/categories" ? "active orange" : "not-active"}><a href="/categories">Categories</a></li>
            <li className={locationState === "/complexity" ? "active orange" : "not-active"}><a href="/complexity">Complexity</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <ul className="sidenav right" id="ham-nav">
      <li>
        <form>
          <div className="input-field sidenavSearch">
            <input id="search" type="search" required />
            <label className="label-icon" htmlFor="search"><MatIcon>search</MatIcon></label>
          </div>
        </form>
      </li>
      <li className={locationState === "/top" ? "active" : "not-active"}><a href="/top">Top</a></li>
      <li className={locationState === "/categories" ? "active" : "not-active"}><a href="/categories">Categories</a></li>
      <li className={locationState === "/complexity" ? "active" : "not-active"}><a href="/complexity">Complexity</a></li>
    </ul>
  </>
  );
}

export default Nav;
