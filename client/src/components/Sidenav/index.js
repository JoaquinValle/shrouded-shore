import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions"
import "./style.css";
import M from 'materialize-css';
import MatIcon from "../MatIcon"

function Nav(props) {
  const { height, width } = useWindowDimensions();
  const [userState, setUserState] = useState(1);
  const [animState, setAnimState] = useState("");

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('#sideNav'),{menuWidth:170});
  }, []);

  return (
    <aside>
      <a href="#" data-target="sideNav" className="btn sidenav-trigger sidenavShow orange"><MatIcon extraClass="white-text">account_circle</MatIcon></a>
      <ul id="sideNav" className={"sidenav sidenav-fixed sidenavWrapper "+animState}>

          {userState===0?(<>
          <li className="topSidenav"><div className="user-view mobileSidenavFix">
            <div className="background"></div>
            {/* <a href="#profile"><img className="circle" src="https://randomuser.me/api/portraits/men/72.jpg" alt="profile"/></a> */}
            <a href="#profile"><img className="circle" src={props.img} alt="profile"/></a>
            {/* <a href="#profile"><span className="white-text name">Dohn Joe</span></a> */}
            <a href="#profile"><span className="white-text name">{props.name}</span></a>
            <a href="#logout" onClick={()=>setUserState(1)}><span className="white-text email">Log Out</span></a>
          </div></li>
          <li><a href="/profile"><MatIcon>account_circle</MatIcon>Profile</a></li>
          <li><a href="/games"><MatIcon>collections</MatIcon>Games</a></li>
          <li><a href="/friends"><MatIcon>contacts</MatIcon>Friends</a></li>
          </>):(userState===1&&width>992)?(
          <li className="topSidenav"><div className="user-view">
            <div className="background"></div>
            <a href="#login" onClick={()=>{
              setAnimState("animatedSlideIn")
              setUserState(2)
            }}>
              <MatIcon extraClass="logInIcon">account_circle</MatIcon>
              {/* <img src={require("./ntsg_square.png")} alt="logo" width="64px"/> */}
              <span className="white-text name logInText">Log In</span>
            </a>
          </div></li>
          ):(<>
          <li className="topSidenav"><div className="user-view">
            <div className="background"></div>
            <i className="material-icons" id="closeLogin" onClick={()=>{
                setAnimState("animatedSlideOut")
                setUserState(1)
              }}>close</i>
            <MatIcon extraClass="logInIcon">account_circle</MatIcon>
            {/* <img src={require("./ntsg_square.png")} alt="logo" width="64px"/> */}
            <span className="white-text name logInText">Log In</span>
          </div></li>
          <form className="formWrapper">
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate"/>
                <label forHtml="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate"/>
                <label forHtml="password">Password</label>
                <a className="helper-text">Forgot password?</a>
              </div>
            </div>
            <div className="row">
              <button className="btn waves-effect waves-light logBtn teal" type="submit" name="action" onClick={()=>{
                setAnimState("animatedSlideOut")
                setUserState(0)
              }}>Log In</button><br/>
              <button className="btn waves-effect waves-light logBtn teal">Sign Up</button>
            </div>
          </form>
          </>)}

      </ul>
    </aside>
  );
} 

export default Nav;