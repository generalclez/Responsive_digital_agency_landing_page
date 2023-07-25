import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Fb from "./assets/fb.png";
import Inst from "./assets/inst.png";
import Lk from "./assets/linkedin.png";
import Photo from "./assets/Photo (12).png";
import Photo1 from "./assets/Photo (10).png";
import Active from "./assets/Active.png";
import Photo2 from "./assets/Photo (9).png";

function Team() {
  return (
    <Container id="team">
      {/* Row for heading */}
      <Row className="justify-content-center" style={{ paddingTop: "5rem" }}>
        <Col>
          <h1 className="fw-bolder text-end">
            <span style={{ color: "#FFC700" }}>People</span> behind the
            <p>scenes</p>
          </h1>
        </Col>
      </Row>
      {/* Main Row for team members */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={4}>
          <div>
            <h4 className="fw-bolder">Tiara Lyodra</h4>
            <span className="fw-bold my-4" style={{ fontSize: "12px" }}>
              HEAD OF PRODUCT
            </span>
          </div>
          {/* Social media links */}
          <div className="mt-3 mb-4">
            <a href="www.facebook.com">
              <img src={Fb} alt="" />
            </a>
            <a className="px-3" href="www.instagram.com">
              <img src={Inst} alt="" />
            </a>
            <a href="www.linkedin.com">
              <img src={Lk} alt="" />
            </a>
          </div>
          {/* Team member's description */}
          <div style={{ fontSize: "15px" }}>
            <p>
              Saturday found him for the first time strolling along through
              Zurich, breathing in the heady smell of freedom, new adventures
              hid around each corner.
            </p>
            <p>
              The future was again a secret. Now, what was tiring had
              disappeared, and only the beauty remained.
            </p>
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div style={{ marginTop: "12.55rem" }}>
            <Image fluid src={Photo} />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div style={{ marginTop: "12.55rem" }}>
            <Image fluid src={Photo1} />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div>
            <Image fluid src={Active} />
          </div>
        </Col>
        <Col xs={3} sm={3} md={3} lg={2}>
          <div style={{ marginTop: "12.55rem" }}>
            <Image fluid src={Photo2} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Team;
