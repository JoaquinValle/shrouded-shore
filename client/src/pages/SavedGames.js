import React, { useState, useEffect, Component } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Collection, CollectionItem } from "../components/Collection";
import Pagination from "../components/Pagination";
import API from "../utils/API";
import Loader from "../components/Loader"

function SavedGames(props) {
  const numDisplayed = 4;
  const paginationSize = 5;
  const [gamesState, setGamesState] = useState([]);
  const [pageState, setPageState] = useState(parseInt(useLocation().hash.replace("#",""))||1);
  const [loadState, setLoadState] = useState(0);

  //db query
  useEffect(()=>{
    API.getSaved()
    .then(res=>{
      setGamesState(res.data.likedGames);
      setLoadState(1);
    }).catch(err=>{
      console.log(err)
      setLoadState(2);
    });
  },[]);

  return (
    <Container>

      <Row>
        <h1 className="header center teal-text text-lighten-1">Saved Games</h1>
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
      <p>Error finding games, try again later..</p>
      </Row>:
      <Loader></Loader>
      }

    </Container>
  );
}
export default SavedGames;