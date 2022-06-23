import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../Styling/dateSelection.css";

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
              Activities are a great way for couples to get moving and have
              light competition with each other during the date. These types of
              dates allow for more communication and higher interaction.{" "}
            </Card.Text>
            <body>
              <span>
                <a href="/activities"></a>
              </span>
            </body>
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
              <h4>ENTERTAINMENTS</h4>
            </Card.Title>
            <Card.Text>
              Entertainment provides a way for those who have similar interests
              and build{" "}
            </Card.Text>
            <body>
              <span>
                <a href="/entertainments"></a>
              </span>
            </body>
          </Card.Body>
        </Card>

        <Card className="event-cards">
          <Card.Img variant="top" src={restImg} className="card-img" />
          <Card.Body>
            <Card.Title>
              <h4>RESTAURANTS</h4>
            </Card.Title>
            <Card.Text>
              Restaurants are a great way to take things slow and enjoy
              wonderful food and ambience.
            </Card.Text>
            <body>
              <span>
                <a href="/restaurants"></a>
              </span>
            </body>
          </Card.Body>
        </Card>

        <Card className="event-cards">
          <Card.Img variant="top" src={homeImg} className="card-img" />
          <Card.Body>
            <Card.Title>
              <h4>HOME DATES</h4>
            </Card.Title>
            <Card.Text>
              There's no place like home & dates should not be any different.
            </Card.Text>
            <body>
              <span>
                <a href="/homedates"></a>
              </span>
            </body>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
