import React from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";
// import naviBar from "../styling/naviBar.css";

export default function NaviBar() {
  return (
    <>
      <div>
        <NavbarBrand>
          <a href="#">Home</a>
          <a href="#">Activities</a>
          <a href="#">Entertainments</a>
          <a href="#">Restaurants</a>
          <a href="#">Home Dates</a>
          <a href="#">Contact</a>
          <div class="animation start-home"></div>
        </NavbarBrand>
      </div>
    </>
  );
}
