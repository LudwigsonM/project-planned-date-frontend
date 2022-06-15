import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function RetrieveDateFormCard({ retrieveDate }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>{retrieveDate.name}</Card.Title>
              <Card.Text>{retrieveDate.location}</Card.Text>
              <Card.Text>{retrieveDate.dressCode}</Card.Text>
              <Card.Text>{retrieveDate.interactionLevel}</Card.Text>
              <Card.Text>{retrieveDate.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
