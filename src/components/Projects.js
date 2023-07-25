import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import ornament from "./assets/ornament.png";
import Photon from "./assets/Photon.png";
import Photo from "./assets/Photo.png";
import Photo1 from "./assets/Photo (1).png";
import Primary1 from "./assets/Primary1.png";
import Primary from "./assets/Primary.png";
import Prog from "./assets/Prog.mp4";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <Container fluid id="project">
      {/* First row with 2 columns */}
      <Row className="mb pb-5" style={{ paddingTop: "5rem" }}>
        {/* First column with text and an image */}
        <Col
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          style={{
            backgroundImage: `url(${ornament}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "17.2rem",
            backgroundPositionY: "1.4rem",
          }}
        >
          {/* Text content */}
          <div style={{ margin: "1rem 0 0 10rem " }}>
            <h1
              style={{
                fontWeight: "bolder",
                marginBottom: "1.5rem",
              }}
            >
              Our recent <span style={{ color: "#FFC700" }}>projects</span>
            </h1>
            <hr
              style={{
                width: "6rem",
                border: "3px solid #FFC700",
              }}
            />
            <p className="my-4 fs-2">
              Website development for <br /> Digital Company
            </p>

            <p style={{ margin: "1rem 7rem 6rem 0" }}>
              My first thought about art, as a child, was that the artist brings
              something into the world that didn't exist before, and that he
              does it without destroying something else.
            </p>
          </div>
          <div>
            <Image
              fluid
              src={Photon}
              style={{ width: "27rem" }}
              className="float-end"
            />
          </div>
        </Col>

        {/* Second column with 2 images */}
        <Col xs={12} sm={12} md={5} lg={5} xl={5} className="pb-5">
          <div
            style={{
              marginTop: "5rem",
              backgroundImage: `url(${Primary1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: "14rem",
              backgroundPositionY: "10rem",
              backgroundPosition: "-20rem 0 0 0",
            }}
          >
            <Image
              fluid
              src={Photo}
              style={{ width: "23rem", height: "28rem" }}
              className="mb-4 me-4"
            />
            <Image fluid src={Photo1} style={{ width: "23rem" }} />
          </div>
        </Col>
      </Row>

      {/* Second row with 2 columns */}
      <Row style={{ marginBottom: "7rem" }}>
        {/* First column with background image and video */}
        <Col
          md={6}
          lg={6}
          style={{
            backgroundImage: `url(${Primary}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "21rem",
            backgroundPositionX: "-4rem",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center "
            style={{ marginTop: "5rem", marginLeft: "6rem" }}
          >
            {/* Video */}
            <video
              controls
              src={Prog}
              style={{ width: "30rem", height: "18rem" }}
            />
          </div>
        </Col>

        {/* Second column with text and a button */}
        <Col md={6} lg={6}>
          <div style={{ margin: "6rem 0 0 3.5rem" }}>
            <h3 className="fw-bolder mb-4">
              This thing about us is <br />
              <span style={{ color: "#FFC700" }}>we think big, huge</span>
            </h3>
            <ul>
              <li>If the path is beautiful, let us not ask where it leads</li>
              <li>My religion is very simple, my religion is kindness</li>
              <li>Each of us has within our power the ability to disrupt</li>
            </ul>
            <Button
              className="bg-black border-0 ms-3 mt-4"
              style={{ fontSize: "13px" }}
            >
              {/* Button with a link */}
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
      </Row>

      {/* Last row with 4 columns */}
      <Row style={{ marginBottom: "10rem" }}>
        <Col
          sm={6}
          md={3}
          className=" bg-black border p-5 text-center text-white"
        >
          <h1
            style={{
              fontSize: "4rem",
              color: "#FFC700",
              margin: "2rem 0 1rem 0",
            }}
          >
            124
          </h1>
          <h5 className="mb-5">COMPLETE PROJECTS</h5>
        </Col>
        <Col
          sm={6}
          md={3}
          className="border p-5 text-center text-white"
          style={{ margin: "-1rem 0 -1rem 0", backgroundColor: "#FFC700" }}
        >
          <h1
            style={{
              fontSize: "4rem",
              padding: "2rem 0 0rem 0",
            }}
          >
            99%
          </h1>
          <h5 className="py-5">SATISFIED CLIENTS</h5>
        </Col>
        <Col
          sm={6}
          md={3}
          className=" bg-black border p-5 text-center text-white"
        >
          <h1
            style={{
              fontSize: "4rem",
              color: "#FFC700",
              margin: "2rem 0 1rem 0",
            }}
          >
            234
          </h1>
          <h5 className="mb-5">SUCCESS CAMPAIGN</h5>
        </Col>
        <Col
          sm={6}
          md={3}
          className=" bg-black border p-5 text-center text-white"
        >
          <h1
            style={{
              fontSize: "4rem",
              color: "#FFC700",
              margin: "2rem 0 1rem 0",
            }}
          >
            2345
          </h1>
          <h5 className="mb-5">CUPS OF COFFEE</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
