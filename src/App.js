
import { React, useState} from 'react'
//import Walletbutton from './components/Walletbutton'
import Navmenu from './components/Navmenu/index';
import ConnectMetamask from './components/ConnectMetamask';
import Walletbutton from './components/Walletbutton';
import logo from './image/logoRect.png';



export default function App() {
  return (
    <main style={{backgroundColor:'white'}}>
      <div style={{display:'flex', widht:'100vw', height:'6vh', alignContent:'center', justifyContent:'center', backgroundColor:'white'}}>
        <img src={logo} style={{width:'200px', height:'80px', display:'flex', backgroundColor:'white'}}/>
      </div>
      <div style={{display:'flex', marginTop:'20px', alignContent:'center', justifyContent:'flex-end', paddingBottom:'20px', marginRight:'60px', backgroundColor:'white'}}>
        <Walletbutton style={{display:'flex', paddingRight:'40px', marginRight:'60px', backgroundColor:'white'}}/>
      </div>
      <Navmenu />
    </main>
  );
}