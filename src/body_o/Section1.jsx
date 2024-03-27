import React from "react";
import "./body_one.css";
// import background from "./background.png";
import icons from "./icon.png";
import frame from "./Frame1.png";
// import pic1 from "./1st pic.webp";
import { AiFillStar } from "react-icons/ai";

// function Data_entered(Name,Genre,rating,orders)
// {
//   return ()
// }


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
          {/* here the container is getting edited */}
          <div className="sub">
            <div className="container_class">
              <div className="upper_div">
                <img src={frame} alt="" />
              </div>
              <div className="mid_div">
                <h1 id="heading">
                  Assasins creed Mirage
                </h1>
                <p id="one">
                  Ubisoft
                </p>
                <p id="two">
                  Ps4,Ps5,Xbox One,Xbox Series X
                </p>
              </div>
              <div className="lower_div">
                <div className="left_lower">
                  <div className="icon_div">
                    <AiFillStar className="icon_added"/>
                    <p id="rating">4.5</p>
                  </div>

                  <p id="orders">175 orders</p>
                </div>
                <div className="right_lower">
                  <button className="btn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
