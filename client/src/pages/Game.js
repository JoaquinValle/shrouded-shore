// Dependencies
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// React Components
import { Col, Row, Container } from "../components/Grid";
import CategoryLink from "../components/CategoryLink";
import Loader from "../components/Loader"
import MatIcon from "../components/MatIcon"
import LikesButton from "../components/LikesButton"

// React Utilities and Hooks
import API from "../utils/API";

function Game(props) {
  let { id } = useParams();
  const [gameState, setGameState] = useState();
  const [loadState, setLoadState] = useState(0);
  const [categoriesState, setCategoriesState] = useState([]);
  const [likesState, setLikesState] = useState(0);
  const [likedState, setLikedState] = useState(false);

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
        <h1 className="header center teal-text text-lighten-1">{gameState.name}
        <LikesButton link={gameState.id} likes={likesState} onClick={()=>{
          setLikesState(likesState+1)
          setLikedState(!likedState)
          API.saveGame(props.user, props.token)
          .then((res) => {
            console.log(res)
          })
          }} liked={likedState}/></h1>
      </Row>

      <Row>

        <Col size="m4 s12" center>
          <img src={gameState.images.small} alt="" className="gameImage"/>
        </Col>

        <Col size="m4 s6">            
          {gameState.min_players&&gameState.max_players?
          <Row>
            <Col><MatIcon extraClass="iconText orange-text" tooltip="# players">group</MatIcon> 
            {` ${gameState.min_players}-${gameState.max_players} players`}</Col>
          </Row>
          :""}

          {gameState.min_playtime&&gameState.max_playtime?
          <Row>
            <Col><MatIcon extraClass="iconText orange-text" tooltip="play time">timer</MatIcon>
            {` ${gameState.min_playtime}-${gameState.max_playtime} minutes`}</Col>
          </Row>
          :""}

          {gameState.min_age?
          <Row>
            <Col><MatIcon extraClass="iconText orange-text" tooltip="minimum age">child_care</MatIcon>
            {` ${gameState.min_age}+ years`}</Col>
          </Row>
          :""}
        </Col>

        <Col size="m4 s6">
          {gameState.designers.length>0?
          <Row>
            <Col><MatIcon extraClass="iconText orange-text" tooltip="designer(s)">face</MatIcon>
            {` ${gameState.designers.join(", ")}`}</Col>
          </Row>
          :""}

          {gameState.year_published?
          <Row>
            <Col><MatIcon extraClass="iconText orange-text" tooltip="year published">date_range</MatIcon>
            {` ${gameState.year_published}`}</Col>
          </Row>
          :""}

          {gameState.primary_publisher?
          <Row>
            <Col><MatIcon extraClass="iconText orange-text" tooltip="publisher">business</MatIcon>
            {` ${gameState.primary_publisher}`}</Col>
          </Row>
          :""}
        </Col>

        <Col size="s12">
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
