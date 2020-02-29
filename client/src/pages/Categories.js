import React, { useState, useEffect } from "react";
// import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Collection, CollectionItem } from "../components/Collection"
import API from "../utils/API"
import Pagination from "../components/Pagination";




function Categories() {
  const numDisplayed = 4;
  const paginationSize = 5;
  const [categoryState, setCategoryState] = useState([]);
  const [pageState, setPageState] = useState(1);

  useEffect(()=>{
    API.getCategories()
    .then((res)=>{
      setCategoryState(res.data.categories);
    }).catch(err=>console.log(err));
  },[]);
  return (
    <Container>
      <Row>
        <h1 className="header center teal-text text-lighten-1">Categories</h1>
      </Row>

      <Row>
        <Col size="s12">
          <Collection>
            {categoryState
            .filter((category,i)=>i>=(pageState*numDisplayed)-numDisplayed && i<(pageState*numDisplayed))
            .map(category=>(
              <CollectionItem
                title={category.name}
                content={category.id}
              />
            ))}
          </Collection>
        </Col>
      </Row>

      <Row>
        <Pagination
          size={paginationSize}
          current={pageState}
          setState={i=>setPageState(i)}
        />
      </Row>
    </Container>
  );
}
export default Categories;