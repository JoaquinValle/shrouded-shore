import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../../components/Grid/index";
import "./style.css"

function User() {
    return (
        <Container>
            <Row>
                <h1 className="header center teal-text text-lighten-1">User Profile</h1>
            </Row>

            <Row>
                <Col size="s12">
                    <Row>
                        <Col size="s4">
                        <a href="#profile"><img src="https://randomuser.me/api/portraits/men/72.jpg" width="250px" alt="profile"/></a>
                        </Col>
                        <Col size="s8">
                            <Row>
                                <Col size="s12" >
                                 <h5 className="user-name">John Doe</h5>
                                 <p className="user-personal-title">Board Game Guru</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col size="s12">
                                    <p>Number of Games Saved: 4</p>
                                    <p>Number of Friends: 62</p>
                                    <p>Add Friend</p>
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
                                <p>Phone Number: +555456456</p>
                                <p>Country: Mexico</p>
                                <p>Email: wadgwea@gmail.com</p>
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