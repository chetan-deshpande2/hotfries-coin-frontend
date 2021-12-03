import React from "react";
import DarkMode from "../../Component/Layout/DarkMode";
import Footer from "../../Component/Layout/Footer";
import Header from "../../Component/Layout/Header";
import { Row, Col, Container } from "react-bootstrap";
import PageBanner from "../../Component/Layout/PageBanner";

export default function ReferralProgram() {
  return (
    <>
      <Header />
      <DarkMode />
      <PageBanner PageTitle="REFERRAL PROGRAM" />
      <section className="pagesection">
        <Container className="py-5">
          <Row>
            <Col>
              <p>
                An on-chain referral program has been implemented to incentivize
                users to invite friends to join the Hotfriescoin community.
                Inviters can earn 0.2% of his/her friends' transaction forever.
              </p>
              <ol>
                <li>
                  Visit Hotfriescoin referral program page:{" "}
                  <a href="https://hotfriescoin.com/referrals">
                    https://hotfriescoin.com/referrals
                  </a>
                </li>
                <li>Unlock your wallet to get your unique referral link</li>
                <li>Share your referral link with your friends</li>
                <li>
                  Every time your friends run a transaction ( buy or sell) , you
                  will receive referral commissions automatically
                </li>
                <li>The current referral commission rate is 0.2%</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
