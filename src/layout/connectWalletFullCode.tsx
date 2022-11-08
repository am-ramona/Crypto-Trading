import { useEffect, useState } from "react";
import {
    WalletSelectButton,
    WalletSelect,
    web3FromSource,
} from "@talisman-connect/components";
import {
    AuthError,
    BaseDotsamaWallet,
    BaseWalletError,
    NotInstalledError,
    PolkadotjsWallet,
    SetupNotDoneError,
    TalismanWallet,
    WalletAccount,
    Wallet,
    getWalletBySource,
    getWallets,
    isWalletInstalled,
} from "@talisman-connect/wallets";
import {
    Modal,
    useLocalStorage,
    useOnClickOutside,
    truncateMiddle,
    DualRingLoader,
} from "@talisman-connect/ui";
import "@talisman-connect/components/talisman-connect-components.esm.css";
import "@talisman-connect/ui/talisman-connect-ui.esm.css";

import {
    web3Accounts,
    web3Enable,
    web3FromAddress,
} from "@polkadot/extension-dapp";

import { ApiPromise, WsProvider } from "@polkadot/api";

// import composableSignature from "./assets/images/composable.png";
// import composableFace from "./assets/images/face.png";
import "./connectWallet.css";

const talismanWallet = new TalismanWallet();
const authError = new AuthError("tralala", talismanWallet);
const baseDotsamaWallet = new BaseDotsamaWallet();
const baseWalletError = new BaseWalletError("tralala", talismanWallet);
const notInstalledError = new NotInstalledError("tralala", talismanWallet);
const setupNotDoneError = new SetupNotDoneError("tralala", talismanWallet);
const polkadotjsWallet = new PolkadotjsWallet();

interface Accounts {
    address: string;
    meta: object;
    type: string;
}

function ConnectWallet() {
    const [wallet, setWallet] = useState<WalletAccount>();
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>(
        "The modal body, this is the default UI"
    );
    const [address, setAddress] = useState<string>("");
    const [allAccounts, setAllAccounts] = useState<Array<any>>([]);
    const [API, setAPI] = useState<ApiPromise>();
    const [balance, setBalance] = useState<string>("");
    const supportedWallets: Wallet[] = getWallets();
    const subWallet: Wallet | undefined = getWalletBySource("subwallet-js");
    // console.log("raw subWallet", subWallet); // undefined
    // console.log("raw supportedWallets", supportedWallets);

    // const supportedWallets = getWallets();
    // const wallet = getWalletBySource(source);
    useEffect(() => {
        // console.log("isOpenModal", isOpenModal);
        // console.log("wallet", wallet);
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
    }, [isOpenModal]);

    useEffect(() => {
        async function main() {
            const wsProvider = new WsProvider("wss://rpc.polkadot.io");
            const api = await ApiPromise.create({ provider: wsProvider }).then(
                (api) => {
                    // console.log("api", api);
                    // console.log("api.genesisHash.toHex()", api.genesisHash.toHex());
                    setAPI(api);
                }
            ); // await api.isReady;
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
    }, []);

    useEffect(() => {
        if (!wallet || !API) return;
        async function getBalance() {
            let response = await API?.query?.system.account(wallet?.address);
            const sender = wallet?.address;
            // Retrieve last block timestamp, account nonce & balances
            await Promise.all([
                API?.query.timestamp.now(),
                API?.query.system.account(wallet?.address),
            ]).then((result) => console.log("result", result));
        }

        getBalance();
        // console.log("getBalance:", getBalance());

        // console.log("wallet.address: ", wallet?.address);
    }, [wallet, API]);

    useEffect(() => {
        setModalMessage(`Connected ! Wallet ID: ` + wallet?.address);
    }, [wallet]);

    const connectWallet = async () => {
        const allInjected = await web3Enable("my cool dapp");

        const allAccounts = await web3Accounts();

        // console.log("allAccounts", allAccounts);
        // console.log("typeof allAccounts", typeof allAccounts);
        setAllAccounts(allAccounts);

        const SENDER = allAccounts[0].address;
        setAddress(SENDER);
    };

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

    const sendMoney = async () => {
        if (!address && !wallet?.address) return;

        let injector;
        let account;
        if (address) {
            injector = await web3FromAddress(address);
            account = address;
        } else if (wallet?.address) {
            await web3Enable("My Talisman Dapp");
            account = wallet.address;
            injector = await web3FromAddress(wallet.address);
        }
        if (!injector || !account) return;

        API?.tx.balances
            .transfer("5C5555yEXUcmEJ5kkcCMvdZjUo7NGJiQJMS7vZXEeoMhj3VQ", 1)
            .signAndSend(account, { signer: injector.signer }, (status) => {
                console.log({ status });
            });
    };

    return (
        <div
            className="App"
            style={{
                // backgroundImage: `url(${composableFace}), url(${composableSignature})`,
                backgroundSize: "400px, 135px",
                backgroundPosition: "75% center, 96% 97%",
                backgroundRepeat: "no-repeat",
            }}
        >
            <section className="App-content">
                <>
                    {supportedWallets.map((wallet: Wallet) => {
                        return (
                            <button
                                key={wallet.extensionName}
                                onClick={async () => {
                                    try {
                                        await wallet.enable("my cool dapp");
                                        const unsubscribe = await wallet.subscribeAccounts(
                                            (accounts) => {
                                                // console.log("supportedWallets accounts", accounts);
                                                // Save accounts...
                                                // Also save the selected wallet name as well...
                                            }
                                        );
                                    } catch (err) {
                                        // Handle error. Refer to `libs/wallets/src/lib/errors`
                                    }
                                }}
                            >
                                Connect to {wallet.title}
                            </button>
                        );
                    })}
                </>
                <span className="tags">A WalletSelectButton tag</span>
                <WalletSelectButton
                    className="getWalletID"
                    dappName="My Talisman Dapp"
                    wallet={talismanWallet}
                    onClick={(accounts) => {
                        // console.log("accounts", accounts);
                        // accounts object is possibly undefined
                        if (accounts) {
                            setWallet(accounts[0]);
                            setIsOpenModal(true);
                        }
                    }}
                >
                    <img
                        width={32}
                        height={32}
                        src={talismanWallet.logo.src}
                        alt={talismanWallet.logo.alt}
                    />
                    {talismanWallet.title} Connect
                </WalletSelectButton>
                {wallet && (
                    <span className="walletDetails">
                        {truncateMiddle(wallet.address)}
                    </span>
                )}

                <span className="tags">A simple button</span>
                <button className="test" onClick={connectWallet}>
                    Connect to{" "}
                    <img
                        width={32}
                        height={32}
                        src={polkadotjsWallet.logo.src}
                        alt={polkadotjsWallet.logo.alt}
                    />{" "}
                    based browser extensions installed
                </button>
                {allAccounts && (
                    <span className="walletDetails allAccount">
                        {allAccounts.map((account) => {
                            return account.meta.source + " : " + account.address + "\n";
                        })}
                    </span>
                )}

                <span className="tags">A button with enable functionality</span>
                <button
                    key={talismanWallet.extensionName}
                    onClick={async () => {
                        try {
                            await talismanWallet.enable("My Talisman Dapp");
                            const unsubscribe = await talismanWallet.subscribeAccounts(
                                (accounts) => {
                                    // Talisman Wallet accounts
                                    // Save accounts...
                                    // Also save the selected wallet name as well...
                                    // console.log("accounts", accounts);
                                    // accounts object is possibly undefined
                                    if (accounts) {
                                        setWallet(accounts[0]);
                                        setIsOpenModal(true);
                                    }
                                }
                            );
                        } catch (err) {
                            // Handle error. Refer to `libs/wallets/src/lib/errors`
                        }
                    }}
                >
                    <img
                        width={32}
                        height={32}
                        src={talismanWallet.logo.src}
                        alt={talismanWallet.logo.alt}
                    />
                    {talismanWallet.title} Connect
                </button>
                {wallet && (
                    <span className="walletDetails">
                        {truncateMiddle(wallet.address)}
                    </span>
                )}

                <span className="tags">A WalletSelect tag</span>
                <WalletSelect
                    // [Required] The dapp name
                    dappName="My First Dapp"
                    // Use if the dapp is controlling the modal toggle.
                    open={false}
                    // The component that opens the WalletSelect Modal
                    triggerComponent={
                        <button
                            //   // `onClick` is optional here
                            onClick={(wallets) => {
                                // console.log("wallets", wallets);
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
                            Connect to
                            <img
                                width={32}
                                height={32}
                                src={talismanWallet.logo.src}
                                alt={talismanWallet.logo.alt}
                            />
                            <img
                                width={32}
                                height={32}
                                src={polkadotjsWallet.logo.src}
                                alt={polkadotjsWallet.logo.alt}
                            />
                        </button>
                    }
                    // Override the default header
                    // header={}

                    // Override the default footer
                    // footer={}

                    // If `showAccountsList={true}`, then account selection modal will show up after selecting the a wallet. Default is `false`.
                    showAccountsList={true}
                    // Callback when the WalletSelect Modal is opened
                    onWalletConnectOpen={(wallets) => { }}
                    // Callback when the WalletSelect Modal is closed
                    onWalletConnectClose={() => { }}
                    // Callback when a wallet is selected on the WalletSelect Modal
                    onWalletSelected={(wallet) => { }}
                    // Callback when the subscribed accounts for a selected wallet are updated
                    onUpdatedAccounts={(accounts) => { }}
                    // Callback when an account is selected on the WalletSelect Account Modal. Only relevant when `showAccountsList=true`
                    onAccountSelected={(account) => {
                        if (account) {
                            setWallet(account);
                            setIsOpenModal(true);
                        }
                        // console.log("selected account", account);
                    }}
                    // Callback when an error occurs. Also clears the error on Modal actions:
                    // `onWalletConnectOpen`, `onWalletSelected`, `onAccountSelected` and `onWalletConnectClose`,
                    onError={(error) => { }}
                />
                {wallet && (
                    <span className="walletDetails">
                        {truncateMiddle(wallet.address)}
                    </span>
                )}

                <span
                    className="tags modal cursor-pointer"
                    onClick={() => setIsOpenModal(true)}
                >
                    A Modal tag, click to see !
                </span>
                <Modal
                    className="light-mode"
                    // The Modal title
                    title="UI Modal"
                    // The Modal toggle
                    isOpen={isOpenModal}
                    // The id where the Modal is appended. By default, it's appended to document.body.
                    appId=""
                    // Callback on Modal close
                    // handleClose={() => { window.alert('Modal closed!') }}
                    handleClose={() => {
                        setIsOpenModal(false);
                        setModalMessage("The modal body, this is the default UI");
                    }}
                    // [Optional] Callback on Modal back button click. Used with a multi modal setup.
                    // handleBack={() => { window.alert('Modal back!') }}
                    handleBack={() => {
                        setIsOpenModal(false);
                        setModalMessage("The modal body, this is the default UI");
                    }}
                >
                    <div>{modalMessage}</div>
                </Modal>
            </section>

            <div className="WalletActions">
                <button className="action" onClick={() => signMessage()}>
                    Sign
                </button>
                <button className="action" onClick={() => sendMoney()}>
                    Send Money
                </button>
            </div>
            <code>Link to Polkadotjs Quick Hints</code>
        </div>
    );
}

export default ConnectWallet;
