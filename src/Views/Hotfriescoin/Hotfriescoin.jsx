import React from "react";
import DarkMode from "../../Component/Layout/DarkMode";
import Footer from "../../Component/Layout/Footer";
import Header from "../../Component/Layout/Header";
import { Row, Col, Container } from "react-bootstrap";
import PageBanner from "../../Component/Layout/PageBanner";

export default function Hotfriescoin() {
  return (
    <>
      <Header />
      <DarkMode />
      <PageBanner PageTitle="Hotfriescoin"/>
      <section className="pagesection">
        <Container className="py-5">
          <Row>
            <Col>
              <h3 className="mb-4">HOTFRIESCOIN IS NEW ASSET CLASS.</h3>
              <p>
                We are introducing a new concept called Stable PROGRESSIVE Coin.
              </p>
              <p>
                As we seen with platform like safemoon and certain crypto
                exchanges that charges more than 10% fees when you buy or sell.
              </p>
              <p>
                Here we are creating a system that is fair, transparent, and
                will generate astronomical yields (profits) for its holder
              </p>
              <p>
                This new Concept will change the financial world as we know it.
              </p>
              <p>
                The idea of Stable Progressive Currencies is to create a
                currency that continuously increase in value and never decrease
                in value.
              </p>
              <p>HOTFRIESCOIN is just that currency.</p>
              <p>
                To make that possible we use an Elastic Infinite Supply protocol
                and fees-based system.
              </p>
              <p>
                Here not like every other cryptocurrency available in the market
                that an initial supply, at Hotfriescoin the initial supply is
                Zero
              </p>
              <p>
                At Hotfriescoin No coins are minted (created) out thin air.
                Coins are minted ( created), when they are bought with a
                stablecoin (BUSD) and coin are burnt (destroyed) when they sold
                for exchange of stablecoin (BUSD).
              </p>
              <p>
                Each time a mint or sell transaction occurred a 10% is applied
                and distributed to all HOTFRIESCOIN holders.
              </p>
              <p>
                Hotfriescoin can only be bought with stablecoin (BUSD) to
                guarantee price stability.
              </p>
              <p>
                This fundamental tokenomics conception allowed us to create the
                world’s first Stable Progressive Coin.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
