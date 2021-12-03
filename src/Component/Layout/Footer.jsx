import React from "react";
import { Row, Col, Container, Nav } from "react-bootstrap";
import {
  ImTwitter,
  ImFacebook2,
  ImTelegram,
  ImInstagram,
} from "react-icons/im";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className="footer py-5">
      <Container>
        <Row>
          <Col sm={12} md={3} className="mb-3 mb-sm-3 mb-md-0">
            <Nav className="flex-column">
              <Nav.Link eventKey="disabled" disabled>
                about
              </Nav.Link>
              <Link className="nav-link" to="/about">
                about
              </Link>
              <Link className="nav-link" to="/hotfriescoin">
                hotfriescoin
              </Link>
              <Link className="nav-link" to="/tokenomic">
                tokenomic
              </Link>
              <Nav.Link target="_blank" href="#">
                progressive stablecoin
              </Nav.Link>
            </Nav>
          </Col>
          <Col sm={12} md={3} className="mb-3 mb-sm-3 mb-md-0">
            <Nav className="flex-column">
              <Nav.Link eventKey="disabled" disabled>
                resources
              </Nav.Link>
              <Link className="nav-link" to="/audit">
                audit
              </Link>
              <Link className="nav-link" to="/guides">
                guides
              </Link>
              <Link className="nav-link" to="/user-support">
                user support
              </Link>
              <Link className="nav-link" to="/referral-program">
                referral program
              </Link>
              <Link className="nav-link" to="/carrer">
                career
              </Link>
            </Nav>
          </Col>
          <Col sm={12} md={3} className="mb-3 mb-sm-3 mb-md-0">
            <Nav className="flex-column">
              <Nav.Link eventKey="disabled" disabled>
                developers
              </Nav.Link>
              <Nav.Link target="_blank" href="#">
                documentation
              </Nav.Link>
              <Nav.Link target="_blank" href="#">
                github
              </Nav.Link>
              <Link className="nav-link" to="/bug-bounty">
                bug bounty
              </Link>
            </Nav>
          </Col>
          <Col sm={12} md={3} className="mb-3 mb-sm-3 mb-md-0">
            <Nav className="justify-content-start">
              <Nav.Link eventKey="disabled" disabled>
                connect us
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-start">
              <Nav.Link target="_blank" href="https://twitter.com/hotfriescoin">
                <ImTwitter size="20" />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.facebook.com/hotfriescoin"
              >
                <ImFacebook2 size="20" />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.instagram.com/hotfriescoin"
              >
                <ImInstagram size="20" />
              </Nav.Link>
              <Nav.Link target="_blank" href="https://t.me/hotfriescoin">
                <ImTelegram size="20" />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://discord.com/invite/SatrGDwZ3g"
              >
                <BsDiscord size="20" />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://github.com/wilkont/Hotfriescoin"
              >
                <BsGithub size="20" />
              </Nav.Link>
            </Nav>
            <div className="mt-4">
              <div id="google_translate_element"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
