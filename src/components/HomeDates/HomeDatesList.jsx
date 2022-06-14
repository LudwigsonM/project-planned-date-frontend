import React from "react";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "../../Styling/homeDates.css";
import HomeDatesCard from "./HomeDatesCard";

export default function HomeDatesList() {
  const [homedates, setHomeDates] = useState();
  useEffect(() => {
    fetch("https://project-planned-date-backend.web.app/homedates")
      .then((response) => response.json())
      .then((data) => setHomeDates(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section>
        <div>
          <h2> Home Dates List Carousel </h2>
          <Col>
            {!homedates ? (
              <h2>Loading...</h2>
            ) : (
              homedates?.map((homedates) => {
                return (
                  <div key={homedates._id}>
                    <HomeDatesCard homedates={homedates} />
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
