import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Hero from "../../assets/img/herobanerimage.svg";
import { BsMouse } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function HeroBanner(props) {
  return (
    <>
      <section className="hero-banner">
        <Container>
          <Row className="pb-4 d-flex justify-content-center align-items-center">
            <Col xs={12} sm={12} md={6} className="order-2 order-xs-2 order-sm-2 order-md-1 text-center text-xs-center text-sm-center text-md-start my-5 my-sm-5 my-md-0">
              <h1>hotfriescoins</h1>
              <p className="white fw-Regular fs-24">
                A stable Progressive coin
              </p>
              <p className="white fw-Regular fs-16 mb-4">
                We are making De-Fi simple and easy for everyone and everywhere
              </p>
              <Link to='/about' className="btn btn-danger btn-md">
                Read More
              </Link>
            </Col>
            <Col xs={12} sm={12} md={6} className="order-1 order-xs-1 order-sm-1 order-md-2 text-center">
              <Image src={Hero} className="vert-move img-fluid" />
            </Col>
          </Row>
          {/* <Row className="d-flex justify-content-center align-items-center">
            <Col className="text-end">
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                />
              </Form>
            </Col>
          </Row> */}
        </Container>
            <div className="mouse-icon">
              <BsMouse className="white" size="30"/>
            </div>
      </section>
    </>
  );
}
