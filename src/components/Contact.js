import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./assets/logo_1.png";
import Logo2 from "./assets/logo_2.png";
import Logo3 from "./assets/logo_3.png";
import Logo4 from "./assets/logo_4.png";
import Logo5 from "./assets/logo_5.png";
import Primary1 from "./assets/Primary1.png";
import Secondary from "./assets/Secondary.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    // The outer container for the Contact section
    <Container className="bg-light" id="contact">
      {/* Row for logos */}
      <Row className="justify-content-center" style={{ paddingTop: "5rem" }}>
        <Col xs={4} sm={4} md={2} lg={2}>
          <img fluid src={Logo} alt="" width={130} />
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
          <img fluid src={Logo2} alt="" width={130} />
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
          <img fluid src={Logo3} alt="" width={130} />
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
          <img fluid src={Logo4} alt="" width={130} />
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
          <img fluid src={Logo5} alt="" width={130} />
        </Col>
      </Row>

      {/* Row for the contact form */}
      <Row
        className="justify-content-center"
        style={{
          padding: "4rem 0 5rem 0",
        }}
      >
        {/* Left column for displaying images and text */}
        <Col
          md={12}
          lg={5}
          className="bg-light"
          style={{
            backgroundImage: `url(${Primary1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "9rem",
            backgroundPositionX: "3rem",
          }}
        >
          <div
            className="text-white bg-success "
            style={{
              width: "23rem",
              padding: "4rem 2rem 0 2rem",
              backgroundImage: `url(${Secondary}`,
              backgroundRepeat: "no-repeat",
              marginTop: "4rem",
              marginLeft: "7rem",
              height: "32.6rem",
            }}
          >
            {/* Heading and text inside the left column */}
            <h1 className="fw-bold mb-4">Start a new project!</h1>
            <span style={{ fontSize: "15.5px" }}>
              If the path is beautiful, let us not ask where it leads. My
              religion is beautiful; my religion is kindness.
            </span>
          </div>
        </Col>

        {/* Right column for the contact form */}
        <Col md={12} lg={7} className="bg-white" style={{ marginTop: "4rem" }}>
          <div>
            <Form className=" " style={{ margin: "9rem 3rem 0 5rem" }}>
              {/* Form fields for full name, email, and message */}
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your full name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your e-mail address" />
              </Form.Group>

              <br />

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Drop us a message"
                  rows={5}
                />
              </Form.Group>

              {/* Submit button */}
              <Button
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  padding: "6px 2rem 6px 2rem",
                  backgroundColor: "#FFC700",
                  border: "none",
                  float: "right",
                  marginBottom: "1rem",
                }}
              >
                SEND NOW
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
