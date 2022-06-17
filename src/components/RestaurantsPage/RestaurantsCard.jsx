import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function RestaurantsCard({ restaurants }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="restaurant">
            <Card.Img
              variant="top"
              className="rest-images"
              src={restaurants.image}
            />
            <Card.Body>
              <Card.Title>{restaurants.name}</Card.Title>
              <Card.Text>{restaurants.location}</Card.Text>
              <Card.Text>{restaurants.dressCode}</Card.Text>
              <Card.Text>{restaurants.interactionLevel}</Card.Text>
              <Card.Text>{restaurants.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
