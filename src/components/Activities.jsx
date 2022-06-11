import React from "react";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import "../Styling/activities.css";
import ActivitiesCard from "./ActivitiesCard";

export default function Activities() {
  const [activities, setActivities] = useState("");
  useEffect(() => {
    fetch("https://project-planned-date-backend.web.app/activities")
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section>
        <div>
          <h2> Activities</h2>
          <Col>
            {!activities ? (
              <h2>Loading...</h2>
            ) : (
              activities.map((activities) => (
                <ActivitiesCard activities={activities} key={activities.id} />
              ))
            )}
          </Col>
        </div>
      </section>
    </>
  );
}
