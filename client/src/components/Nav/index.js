import React, { useState, useEffect } from "react";
import "./style.css";
import M from 'materialize-css';
import { useLocation } from 'react-router-dom';

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
      <nav className="cyan darken-4">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo left">Shrouded Shore</a>
          <a href="#" data-target="ham-nav" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <form>
                <div className="input-field">
                  <input id="search" type="search" required />
                  <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </li>
            <li className={locationState === "/top" ? "active" : "not-active"}><a href="/top">Top</a></li>
            <li className={locationState === "/categories" ? "active" : "not-active"}><a href="/categories">Categories</a></li>
            <li className={locationState === "/complexity" ? "active" : "not-active"}><a href="/complexity">Complexity</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <ul className="sidenav right" id="ham-nav">
      <li>
        <form>
          <div className="input-field sidenavSearch">
            <input id="search" type="search" required />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
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
