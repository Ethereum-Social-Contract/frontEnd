import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import DetailsCard from './Detailscard';
import Walletbutton from '../Walletbutton'
import "./Navmenu.css"
import TransactionsData from '../TransactionsData/index';


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
        <Tab label="Send" onClick={() => { handleClick("send")}}/>
        <Tab label="Withdraw" onClick={() => { handleClick("withdraw")}}/>
        <Tab label="My transactions" onClick={() => { handleClick("transactions")}}/>
      </Tabs>
      {/* 👇️ show component on click */}
      {isShown==="send" && <Send />}
      {isShown==="withdraw" && <Withdraw />}
      {isShown==="transactions" && <Transactions />}
    </Box>
     );
}
function Send() {
  return (
    <form className="m-4 bg-white" style={{height:"100vh"}}>
    <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
      <main className="mt-4 p-4">
        <h1 className="text-xl font-semibold text-gray-700 text-center">
          Send Funds
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
      <TransactionsData/>
    );
  }