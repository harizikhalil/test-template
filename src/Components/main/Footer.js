import React from "react";
import logoaleia from "../../image/logoaleia.png";
import facebook from "../../image/facebook.png";
import linkedin from "../../image/linkedin.png";
import twitter from "../../image/twitter.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-session">
      <div className="footer-title">
        <div className="empty"></div>
        <h3 classNme="email-title">Send us your email to stay tuned</h3>
        <h3 className="follow">Follow us </h3>
      </div>
      <div className="footer-container">
        <img src={logoaleia} alt="logoaleia" className="footer-logo" />
        <div className="email-input">
          <input type="text" placeholder="yourmail@email.com" />
          <span>XOXO</span>
        </div>
        <div className="social-media">
          <img src={facebook} alt="facebook" />
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <p className="copyright">© 2020. All rights reserved.</p>
    </div>
  );
};

export default Footer;
