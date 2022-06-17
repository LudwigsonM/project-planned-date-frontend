import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../Styling/dateSelection.css";
import RestaurantsCard from "../RestaurantsPage/RestaurantsCard";
const actImg =
  "https://www.wallpaperup.com/uploads/wallpapers/2015/04/16/663367/6458a57c51073bae4516e3f93e420aaf-700.jpg";
const entImg =
  "https://www.halton.com/wp-content/uploads/2020/05/Concert_hall_rock_concert-1366x668.jpg";
const restImg =
  "https://margauxsrestaurant.com/wp-content/uploads/janko-ferlic-nVPfPXc3eis-unsplash.jpg";
const homeImg =
  "https://cdn.shopify.com/s/files/1/0336/3763/0092/files/pexels-roberto-nickson-3131971_1024x1024.jpg?v=1610579096";

export default function DateSelection() {
  let navigate = useNavigate();

  return (
    <>
      <div className="all-date-selections">
        <Card className="event-cards">
          <Card.Img
            variant="top"
            src={actImg}
            id="activities-img"
            className="card-img"
          />
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

        <Card className="event-cards">
          <Card.Img
            variant="top"
            src={entImg}
            id="entertainments-img"
            className="card-img"
          />
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

        <Card className="event-cards">
          <Card.Img variant="top" src={restImg} className="card-img" />
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

        <Card className="event-cards">
          <Card.Img variant="top" src={homeImg} className="card-img" />
          <Card.Body>
            <Card.Title>
              <h4>HOME DATES</h4>
            </Card.Title>
            <Card.Text>
              Description for the way Home Dates are great to go on dates
            </Card.Text>
            <body>
              <span>
                <a href="/homedates"></a>
              </span>
            </body>
            <Button variant="primary" onClick={() => navigate(`/homedates`)}>
              Show homedates
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
