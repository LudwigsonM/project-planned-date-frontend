import React from "react";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import RetrieveDateFormCard from "./RetrieveDateFormCard";
import "../../Styling/retrieveDateForm.css";

export default function RetrieveDateForm() {
  const [retrieveDate, setRetrieveDate] = useState();
  useEffect(() => {
    fetch("https://project-planned-date-backend.web.app/submitadate")
      .then((response) => response.json())
      .then((data) => setRetrieveDate(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section>
        <div>
          <h2> Previously Submitted Dates Carousel </h2>
          <Col>
            {!retrieveDate ? (
              <h2>Loading...</h2>
            ) : (
              retrieveDate?.map((retrieveDate) => {
                return (
                  <div key={retrieveDate._id}>
                    <RetrieveDateFormCard retrieveDate={retrieveDate} />
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
