import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Hero from "../../assets/img/herobanerimage.svg";
import { BsMouse } from "react-icons/bs";

export default function PageBanner(props) {
  return (
    <>
      <section className="hero-banner">
        <Container>
          <Row className="py-5 d-flex justify-content-center align-items-center">
            <Col xs={12} className="text-center text-xs-center text-sm-center text-md-start my-0 my-sm-0 my-md-5">
              <h1 className="pt-0 pt-sm-0 pt-md-5">{props.PageTitle}</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
