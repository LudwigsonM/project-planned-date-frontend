import React from "react";
import { Container, NavbarBrand } from "react-bootstrap";
import "../../Styling/naviBar.css";

export default function NaviBar() {
  return (
    <>
      <nav className="navigation-bar">
        <Container>
          <NavbarBrand>
            <a href="#">Home</a>
            <a href="#">Activities</a>
            <a href="#">Entertainments</a>
            <a href="#">Restaurants</a>
            <a href="#">Home Dates</a>
            <a href="#">Contact</a>
            <div className="animation start-home"></div>
          </NavbarBrand>
        </Container>
      </nav>
    </>
  );
}
