import React from "react";
import DarkMode from "../../Component/Layout/DarkMode";
import Footer from "../../Component/Layout/Footer";
import Header from "../../Component/Layout/Header";
import { Row, Col, Container } from "react-bootstrap";
import PageBanner from "../../Component/Layout/PageBanner";

export default function About() {
  return (
    <>
      <Header />
      <DarkMode />
      <PageBanner PageTitle="About" />
      <section className="pagesection">
        <Container className="py-5">
          <Row>
            <Col>
              <h4 className="mb-4">GUIDE FOR HOTFRIESCOIN</h4>
              <h5>STEP 1:- CREATE A WALLET</h5>
              <p>
                Download the Trust Wallet and follow the steps to make your
                wallet. Always remember to keep the 12-word seed phrase a
                secret! Do not share it with anyone ever! We will never ask you
                for your seed phrase, ever!
              </p>
              <p>
                Download Link:-{" "}
                <a href="https://trustwallet.com/">https://trustwallet.com/</a>
              </p>
              <p>Trust wallet setup guide:-</p>
              <p>
                <a href="https://www.binance.com/en/blog/421499824684901157/How-to-Set-Up-and-UseTrust-Wallet-for-Binance-Smart-Chain">
                  https://www.binance.com/en/blog/421499824684901157/How-to-Set-Up-and-UseTrust-Wallet-for-Binance-Smart-Chain
                </a>
              </p>
              <h5>STEP 2:- PURCHASE BUSD ON BEP20</h5>
              <p>
                Click on the "Buy" button at the top of the app, and select
                Smart Chain (BNB). Continue through with the purchase. This step
                is not instant and may take a few minutes to complete your
                transaction. Just be patient! Make sure you purchase BUSD from
                the BEP20 network
              </p>
              <h5>STEP 3:- SWAP BUSD WITH HOTFRIES</h5>
              <p>
                Click on the swap button at the bottom. Ensure that BUSD is in
                the top slot and that Hotfriescoin is in the bottom slot. Just
                click swap!
              </p>
              <h5>STEP 4:- HODL</h5>
              <p>
                All that's left now is to HODL and see your balance grow from
                reflections!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
