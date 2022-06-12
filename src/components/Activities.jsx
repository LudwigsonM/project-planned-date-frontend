import React from "react";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import "../Styling/activities.css";
import ActivitiesCard from "./ActivitiesCard";

export default function Activities() {
  const [activities, setActivities] = useState("");
  useEffect(() => {
    fetch("https://localhost:5051/activities")
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section>
        <div>
          <h2> Activities </h2>
          <Col>
            {!activities ? (
              <h2>Loading...</h2>
            ) : (
              activities.map((activities) => {
                return (
                  <ActivitiesCard key={activities.id} title={activities.name} />
                );
              })
            )}
          </Col>
        </div>
      </section>
    </>
  );
}
