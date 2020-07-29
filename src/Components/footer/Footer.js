import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-desc">
        Made in India. First in India. India's first SaaS WebGIS Platform
        Powered By Geowebmap. All rights reserved.
        <br /> Privacy Policy | Terms of Service
      </div>

      <div className="footer-icon1">
        <img width="40px" src={require("./facebook.svg")} alt="img" />

      </div>

      <div className="footer-icon2">
      <img width="40px" src={require("./twitter.svg")} alt="img" />
  
      </div>

      <div className="footer-icon3">
      <img width="40px" src={require("./telegram.svg")} alt="img" />

      </div>
    </div>
  );
}

export default Footer;

