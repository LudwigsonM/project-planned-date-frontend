import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ActivitiesCard({ activities }) {
  let navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col>
          <Card
            loading={!activities}
            onClick={() => navigate(`/activities/${activities.id}`)}
            cover={activities && <img src={activities.image} />}
          >
            <Card.Img />
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
