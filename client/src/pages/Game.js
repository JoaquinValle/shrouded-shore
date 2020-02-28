import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Loader from "../components/Loader"
import MatIcon from "../components/MatIcon"
import API from "../utils/API";

function NoMatch() {
  let { id } = useParams();
  const [gameState, setGameState] = useState();
  const [pageState, setPageState] = useState(0);

  useEffect(() => {
    API.getId(id)
    .then(res=>{
      setGameState(res.data.games[0]);
      setPageState(1);
    }).catch(err=>{
      console.log(err);
      setPageState(2);
    });
  }, []);

  return (
    <Container>
      {pageState===1?<>
      <Row>
        <h1 className="header center teal-text text-lighten-1">{gameState.name}</h1>
      </Row>

      <Row>

        <Col size="xl2 s4">
          <img src={gameState.images.small} alt="" className="gameImage"/>
        </Col>

        <Col size="xl2 s8">
          <Row>
            <MatIcon extraClass="iconText orange-text">group</MatIcon> {`${gameState.min_players} - ${gameState.max_players} players`}
          </Row>
          <Row>
            <MatIcon extraClass="iconText orange-text">timer</MatIcon> {`${gameState.min_playtime} - ${gameState.max_playtime} minutes`}
          </Row>
        </Col>

        <Col size="xl8 s12">
          <div dangerouslySetInnerHTML={{__html:gameState.description}}>
            
          </div>
        </Col>

      </Row>
      </>:pageState===2?
      <Row>
        <h1 className="header center teal-text text-lighten-1">Game not found</h1>
      </Row>:
      <Loader></Loader>}
    </Container>
  );
}

export default NoMatch;
