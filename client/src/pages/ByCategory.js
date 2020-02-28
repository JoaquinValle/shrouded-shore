import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Collection, CollectionItem } from "../components/Collection";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader"
import API from "../utils/API";

function ByCategory() {
  const numDisplayed = 4;
  const paginationSize = 5;
  const [gamesState, setGamesState] = useState([]);
  const [pageState, setPageState] = useState(1);
  const [loadState, setLoadState] = useState(0);
  const [categoryNameState, setCategoryNameState] = useState("");
  let { category } = useParams();

  useEffect(()=>{
    let categoryName = null;

    API.getCategories()
    .then(res=>{
      if(res.data.categories){
        categoryName = res.data.categories.filter(cat=>cat.id===category)[0]||null;
        categoryName?categoryName=categoryName.name:categoryName = null;

        if(categoryName){
          API.getCategoryId(category)
          .then(res=>{
            if(res.data.games.length>0){
              setCategoryNameState(categoryName);
              setGamesState(res.data.games);
              setLoadState(1);
            }else{
              setCategoryNameState(categoryName);
              console.log("Category is empty.");
              setLoadState(2);
            }
          }).catch(err=>{
            setCategoryNameState(categoryName);
            console.log(err);
            setLoadState(2);
          });
        } else {
          console.log("Category not found.")
          setLoadState(3);
        }

      }
    }).catch(err=>{
      console.log(err)
    });

  },[]);

  return (
    <Container>
      {loadState===1?<>
      <Row>
        <h1 className="header center teal-text text-lighten-1">Category: {categoryNameState}</h1>
      </Row>

      <Row>
        <Col size="s12">
          <Collection>
            {gamesState
            .filter((game,i)=>i>=(pageState*numDisplayed)-numDisplayed && i<(pageState*numDisplayed))
            .map(game=>(
              <CollectionItem
                id={game.id}
                key={game.id}
                image={game.thumb_url}
                title={game.name}
                content={game.description_preview}
                players={game.min_players!==null?`${game.min_players}-${game.max_players}`:null}
                time={game.min_playtime!==null?`${game.min_playtime}-${game.max_playtime}`:null}
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
      </>:loadState===2?<>
      <Row>
        <h1 className="header center teal-text text-lighten-1">Error</h1>
      </Row>
      <Row>
        <p className="center">Error finding games, try again later.</p>
      </Row></>:loadState===3?<>
      <Row>
        <h1 className="header center teal-text text-lighten-1">Error</h1>
      </Row>
      <Row>
        <p className="center">Category not found.</p>
      </Row></>:
      <Loader></Loader>
      }

    </Container>
  );
}
export default ByCategory;