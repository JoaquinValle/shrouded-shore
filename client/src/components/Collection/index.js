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
    <li className="collection-item" id={props.id}>
      <Col size="xl1 l1 s2">
        <img src={props.image} alt="" className="imgCollection"/>
      </Col>
          
      <Col size={props.content!==""?"xl4 l5 s10":"xl11 s10"}>
        <Col size="s12">
          <h5 className="title">{props.title.length<=38?props.title:props.title.slice(0,38).trim()+("..")}</h5>
        </Col>
        {props.players!==null?(
          <Col>
            <i className="material-icons iconText orange-text">group</i> {props.players} players
          </Col>
        ):""}
        {props.time!==null?(
          <Col>
            <i className="material-icons iconText orange-text">timer</i> {props.time} minutes
          </Col>
        ):""}
      </Col>

      {props.content!==""?(
        <Col size="xl7 l6 s12">
          <p>{props.content.replace("�","").slice(0,200).trim()+".."}</p>
        </Col>
      ):""}
    </li>);
}
