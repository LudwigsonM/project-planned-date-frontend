import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../Styling/dateSelection.css";

export default function DateSelection() {
  let navigate = useNavigate();

  return (
    <>
      <div className="all-date-selections">
        <Card className="activities-selection">
          <Card.Img variant="top" /* src="holder.js/100px180" */ />
          <Card.Body>
            <Card.Title>
              <h4>ACTIVITIES</h4>
            </Card.Title>
            <Card.Text>
              Description for the way Activities are great to go on dates
            </Card.Text>
            <Button variant="primary" onClick={() => navigate(`/activities`)}>
              Show Activities
            </Button>
          </Card.Body>
        </Card>

        <Card className="entertainments-selection" style={{ width: "18rem" }}>
          <Card.Img variant="top" /* src="holder.js/100px180" */ />
          <Card.Body>
            <Card.Title>
              <h4>Entertainments</h4>
            </Card.Title>
            <Card.Text>
              Description for the way Entertainments are great to go on dates
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(`/entertainments`)}
            >
              Show Entertainments
            </Button>
          </Card.Body>
        </Card>

        <Card className="restaurants-selection" style={{ width: "18rem" }}>
          <Card.Img variant="top" /* src="holder.js/100px180" */ />
          <Card.Body>
            <Card.Title>
              <h4>RESTAURANTS</h4>
            </Card.Title>
            <Card.Text>
              Description for the way RESTAURANTS are great to go on dates
            </Card.Text>
            <Button variant="primary" onClick={() => navigate(`/restaurants`)}>
              Show Restaurants
            </Button>
          </Card.Body>
        </Card>

        <Card className="homedates-selection" style={{ width: "18rem" }}>
          <Card.Img variant="top" /* src="holder.js/100px180" */ />
          <Card.Body>
            <Card.Title>
              <h4>HOME DATES</h4>
            </Card.Title>
            <Card.Text>
              Description for the way Home Dates are great to go on dates
            </Card.Text>
            <Button variant="primary" onClick={() => navigate(`/homedates`)}>
              Show homedates
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
