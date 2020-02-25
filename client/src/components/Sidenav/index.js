import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions"
import "./style.css";
import M from 'materialize-css';

function Nav(props) {
  const { height, width } = useWindowDimensions();
  const [userState, setUserState] = useState(1);
  const [animState, setAnimState] = useState("");

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('#sideNav'),{menuWidth:170});
  }, []);

  return (
    <aside>
      <a href="#" data-target="sideNav" class="btn sidenav-trigger sidenavShow orange"><i class="material-icons white-text">account_circle</i></a>
      <ul id="sideNav" className={"sidenav sidenav-fixed sidenavWrapper "+animState}>

          {userState===0?(<>
          <li class="topSidenav"><div className="user-view mobileSidenavFix">
            <div className="background"></div>
            <a href="#profile"><img className="circle" src="https://randomuser.me/api/portraits/men/72.jpg" alt="profile"/></a>
            <a href="#profile"><span className="white-text name">Dohn Joe</span></a>
            <a href="#logout" onClick={()=>setUserState(1)}><span className="white-text email">Log Out</span></a>
          </div></li>
          <li><a href="#profile"><i className="material-icons">account_circle</i>Profile</a></li>
          <li><a href="#games"><i className="material-icons">collections</i>Games</a></li>
          <li><a href="#friends"><i className="material-icons">contacts</i>Friends</a></li>
          </>):(userState===1&&width>992)?(
          <li class="topSidenav"><div className="user-view">
            <div className="background"></div>
            <a href="#login" onClick={()=>{
              setAnimState("animatedSlideIn")
              setUserState(2)
            }}>
              <i className="material-icons logInIcon">account_circle</i>
              <span className="white-text name logInText">Log In</span>
            </a>
          </div></li>
          ):(<>
          <li class="topSidenav"><div className="user-view">
            <div className="background"></div>
            <i className="material-icons" id="closeLogin" onClick={()=>{
                setAnimState("animatedSlideOut")
                setUserState(1)
              }}>close</i>
            <i className="material-icons logInIcon">account_circle</i>
            <span className="white-text name logInText">Log In</span>
          </div></li>
          <form class="formWrapper">
            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate"/>
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate"/>
                <label for="password">Password</label>
                <a class="helper-text">Forgot password?</a>
              </div>
            </div>
            <div class="row">
              <button class="btn waves-effect waves-light logBtn teal" type="submit" name="action" onClick={()=>{
                setAnimState("animatedSlideOut")
                setUserState(0)
              }}>Log In</button><br/>
              <button class="btn waves-effect waves-light logBtn teal">Sign Up</button>
            </div>
          </form>
          </>)}

      </ul>
    </aside>
  );
} 

export default Nav;