import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Collection, CollectionItem } from "../components/Collection";
import Pagination from "../components/Pagination";
import API from "../utils/API";

function Home() {
  const numDisplayed = 4;
  const paginationSize = 5;
  const [gamesState, setGamesState] = useState([]);
  const [pageState, setPageState] = useState(1);

  useEffect(()=>{
    API.getNew()
    .then(res=>{
      setGamesState(res.data.games);
    }).catch(err=>console.log(err));
  },[]);

  return (
    <Container>

      <Row>
        <h1 className="header center teal-text text-lighten-1">New Games</h1>
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

    </Container>
  );
}
export default Home;