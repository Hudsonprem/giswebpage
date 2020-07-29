import React from "react";
import "./banners.css";

function Banner() {
  return (
    <div>
      <div class="banner">
        <div className="icon-ind">
          <img
            src={require("./individual_h.svg")}
            alt="img"
            width="200"
          />
          <p className="logo-name" style={{ width: "90px" }}>
            INDIVIDUALS
          </p>
        </div>
        <div className="icon-enterprises">
          <img
            src={require("./enterprises_h.svg")}
            width="200px"
            alt="img"
          />
          <p className="logo-name" style={{ width: "100px" }}>
            ENTERPRISES
          </p>
        </div>
        <div className="icon-gov">
          <img
            src={require("./government_h.svg")}
            alt="img"
            width="200px"
          />
          <p className="logo-name">GOVERNMENT</p>
        </div>
        <div className="icon-ngo">
          <img
            src={require("./ngo_h.svg")}
            alt="img"
            width="200px"
          />
          <p className="logo-name" style={{ width: "50px" }}>
            NGO'S
          </p>
        </div>
        <div className="icon-acade">
          <img
            src={require("./academic_h.svg")}
            alt="img"
            width="200px"
          />
          <p className="logo-name" style={{ width: "80px" }}>
            ACADEMIC
          </p>
        </div>
      </div>
      <div className="logo-para1">
        Individuals, Enterprises, Government, NGO's, Academic of all sizes use
        GeoWebMap to deploy Web mapping applications and harness the power of
        GIS tools over the web
      </div>
      <div className="logo-para2">
        Whether you're building a simple map or a enterprise WebGIS application,
        GeoWebMap's SaaS platform gives you the easiest route to deploy web
        mapping applications fast.
      </div>
    </div>
  );
}

export default Banner;
