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
        <ComplexityButton icon="looks_one" tooltip="<30 minutes">Very Easy</ComplexityButton>
        <ComplexityButton icon="looks_two" tooltip="30-60 minutes">Easy</ComplexityButton>
        <ComplexityButton icon="looks_3"   tooltip="60-90 minutes">Moderate</ComplexityButton>
        <ComplexityButton icon="looks_4"   tooltip="90-120 minutes">Hard</ComplexityButton>
        <ComplexityButton icon="looks_5"   tooltip=">120 minutes">Very Hard</ComplexityButton>
      </Row>
    </Container>
  );
}
export default Complexity;
