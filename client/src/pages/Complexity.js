import React, { useEffect } from "react";
// import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function Complexity() {
  // const [complexityState, setComplexityState] = useState([])
  // const numDisplayed = 4;
  // const paginationSize = 5;
  // const [pageState, setPageState] = useState(1);

  // useEffect(()=>{
  //   API.getcategories()
  //   .then(res=>{
  //     setCategoryState(res.data.categories);
  //   }).catch(err=>console.log(err));
  // },[]);

  return (
    <Container>
      <Row>
        <h1 className="header center teal-text text-lighten-1">Complexity</h1>
      </Row>

      <Row>
        <Col size="s12">
        
        </Col>
      </Row>
    </Container>
  );
}
export default Complexity;
