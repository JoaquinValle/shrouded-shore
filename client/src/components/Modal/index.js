import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

// Style Import
import "./style.css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <>
        <button
          className="waves-effect waves-light btn modal-trigger modal-fix"
          data-target="sign-up-modal"
        >
          Sign Up
        </button>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="sign-up-modal"
          className="modal"
        >
          <div className="modal-content">
            <h4>Create Account</h4>
            <form action="/signup" method="post">
                <label for="name">Name</label><br/>
                <input type="text" name="name" placeholder="John Doe"/>
                <label for="password">Password</label><br/>
                <input type="password" name="password" placeholder="super52SecreT@password"/>
                <label for="email">Email</label><br/>
                <input type="text" name ="email" placeholder="catanrocks@gmail.com"/>
                <span>
                    <button type="submit" className="modal-close waves-effect waves-teal btn btn-fix">Submit</button>
                    <button type="button" className="modal-close waves-effect waves-red red btn">Cancel</button>
                </span>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;