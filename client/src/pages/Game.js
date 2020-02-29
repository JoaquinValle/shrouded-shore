import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import CategoryLink from "../components/CategoryLink";
import Loader from "../components/Loader"
import MatIcon from "../components/MatIcon"
import API from "../utils/API";

function Game() {
  let { id } = useParams();
  const [gameState, setGameState] = useState();
  const [loadState, setLoadState] = useState(0);
  const [categoriesState, setCategoriesState] = useState([]);

  useEffect(() => {
    API.getId(id)
    .then(res=>{
      setGameState(res.data.games[0]);
      setLoadState(1);
    }).catch(err=>{
      console.log(err);
      setLoadState(2);
    });
  }, [id]);

  useEffect(()=>{
    if(gameState){
      API.getCategories()
      .then(res=>{
        let categories = [];
        for(let categoryRes of res.data.categories){
          for(let categoryGame of gameState.categories){
            if(categoryRes.id === categoryGame.id){
              categories.push(categoryRes);
            }
          }
        }
        if(categories.length>0)setCategoriesState(categories);
      }).catch(err=>{
        console.log(err);
      });
    }
  },[gameState]);

  return (
    <Container>
      {loadState===1?<>
      <Row>
        <h1 className="header center teal-text text-lighten-1">{gameState.name}<a className="orange-text" href="#add-game"><MatIcon>add_to_photos</MatIcon></a></h1>
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

      {categoriesState.length>0?
      <Row>
        <h4 className="center teal-text text-lighten-1">Game's Categories</h4>
        {categoriesState.map(category=>(
          <CategoryLink key={category.id} id={category.id} name={category.name}/>
        ))}
      </Row>:<></>}

      
      </>:loadState===2?
      <Row>
        <h1 className="header center teal-text text-lighten-1">Game not found</h1>
      </Row>:
      <Loader></Loader>}
    </Container>
  );
}

export default Game;
