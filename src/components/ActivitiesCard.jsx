import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ActivitiesCard({ activities }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>{activities.name}</Card.Title>
              <Card.Text>{activities.location}</Card.Text>
              <Card.Text>{activities.dressCode}</Card.Text>
              <Card.Text>{activities.interactionLevel}</Card.Text>
              <Card.Text>{activities.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
