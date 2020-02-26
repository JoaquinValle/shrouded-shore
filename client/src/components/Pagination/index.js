import React from "react";
import "./style.css";

function Pagination(props) {
  const arr = [];
  for(let i=1;i<=props.size;i++)arr.push(i);
  return(
    <ul className="pagination">
      <li className={props.current===1?"disabled":"waves-effect waves-light"}><a onClick={props.current===1?()=>(""):()=>{
          props.setState(props.current-1)
          window.scrollTo(0, 0)
        }}>
        <i className="material-icons">chevron_left</i></a></li>
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
        <i className="material-icons">chevron_right</i></a></li>
    </ul>
  );
}
export default Pagination;
