import React from "react";
import "./style.css";
import MatIcon from "../MatIcon"

function Pagination(props) {
  const arr = [];
  for(let i=1;i<=props.size;i++)arr.push(i);
  return(
    <ul className="pagination">
      <li className={props.current===1?"disabled":"waves-effect waves-light"}><a onClick={props.current===1?()=>(""):()=>{
          props.setState(props.current-1)
          window.scrollTo(0, 0)
        }}>
        <MatIcon>chevron_left</MatIcon></a></li>
      {arr.map(i=>(
        <li key={i} className={props.current===i?"active orange":"waves-effect waves-light"}><a onClick={()=>{
          props.setState(i)
          window.scrollTo(0, 0)
        }}>{i}</a></li>
      ))}
      <li className={props.current===arr.length?"disabled":"waves-effect waves-light"}><a onClick={props.current===arr.length?()=>(""):()=>{
        props.setState(props.current+1)
        window.scrollTo(0, 0)
      }}>
        <MatIcon>chevron_right</MatIcon></a></li>
    </ul>
  );
}
export default Pagination;
