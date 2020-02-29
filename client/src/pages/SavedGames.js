import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Collection, CollectionItem } from "../components/Collection";
import Pagination from "../components/Pagination";
import API from "../utils/API";

function SavedGames() {


  return (
    <Container>

      <Row>
        <h1 className="header center teal-text text-lighten-1">Saved Games</h1>
      </Row>
      
      <Row>
        <Col size="s12">
          <Collection>
           
          </Collection>
        </Col>
      </Row>

    </Container>
  );
}
export default SavedGames;