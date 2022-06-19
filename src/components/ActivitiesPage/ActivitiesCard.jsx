import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function ActivitiesCard({ activities }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="activity">
            <Card.Img
              variant="top"
              className="act-images"
              src={activities.image}
            />
            <Card.Body>
              <Card.Title>Name: {activities.name}</Card.Title>
              <Card.Text>Location: {activities.location}</Card.Text>
              <Card.Text>Price: {activities.price}</Card.Text>
              <Card.Text>Rating: {activities.rating}</Card.Text>
              <Card.Text>Dress Code: {activities.dressCode}</Card.Text>
              <Card.Text>
                Interaction Level: {activities.interactionLevel}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
