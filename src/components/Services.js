import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Services() {
  return (
    <Container fluid id="service">
      {/* First row with text at the end */}
      <Row style={{ paddingTop: "5rem" }}>
        <Col>
          {/* Text content with heading */}
          <div className="me-4">
            <h1 className="fw-bolder text-end me-5">We're always ready</h1>
            <h1 className="fw-bolder text-end me-5">
              for <span style={{ color: "#FFC700" }}>challenges</span>
            </h1>
          </div>
        </Col>
      </Row>

      {/* Second row containing two columns */}
      <Row className="justify-content-center mt-2">
        {/* First column with a dark background */}
        <Col sm={6} md={5} lg={4} className="bg-black text-white">
          {/* Content for Web Development */}
          <div className="my-5 mx-4">
            <h2
              style={{
                fontWeight: "bold",
                color: "#FFC700",
              }}
            >
              Web Development
            </h2>
            <p>
              My first thought about art, as a child, was that the artist brings
              something into the world that didn't exist before, and that he
              does it without destroying something else.
            </p>
          </div>
        </Col>
        {/* Second column with a dark background */}
        <Col
          sm={6}
          md={{ offset: 1, span: 5 }}
          lg={{ offset: 1, span: 4 }}
          className="bg-black text-white"
        >
          {/* Content for UI/UX Design */}
          <div className="my-5 mx-4">
            <h2
              style={{
                fontWeight: "bold",
                color: "#FFC700",
              }}
            >
              UI/UX Design
            </h2>
            <p>
              My first thought about art, as a child, was that the artist brings
              something into the world that didn't exist before, and that he
              does it without destroying something else.
            </p>
          </div>
        </Col>
      </Row>

      {/* Third row containing two columns */}
      <Row className="justify-content-center" style={{ marginTop: "5rem" }}>
        {/* First column with a dark background */}
        <Col sm={6} md={5} lg={4} className="bg-black text-white">
          {/* Content for Digital Marketing */}
          <div className="my-5 mx-4">
            <h2
              style={{
                fontWeight: "bold",
                color: "#FFC700",
              }}
            >
              Digital Marketing
            </h2>
            <p>
              My first thought about art, as a child, was that the artist brings
              something into the world that didn't exist before, and that he
              does it without destroying something else.
            </p>
          </div>
        </Col>
        {/* Second column with a dark background */}
        <Col
          sm={6}
          md={{ offset: 1, span: 5 }}
          lg={{ offset: 1, span: 4 }}
          className="bg-black text-white"
        >
          {/* Content for Brand Design */}
          <div className="my-5 mx-4">
            <h2
              style={{
                fontWeight: "bold",
                color: "#FFC700",
              }}
            >
              Brand Design
            </h2>
            <p>
              My first thought about art, as a child, was that the artist brings
              something into the world that didn't exist before, and that he
              does it without destroying something else.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
