import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import DetailsCard from './Detailscard';
import Walletbutton from '../Walletbutton'
import "./Navmenu.css"
import TransactionsData from '../TransactionsData/index';



//add withdraw and private withdraw
export default function Navmenu() {
  const [value, setValue] = useState(0);
  const [isShown, setIsShown] = useState("send");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (onClickAction) => {
    // 👇️ toggle shown state
    setIsShown(onClickAction);
    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', paddingTop:"10%"}}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Deposit" onClick={() => { handleClick("send")}}/>
        <Tab label="My deposits" onClick={() => { handleClick("transactions")}}/>
        <Tab label="Report" onClick={() => { handleClick("report")}}/>
      </Tabs>
      {/* 👇️ show component on click */}
      {isShown==="send" && <Send />}
      {isShown==="withdraw" && <Withdraw />}
      {isShown==="transactions" && <Transactions />}
      {isShown==="report" && <Report />}
    </Box>
     );
}
function Send() {
  return (
    <form className="m-4 bg-white" style={{height:"100vh"}}>
    <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
      <main className="mt-4 p-4">
        <h1 className="text-xl font-semibold text-gray-700 text-center">
          Deposit
        </h1>
        <div className="">
          {/*<div className="my-3">
            <input
              type="text"
              name="addr"
              className="input input-bordered block w-full focus:ring focus:outline-none"
              placeholder="Recipient Address"
            />
          </div>*/}
          
          <div className="my-3">
            <select name="token"
              className="input input-bordered block w-full focus:ring focus:outline-none"
            >
              <option value="default">Select Token</option>
              <option value="eth">ETH</option>
              <option value="matic">MATIC</option>
            </select>
          </div>
          <div className="my-3">
            <select name="token"
              className="input input-bordered block w-full focus:ring focus:outline-none"
            >
              <option value="default">Select Amount</option>
              <option value="eth">1</option>
              <option value="matic">10</option>
              <option value="matic">100</option>
              <option value="matic">1000</option>
            </select>
          </div>
          
        </div>
      </main>
      <footer className="p-4">
        <Walletbutton />
      </footer>
    </div>
  </form>
  );
}

function Withdraw() {
    return (
    <form className="m-4 bg-white" style={{height:"100vh"}}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Withdraw funds
          </h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                name="addr"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Recipient Address"
              />
            </div>
            <div className="my-3">
              <input
                name="ether"
                type="text"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <Walletbutton />
        </footer>
      </div>
    </form>
    );
  }

  function Transactions() {
    return (
      <div style={{
        display: 'flex',
        width: '100vw',
        flexDirection: 'column',
        height: '100vh',
        paddingTop:'5vh',
        justifySelf:'center'
      }}>
        <TransactionsData />
      </div>
    );
  }

  function Report() {
    return (
      <form className="m-4 bg-white" style={{height:"100vh"}}>
        <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
          <main className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Report Transaction
            </h1>
            <div className="">
              <div className="my-3">
                <input
                  type="text"
                  name="addr"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Transaction ID"
                />
              </div>
            </div>
          </main>
          <footer className="p-4">
            <button
            type="submit"
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
            >
              Report
            </button>
          </footer>
        </div>
      </form>
      );
  }