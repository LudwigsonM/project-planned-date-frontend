import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function HomeDatesCard({ homedates }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="home">
            <Card.Img
              variant="top"
              className="home-images"
              src={homedates.image}
            />
            <Card.Body>
              <Card.Title>{homedates.name}</Card.Title>
              <Card.Text>{homedates.location}</Card.Text>
              <Card.Text>{homedates.rating}</Card.Text>
              <Card.Text>{homedates.dressCode}</Card.Text>
              <Card.Text>{homedates.interactionLevel}</Card.Text>
              <Card.Text>{homedates.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
