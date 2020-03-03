// Dependencies
import React, { useState, useEffect } from "react";

// React Components
import { Row, Container } from "../components/Grid";
import CategoryLink from "../components/CategoryLink";
import Loader from "../components/Loader"

// React Utilities and Hooks
import API from "../utils/API"
import Pagination from "../components/Pagination";


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
          <CategoryLink key={category.id} id={category.id} name={category.name}/>
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