import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../../components/Grid/index";
import "./style.css"

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
                <h1 className="header center teal-text text-lighten-1">User Profile</h1>
            </Row>

            <Row>
                <Col size="s12">
                    <Row>
                        <Col size="s4">
                        <a href="#profile"><img src={props.img} width="250px" alt="profile"/></a>
                        </Col>
                        <Col size="s8">
                            <Row>
                                <Col size="s5">
                                 <h5 className="user-name">{props.name}</h5>
                                 <p className="user-personal-title">{getTitle(props.saved)}</p>
                                </Col>  
                                <Col size="s7">
                                    
                                    <i className="fas fa-search-location"></i>
                                    <span className="location">
                                        {props.country}
                                    </span>
                                </Col>                            
                            </Row>

                            <Row>
                                <Col size="s12">
                                    <p>Number of Games Saved: {props.saved}</p>
                                    <p>Edit Profile</p>
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                    <Col size="s6">
                        <Row>
                            <Col size="s12">
                                <h6 className="user-title">Contact Information</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s12">
                                <p>Phone Number: {props.phone}</p>
                                <p>Country: {props.country}</p>
                                <p>Email: {props.email}</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col size="s6">
                        <Row>
                            <Col size="s12">
                            <h6 className="user-title">Basic Information</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="s12">
                                <p>Gender: Male</p>
                                <p>Age: 45</p>
                                <p>Birthday: August 18th, 1996</p>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default User