import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <div className="about-session">
        <div className="about-container">
          <div className="about-details">
            <h1>BE CAREFUL TO RESPECT THE DESIGN!</h1>
            <p>
              Technologies : HTML CSS JS <br />
              Détail des specs front : Zeplin <br />3 maquettes desktop, tablet
              et mobile, 2 breakpoints <br />
              Desktop/ tablet : 1200px (Desktop) / 1199 tablet
              <br />
              Tablet / Mobile : 600px (Tablet) / 599 (mobile)
            </p>
            <button>Let's discover</button>
          </div>
        </div>
        <div className="about-footer">
          <h2>
            Good luck about this block. Don’t forget to respect the different
            breakpoints
          </h2>

          <div className="about-footer-details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button>hang in there</button>
          </div>
        </div>
      </div>
      <hr className="line" />
    </>
  );
};

export default AboutUs;
