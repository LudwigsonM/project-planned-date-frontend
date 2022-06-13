import React from "react";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "../Styling/entertainments.css";
import EntertainmentsCard from "./EntertainmentsCard";

export default function EntertainmentsList() {
  const [entertainments, setEntertainments] = useState();
  useEffect(() => {
    fetch("https://project-planned-date-backend.web.app/entertainments")
      .then((response) => response.json())
      .then((data) => setEntertainments(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section>
        <div>
          <h2> Entertainments List Carousel </h2>
          <Col>
            {!entertainments ? (
              <h2>Loading...</h2>
            ) : (
              entertainments?.map((entertainments) => {
                return (
                  <div key={entertainments._id}>
                    <EntertainmentsCard entertainments={entertainments} />
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
