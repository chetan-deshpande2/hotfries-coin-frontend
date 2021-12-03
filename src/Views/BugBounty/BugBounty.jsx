import React from "react";
import DarkMode from "../../Component/Layout/DarkMode";
import Footer from "../../Component/Layout/Footer";
import Header from "../../Component/Layout/Header";
import { Row, Col, Container } from "react-bootstrap";
import PageBanner from "../../Component/Layout/PageBanner";

export default function BugBounty() {
  return (
    <>
      <Header />
      <DarkMode />
      <PageBanner PageTitle="BUG BOUNTY" />
      <section className="pagesection">
        <Container className="py-5">
          <Row>
            <Col>
              <p>
                If you Find any bugs in our smart contracts, we encourage you to
                report it to info@hotfriescoin.com
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
