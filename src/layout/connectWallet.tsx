import { useEffect, 
         useState } from "react";
import Button from "@mui/material/Button";
import {
  WalletSelect
} from "@talisman-connect/components";
import {
  TalismanWallet,
  WalletAccount
} from "@talisman-connect/wallets";
import "@talisman-connect/components/talisman-connect-components.esm.css";
import "@talisman-connect/ui/talisman-connect-ui.esm.css";
import { ApiPromise, WsProvider } from "@polkadot/api";
import "./connectWallet.css";

// import parse from "html-react-parser";
const parse = require("html-react-parser");

const talismanWallet = new TalismanWallet();

interface connectWalletProps {
  connected: (arg: WalletAccount) => void;
}

function ConnectWallet({ connected }: connectWalletProps) {
  const [wallet, setWallet] = useState<WalletAccount>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [API, setAPI] = useState<ApiPromise>();

  useEffect(() => {
    if (isOpenModal !== true) return;
    async function main() {
      const wsProvider = new WsProvider("wss://rpc.polkadot.io");
      const api = new ApiPromise({ provider: wsProvider });
          await api.isReady;
          setAPI(api);
    }
    main();
  }, [isOpenModal]);

  useEffect(() => {
      if (typeof wallet === 'undefined') return;
      connected(wallet);
  }, [wallet, connected])


  // check getBalance function when the balance is needed
  useEffect(() => {
    if (typeof wallet === "undefined" || typeof API === "undefined") return;
    async function getBalance() {
      let response = await API?.query?.system.account(wallet?.address);
      const sender = wallet?.address;
      // Retrieve last block timestamp, account nonce & balances
      await Promise.all([
        API?.query.timestamp.now(),
        API?.query.system.account(wallet?.address),
      ]).then((result) => console.log("getBalance result", result));
    }

    getBalance();
  }, [wallet, API]);

  const signMessage = async () => {
    const signRaw = talismanWallet._signer?.signRaw;

    if (signRaw && wallet?.address) {
      const { signature } = await signRaw({
        type: "payload",
        data: "Some data to sign...",
        address: wallet.address,
      });
    }

  };

  return (
    <>
      <WalletSelect
        // [Required] The dapp name
        dappName="My First Dapp"
        // className="dark-mode"
        // Use if the dapp is controlling the modal toggle.
        open={false}
        // The component that opens the WalletSelect Modal
        triggerComponent={
          <Button
            variant="outlined"
            sx={{
              my: 2,
              display: "block",
              color: "#ff31b9ff",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#951369",
              textDecoration: "none",
              textTransform: "capitalize",
              "&:hover": {
                borderColor: "#ff31b9ff",
              },
            }}
            //   // `onClick` is optional here
            onClick={(wallets) => {
              setIsOpenModal(true);
              console.log("wallets", wallets);
              // Do stuff with the supported wallets
            }}
          >
            Connect Wallet
          </Button>
        }
        // Override the default header
        header={parse(
          "<span className='logo'>LOGO</span> <br /><br /> Connect Wallet to start using the Escher"
        )}
        // Override the default footer
        footer={"By connecting wallet, you agree to our Terms"}
        // If `showAccountsList={true}`, then account selection modal will show up after selecting the a wallet. Default is `false`.
        showAccountsList={true}
        // Callback when the WalletSelect Modal is opened
        onWalletConnectOpen={(wallets) => {
        //   alert("wallet opened");
        }}
        // Callback when the WalletSelect Modal is closed
        onWalletConnectClose={() => {
        //   alert("wallet closed");
        }}
        // Callback when a wallet is selected on the WalletSelect Modal
        onWalletSelected={(wallet) => {
          console.log("wallet selected", wallet);
          // setWallet(wallet);
        //   connected('Micheal')
        }}
        // Callback when the subscribed accounts for a selected wallet are updated
        onUpdatedAccounts={(accounts) => {}}
        // Callback when an account is selected on the WalletSelect Account Modal. Only relevant when `showAccountsList=true`
        onAccountSelected={(account) => {
          // setWallet(account);
          alert("account selected");
          if (account) {
            setWallet(account);
            // setIsOpenModal(true);
            // connected(account)
            console.log("selected account", account);
          }

        }}
        // Callback when an error occurs. Also clears the error on Modal actions:
        // `onWalletConnectOpen`, `onWalletSelected`, `onAccountSelected` and `onWalletConnectClose`,
        onError={(error) => {}}
      />
    </>
  );
}

export default ConnectWallet;
