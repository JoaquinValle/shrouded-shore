import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Collection, CollectionItem } from "../components/Collection"
import API from "../utils/API";

function Home() {
  const [gamesState, setGamesState] = useState([]);

  useEffect(()=>{
    API.BGA("catan")
    .then(res=>{
      setGamesState(res.data.games);
      console.log(res.data.games);
    }).catch(err=>console.log(err));
  },[]);

  return (
    <Container>
      <Row>
        <Col size="s12">
          <h1>New Games</h1>
          <Collection>
            {gamesState.map(game=>(
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
    </Container>
  );
}
export default Home;