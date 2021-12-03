import React from "react";
import DarkMode from "../../Component/Layout/DarkMode";
import Footer from "../../Component/Layout/Footer";
import Header from "../../Component/Layout/Header";
import { Row, Col, Container } from "react-bootstrap";
import PageBanner from "../../Component/Layout/PageBanner";

export default function UserSupport() {
  return (
    <>
      <Header />
      <DarkMode />
      <PageBanner PageTitle="USER SUPPORT" />
      <section className="pagesection">
        <Container className="py-5">
          <Row>
            <Col>
              <h3 className="mb-4">
                There is NO customer support for Hotfriescoin
              </h3>
              <p>If you're experiencing issues,</p>
              <ol>
                <li>
                  First check the troubleshooting page for your error code
                </li>
                <li>
                  .If you can't find a solution, try reaching out in your local
                  Telegram group.
                </li>
              </ol>
              <p>Admins will NEVER send you a direct message.</p>
              <p>
                If anybody approaches you directly on e.g. Telegram pretending
                to represent customer support, please block them and report as
                spam. NEVER, under any situation, should you ever give someone
                your private key or recovery phrases. Immediately block and
                report anyone that asks for them.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
