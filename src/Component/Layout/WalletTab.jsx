import { React, useState, useEffect } from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import DropdownNav from "./DropdownNav";
import { RiArrowUpDownFill } from "react-icons/ri";
import { ethers } from "ethers";
import Web3 from "web3";
import HFCToken from "../../Views/Home/abis/HFCToken.json";

export default function WalletTab(props) {
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [refresh, setrefresh] = useState(0);

  const [HFCContractInstance, setHFCContractInstance] = useState({});
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);

  //   const HFCTokenContract = new ethers.Contract(
  //     data.get("0xeECD604C8e9323049B600C2886F6df014df4bd6D"),
  //     HFCToken,
  //     provider
  //   );
  //   const tokenName = await HFCToken.name();
  //   console.log(HFCTokenContract);
  //   console.log(provider);
  // };
  const loadBlockchainData = async () => {
    setLoading(true);
    if (typeof window.ethereum == "undefined") {
      return;
    }
    const web3 = new Web3(window.ethereum);

    let url = window.location.href;
    console.log(url);

    const accounts = await web3.eth.getAccounts();

    if (accounts.length == 0) {
      return;
    }
    setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();

    if (networkId == 97) {
      const HFCTokenContract = new web3.eth.Contract(
        HFCToken,
        "0xAAa71B5648BE9a37227262BC764dcE3f6A78d8A7"
      );
      console.log(HFCTokenContract);
      setHFCContractInstance(HFCTokenContract);
      // let supplyOfToken = await HFCTokenContract.methods.totalSupply().call();
      // console.log(supplyOfToken);
      // const supplyOfToken1 = await web3.utils.fromWei(supplyOfToken, "ether");
      // console.log(supplyOfToken1);
    }
  };

  const buyToken = async () => {
    const web3 = new Web3(window.ethereum);
    const a = 100000000000000000000;
    const ref = "0x0000000000000000000000000000000000000000";

    const amountofethinWei = await web3.utils.toWei(a.toString());
    console.log(amountofethinWei);
    await HFCContractInstance.methods
      .buy(amountofethinWei, ref)
      .send({
        from: account
      })
      .once("recepient", (recepient) => {
        console.log("success");
      })
      .on("error", () => {
        console.log("error");
      });
  };
  const sellToken = async () => {
    const web3 = new Web3(window.ethereum);
    const a = 10;
    const amountofethinWei = await web3.utils.toWei(a.toString());
    console.log(amountofethinWei);
    await HFCContractInstance.methods
      .sell(amountofethinWei)
      .send({
        from: account,
        value: amountofethinWei,
      })
      .once("recepient", (recepient) => {
        console.log("success");
      })
      .on("error", () => {
        console.log("error");
      });
  };

  useEffect(() => {
    loadBlockchainData();

    if (refresh == 1) {
      loadBlockchainData();
      if (loading == false) {
      }
    }
  }, [refresh]);

  return (
    <div className="wallet-tab">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-0"
      >
        <Tab eventKey="CoinBuy" title="Buy" className="text-center">
          <DropdownNav InputLabel="from" />
          <RiArrowUpDownFill size="30" className="dark-red" />
          <DropdownNav InputLabel="To" />
          <Button variant="danger" onClick={() => buyToken()}>
            Buy1
          </Button>
        </Tab>
        <Tab eventKey="CoinSell" title="Sell" className="text-center">
          <DropdownNav InputLabel="from" />
          <RiArrowUpDownFill size="30" className="dark-red" />
          <DropdownNav InputLabel="To" />
          <Button variant="danger" onClick={() => sellToken()}>
            Sell
          </Button>
        </Tab>
        <Tab
          eventKey="CoinSendReceive"
          title="Send Receive"
          className="text-center"
        >
          <DropdownNav InputLabel="from" />
          <RiArrowUpDownFill size="30" className="dark-red" />
          <DropdownNav InputLabel="To" />
          <Button variant="danger">Buy</Button>
        </Tab>
      </Tabs>
    </div>
  );
}
