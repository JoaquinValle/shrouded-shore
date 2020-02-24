import React from "react";
import { Col, Row, Container } from "../components/Grid";

function NoMatch() {
  return (
    <Container>
      <Row>
        <h1 className="header center teal-text text-lighten-1">404</h1>
      </Row>

      <Row>
        <Col size="s12">
          <p className="center">
            The page is missing or went away...
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
