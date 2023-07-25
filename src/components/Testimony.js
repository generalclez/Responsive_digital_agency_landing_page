import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Ui from "./assets/Ui.png";
import U from "./assets/aaaa.png";
import aa from "./assets/aaa.png";

function Testimony() {
  return (
    <Container fluid style={{ paddingTop: "2rem" }}>
      {/* Carousel component */}
      <Carousel data-bs-theme="dark">
        {/* First slide */}
        <Carousel.Item>
          <img fluid className="d-block w-100" src={Ui} alt="First slide" />
        </Carousel.Item>
        {/* Second slide */}
        <Carousel.Item>
          <img fluid className="d-block w-100" src={U} alt="" />
        </Carousel.Item>
        {/* Third slide */}
        <Carousel.Item>
          <img fluid className="d-block w-100" src={aa} alt="" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Testimony;
