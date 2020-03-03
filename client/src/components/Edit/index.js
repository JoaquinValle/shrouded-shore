import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

// Style Import
import "./assets/style.css";
import Reload from "./assets/images/reload.svg"

class EditModal extends Component {
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
        <a
          className="modal-trigger modal-fix"
          data-target="edit-modal"
        >
          <img src={Reload} width="48" height="48" className="topFix"/>
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="edit-modal"
          className="modal"
        >
          <div className="modal-content">
            <h4>Edit Information</h4>
            <form action="/edit" method="post">
                <h6>Contact Information</h6><br/>
                <label for="name">Name</label><br/>
                <input type="text" name="name" placeholder="John Doe"/>
                <label for="profilePicture">Profile Picture</label><br/>
                <input type="url" name ="profilePicture" placeholder="https://www.fillmurray.com/300/300"/>
                <label for="phoneNumber">Phone Number</label><br/>
                <input type="text" name ="phoneNumber" placeholder="55543525"/>
                <label for="location">Profile Picture</label><br/>
                <input type="text" name ="location" placeholder="Mexico City, Mexico"/>
                <h6>Personal Information</h6><br/>
                <label for="gender">Gender</label><br/>
                <input type="text" name ="gender" placeholder="male"/>
                <label for="age">Age</label><br/>
                <input type="text" name ="birthday" placeholder="29"/>

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
export default EditModal;