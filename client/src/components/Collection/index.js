// Dependencies
import React from "react";

// Other Components
import { Col } from "../Grid";
import MatIcon from "../MatIcon"

// Style Import
import "./style.css";

// This file exports both the Collection and CollectionItem components

// Collection receives list items and displays them accordingly
export function Collection({ children }) {
  return (
    <ul className="collection">{children}</ul>
  );
}

// Collection item recieves game info and displays in screen, with link by id
export function CollectionItem(props) {
  return(
    <li className="collection-item" id={props.id}><a className="collectionLink" href={`/games/${props.id}`}>
      <Col size="xl1 l2 s3">
        <img src={props.image} alt="" className="imgCollection"/>
      </Col>
          
      <Col size="xl4 l4 s9">
        <Col size="s12">
          <h5 className="title">{props.title.length<=18?props.title:props.title.slice(0,15).trim()+("..")}</h5>
        </Col>
        {props.players!==null?(
          <Col>
            <MatIcon extraClass="iconText orange-text">group</MatIcon> {props.players} players
          </Col>
        ):""}
        {props.time!==null?(
          <Col>
            <MatIcon extraClass="iconText orange-text">timer</MatIcon> {props.time} minutes
          </Col>
        ):""}
      </Col>

      <Col size="xl7 l6 s12">
        <p>{props.content?props.content.replace("�","").slice(0,200).trim()+"..":"Game description not found.."}</p>
      </Col>
    </a></li>);
}
