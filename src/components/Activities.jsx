import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Styling/activities.css";

export default function Activities() {
  const [activities, setActivities] = useState("");
  useEffect(() => {
    fetch("https://project-planned-date-backend.web.app/activities")
    .then(response => response.json())
    .then(data => setActivities(data))
    .catch(console.error)
  }, []);

  return (
    <>
      <div>
        <Container>
          <h2 className="Activities"> Activities</h2>
        </Container>
      </div>
    </>
  );
}
