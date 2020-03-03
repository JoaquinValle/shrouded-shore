import React from "react";
import { Col, Row, Container } from "../../components/Grid/index";
import Edit from "../Edit"
import "./assets/style.css"
import "./assets/images/reload.svg"

function getTitle(numberGames) {
    let parsedGames = parseInt(numberGames)
    if (parsedGames <= 5) {
        return "New Player"
    }
    else if (parsedGames <= 10 && numberGames > 5) {
        return  "Board Game Afficionado"
    }
    else if (parsedGames <= 20 && numberGames > 10) {
        return  "Experienced Player"
    }
    else if (parsedGames <= 40 && numberGames > 20) {
        return  "Board Game Guru"
    }
    else if (parsedGames <= 80 && numberGames > 40) {
        return  "Master of The Board and Games"
    }
    else if (parsedGames > 80) {
        return  "Board Game Diety"
    }
  }
  

function User(props) {
    return (
        <Container>
            <Row>
                <Col size="s11">
                    <h1 className="header center teal-text text-lighten-1">User Profile</h1>
                </Col>
                <Col size="s1">
                    <Edit></Edit>
                </Col>
            </Row>

            <Row>
                <Col size="s12">
                    <Row>
                        <Col size="s5">
                        <a classname="profile-picture" href="#profile"><img src={props.img}  width="250px" alt="profile"/></a>
                        </Col>
                        <Col size="s7">
                            <Row>
                                <Col size="s7">
                                 <h5 className="user-name">{props.name}</h5>
                                 <p className="user-personal-title">{getTitle(props.saved)}</p>
                                </Col>  
                                <Col size="s5">
                                    <i className="fas fa-search-location" SameSite="none"></i>
                                    <span className="location">
                                        {props.location}
                                    </span>
                                </Col>                          
                            </Row>

                            <Row>
                                <Col size="s12">
                                    <p className="user-info-extra"><span className="text-weight">Number of Games Saved:</span> {props.saved}</p>
                                    <p className="user-info-extra"><span className="text-weight">Favorite Game:</span> {props.favorite}</p>

                                </Col>
                            </Row>

                        </Col>
                    </Row>

                    <Col size="s6">
                        <Row>
                            <Col size="s12">
                                <h6 className="user-title user-l">Contact Information</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s12">
                                <span className="user-info">
                                    <p><div className="text-weight">Phone Number:</div> {props.phone}</p>
                                    <p><div className="text-weight">Email:</div> {props.email}</p>
                                    <p><div className="text-weight">Game Status:</div> {props.status}</p>
                                </span>
                            </Col>
                        </Row>
                    </Col>

                    <Col size="s6" className="info">
                        <Row>
                            <Col size="s12">
                            <h6 className="user-title user-r">Personal Information</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s12">
                                <span className="user-info">
                                    <p><div className="text-weight">Age:</div> {props.age}</p>
                                    <p><div className="text-weight">Gender:</div> {props.gender}</p>
                                    <p><div className="text-weight">Location:</div> {props.location}</p>
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default User