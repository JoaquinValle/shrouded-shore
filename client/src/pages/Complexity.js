import React from "react";
import { Row, Container } from "../components/Grid";
import ComplexityButton from "../components/ComplexityButton"

function Complexity() {
  return (
    <Container>
      <Row>
        <h1 className="header center teal-text text-lighten-1">Complexity</h1>
      </Row>

      <Row>
        <ComplexityButton icon="looks_one">Very Easy</ComplexityButton>
        <ComplexityButton icon="looks_two">Easy</ComplexityButton>
        <ComplexityButton icon="looks_3">Moderate</ComplexityButton>
        <ComplexityButton icon="looks_4">Hard</ComplexityButton>
        <ComplexityButton icon="looks_5">Very Hard</ComplexityButton>
      </Row>
    </Container>
  );
}
export default Complexity;
