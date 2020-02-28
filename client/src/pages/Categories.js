import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Loader from "../components/Loader"
import API from "../utils/API"

function Categories() {
  const [categoriesState,setCategoriesState]=useState([]);
  const [loadState, setLoadState] = useState(0);

  useEffect(()=>{
    API.getCategories()
    .then(res=>{
      setCategoriesState(res.data.categories);
      setLoadState(1);
    }).catch(err=>{
      console.log(err)
      setLoadState(2);
    });
  },[]);

  return (
    <Container>
      <Row>
        <h1 className="header center teal-text text-lighten-1">Categories</h1>
      </Row>

      {loadState===1?
      <Row>
        {categoriesState.map(category=>(
          <Col size="xl3 m4 s6" key={category.id}>
            <a className="orange-text text-darken-1" href={`/categories/${category.id}`} >{category.name}</a>
          </Col>
        ))}
      </Row>
      :loadState===2?
      <Row>
        <p>Error finding categories, try again later..</p>
      </Row>:
      <Loader></Loader>
      }
    </Container>
  );
}
export default Categories;