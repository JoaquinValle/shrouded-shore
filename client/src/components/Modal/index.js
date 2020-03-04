import React, { useState, useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import API from "../../utils/API";

// Style Import
import "./style.css";

function Modal(){

  const [userName,setUserName]=useState("");
  const [userPass,setUserPass]=useState("");
  const [userMail,setUserMail]=useState("");

  const options = {
    inDuration: 250,
    outDuration: 250,
    opacity: 0.5,
    dismissible: false,
    startingTop: "4%",
    endingTop: "10%"
  };

  useEffect(() => {
    M.Modal.init(document.querySelectorAll('#sign-up-modal'),options);
  }, []);

  return (<>
    <button className="waves-effect waves-light btn modal-trigger modal-fix" data-target="sign-up-modal">
      Sign Up
    </button>

    <div id="sign-up-modal" className="modal">
      <div className="modal-content">
        <h4>Create Account</h4>
        <form>
            <label htmlFor="name">Name</label><br/>
            <input type="text" name="name" placeholder="John Doe"
              value={userName} onChange={e=>setUserName(e.target.value)}/>

            <label htmlFor="password">Password</label><br/>
            <input type="password" name="password" placeholder="super52SecreT@password"
            value={userPass} onChange={e=>setUserPass(e.target.value)}/>

            <label htmlFor="email">Email</label><br/>
            <input type="text" name ="email" placeholder="catanrocks@gmail.com"
            value={userMail} onChange={e=>setUserMail(e.target.value)}/>
            {/* <input type="url" name ="profilePicture" placeholder="https://www.fillmurray.com/300/300"/> */}
            <span>
                <button type="submit" className="modal-close waves-effect waves-teal btn btn-fix"
                onClick={e=>{
                  e.preventDefault();
                  let user={
                    name:userName,
                    mail:userMail,
                    password:userPass
                  }
                  API.signup(user)
                  .then(res=>{
                    console.log(res);
                    setUserName("");
                    setUserPass("");
                    setUserMail("");
                  })
                  .catch(err=>console.log(err.message));
                }}>Submit</button>
                <button type="button" className="modal-close waves-effect waves-red red btn">Cancel</button>
            </span>
        </form>
      </div>
    </div>
  </>);
}

export default Modal;