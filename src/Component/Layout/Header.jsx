import { React, useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import DarkMode from "./DarkMode";

export default function Header(props) {
  const [scroll, setScroll] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          // eslint-disable-next-line no-undef
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
          // eslint-disable-next-line no-undef
          getAccountBalance(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
      console.log(defaultAccount);
    }
  };
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    // eslint-disable-next-line no-undef
    getAccountBalance(newAccount.toString());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={scroll ? "header-black" : "header-transp"}
      >
        <Container>
          <Link to="/" className="navbar-brand">
            <Image src={logo} className="img-fluid" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#BuyNow">Buy Now</Nav.Link>
              <Nav.Link href="#Swap">Swap</Nav.Link>
              <div id="google_translate_element"></div>
              <DarkMode/> 
              <Nav.Link href="#link" onClick={connectWalletHandler}>
                connect wallet :{defaultAccount}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
