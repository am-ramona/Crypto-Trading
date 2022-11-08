import { //ReactNode, 
         useEffect, 
         useState } from "react";
import Button from "@mui/material/Button";
import {
  // WalletSelectButton,
  WalletSelect,
  // web3FromSource,
} from "@talisman-connect/components";
import {
  // AuthError,
  // BaseDotsamaWallet,
  // BaseWalletError,
  // NotInstalledError,
  // PolkadotjsWallet,
  // SetupNotDoneError,
  TalismanWallet,
  WalletAccount,
  // Wallet,
  // getWalletBySource,
  // getWallets,
  // isWalletInstalled,
} from "@talisman-connect/wallets";
// import {
//   Modal,
//   useLocalStorage,
//   useOnClickOutside,
//   truncateMiddle,
//   DualRingLoader,
// } from "@talisman-connect/ui";
import "@talisman-connect/components/talisman-connect-components.esm.css";
import "@talisman-connect/ui/talisman-connect-ui.esm.css";

// import {
//   web3Accounts,
//   web3Enable,
//   web3FromAddress,
// } from "@polkadot/extension-dapp";

import { ApiPromise, WsProvider } from "@polkadot/api";

// import composableSignature from "./assets/images/composable.png";
// import composableFace from "./assets/images/face.png";
import "./connectWallet.css";

// import parse from "html-react-parser";
const parse = require("html-react-parser");

const talismanWallet = new TalismanWallet();
// const authError = new AuthError("tralala", talismanWallet);
// const baseDotsamaWallet = new BaseDotsamaWallet();
// const baseWalletError = new BaseWalletError("tralala", talismanWallet);
// const notInstalledError = new NotInstalledError("tralala", talismanWallet);
// const setupNotDoneError = new SetupNotDoneError("tralala", talismanWallet);
// const polkadotjsWallet = new PolkadotjsWallet();

// interface Accounts {
//   address: string;
//   meta: object;
//   type: string;
// }

interface connectWalletProps {
  connected: (arg: WalletAccount) => void;
}

function ConnectWallet({ connected }: connectWalletProps) {
  const [wallet, setWallet] = useState<WalletAccount>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  // const [modalMessage, setModalMessage] = useState<string>(
  //   "The modal body, this is the default UI"
  // );
  // const [address, setAddress] = useState<string>("");
  // const [allAccounts, setAllAccounts] = useState<Array<any>>([]);
  const [API, setAPI] = useState<ApiPromise>();
  // const [balance, setBalance] = useState<string>("");
  // const supportedWallets: Wallet[] = getWallets();
  // const subWallet: Wallet | undefined = getWalletBySource("subwallet-js");
  // console.log("raw subWallet", subWallet); // undefined
  // console.log("raw supportedWallets", supportedWallets);

  // const supportedWallets = getWallets();
  // const wallet = getWalletBySource(source);
  // console.log("isOpenModal", isOpenModal);
  // console.log("root wallet", wallet);
  // console.log('root api', API);

  useEffect(() => {
    // console.log('connectWallet api', API)
    // console.log("isOpenModal", isOpenModal);
    // console.log("connectWallet wallet", wallet);
    // console.log("supportedWallets", supportedWallets);
    // console.log("TalismanWallet: ", TalismanWallet);
    // console.log("talismanWallet", talismanWallet);
    // console.log("the type WalletAccount: ", WalletAccount);
    // console.log('AuthError', AuthError);
    // console.log("authError", authError);
    // console.log("authError.message", authError.message);
    // console.log("authError.wallet", authError.wallet);
    // console.log("authError.name", authError.name);
    // console.log("baseDotsamaWallet", baseDotsamaWallet);
    // console.log("baseWalletError", baseWalletError);
    // console.log("notInstalledError", notInstalledError);
    // console.log("polkadotjsWallet", polkadotjsWallet);
    // console.log('SetupNotDoneError', SetupNotDoneError);
    // console.log("getWalletBySource", getWalletBySource);
    // console.log("getWallets", getWallets);
    // console.log("isWalletInstalled", isWalletInstalled);
  }, [isOpenModal, wallet, API]);

  useEffect(() => {
    if (isOpenModal !== true) return;
    async function main() {
      // console.log("rpc.polkadot isOpenModal", isOpenModal);
      const wsProvider = new WsProvider("wss://rpc.polkadot.io");
      const api = new ApiPromise({ provider: wsProvider }); //.then(
      //  (api) => {
          await api.isReady;
          // console.log("main api", api);
          // console.log("api.genesisHash.toHex()", api.genesisHash.toHex());
          setAPI(api);
      //  }
      //); // await api.isReady;
      // console.log(api.genesisHash.toHex());

      /*--- OR ---*/
      // Create the instance
      // const api = new ApiPromise({ provider: wsProvider });

      // Wait until we are ready and connected
      // await api.isReady;

      // Do something
      // console.log(api.genesisHash.toHex());

      /*--- OR full example ---*/
      // Initialise the provider to connect to the local node
      //  const provider = new WsProvider('ws://127.0.0.1:9944');

      // Create the API and wait until ready
      // const api = await ApiPromise.create({ provider });

      // Retrieve the chain & node information information via rpc calls
      // const [chain, nodeName, nodeVersion] = await Promise.all([
      //   api.rpc.system.chain(),
      //   api.rpc.system.name(),
      //   api.rpc.system.version()
      // ]);

      // console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
    }
    main();
    // main().catch(console.error);
    // main().catch(console.error).finally(() => process.exit());
  }, [isOpenModal]);

  useEffect(() => {
      if (typeof wallet === 'undefined') return;
      // console.log('wallet changed', wallet);
      // if (wallet) 
      connected(wallet);
  }, [wallet, connected])


  // check getBalance function when the balance is needed
  useEffect(() => {
    // console.log('Wallet & API', wallet, API);
    if (typeof wallet === "undefined" || typeof API === "undefined") return;
    async function getBalance() {
      // console.log('Wallet & API true!')
      let response = await API?.query?.system.account(wallet?.address);
      const sender = wallet?.address;
      // Retrieve last block timestamp, account nonce & balances
      await Promise.all([
        API?.query.timestamp.now(),
        API?.query.system.account(wallet?.address),
      ]).then((result) => console.log("getBalance result", result));
    }

    getBalance();
    // console.log("getBalance:", getBalance());

    // console.log("wallet.address: ", wallet?.address);
  }, [wallet, API]);

  // useEffect(() => {
  //   setModalMessage(`Connected ! Wallet ID: ` + wallet?.address);
  // }, [wallet]);

  // const connectWallet = async () => {
  //   const allInjected = await web3Enable("my cool dapp");

  //   const allAccounts = await web3Accounts();

  //   // console.log("allAccounts", allAccounts);
  //   // console.log("typeof allAccounts", typeof allAccounts);
  //   setAllAccounts(allAccounts);

  //   const SENDER = allAccounts[0].address;
  //   setAddress(SENDER);
  // };

  const signMessage = async () => {
    const signRaw = talismanWallet._signer?.signRaw;

    if (signRaw && wallet?.address) {
      const { signature } = await signRaw({
        type: "payload",
        data: "Some data to sign...",
        address: wallet.address,
      });
    }

    // https://github.com/TalismanSociety/talisman-connect/tree/master/libs/wallets
    //      // NOTE: If `account` object is not handy, then use `getWalletBySource` to get the wallet then the signer.
    //   const signer = account.wallet.signer;

    //   // NOTE: This line will trigger the extension popup
    //   const { signature } = await signer.signRaw({
    //     type: 'payload',
    //     data: 'Some data to sign...',
    //     address: account.address,
    //   });
    // } catch (err) {
    //   // Handle error...
  };

  // const sendMoney = async () => {
  //   if (!address && !wallet?.address) return;

  //   let injector;
  //   let account;
  //   if (address) {
  //     injector = await web3FromAddress(address);
  //     account = address;
  //   } else if (wallet?.address) {
  //     await web3Enable("My Talisman Dapp");
  //     account = wallet.address;
  //     injector = await web3FromAddress(wallet.address);
  //   }
  //   if (!injector || !account) return;

  //   API?.tx.balances
  //     .transfer("5C5555yEXUcmEJ5kkcCMvdZjUo7NGJiQJMS7vZXEeoMhj3VQ", 1)
  //     .signAndSend(account, { signer: injector.signer }, (status) => {
  //       console.log({ status });
  //     });
  // };

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

            //   onClick={(wallets) => {
            //     console.log("wallets", wallets);
            //     // console.log("accounts", accounts);
            //     // accounts object is possibly undefined
            //     if (accounts) {
            //       setWallet(accounts[0]);
            //       setIsOpenModal(true);
            //     }
            //   }}
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
      {/* {wallet && (
                    <span className="walletDetails">
                        {truncateMiddle(wallet.address)}
                    </span>
                )} */}
    </>
  );
}

export default ConnectWallet;
