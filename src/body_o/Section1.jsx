import React from "react";
import "./body_one.css";
// import background from "./background.png";
import icons from "./icon.png";

const Section1 = () => {
  return (
    <>
        <div id="icon">
          <img src={icons} alt="" />
        </div>
      <div className="body">
        <div id="wrapper">
          <div id="back">
            <div className="heading">
              <h1>Newly Released Games</h1>
            </div>
          </div>
          <div id="center">
            <div className="buttons">
              <button id="all_btn">All</button>
              <button id="PS4_btn">PS4</button>
              <button id="PS5_btn">PS5</button>
              <button id="X_Box_btn">X-Box</button>
            </div>
          </div>
          <div className="box-wrapper">
          <div className="box">
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
          </div>
          <div className="containers"></div>
        </div>
          </div>
      </div>
    </>
  );
};

export default Section1;
