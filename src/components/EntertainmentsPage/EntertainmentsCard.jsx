import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function EntertainmentsCard({ entertainments }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="entertainment">
            <Card.Img
              variant="top"
              className="ent-images"
              src={entertainments.image}
            />
            <Card.Body>
              <Card.Title>Name: {entertainments.name}</Card.Title>
              <Card.Text>Location: {entertainments.location}</Card.Text>
              <Card.Text>Price: {entertainments.price}</Card.Text>
              <Card.Text>Rating: {entertainments.rating}</Card.Text>
              <Card.Text>Dress Code: {entertainments.dressCode}</Card.Text>
              <Card.Text>
                Interaction Level: {entertainments.interactionLevel}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
