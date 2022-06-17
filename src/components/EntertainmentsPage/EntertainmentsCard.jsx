import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function EntertainmentsCard({ entertainments }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              className="ent-images"
              src={entertainments.image}
            />
            <Card.Body>
              <Card.Title>{entertainments.name}</Card.Title>
              <Card.Text>{entertainments.location}</Card.Text>
              <Card.Text>{entertainments.dressCode}</Card.Text>
              <Card.Text>{entertainments.interactionLevel}</Card.Text>
              <Card.Text>{entertainments.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
