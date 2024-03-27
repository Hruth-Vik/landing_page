/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./logo.png";
import "./Header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Our Shop</a>
              </li>
            </ul>
            <div className="cover">
              <div className="inputing">
                <input type="text" placeholder="Search..." />
                <div id="svg_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="first">
            <p className="horizontal"></p>
            <h4 id="first_heading">GAMEWORLD DISTRIBUTORS</h4>
            <p className="horizontal"></p>
          </div>
          <div className="sec">
            <h1>Connecting Players &</h1>
            <h1>Games in a Immersive environment</h1>
          </div>
          <div className="thir">
            <button id="btn">Become a Member for Free!</button>
          </div>
          <div className="bottom">
            <p>scroll down</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" /></svg>
          </div>
        </div>
      </body>
    </>
  );
}
export default heading;
