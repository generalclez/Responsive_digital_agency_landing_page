import React from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import hero from "./assets/hero.png";

function Hero() {
  return (
    <Container fluid id="hero">
      {/* The row contains two columns, one for the text and button, and the other for the image */}
      <Row className="bg-light">
        {/* First column with the text and button */}
        <Col sm={12} md={6} lg={6} style={{ backgroundColor: "#FFC700" }}>
          <div
            style={{
              padding: "12rem 4.5rem 6rem 6rem",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bolder",
                marginBottom: "1.5rem",
              }}
            >
              Grow your brand through digital
            </h1>
            <p>
              If the path is beautiful, let us not ask where it leads. My
              religion is very simple; my knowledge is kindness. Each of us has
              within our power the ability to disrupt.
            </p>
            <Button className="bg-black border-0 " style={{ fontSize: "13px" }}>
              {/* The button contains a link */}
              <a
                className="px-3"
                href="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                LEARN MORE
              </a>
            </Button>
          </div>
        </Col>

        {/* Second column with the image */}
        <Col sm={12} md={6} lg={6}>
          <div>
            <Image
              fluid
              src={hero}
              style={{
                marginLeft: "-0.8rem",
                height: "43rem",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
