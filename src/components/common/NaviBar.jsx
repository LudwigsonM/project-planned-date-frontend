import React from "react";
import { Container, NavbarBrand } from "react-bootstrap";
import "../../Styling/naviBar.css";

export default function NaviBar() {
  return (
    <>
      <nav className="navigation-bar">
        <a className="nav-home" href="/">
          Home
        </a>
        <a className="nav-activities" href="/activities">
          Activities
        </a>
        <a className="nav-entertainments" href="/entertainments">
          Entertainments
        </a>
        <a className="nav-restaurants" href="/restaurants">
          Restaurants
        </a>
        <a className="nav-homedates" href="/homedates">
          Home Dates
        </a>
        <a href="/submitadate">Submit A Date</a>
        <div className="animation start-home"></div>
      </nav>
    </>
  );
}
