import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Collection, CollectionItem } from "../components/Collection";
import Pagination from "../components/Pagination";
import API from "../utils/API";

function Home() {
  const numDisplayed = 8;
  const paginationSize = 12;
  const [gamesState, setGamesState] = useState([]);
  const [pageState, setPageState] = useState(1);

  useEffect(()=>{
    API.BGA("catan")
    .then(res=>{
      setGamesState(res.data.games);
    }).catch(err=>console.log(err));
  },[]);

  return (
    <Container>
      <Row>
        <Col size="s12">
          <h1>New Games</h1>
          <Collection>
            {gamesState.filter((game,i)=>i>=(pageState*numDisplayed)-numDisplayed && i<(pageState*numDisplayed))
            .map(game=>(
              <CollectionItem
                id={game.id}
                key={game.id}
                image={game.thumb_url}
                title={game.name}
                content={game.description_preview}
                players={`${game.min_players}-${game.max_players}`}
                time={`${game.min_playtime}-${game.max_playtime}`}
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