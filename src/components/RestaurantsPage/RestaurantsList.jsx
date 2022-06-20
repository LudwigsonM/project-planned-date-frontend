import React from "react";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "../../Styling/restaurants.css";
import RestaurantsCard from "./RestaurantsCard";

export default function RestaurantsList() {
  const [restaurants, setrestaurants] = useState();
  useEffect(() => {
    fetch("https://project-planned-date-backend.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setrestaurants(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section>
        <div>
          <h2> Restaurants List </h2>
          <Col>
            {!restaurants ? (
              <h2>Loading...</h2>
            ) : (
              restaurants?.map((restaurants) => {
                return (
                  <div key={restaurants._id}>
                    <RestaurantsCard restaurants={restaurants} />
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
