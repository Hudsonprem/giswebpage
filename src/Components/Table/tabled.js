import React from "react";
import "./tabled.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Tabled() {
  const title = [
    "Map Navigation Tools",
    "Measurement Tools",
    "Feature Identification Tools",
    "Querying & Feature Selection Tools",
    "Results Export to CSV",
    "Select Features in Map Tools",
    "Annotation Tools",
    "Bookmarking Tools",
    "Printing Tools",
    "Edit AtRowibutes Tools",
    "Edit Spatial Features Tools",
    "Overlay External WMS Layer in Runtime for Visualization",
    "Overlay Shapefile Layer in Runtime for Visualization",
    "Overlay KML Layer in Runtime for Visualization",
    "Admin Interface",
    "OColers"
  ];

  const title2 = ["Shapefile", "GeoJSON", "KML", "WMS Layer"];

  const plan = {
    Enterprise: [
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "f"
    ],
    Professional: [
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "f",
      "t",
      "t",
      "t",
      "t",
      "f"
    ],
    Standard: [
      "t",
      "t",
      "t",
      "t",
      "t",
      "t",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "t",
      "f"
    ],
    Basic: [
      "t",
      "t",
      "t",
      "t",
      "f",
      "t",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "f",
      "t",
      "f"
    ]
  };
  const plan2 = {
    Enterprise: ["t", "t", "t", "t"],
    Professional: ["t", "t", "t", "t"],
    Standard: ["t", "t", "t", "f"],
    Basic: ["t", "f", "f", "f"]
  };
  var lis = [];
  var lis2 = [];
  lis.push(
    <Row xs={4} md={5} lg={5} className="headings ">
      <Col className="features">Mapping Features</Col>
      <Col className="memtype">Basic</Col>
      <Col className="memtype">Standard</Col>
      <Col className="memtype">Professional</Col>
      <Col className="memtype">Enterprise</Col>
    </Row>
  );

  lis2.push(
    <Row xs={4} md={5} lg={5} className="headings ">
      <Col className="memtype">Layer Supported via Admin Interface</Col>
    </Row>
  );

  for (var i = 0; i < 16; i++) {
    lis.push(
      <Row className="rowses" xs={4} md={5} lg={5}>
        <Col className="icontents" xs={12}>
          {title[i]}
        </Col>
        <Col className="tcontents">
          {plan.Basic[i] === "t" ? (
            <img
              src={require("./img/tick.svg")}
              alt="hello"
              height="25"
              className="tick-image"
            />
          ) : (
            <p className="empty-dash" style={{ margin: "auto" }}>
              ―
            </p>
          )}{" "}
        </Col>
        <Col className="tcontents">
          {plan.Standard[i] === "t" ? (
            <img
              src={require("./img/tick.svg")}
              alt="hello"
              height="25"
              className="tick-image"
            />
          ) : (
            <p className="empty-dash" style={{ margin: "auto" }}>
              ―
            </p>
          )}
        </Col>
        <Col
          className="pros tcontents"
          style={
            i % 2 === 0 ? { background: "#e6faed" } : { background: "#ebfff2" }
          }
        >
          {plan.Professional[i] === "t" ? (
            <img
              src={require("./img/tick.svg")}
              alt="hello"
              height="25"
              className="tick-image"
            />
          ) : (
            <p className="empty-dash" style={{ margin: "auto" }}>
              ―
            </p>
          )}
        </Col>
        <Col className="tcontents">
          {plan.Enterprise[i] === "t" ? (
            <img
              src={require("./img/tick.svg")}
              alt="hello"
              height="25"
              className="tick-image"
            />
          ) : (
            <p className="empty-dash" style={{ margin: "auto" }}>
              ―
            </p>
          )}
        </Col>
      </Row>
    );
  }

  for (var j = 0; j < 4; j++) {
    lis2.push(
      <Row className="rowses" xs={4} md={5} lg={5}>
        <Col className="icontents" xs={12}>
          {title2[j]}
        </Col>
        <Col className="tcontents">
          {plan2.Basic[j] === "t" ? (
            <img
              src={require("./img/tick.svg")}
              alt="hello"
              height="25"
              className="tick-image"
            />
          ) : (
            <p className="empty-dash" style={{ margin: "auto" }}>
              ―
            </p>
          )}{" "}
        </Col>
        <Col className="tcontents">
          {plan2.Standard[j] === "t" ? (
            <img
              src={require("./img/tick.svg")}
              alt="hello"
              height="25"
              className="tick-image"
            />
          ) : (
            <p className="empty-dash" style={{ margin: "auto" }}>
              ―
            </p>
          )}{" "}
        </Col>
        <Col
          className="pros tcontents"
          style={
            i % 2 === 0 ? { background: "#e6faed" } : { background: "#ebfff2" }
          }
        >
          {plan2.Professional[j] === "t" ? (
            <img
              src={require("./img/tick.svg")}
              alt="hello"
              height="25"
              className="tick-image"
            />
          ) : (
            <p className="empty-dash" style={{ margin: "auto" }}>
              ―
            </p>
          )}{" "}
        </Col>
        <Col className="tcontents">
          {plan2.Enterprise[j] === "t" ? (
            <img
              src={require("./img/tick.svg")}
              alt="hello"
              height="25"
              className="tick-image"
            />
          ) : (
            <p className="empty-dash" style={{ margin: "auto" }}>
              ―
            </p>
          )}{" "}
        </Col>
      </Row>
    );
  }

  return (
    <div className="tableframe">
      <Container className="users">
        <h1 className="titleComparison">Feature Comparison</h1>
        <p className="Comparison-desc" style={{ paddingBottom: "2%" }}>
          Don't know which plan is best for you? Check the feature comparison
          table below and choose the plan that best works for you
        </p>
        {lis}
        <br />
        <br />
        {lis2}
      </Container>
    </div>
  );
}
export default Tabled;
