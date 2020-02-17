import React from "react";
import { Col, Row, Container } from "../components/Grid";

function NoMatch() {
  return (
    <Container>
      <Row>
        <Col size="s12">
          <h1>404</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
