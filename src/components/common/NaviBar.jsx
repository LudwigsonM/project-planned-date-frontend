import React from "react";
import "../../Styling/naviBar.css";

export default function NaviBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/activities">Activities</a>
          </li>
          <li>
            <a href="/entertainments">Entertainments</a>
          </li>
          <li>
            <a href="/restaurants">Restaurants</a>
          </li>
          <li>
            <a href="/homedates">Home Dates</a>
          </li>
          <li>
            <a href="/submitadate">Submit A Date</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

{
  /* <nav className="navigation-bar">
  <a className="nav-home" >
    Home
  </a>
  <a className="nav-activities" href="/activities">
    Activities
  </a>
  <a className="nav-entertainments" >
    Entertainments
  </a>
  <a className="nav-restaurants" >
    Restaurants
  </a>
  <a className="nav-homedates" >
    Home Dates
  </a>
  <a >Submit A Date</a>
  <div className="animation start-home"></div>
</nav> */
}
