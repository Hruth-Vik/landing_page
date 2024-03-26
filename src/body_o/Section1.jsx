import React from "react";
import "./body_one.css";
// import background from "./background.png";
import icons from "./icon.png";
import frame from "./Frame1.png";
// import pic1 from "./1st pic.webp";
import { FaStar } from "react-icons/fa6";

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
          {/* <div className="box-wrapper">
            <div className="box">
              <div className="game">
                <img src={frame} alt="" />
              </div>
              <div className="game_contain">
                <h3>Call of duty:vanguard</h3>
                <p id="genre">Activision</p>
                <p id="platform">PS4,PS5,PC,XBOX One,Xbox Series X</p>
                <div id="lower_div">

                </div>
                  <FaStar style={{ fill: 'yellow' }} />
                  <p id="rating">4.5</p>
                  <p id="orders">175 orders</p>
                </div>
                <button id="btn">Order Now</button>
                <div id="lower_portion">
                
              </div>
            </div>
            <div className="containers"></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Section1;

              {/* <div>
                <img src={pic1} alt="" />
              </div>
              <div>
                <img src={pic1} alt="" />
              </div>
              <div>
                <img src={pic1} alt="" />
              </div>
              <div>
                <img src={pic1} alt="" />
              </div>
              <div>
                <img src={pic1} alt="" />
              </div>
              <div>
                <img src={pic1} alt="" />
              </div>
              <div>
                <img src={pic1} alt="" />
              </div> */}