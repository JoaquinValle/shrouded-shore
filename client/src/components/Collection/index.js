import React from "react";
import { Col } from "../Grid";
import "./style.css";

// This file exports both the Collection and CollectionItem components

export function Collection({ children }) {
  return (
    <ul className="collection">{children}</ul>
  );
}

export function CollectionItem(props) {
  return(
    <li className="collection-item avatar">
      <Col size="s2">
        <img src={props.image} alt="" className="circle"/>
        <span className="title">{props.title}</span>
      </Col>
      <Col size="s2">
        <i className="material-icons">group</i>{props.players} players. <br/>
        <i className="material-icons">timer</i>{props.time} minutes.
      </Col>
      <Col size="s8">
        <p>{props.content.slice(0,200)+"..."}</p>
      </Col>
    </li>);
}
