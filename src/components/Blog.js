import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import PhotoBlog from "./assets/PhotoBlog.png";
import PhotoB from "./assets/PhotoB.png";
import PhotoL from "./assets/PhotoL.png";
import PhotoO from "./assets/PhotoO.png";
import PhotoG from "./assets/PhotoG.png";

function Blog() {
  return (
    <Container style={{ paddingTop: "4rem" }} id="blog">
      <h1 style={{ fontWeight: "bolder" }}>
        From our <span style={{ color: "#FFC700" }}> blog </span>
      </h1>
      <Row className="justify-content-center my-5">
        {/* First column with content */}
        <Col lg={7}>
          <div>
            <Image fluid src={PhotoBlog} width={630} height={403} />
          </div>
          <div className="me-5">
            <p
              className="text-secondary fw-bold mt-4"
              style={{ fontSize: "10px" }}
            >
              WEBSITE DESIGN | MONDAY, 26 JUNE 2023
            </p>
            <h3 className="py-4 fw-bolder">
              I think night time is dark so you can imagine with less
              distraction
            </h3>
            <p>
              The engine that gives it mysterious inner life to a work of art
              must be the subterranean expression of a wish, working it way to
              the surface of a narrative. Change is an easy panacea, it takes
              character to stay in one.
            </p>
          </div>
        </Col>
        {/* Second column with content */}
        <Col lg={5}>
          {/* Blog posts with images and text */}
          <div className="d-flex">
            <Image fluid src={PhotoB} width />

            <div className="ps-3">
              <span
                className="text-secondary fw-bold"
                style={{ fontSize: "10px" }}
              >
                WEBSITE DEVELOPMENT
              </span>
              <h4 className="pt-3 pe-5  fw-bolder" style={{ fontSize: "20px" }}>
                The individual is born of nature, but artist is born of that
                individual
              </h4>
            </div>
          </div>

          <div className="my-3 d-flex">
            <Image src={PhotoL} width />

            <div className="ps-3">
              <span
                className="text-secondary fw-bold"
                style={{ fontSize: "10px" }}
              >
                BRAND DESIGN
              </span>
              <h4 className="pt-3 pe-5 fw-bolder" style={{ fontSize: "20px" }}>
                A life without it is like a sunless garden when the flowers are
                dead
              </h4>
            </div>
          </div>

          <div className="my-3 d-flex">
            <Image src={PhotoO} width />
            <div className="ps-3">
              <span
                className="text-secondary fw-bold"
                style={{ fontSize: "10px" }}
              >
                UX/UI DESIGN
              </span>
              <h4 className="pt-3 pe-5 fw-bolder" style={{ fontSize: "20px" }}>
                All sorrows can be born if they can be put into story
              </h4>
            </div>
          </div>

          <div className="my-3 d-flex">
            <Image src={PhotoG} width />
            <div className="ps-3">
              <span
                className="text-secondary fw-bold"
                style={{ fontSize: "10px" }}
              >
                BRAND DESIGN
              </span>
              <h4 className="pt-3 pe-5 fw-bolder" style={{ fontSize: "20px" }}>
                Life is friendship set on fire, certain thoughts are prayers
              </h4>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
