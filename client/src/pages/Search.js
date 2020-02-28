import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Collection, CollectionItem } from "../components/Collection";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader"
import API from "../utils/API";

function Search() {
  const numDisplayed = 4;
  const [paginationSize, setPaginationSize] = useState(5);
  const [gamesState, setGamesState] = useState([]);
  const [pageState, setPageState] = useState(1);
  const [loadState, setLoadState] = useState(0);
  const location = useLocation();
  let { search } = useParams();

  useEffect(()=>{
    if(gamesState.length>0){
      setLoadState(1);
      setPaginationSize(Math.ceil(gamesState.length/numDisplayed));
    }
    else setLoadState(3);
  },[gamesState]);

  useEffect(()=>{
    setLoadState(0);
    API.getName(search)
    .then(res=>{
      setGamesState(res.data.games);
    }).catch(err=>{
      console.log(err)
      setLoadState(2);
    });
  },[location]);

  return (
    <Container>

      <Row>
        <h1 className="header center teal-text text-lighten-1">Searching: "{search}"</h1>
      </Row>

      {loadState===1?<>
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
      </>:loadState===2?
      <Row>
        <p className="center">Error finding games, try again later..</p>
      </Row>
      :loadState===3?
      <Row>
        <p className="center">No games found.</p>
      </Row>:
      <Loader></Loader>
      }

    </Container>
  );
}
export default Search;