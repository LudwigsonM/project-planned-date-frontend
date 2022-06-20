import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function RestaurantsCard({ restaurants }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="restaurant" test="size">
            <Card.Img
              variant="top"
              className="rest-images"
              src={restaurants.image}
            />
            <Card.Body>
              <Card.Title>Name: {restaurants.name}</Card.Title>
              <Card.Text>Location: {restaurants.location}</Card.Text>
              <Card.Text>Price: {restaurants.price}</Card.Text>
              <Card.Text>Rating: {restaurants.rating}</Card.Text>
              <Card.Text>Dress Code: {restaurants.dressCode}</Card.Text>
              <Card.Text>
                Interaction Level:{restaurants.interactionLevel}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
