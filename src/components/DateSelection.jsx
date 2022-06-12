import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function DateSelection() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" /* src="holder.js/100px180" */ />
        <Card.Body>
          <Card.Title>Activities</Card.Title>
          <Card.Text>Activities Description</Card.Text>
          <Button variant="primary">Show activities</Button>
        </Card.Body>
      </Card>
    </>
  );
}
