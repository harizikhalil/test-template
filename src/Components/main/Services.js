import React from "react";
import icon1 from "../../image/icon1.png";
import icon2 from "../../image/icon2.png";
import icon3 from "../../image/icon3.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-session">
      <h2>Don’t forget about the spacing! It’s very important</h2>
      <div className="services-container">
        <div className="card-service">
          <img src={icon1} alt="icon1" />
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="card-service">
          <img src={icon2} alt="icon1" />
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="card-service">
          <img src={icon3} alt="icon1" />
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <button>It’s almost done, don’t give up</button>
    </div>
  );
};

export default Services;
