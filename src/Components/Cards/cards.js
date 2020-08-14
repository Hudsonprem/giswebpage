import React, { useState } from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/Button";
import "./cards.css";

function MemberShipCards() {
  const [radioValue, setRadioValue] = useState("0");
  const radios = [
    { name: "Pay Monthly", value: "0" },
    { name: "Pay yearly", value: "1" }
  ];

 

  const rates = [
    {
      name: "Pay Monthly",
      value1: "₹999",
      value2: "₹3,999",
      value3: "₹7,499"
    },
    {
      name: "Pay yearly",
      value1: "₹899",
      value2: "₹3,599",
      value3: "₹6,749"
    }
  ];

  var card1 = [];
  var card2 = [];
  var card3 = [];
  var card4 = [];

  card1.push(
    <div className=" mainborder " style={{ borderColor: "#28a745" }}>
      <img
        className=" card-icon"
        src={require("./pricing_free.svg")}
        alt="img"
      />
      <h2>Basic</h2>
      <div className="type1">
        <div style={{ padding: "6%" }}>
          <h1 className="main-title">Free</h1>
          <p className="base-type">Data Limit 5 MB</p>
        </div>
      </div>
      <div>
        <div className="offers">
          Public Applications
          <br />
          <br />
          <span className="specific">1</span> Applications
          <br />
          <br />
          <span className="specific">3</span> Layers Per Application
          <br />
          <br />
          <span className="specific">1</span> Layer Grouping Per Application
          <br />
          <br />
          <span className="specific">1</span> Background Layers Supported
          
        </div>

        <Button  href="/login"  className="button-getstart" variant="success">Get started</Button>
        <br />
        
      </div>
    </div>
  );

  card2.push(
    <div
      border="success"
      className=" mainborder "
      style={{ borderColor: "#28a745" }}
    >
      <img
        className=" card-icon"
        alt="img"
        src={require("./pricing_standard.svg")}
      />
      <h2>Standard</h2>
      <div className="type1">
        <div style={{ padding: "6%" }}>
          <h1 className="main-title">
            {rates[radioValue].value1}
            <span style={{ fontSize: "14px", fontWeight: "100" }}>/month </span>
          </h1>
          {radioValue === "1" ? (
            <div style={{ fontSize: "17px", color: "#cfcfcf" }}>
              Billed ₹10,788 Annually
            </div>
          ) : null}
          <p className="base-type">Data Limit 25 MB</p>
        </div>
      </div>
      <div>
        <div className="offers">
          Public & Private Applications
          <br />
          <br />
          <span className="specific">2</span> Applications
          <br />
          <br />
          <span className="specific">5</span> Layers Per Application
          <br />
          <br />
          <span className="specific">2</span> Layer Grouping Per Application
          <br />
          <br />
          <span className="specific">2</span> Background Layers Supported
          <br />
          <br />
          Access Management
         
        </div>

        <Button href="/login" className="button-getstart" variant="success">Get started</Button>
        <div style={{ fontSize: "10px", color: "#cfcfcf", padding: "2%", textAlign:"center" }}>
          No Credit Card Required
        </div>
      </div>
    </div>
  );

  card3.push(
    <div
      border="success"
      className=" mainborderpro "
      style={{ borderColor: "#28a745" }}
    >
      <p className="hint">Most popular</p>
      <img
        className=" card-icon"
        style={{ marginTop: "-5%" }}
        alt="img"
        src={require("./pricing_professional.svg")}
      />

      <h2 style ={{marginBottom: "0"}}>Professional</h2>
      <div className="type2">
        <div style={{ padding: "6%" }}>
          <h1 className="main-title">
            {rates[radioValue].value2}
            <span style={{ fontSize: "14px", fontWeight: "100" }}>/month </span>
          </h1>
          {radioValue === "1" ? (
            <div style={{ fontSize: "17px", color: "#cfcfcf" }}>
              Billed ₹43,188 Annually
            </div>
          ) : null}
          <p className="base-type">Data Limit 50 MB</p>
        </div>
      </div>
      <div>
        <div className="offerspro">
          Public & Private Applications
          <br />
          <br />
          <span className="specific">5</span> Applications
          <br />
          <br />
          <span className="specific">15</span> Layers Per Application
          <br />
          <br />
          <span className="specific">4</span> Layer Grouping Per Application
          <br />
          <br />
          <span className="specific">3</span> Background Layers Supported
          <br />
          <br />
          Access Management
          <br />
          <br />
          Custom Branding
       
        </div>

        <Button  href="/login"  className="button-getstart" style={{marginTop: "-12px"}} variant="success">Get started</Button>
        <div style={{ fontSize: "10px", color: "#cfcfcf", padding: "2%", textAlign:"center" }}>
          No Credit Card Required
        </div>
      </div>
    </div>
  );

  card4.push(
    <div
      border="success"
      className=" mainborder "
      style={{ borderColor: "#28a745" }}
    >
      <img
        className=" card-icon"
        alt="img"
        src={require("./pricing_enterprise.svg")}
      />
      <h2>Enterprise</h2>
      <div className="type1">
        <div style={{ padding: "6%" }}>
          <h1 className="main-title">
            {rates[radioValue].value3}
            <span style={{ fontSize: "14px", fontWeight: "100" }}>/month </span>
          </h1>
          {radioValue === "1" ? (
            <div style={{ fontSize: "17px", color: "#cfcfcf" }}>
              Billed ₹80,988 Annually
            </div>
          ) : null}
          <p className="base-type">Data Limit 5 GB</p>
        </div>
      </div>
      <div>
        <div className="offers">
          Public & private Applications
          <br />
          <br />
          <span className="specific">Unlimited</span> Applications
          <br />
          <br />
          <span className="specific">Unlimited</span> Layers Per Application
          <br />
          <br />
          <span className="specific">Unlimited</span> Layer Grouping Per
          Application
          <br />
          <br />
          <span className="specific">3</span> Background Layers Supported
          <br />
          <br />
          Access Management
          <br />
          <br />
          Custom Branding
          <br />
          <br />
          Custom Domain Name Mapping
         
        </div>

        <Button  href="/login"  className="button-getstart" variant="success">Get started</Button>
        <div style={{ fontSize: "10px", color: "#cfcfcf", padding: "2%", textAlign:"center" }}>
          No Credit Card Required
        </div>
      </div>
    </div>
  );

  return (
    <div id="Plans">
      <h1 className="titleComparison">
        Choose the right plan that best suits your requirements
      </h1>
      <p className="title-descom"
        
      >
        GeoWebMap comes with varied plans to suit everyone's need. Choose the
        plan that fits your needs and get started now by starting with a 30 day
        Free trial on all plans
      </p>
      <img
        className="save-icon"
        src={require("./landing_page_save_10.svg")}
        alt="img"
      />
      <ButtonGroup toggle className=" togglebutton ">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="outline-success"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={e => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <div className="cardContainer">
        <div className="div-Basic">{card1}</div>
        <div className="div-Standard">{card2}</div>
        <div className="div-pro ">{card3}</div>
        <div className="div-enterprise ">{card4}</div>
      </div>
    </div>
  );
}

export default MemberShipCards;
