// Dependencies
import React from "react";

// Other Components
import { Col } from "../Grid";

// Style Import
import "./style.css";

// Component for category link, which links to specific id
function CategoryLink(props) {
  return (
    <Col size="xl3 m4 s6" key={props.id}>
      <a className="orange-text text-darken-1 categoryLink" href={`/categories/${props.id}`} >{props.name}</a>
    </Col>
  );
}

export default CategoryLink;
