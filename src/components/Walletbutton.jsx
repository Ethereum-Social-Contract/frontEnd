import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { YourComponent } from "./YourComponent";

    const { chains, provider } = configureChains(
        [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
        [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
    );
    
    const { connectors } = getDefaultWallets({
        appName: "Ethereum Social Contract",
        chains
    });
    
    const wagmiClient = createClient({
        autoConnect: true,
        connectors,
        provider
    });

  export default function Walletbutton() {
    return(
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <YourComponent />
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
  
