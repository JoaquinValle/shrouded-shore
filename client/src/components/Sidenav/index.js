// Dependencies
import React, { useState, useEffect} from "react";
import M from 'materialize-css';

// Other Components
import MatIcon from "../MatIcon"
import API from "../../utils/API"
import Modal from "../Modal"

// React Utilities and Hooks
import useWindowDimensions from "../../utils/useWindowDimensions"

// Style Import
import "./style.css";

// Nav components displays navbar and handles searching
function Nav() {
  const { width } = useWindowDimensions();
  const [userState, setUserState] = useState(1);
  const [animState, setAnimState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [passState, setPassState] = useState("");
  const [loggedUserState, setLoggedUserState] = useState();

  const getInfo = (event) => {
    event.preventDefault()
    if (emailState !== "" || passState !== "") {
      console.log(emailState)
      console.log(passState)
    }
  }

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('#sideNav'),{menuWidth:170});
  }, []);

  return (
    <aside>
      <a href="#sidenav" data-target="sideNav" className="btn sidenav-trigger sidenavShow orange"><MatIcon extraClass="white-text">account_circle</MatIcon></a>
      <ul id="sideNav" className={"sidenav sidenav-fixed sidenavWrapper "+animState}>

          {userState===0?(<>
          <li className="topSidenav"><div className="user-view mobileSidenavFix">
            <div className="background"></div>
            <a href="#profile"><img className="circle" src={loggedUserState.img} alt="profile"/></a>
            <a href="#profile"><span className="white-text name">{loggedUserState.name}</span></a>
            <a href="#logout" onClick={()=>setUserState(1)}><span className="white-text email">Log Out</span></a>
          </div></li>
          <li><a href="/profile"><MatIcon>account_circle</MatIcon>Profile</a></li>
          <li><a href="/games"><MatIcon>collections</MatIcon>Games</a></li>
          <li><a href="/suggestions"><MatIcon>extension</MatIcon>Suggestions</a></li>
          {/* <li><a href="/friends"><MatIcon>contacts</MatIcon>Friends</a></li> */}
          </>):(userState===1&&width>992)?(
          <li className="topSidenav"><div className="user-view">
            <div className="background"></div>
            <a href="#login" onClick={()=>{
              setAnimState("animatedSlideIn")
              setUserState(2)
            }}>
              <MatIcon extraClass="logInIcon">account_circle</MatIcon>
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
            <span className="white-text name logInText">Log In</span>
          </div></li>
          <form action="/login" method="post" className="formWrapper" onSubmit={getInfo}>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" onChange={(e) => setEmailState(e.target.value)} value={emailState}/>
                <label forhtml="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" onChange={(e) => setPassState(e.target.value)} value={passState}/>
                <label forhtml="password">Password</label>
                <a href="/recover-password" className="helper-text">Forgot password?</a>
              </div>
            </div>
            <div className="row">
              <div className="col s3">
                <div className="row">
                  <div className="col s12">
                    <button type="submit" className="btn waves-effect waves-light logBtn" name="action" 
                      onClick={(e)=>{
                        e.preventDefault();
                        console.log(mailState, passState)
                        API.logIn({mail:mailState,password:passState})
                        .then(res=>{
                          console.log(res);
                          if(res.data.message==="User not found") console.log("User not found..");
                          else{
                            setLoggedUserState(res)
                            setAnimState("animatedSlideOut")
                            setUserState(0)
                          }
                        })
                        .catch(err=>console.log(err));                    
                    }}>Log In</button><br/>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <Modal/>
          </>)}


      </ul>
    </aside>
  );
} 

export default Nav;


//valido  objeto token
//invalido expiro
