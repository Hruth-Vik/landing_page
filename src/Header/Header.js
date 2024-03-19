import React from "react";
import logo from "./logo.png";
import "./Header.css";

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
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
    </body>
    </>
);
}

export default heading;
