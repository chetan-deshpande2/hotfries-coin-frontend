import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import HeroBanner from "../../Component/Layout/HeroBanner";
import HotFries1 from "../../assets/img/coin-lock.svg";
import CoinDivider from "../../assets/img/divider-coin-lite.svg";
// import CoinDivider from "../../assets/img/divider-coin.svg";
import CommingSoon from "../../assets/img/comming-soon.svg";
import Progress from "../../assets/img/progress.png";
import Hicons2 from "../../assets/img/icon-12.svg";
import Hicons3 from "../../assets/img/icon-13.svg";
import Hicons4 from "../../assets/img/icon-14.svg";
import Counter from "./Counter";
import HomeCard from "./HomeCard";
import WalletTab from "../../Component/Layout/WalletTab";
import { ethers } from "ethers";
import HFCToken from "./abis/HFCToken.json";

export default function Home(props) {
  
  return (
    <>
      <HeroBanner />
      <section className="hproses-sect pt-5">
        <Container>
          <Row className="d-flex justify-content-center pb-5">
            <Col xs={12} className="text-center">
              <h3 className="white-mode fs-24 fw-semobold mb-5">
                No More Staking, Farming, No More Liquidity Pools to Earn
              </h3>
              <Button variant="outline-danger">buy</Button>
              <hr className="hpro-divider" />
              <Button variant="outline-success">hold</Button>
              <hr className="hpro-divider" />
              <Button variant="outline-primary">sell</Button>
            </Col>
            <Col xs={12} className="text-center mt-5">
              <h2 className="white-mode fs-22 fw-bold text-uppecase mb-3">
                HOTFRIESCOIN
              </h2>
              <p className="white-mode fs-16 fw-regular text-uppecase mb-0">
                And Earn upto 584%
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="hwallete-sect pt-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={5} className="">
              <div>
                <WalletTab />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="hcounter-sect">
        <Container>
          <Row className="d-flex justify-content-center">
            <Counter Count="0.567" Title="Price" />
            <Counter Count="456" Title="Holders" />
            <Counter Count="3445" Title="Earning" />
            <Counter Count="$2.034m" Title="MarketCap" />
          </Row>
        </Container>
      </section>

      <section className="hlockcoin-sect py-5">
        <section className="hbgmanager py-4">
          <Container>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={6}
                className="text-center text-sm-center text-md-start"
              >
                <Image src={HotFries1} className="vert-move img-fluid" alt="" />
              </Col>
              <Col xs={12} sm={12} md={6} className="mt-5 mt-sm-5 mt-md-0">
                <h4 className="white-mode fs-22 fw-medium mb-0">
                  HotFriesCoin is the stable coin Killer
                </h4>
                <Image src={CoinDivider} className="img-fluid" />
                <p className="white-mode fs-14 fw-regular lh-24 mb-5">
                  We are Introducing new Concept that will change the financial
                  industry We think Stable Coin is a very important innovation
                  to facilitate the adoption of cryptocurrency .
                </p>
                <h4 className="white-mode fs-22 fw-medium mb-3">
                  Now we are Bringing : Stable Progressive
                </h4>
                <p className="white-mode fs-14 fw-regular lh-24 mb-4">
                  The Concept aims at building a currency based strictly on
                  stable coin and paying fees each time a coin is bought and
                  sold, the fees paid is then returned to all holders which will
                  make the value of the coin to continuously increase. No Matter
                  of a buy or sold transaction THAT IS POWERFUL INNOVATION. The
                  First coin that only increases in value and never decreases.
                </p>
                <p className="white-mode fs-14 fw-regular lh-24 mb-0">
                  By Holding Hot Fries coin you will earn large interest (584%
                  and up) .
                </p>
                <p className="white-mode fs-14 fw-regular lh-24">
                  Because 10% fees that will compound each transaction.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      <section className="hproses-sect py-5">
        <Container>
          <Row className="hbgimge-manager d-flex justify-content-center my-4 py-5 px-0 px-sm-0 px-md-5 m-0">
            <Col xs={12} className="text-center">
              <h3 className="white fs-24 fw-semobold mb-5">
                No More Staking, Farming, No More Liquidity Pools to Earn
              </h3>
              <Button variant="outline-danger">buy</Button>
              <hr className="hpro-divider" />
              <Button variant="outline-success">hold</Button>
              <hr className="hpro-divider" />
              <Button variant="outline-primary">sell</Button>
            </Col>
            <Col xs={12} className="text-center mt-5">
              <h2 className="white fs-22 fw-bold text-uppecase mb-3">
                HOTFRIESCOIN
              </h2>
              <p className="white fs-16 fw-regular text-uppecase mb-0">
                And Earn upto 584%
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="hcard-sect pb-0 pb-sm-0 pb-md-5">
        <Container>
          <Row>
            <HomeCard
              CardClass="me-3"
              CardImage={Hicons3}
              CardTitle="Reflection"
              CardText="8% will reflect to all holders for passive income 2% will
              allocated to HotFriesCoin treasury"
            />
            <HomeCard
              CardClass="me-3"
              CardImage={Hicons2}
              CardTitle="Fair Supply"
              CardText="Our Initial supply is zero coins minted when they are
              bought, coins are burned when they are sold"
            />
            <HomeCard
              CardClass="me-3"
              CardImage={Hicons4}
              CardTitle="Cheesy Topper Protocol"
              CardText="A percent of revenue generated on all product build on HFC
              will be shared back to all holders"
            />
          </Row>
        </Container>
      </section>

      <section className="hcommingsoon-sec pt-0 pt-sm-0 pt-md-5 mt-0">
        <Container>
          <Row>
            <Col>
              <div className="commingsoonbox py-4 py-sm-4 py-md-5 px-0 px-sm-0 px-md-5">
                <Row className="d-flex align-items-center">
                  <Col
                    xs={12}
                    sm={12}
                    md={4}
                    className="order-2 order-xs-2 order-sm-2 order-md-1 text-center"
                  >
                    <div className="text-center text-sm-center text-md-start px-3 px-sm-3 px-md-0">
                      <Image src={Progress} className="vert-move img-fluid" />
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={8}
                    className="order-1 order-xs-1 order-sm-1 order-md-2 text-center text-xs-center text-sm-center text-md-start mt-5 mt-sm-5 mt-md-0"
                  >
                    <h2 className="white-mode mb-4 text-capitalize">
                      a new asset class built on stablecoin.
                    </h2>
                    <h3 className="white-mode mb-4 text-capitalize">
                      stable progressive currency
                    </h3>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="hcard-sect py-5">
        <Container>
          <Row>
            <HomeCard
              CardClass=""
              CardTitle="Continuously Increase In Value"
              CardText="The only Currency that only increase Value and Never
              decreases, Because of our Innovative Tokenomics 10% fees
              patton All Buy and sell Transactions"
            />
            <HomeCard
              CardClass=""
              CardTitle="100% backed and non-custodial"
              CardText="Like on all Decentralize Exchange , HotFriesCoin User keep
              possession of of Their Coin"
            />
            <HomeCard
              CardClass=""
              CardTitle="Fair and Transparent"
              CardText="No initial supply, Coth one minted only when they are bought
              and coin are burnt when they are sold."
            />
          </Row>
        </Container>
      </section>

      <section className="hcommingsoon-sec pt-0 pt-sm-0 pt-md-5">
        <Container>
          <Row>
            <Col>
              <div className="commingsoonbox py-4 py-sm-4 py-md-5 px-0 px-sm-0 px-md-5">
                <Row className="my-4">
                  <Col
                    xs={12}
                    sm={12}
                    md={8}
                    className="order-2 order-xs-2 order-sm-2 order-md-1 text-center text-xs-center text-sm-center text-md-start mt-5 mt-sm-5 mt-md-0"
                  >
                    <h2 className="white-mode mb-4">Coming Soon</h2>
                    <Button variant="outline-danger white-mode ms-4 ms-xs-4 ms-md-0 me-4 me-xs-4 me-sm-3 me-md-3 mb-3">
                      Lottery
                    </Button>
                    <Button variant="outline-danger white-mode me-0 me-xs-0 me-sm-3 me-md-3 mb-3">
                      Prediction
                    </Button>
                    <Button variant="outline-danger white-mode me-0 me-xs-0 me-sm-3 me-md-3 mb-3">
                      Derivative market
                    </Button>
                    <Button variant="outline-danger white-mode me-0 me-xs-0 me-sm-3 me-md-3 mb-3">
                      Collateral Free Landing
                    </Button>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={4}
                    className="order-1 order-xs-1 order-sm-1 order-md-2 text-center"
                  >
                    <div className="comsonimgbox text-center text-sm-center text-md-end px-3 px-sm-3 px-md-0">
                      <Image
                        src={CommingSoon}
                        className="vert-move img-fluid"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
