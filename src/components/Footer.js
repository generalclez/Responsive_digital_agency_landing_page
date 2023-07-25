import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "./assets/logo.png";
import Fill from "./assets/Fill 1.png";
import Fill1 from "./assets/Fill 1 (1).png";
import Fb from "./assets/Facebook.png";
import Google from "./assets/Google.png";
import Twitter from "./assets/Twitter.png";

function Footer() {
  // Get the current year
  const currYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* The row is divided into four different col */}
      <Row className="justify-content-center">
        {/* First col with different breaking point */}
        <Col xs={6} sm={6} md={4} lg={4}>
          {/* Column containing logo, text, and contact information */}
          <div style={{ padding: " 5rem 0 5rem 1.6rem" }}>
            <img
              fluid
              src={Logo}
              alt=""
              style={{ height: "2rem", margin: "0 0 1rem 0.7rem" }}
            />
            <p className="ps-4 pe-5">
              Find freemium long term hypotheses first mover advantage assets
              owership niche market startup inventor.
            </p>
            <div className="ps-4">
              <img fluid src={Fill} alt="" />
              <span style={{ fontSize: "18px", paddingLeft: "13px" }}>
                agansi@gmail.com
              </span>
            </div>
            <div className="pt-2 ps-4">
              <img fluid src={Fill1} alt="" />
              <span style={{ fontSize: "17px", paddingLeft: "13px" }}>
                +12 3456 7890
              </span>
            </div>
          </div>
        </Col>

        {/* Second col with different breaking point */}
        <Col xs={6} sm={6} md={2} lg={2}>
          {/* Column containing service information */}
          <div style={{ padding: " 6.3rem 0 0 0.3rem" }}>
            <h6 className="fw-bolder">Services</h6>
            <p>Digital Marketing</p>
            <p>Branding</p> <p>Market Promotion</p> <p>Digital Canpaign</p>
          </div>
        </Col>

        {/* Third col with different breaking point */}
        <Col xs={6} sm={6} md={2} lg={2}>
          {/* Column containing information about the company */}
          <div style={{ padding: " 6.3rem 0 0 0.3rem" }}>
            <h6 className="fw-bolder">About Us</h6>
            <p>Milestone</p>
            <p>Check Our Pricing Plan</p> <p>Expart Team</p>
            <p>Our Exicting News</p>
          </div>
        </Col>

        {/* Fourth col with different breaking point */}
        <Col xs={6} sm={6} md={3} lg={2}>
          {/* Column containing address and social media links */}
          <div style={{ padding: " 6.3rem 0 0 0rem" }}>
            <h6 className="fw-bolder">Address</h6>
            <p className="mb-4">123 Lorem Ipsum Street, Jakarta, Indonesia</p>
            <a href="www.facebook.com">
              <img fluid src={Fb} alt="" style={{ width: "35px" }} />
            </a>
            <a href="www.google.com">
              <img
                fluid
                src={Google}
                alt=""
                style={{ width: "35px" }}
                className="mx-3"
              />
            </a>
            <a href="www.twitter.com">
              <img fluid src={Twitter} alt="" style={{ width: "35px" }} />
            </a>
          </div>
        </Col>

        {/* Copyright */}
        <p className="text-center">Copyright&copy;{currYear}</p>
      </Row>
    </footer>
  );
}

export default Footer;
