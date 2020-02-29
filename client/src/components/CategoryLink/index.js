import React from "react";
import { Col } from "../Grid";
import "./style.css";

function CategoryLink(props) {
  return (
    <Col size="xl3 m4 s6" key={props.id}>
      <a className="orange-text text-darken-1 categoryLink" href={`/categories/${props.id}`} >{props.name}</a>
    </Col>
  );
}

export default CategoryLink;
