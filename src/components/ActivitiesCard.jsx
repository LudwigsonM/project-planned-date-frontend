import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ActivitiesCard({ name }) {
  //   let navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" />
            {/* <Card.Body
              loading={!activities}
              onClick={() => navigate(`/activities/${activities.id}`)}
              cover={activities}
            > */}
            <Card.Title>{name}</Card.Title>
            <Card.Text></Card.Text>
            {/* </Card.Body> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
