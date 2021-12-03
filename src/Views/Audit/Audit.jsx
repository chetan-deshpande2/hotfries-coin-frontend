import React from "react";
import DarkMode from "../../Component/Layout/DarkMode";
import Footer from "../../Component/Layout/Footer";
import Header from "../../Component/Layout/Header";
import { Row, Col, Container } from "react-bootstrap";
import PageBanner from "../../Component/Layout/PageBanner";

export default function Audit() {
  return (
    <>
      <Header />
      <DarkMode />
      <PageBanner PageTitle="AUDIT" />
      <section className="pagesection">
        <Container className="py-5">
          <Row>
            <Col>
              <h3 className="mb-4">Is Hotfriescoin safe? Has Hotfriescoin been Audited?</h3>
              <p>See for yourself:</p>
              <ul>
                <li>
                  Hotfriescoin has not been audited yet, as we just now
                  launching.
                </li>
                <li>
                  Transparent:
                  <ul>
                    <li>
                      We’re built on open-source software: our site and all our
                      Smart Contracts are publicly visible for maximum
                      transparency.{" "}
                    </li>
                    <li>
                      Our contracts are verified on BscScan so you know that
                      what you see is what you get: 1 2 3 4 5
                    </li>
                  </ul>
                </li>
                <li>
                  Security best practices:
                  <ul>
                    <li>The admins use multisig for all contracts.</li>

                    <li>Our contracts’ time-lock gives you peace of mind.</li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
