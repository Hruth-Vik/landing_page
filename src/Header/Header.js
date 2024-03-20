import React from "react";
import logo from "./logo.png";
import "./Header.css";
import search from "./Search icon.png";

function heading() {
  return (
<>
    <body>
        <div className="Main">
          <div id="left">
            <img src={logo} alt="Brand_logo" />
            <h1>Medley</h1>
          </div>
          <div id="right">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Our Shop</li>
            </ul>
            <div className="inputing">
            <input type="text" placeholder="Search..."/>
            <img src={search} alt="search_icon" />
            </div>
          </div>
        </div>
      </body>
  </>
);
}

export default heading;
