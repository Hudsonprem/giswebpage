import React from "react";
import "./Afeatures.css";

function Afeatures() {
  return (
    <div id="AFeature" style={{ backgroundColor: "#f4fff8" }}>
      <div className="AFeatures-title">Amazing Features</div>
      <div className="AFeatures-desc">
        GeoWebMap is bundled with some amazing web mapping features and
        configurations tools that will help any user to launch WebGIS
        applications with ease
      </div>
      <div className="parent">
        <div className="div7">
          <img
            src={require("./landing_feature.png")}
            alt="img"
            width="100%"
            height="100%"
          />
        </div>
        <div className="div1">
          <img
            src={require("./01_deploy.svg")}
            alt="img"
            width="50px"
            style={{ paddingBottom: "20px",display:"block",margin:"0% auto" }}
          />

          <div className="Featuretitle">
            DEPLOY WEBGIS APPLICATIONS IN LESS THAN 15 MINUTES
          </div>
          <div className="Featuredesc">
            Using GeoWebMap you can publish your WebGIS applications under 15
            minutes and make it available to public or protected users
          </div>
        </div>
        <div className="div2">
          <img
            src={require("./05_safe.svg")}
            alt="img"
            width="50px"
            style={{ paddingBottom: "20px" ,display:"block",margin:"0% auto" }}
          />
          <div className="Featuretitle">YOUR DATA IS IN SAFE HANDS</div>
          <div className="Featuredesc">
            We have deployed multiple layers of security configurations to
            protect your spatial data and non spatial data. All protected data
            can be visualised only by your organisation
          </div>
        </div>
        <div className="div3">
          <img
            src={require("./02_configure.svg")}
            alt="img"
            width="50px"
            style={{ paddingBottom: "20px" ,display:"block",margin:"0% auto" }}
          />
          <div className="Featuretitle">
            CONFIGURABLE MAP INTERFACE AND TOOL
          </div>
          <div className="Featuredesc">
            GeoWebMap comes with easily configurable map interface to choose the
            tools, layer management and background maps that is required for
            your mapping applications
          </div>
        </div>
        <div className="div4">
          <img
            src={require("./03_analyse.svg")}
            alt="img"
            width="50px"
            style={{ paddingBottom: "20px" ,display:"block",margin:"0% auto" }}
          />
          <div className="Featuretitle">
            ANALYSE AND GET INTELLIGENT INSIGHTS FROM YOUR LOCATION DATA
          </div>
          <div className="Featuredesc">
            Publish your spatial datasets to web thereby allowing your business
            to work collaboratively and make real time decisions by visualising
            and analysing your location data
          </div>
        </div>
        <div className="div5">
          <img
            src={require("./06_white_label.svg")}
            alt="img"
            width="50px"
            style={{ paddingBottom: "20px" ,display:"block",margin:"0% auto" }}
          />
          <div className="Featuretitle">CREATE WHITE-LABEL APPLICATIONS</div>
          <div className="Featuredesc">
            Launch your applications using your own branding colours and map it
            to your custom domain names
          </div>
        </div>
        <div className="div6">
          <img
            src={require("./04_role.svg" )}
            alt="img"
            width="50px"
            style={{ paddingBottom: "20px" ,display:"block",margin:"0% auto" }}
          />
          <div className="Featuretitle">
            ACCESS AND ROLE BASED DATA MANAGEMENT
          </div>
          <div className="Featuredesc">
            Create your custom roles/groups and set business rules to allow only
            specific users to visualize and perform analysis on specific
            datasets
          </div>
        </div>
      </div>
    </div>
  );
}

export default Afeatures;
