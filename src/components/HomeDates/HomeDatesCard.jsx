import React from "react";
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
              <Card.Title>Name: {homedates.name}</Card.Title>
              <Card.Text>Location: {homedates.location}</Card.Text>
              <Card.Text>Price: {homedates.price}</Card.Text>
              <Card.Text>Rating: {homedates.rating}</Card.Text>
              <Card.Text>Dress Code: {homedates.dressCode}</Card.Text>
              <Card.Text>
                Interaction Level: {homedates.interactionLevel}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
