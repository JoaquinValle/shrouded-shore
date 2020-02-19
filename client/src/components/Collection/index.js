import React from "react";
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
      <img src={props.image} alt="" className="circle"/>
      <span className="title">{props.title}</span>
      <p>
        <i class="material-icons">group</i>{props.players} players. <br/>
        <i class="material-icons">timer</i>{props.time} minutes.
      </p>
    </li>);
}
