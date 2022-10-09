import detectEthereumProvider from '@metamask/detect-provider';




export default function ConnectMetamask() {  
    return (
        
        <div>
            <button onClick={() => { detectaCartera()}}>Conectado?</button>
            <button onClick={() => { detectaCartera()}}>Conectado?</button>
        </div>
       );
  }

/*
const snapId = new URL('package.json', window.location.href).toString()

async function connect () {
  await ethereum.request({
    method: 'wallet_enable',
    params: [{
      wallet_plugin: { [snapId]: {} },
    }]
  })
}

async function sendHello () {
  try {
    const response = await ethereum.request({
      method: 'wallet_invokePlugin',
      params: [snapId, {
        method: 'hello'
      }]
    })
  } catch (err) {
    console.error(err)
    alert('Problem happened: ' + err.message || err)
  }
}

*/

async function detectaCartera(){
    // This resolves to the value of window.ethereum or null
    const provider = await detectEthereumProvider();

    // web3_clientVersion returns the installed MetaMask version as a string
    const isFlask = (
    await provider?.request({ method: 'web3_clientVersion' })
    )?.includes('flask');

    if (provider && isFlask) {

        /*
        wallet.registerRpcMessageHandler(async (originString, requestObject) => {
            switch (requestObject.method) {
              case 'hello':
                return wallet.request({
                  method: 'alert',
                  params: [`Hello, ${originString}!`],
                });
              default:
                throw new Error('Method not found.');
            }
          });
        */
        alert(provider);

    // Now you can use Snaps!
    } else {
        alert("nel");
    }
}

