import React from "react";
import DarkMode from "../../Component/Layout/DarkMode";
import Footer from "../../Component/Layout/Footer";
import Header from "../../Component/Layout/Header";
import { Row, Col, Container } from "react-bootstrap";
import PageBanner from "../../Component/Layout/PageBanner";

export default function Career() {
  return (
    <>
      <Header />
      <DarkMode />
      <PageBanner PageTitle="CAREER" />
      <section className="pagesection">
        <Container className="py-5">
          <Row>
            <Col>
              <p>
                Interested in joining the Hotfriescoin team? If you're
                passionate, dedicated, and a fan of all things CRYPTO & WEB3,
                we'd love to hear from you! Check out the positions available
                for more information. Nothing there that suits your talents?
                Check back later. We'll have more openings in the future.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
