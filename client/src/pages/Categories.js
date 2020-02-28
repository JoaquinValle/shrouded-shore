import React, { useEffect, useState } from "react";
// import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API"



function Categories() {
    const [categoryState, setCategoryState] = useState([])

  useEffect(() => {
    API.getCategory()
    .then((res) => {
      setCategoryState(res.data.categories)
    }).catch((err) => console.log(err))
  })
  return (
    <Container>
      <Row>
        <h1 className="header center teal-text text-lighten-1">Categories</h1>
      </Row>

      <Row>
        <Col size="s12">
          
        </Col>
      </Row>
    </Container>
  );
}
export default Categories;