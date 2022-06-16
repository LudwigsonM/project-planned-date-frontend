import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function ActivitiesCard({ activities }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="activity" style={{ width: "18rem" }}>
            <Card.Img variant="top" className="images" src={activities.image} />
            <Card.Body>
              <Card.Title>{activities.name}</Card.Title>
              <Card.Text>{activities.location}</Card.Text>
              <Card.Text>{activities.rating}</Card.Text>
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
