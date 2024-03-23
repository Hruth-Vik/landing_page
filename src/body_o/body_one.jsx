import React from "react";
import "./body_one.css";
const body_o = () => {
  return (
    <>
      <div className="body">
        <div className="heading">
          <h1>Newly Released Games</h1>
        </div>
        <div className="buttons">
          <button id="all_btn">All</button>
          <button id="PS4_btn">PS4</button>
          <button id="PS5_btn">PS5</button>
          <button id="X_Box_btn">X-Box</button>
        </div>
        <div className="containers"></div>
      </div>
    </>
  );
};

export default body_o
