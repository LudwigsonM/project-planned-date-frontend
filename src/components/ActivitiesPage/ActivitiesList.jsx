import React from "react";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import "../../Styling/activities.css";
import ActivitiesCard from "./ActivitiesCard";

export default function ActivitiesList() {
  const [activities, setActivities] = useState();
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
          <h2> Activities List </h2>
          <Col>
            {!activities ? (
              <h2>Loading...</h2>
            ) : (
              activities?.map((activities) => {
                return (
                  <div key={activities._id}>
                    <ActivitiesCard activities={activities} />
                  </div>
                );
              })
            )}
          </Col>
        </div>
      </section>
    </>
  );
}
