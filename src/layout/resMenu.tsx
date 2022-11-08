import React, { useEffect, useState } from "react";
import {
  // Link,
  // NavLink,
  useLocation,
  // useParams,
  useNavigate,
  // Outlet,
} from "react-router-dom";
import ConnectWallet from "./connectWallet";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  // Tooltip,
  MenuItem,
  ListItemIcon,
  Divider,
  // TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  // FormControl,
  // InputLabel,
  // OutlinedInput,
  CircularProgress,
  CircularProgressProps,
  Grid,
  SvgIcon,
  Tooltip
} from "@mui/material";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  // Tooltip,
  // AppBar,
  // Toolbar,
  // CssBaseline,
  // Typography,
  // makeStyles,
  withStyles,
  // useTheme,
  // useMediaQuery,
} from "@material-ui/core";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import {NotificationContainer, NotificationManager} from 'react-notifications';
// import { notification, NotificationContainer } from "react-notification-popup";
import {
  ReactNotifications,
  Store,
  // iNotification,
} from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
// import 'react-notifications/lib/notifications.css';
// import Grid from "@material-ui/core/Grid";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
import MenuIcon from "@mui/icons-material/Menu";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from "@mui/icons-material/Adb";
// import { AdbIcon } from '@mui/icons-material';
import { useAppSelector, useAppDispatch } from "../app/hooks";
// import { increment, decrement } from "../features/counter/counterSlice";
import {
  incrementByAmount,
  // selectNotifications,
} from "../features/notifications/notificationsSlice";

// import {
//   WalletSelectButton,
//   WalletSelect,
//   web3FromSource,
// } from "@talisman-connect/components";
import {
  // AuthError,
  // BaseDotsamaWallet,
  // BaseWalletError,
  // NotInstalledError,
  // PolkadotjsWallet,
  // SetupNotDoneError,
  // TalismanWallet,
  WalletAccount,
  // Wallet,
  // getWalletBySource,
  // getWallets,
  // isWalletInstalled,
} from "@talisman-connect/wallets";
import {
  // Modal,
  // useLocalStorage,
  // useOnClickOutside,
  // truncateMiddle,
  // DualRingLoader,
} from "@talisman-connect/ui";
import Deposit from "../components/deposit";
import Withdraw from "../components/withdraw";

// import { ApiPromise, 
//         //  WsProvider 
//         } from "@polkadot/api";

// const useStyles = makeStyles((theme) => ({
// navlinks: {
//   marginLeft: theme.spacing(5),
//   display: "flex",
// },
// logo: {
//   flexGrow: "1",
//   cursor: "pointer",
// },
// link: {
//   textDecoration: "none",
//   color: "white",
//   fontSize: "20px",
//   marginLeft: theme.spacing(20),
//   "&:hover": {
//     color: "yellow",
//     borderBottom: "1px solid white",
//   },
// },
// }));

const PinkTooltip = withStyles({
  tooltip: {
    color: "#ff31b9ff",
    // backgroundColor: '#bdbdbd'
  },
})(Tooltip);

const ButtonStyled = styled(Button)`
  &.MuiButton-outlinedInherit {
  }

  &.MuiButton-containedInherit {
    color: #170010;
    background-color: #ff31b9;
    border-color: #ff31b9;
  }
`;

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="#ff31b9ff"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

// const talismanWallet = new TalismanWallet();
// const authError = new AuthError("tralala", talismanWallet);
// const baseDotsamaWallet = new BaseDotsamaWallet();
// const baseWalletError = new BaseWalletError("tralala", talismanWallet);
// const notInstalledError = new NotInstalledError("tralala", talismanWallet);
// const setupNotDoneError = new SetupNotDoneError("tralala", talismanWallet);
// const polkadotjsWallet = new PolkadotjsWallet();

const pages = ["Perpetuals", "Portfolio", "Dashboard", "Docs", "..."];
const rightPages = ["Deposit/Withdraw"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const EscherMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  // const classes = useStyles();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  let location = useLocation();
  // const match = useParams();
  const navigate = useNavigate();

  const [wallet, setWallet] = useState<WalletAccount>();
  // const [walletAccountName, setWalletAccountName] = useLocalStorage("");
  // const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  // const [modalMessage, setModalMessage] = useState<string>(
  //   "The modal body, this is the default UI"
  // );
  // const [address, setAddress] = useState<string>("");
  // const [API, setAPI] = useState<ApiPromise>();
  // const [balance, setBalance] = useState<string>("");
  // const supportedWallets: Wallet[] = getWallets();
  const [connected, setConnected] = useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [type, setType] = React.useState<string>("Deposit");
  const [progress, setProgress] = React.useState(10);
  const [onLoad, setOnLoad] = React.useState<boolean>(false);
  const [confirmDeposit, setConfirmDeposit] = React.useState<boolean>(true);
  const [amount, setAmount] = React.useState<number>(0);
  const [withdrawAmount, setWithdrawAmount] = React.useState<number>(0);
  // const [notifications, setNotifications] = useState<Array<iNotification>>([{
  //   message: "No Notification Found",
  //   type: "success",
  //   insert: "top",
  //   container: "top-right",
  //   animationIn: ["animate__animated", "animate__fadeIn"],
  //   animationOut: ["animate__animated", "animate__fadeOut"],
  //   dismiss: {
  //     duration: 5000,
  //     onScreen: true,
  //     pauseOnHover: true,
  //     showIcon: true
  //   }
  // }])

  const notifications = useAppSelector((state) => state.notifications);

  // function replacer(val: any) {
  //   // convert RegExp or function to string
  //   if (val && val.constructor === Function) {
  //     return val.toString();
  //   } else {
  //     return val; // return as is
  //   }
  // }

  // example replacer function
  // function parser(val: any) {
  //   if (val && typeof val == "string" && val.startsWith("function")) {
  //     return new Function("return " + val)();
  //   } else {
  //     return val; // return as is
  //   }
  // }

  const notificationsCloned = JSON.parse(JSON.stringify(notifications));
  // var notificationsCloned = JSON.parse(JSON.stringify(notifications, replacer), parser);
  // const [notifications, setNotifications] = useState<any>(notification)
  // console.log('notification', notification)
  // console.log("resMenu notifications", notifications);
  // console.log("resMenu notificationsCloned", notificationsCloned);
  // console.log("selectNotifications", selectNotifications);
  const dispatch = useAppDispatch();

  // console.log("Store", Store);

  // useEffect(() => {
  //   async function main() {
  //     const wsProvider = new WsProvider("wss://rpc.polkadot.io");
  //     const api = await ApiPromise.create({ provider: wsProvider }).then(
  //       (api) => {
  //         // console.log("api", api);
  //         // console.log("api.genesisHash.toHex()", api.genesisHash.toHex());
  //         setAPI(api);
  //       }
  //     ); // await api.isReady;
  //     // console.log(api.genesisHash.toHex());

  //     /*--- OR ---*/
  //     // Create the instance
  //     // const api = new ApiPromise({ provider: wsProvider });

  //     // Wait until we are ready and connected
  //     // await api.isReady;

  //     // Do something
  //     // console.log(api.genesisHash.toHex());

  //     /*--- OR full example ---*/
  //     // Initialise the provider to connect to the local node
  //     //  const provider = new WsProvider('ws://127.0.0.1:9944');

  //     // Create the API and wait until ready
  //     // const api = await ApiPromise.create({ provider });

  //     // Retrieve the chain & node information information via rpc calls
  //     // const [chain, nodeName, nodeVersion] = await Promise.all([
  //     //   api.rpc.system.chain(),
  //     //   api.rpc.system.name(),
  //     //   api.rpc.system.version()
  //     // ]);

  //     // console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
  //   }
  //   // main();
  //   // main().catch(console.error);

  //   // main().catch(console.error).finally(() => process.exit());
  // }, []);
  // console.log('match', match)
  // useEffect(() => {
  //   if (!wallet || !API) return;
  //   async function getBalance() {
  //     let response = await API?.query?.system.account(wallet?.address);
  //     const sender = wallet?.address;
  //     // Retrieve last block timestamp, account nonce & balances
  //     await Promise.all([
  //       API?.query.timestamp.now(),
  //       API?.query.system.account(wallet?.address),
  //     ]).then((result) => console.log("getBalance result", result));
  //   }

  //   // console.log("walletAccountName", walletAccountName);
  //   // console.log(
  //   //   'window.localStorage.getItem("accountName").replaceAll',
  //   //   window.localStorage.getItem("accountName")?.replaceAll('"', "")
  //   // );

  //   // getBalance();
  //   // console.log("getBalance:", getBalance());

  //   // console.log("wallet.address: ", wallet?.address);
  // }, [wallet, API]);

  // useEffect(() => {
  //   setModalMessage(`Connected ! Wallet ID: ` + wallet?.address);
  // }, [wallet]);

  // const signMessage = async () => {
  //   const signRaw = await talismanWallet._signer?.signRaw;

  //   if (signRaw && wallet?.address) {
  //     const { signature } = await signRaw({
  //       type: "payload",
  //       data: "Some data to sign...",
  //       address: wallet.address,
  //     });
  //   }
  // };

  // const sendMoney = async () => {
  //   // if (!address && !wallet?.address) return;
  //   // let injector;
  //   // let account;
  //   // if (address) {
  //   //   injector = await web3FromAddress(address);
  //   //   account = address;
  //   // } else if (wallet?.address) {
  //   //   await web3Enable('My Talisman Dapp');
  //   //   account  = wallet.address;
  //   //   injector = await web3FromAddress(wallet.address);
  //   // }
  //   // if (!injector || !account) return;
  //   // API?.tx.balances
  //   //   .transfer('5C5555yEXUcmEJ5kkcCMvdZjUo7NGJiQJMS7vZXEeoMhj3VQ', 1)
  //   //   .signAndSend(account, { signer: injector.signer }, (status) => { console.log({status}) });
  // };

  useEffect(() => {
    // console.log("Location", location.pathname);
    // console.log("connected", connected);
  }, [location, connected]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const connectWallet = (account: WalletAccount): void => {
    setConnected(true);
    setWallet(account);
    // console.log('final wallet', account )
    window.localStorage.setItem("accountName", JSON.stringify(account.name!));
    // setWalletAccountName(account.name!);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  // const handleChange = (event: SelectChangeEvent<typeof age>) => {
  //   // setAge(Number(event.target.value) || "");
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const addNotification = () => {
    // Store.addNotification(notificationsCloned[0])
    // notificationsCloned.map((notificationCloned: any) => {
    //    return Store.addNotification(notificationsCloned)
    // })
    // console.log("notificationsCloned", notificationsCloned);
    if (
      notificationsCloned.length === 1 &&
      Object.values(notificationsCloned[0]).indexOf("No notification found") >
      -1
    ) {
      Store.addNotification(notificationsCloned[0]);
      return;
    }
    let notificationsClonedShifted = notificationsCloned;
    // console.log("notificationsClonedShifted1", notificationsClonedShifted);
    // console.log(
    //   "exixt?",
    //   Object.values(notificationsClonedShifted[0]).indexOf(
    //     "No notification found"
    //   )
    // );
    if (
      Object.values(notificationsClonedShifted[0]).indexOf(
        "No notification found"
      ) > -1
    ) {
      notificationsClonedShifted = notificationsClonedShifted.slice(1);
    }
    // console.log("notificationsClonedShifted", notificationsClonedShifted);
    notificationsClonedShifted.map((notificationCloned: any, i: number) => {
      notificationCloned.content = notifications[i + 1].content;
      Store.addNotification(notificationCloned);
    });
    // return result
    // console.log(
    //   "final notificationsClonedShifted1",
    //   notificationsClonedShifted
    // );
  };

  // const createNotification = (type: any) => {
  //   return () => {
  //     switch (type) {
  //       case 'info':
  //         NotificationManager.info('Info message');
  //         break;
  //       case 'success':
  //         NotificationManager.success('Success message', 'Title here');
  //         break;
  //       case 'warning':
  //         NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
  //         break;
  //       case 'error':
  //         NotificationManager.error('Error message', 'Click me!', 5000, () => {
  //           alert('callback');
  //         });
  //         break;
  //     }
  //   };
  // }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // React.useEffect(() => {
  // if (progress === 0) { setOpen(false); }
  // }, [progress])

  function CustomContentRenderer(message: string) {
    // console.log('CustomContentRenderer notificationMessage', notificationMessage)
    return (
      <Grid className="rnc__notification-item rnc__notification-item--info"
        style={{ width: "100%" }}
      >
        {/* <div className="rnc__notification-content"> */}
        {/* <div className="rn"></div> */}
        <Box className="rnc__notification-content">
          <Box
            className="rnc__notification-close-mark"
            sx={{ right: 5, top: 2 }}
          ></Box>
          <Typography
            className="rnc__notification-message"
            sx={{ fontSize: 13, color: "#ffffff" }}
          >
            {message}
          </Typography>
          <Box
            className="notification__custom-icon"
            style={{
              fontSize: 10,
              color: "#ffffff",
              position: "absolute",
              bottom: 5,
              right: 13,
            }}
          >
            <Typography
              sx={{ fontSize: 10, color: "#ffffff", display: "inline-block" }}
            >
              View transaction &nbsp;
            </Typography>
            {/* <OpenInNewIcon fontSizeSmall /> */}
            <SvgIcon
              fontSize="inherit"
              color="inherit"
              component={OpenInNewIcon}
              sx={{ verticalAlign: "middle" }}
              onClick={() => navigate(`/`)}
            />
          </Box>
        </Box>
        {/* <Typography
            className="notification-message"
            sx={{ fontSize: "13px", color: "#cccccc" }}
          >
            Opened {direction} Position {perpetualsMarketValue.label}
          </Typography> */}
      </Grid>
    );
  }


  const displayNotification = (message: string) => {
    Store.addNotification({
      // title: "Wonderful!",
      message: "",
      type: "info",
      insert: "top",
      content: CustomContentRenderer(message),
      container: "top-right",
      // animationIn: ['animate__animated animate__fadeIn animate__slow'],
      animationOut: ['animated fadeOut'],
      dismiss: {
        duration: 5000,
        onScreen: false,
        pauseOnHover: true,
        showIcon: true,
        click: true,
      },
    });

    dispatch(
      incrementByAmount({
        // title: "Wonderful!",
        message: "",
        type: "info",
        insert: "top",
        content: CustomContentRenderer(message),
        container: "top-right",
        // animationIn: ["animated fadeIn"],
        animationOut: ["animated fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: false,
          pauseOnHover: true,
          showIcon: true,
          click: true,
        },
      })
    );
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    success?: string,
    reason?: string
  ) => {
    if (reason !== "backdropClick") {
      // setOpen(false);
    }

    if (success === "success") {

      // console.log('success confirmDeposit', confirmDeposit)
      // console.log('success type', type)
      setOnLoad(true);
      if (type === 'Withdraw') setTimeout(() => { setOpen(false); setOnLoad(false); displayNotification("Withdrew " + withdrawAmount + " USDC collateral."); }, 3000);
      if (!confirmDeposit && type === 'Deposit') setTimeout(() => { setOnLoad(false); setConfirmDeposit(true) }, 3000);
      else { //setConfirmDeposit(false); 
        if (type === 'Deposit') setTimeout(() => { setOnLoad(false); setOpen(false); displayNotification("Deposited " + amount + " USDC collateral.") }, 3000);
      }


      // setAnchorEl(anchorEl ? null : event.currentTarget as HTMLElement);
      // Store.addNotification({
      //   // title: "Wonderful!",
      //   message: '',
      //   type: "info",
      //   insert: "top",
      //   // content: CustomContentRenderer(direction, perpetualsMarketValue),
      //   content: CustomContentRenderer,
      //   container: "top-right",
      //   animationIn: ["animated fadeIn"],
      //   animationOut: ["animated fadeOut"],
      //   dismiss: {
      //     duration: 5000,
      //     onScreen: false,
      //     pauseOnHover: true,
      //     showIcon: true,
      //     click: true
      //   },
      // });
      // const newNotificationAdded = [...notifications];
      // newNotificationAdded.push({
      //   // title: "Wonderful!",
      //   message: '',
      //   type: "info",
      //   insert: "top",
      //   // content: CustomContentRenderer(direction, perpetualsMarketValue),
      //   content: CustomContentRenderer,
      //   container: "top-right",
      //   animationIn: ["animated fadeIn"],
      //   animationOut: ["animated fadeOut"],
      //   dismiss: {
      //     duration: 5000,
      //     onScreen: false,
      //     pauseOnHover: true,
      //     showIcon: true,
      //     click: true
      //   },
      // });
      // setNotifications(newNotificationAdded);
      // dispatch(
      //   incrementByAmount({
      //     // title: "Wonderful!",
      //     message: '',
      //     type: "info",
      //     insert: "top",
      //     // content: CustomContentRenderer(direction, perpetualsMarketValue),
      //     content: CustomContentRenderer,
      //     container: "top-right",
      //     animationIn: ["animated fadeIn"],
      //     animationOut: ["animated fadeOut"],
      //     dismiss: {
      //       duration: 5000,
      //       onScreen: false,
      //       pauseOnHover: true,
      //       showIcon: true,
      //       click: truesettradingAmount
      //     },
      //   })
      // );
    }
  };

  const settradingAmount = (amount: number): void => {
    // 👇️ take parameter passed from Child component
    // console.log('inside settradingAmount')
    setAmount(amount);
  };

  const updateWithdrawAmount = (amount: number): void => {
    // 👇️ take parameter passed from Child component
    // console.log('inside setWithdrawAmount')
    setWithdrawAmount(amount);
  };

  // console.log('amount', amount)
  return (
    <>
      <AppBar
        id="AppMenu"
        color="inherit"
        position="static"
        sx={{ marginBottom: "15px" }}
      >
        <Container maxWidth="xl">
          {/* <ReactNotifications /> */}
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", lg: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", lg: "none" },
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: "#170010ff",
                    color: "#ff31b9ff",
                    border: "1px solid #ff31b9ff",
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                    {/* <Button variant="outlined"> <Link to={page}>{page}</Link></Button> */}
                  </MenuItem>
                ))}
                {/* <svg data-testid="NotificationsNoneIcon"></svg> */}

                {rightPages.map((rightPage) => (
                  <MenuItem key={rightPage} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{rightPage}</Typography>
                    {/* <Button variant="outlined"> <Link to={page}>{page}</Link></Button> */}
                  </MenuItem>
                ))}
                {window.localStorage.getItem("accountName") === null && (
                  <ConnectWallet connected={connectWallet} />
                )}
                {/* <ConnectWallet connected={connectWallet} /> */}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", lg: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
              <>
                {pages.map((page) => (
                  <Button
                    variant="outlined"
                    key={page}
                    sx={{
                      my: 2,
                      display: "block",
                      color: "#ff31b9ff",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor:
                        (location.pathname === "/" + page.toLowerCase() || location.pathname === "/") && page === 'Portfolio'
                          ? "#ff31b9ff"
                          : "#951369",
                      textDecoration: "none",
                      "&:hover": {
                        borderColor: "#ff31b9ff",
                      },
                    }}
                    onClick={() => navigate(`${page.toLowerCase()}`)}
                  >
                    {/* <NavLink
                      to={page.toLowerCase()}
                      style={({ isActive }) => ({
                        borderColor: isActive ? "#ff31b9ff" : "#951369",
                      })}
                    > */}
                    {page}
                    {/* </NavLink> */}
                  </Button>
                ))}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    marginLeft: "auto",
                  }}
                >
                  {/* <svg data-testid="NotificationsNoneIcon"></svg> */}
                  <Button
                    variant="outlined"
                    sx={{
                      display: "flex",
                      color: "#ff31b9ff",
                      border: "1px solid #951369",
                      textDecoration: "none",
                      "&:hover": {
                        borderColor: "#ff31b9ff",
                      },
                    }}
                  >
                    <NotificationsNoneIcon
                      onClick={() => {
                        addNotification();
                        // console.log("Store", Store);
                      }}
                    //  onClick={() => {
                    //   notification.emit(
                    //     {
                    //       providerURL:
                    //         "http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/finder-icon.png",
                    //       title: "Disk Not Ejected Properly",
                    //       description:
                    //         "Eject Time Machine before disconnecting or turning it off"
                    //     },
                    //     {
                    //       onClick: () => console.log("Click!!"),
                    //       onClose: () => console.log("Close!!")
                    //     }
                    //   );
                    // }}
                    // onClick={createNotification('info')}
                    />
                    {/* <SvgIcon
              // fontSize="inherit"
              color="inherit"
              component={NotificationsNoneIcon}
              onClick={() => {
                addNotification();
                console.log("Store", Store);
              }}
            /> */}
                  </Button>

                  {rightPages.map((rightPage) => (
                    <Button
                      variant="outlined"
                      key={rightPage}
                      sx={{
                        my: 2,
                        display: "block",
                        color: "#ff31b9ff",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor:
                          location.pathname === "/" + rightPage.toLowerCase()
                            ? "#ff31b9ff"
                            : "#951369",
                        textDecoration: "none",
                        "&:hover": {
                          borderColor: "#ff31b9ff",
                        },
                      }}
                      onClick={handleClickOpen}
                    >
                      {/* <NavLink
                        style={({ isActive }) => ({
                          borderColor: isActive ? "#ff31b9ff" : "#951369",
                        })}
                        to={rightPage.toLowerCase()}
                      > */}
                      {rightPage}
                      {/* </NavLink> */}
                    </Button>
                  ))}
                  <Dialog
                    BackdropProps={{
                      style: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
                    }}
                    sx={{
                      color: "#ff31b9ff",
                      "& .MuiPaper-root": {
                        width: 470,
                        height: 438,
                        p: "15px 28px 33px",
                        boxSizing: "border-box",
                        color: "#ff31b9ff",
                        backgroundColor: "#170010ff",
                      },
                    }}
                    disableEscapeKeyDown
                    open={open}
                    onClose={handleClose}
                  >
                    <DialogTitle
                      align="center"
                      fontSize="0.938rem"
                      color="#ff31b9ff"
                      padding="23px 24px 25px !important"
                    >
                      Manage Collateral
                    </DialogTitle>
                    <DialogContent sx={{ p: 0 }}>
                      <Box
                        component="form"
                      // sx={{ display: "flex", flexWrap: "wrap" }}
                      >
                        <Box
                          component="div"
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            width: "413px",
                            margin: "0 auto",
                            color: "#ff31b9ff",
                          }}
                        >
                          <ButtonStyled
                            color="inherit"
                            style={{
                              marginRight: 0,
                              textTransform: "capitalize",
                              fontSize: "13px",
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                            onClick={() => {
                              setType("Deposit");
                            }}
                            variant={
                              type === "Deposit" ? "contained" : "outlined"
                            }
                          >
                            Deposit
                          </ButtonStyled>
                          <ButtonStyled
                            color="inherit"
                            style={{
                              textTransform: "capitalize",
                              fontSize: "13px",
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0,
                            }}
                            onClick={() => {
                              setType("Withdraw");
                            }}
                            variant={
                              type === "Withdraw" ? "contained" : "outlined"
                            }
                          >
                            Withdraw
                          </ButtonStyled>
                        </Box>
                        {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
                    <Select
                      native
                      value={age}
                      onChange={handleChange}
                      input={
                        <OutlinedInput label="Age" id="demo-dialog-native" />
                      }
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-dialog-select-label"
                      id="demo-dialog-select"
                      value={age}
                      onChange={handleChange}
                      input={<OutlinedInput label="Age" />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl> */}
                        {/* <OrderCreation
                  orderCreationPanel={orderCreationPanel}
                  direction={direction}
                  usdcValue={usdcValue}
                  btcValue={btcValue}
                  leverageValue={leverageValue}
                  updateDirection={updateDirection}
                  updateBTCValue={updateBTCValue}
                  updateUsdcValue={updateUsdcValue}
                  updateLeverageValue={updateLeverageValue}
                /> */}
                        {type === "Deposit" && <Deposit settradingAmount={settradingAmount} />}
                        {type === "Withdraw" && <Withdraw updateWithdrawAmount={updateWithdrawAmount} amount={amount} />}
                      </Box>
                    </DialogContent>
                    <DialogActions sx={{ p: 0, justifyContent: "center" }}>
                      {/* <Button onClick={handleClose}>Cancel</Button> */}
                      <ButtonStyled
                        color="inherit"
                        sx={{
                          width: "100%",
                          height: "43px",
                          borderColor: "#ff31b9ff",
                          color: "#ff31b9ff",
                          textTransform: "none",
                        }}
                        variant="outlined"
                        onClick={(event) => handleClose(event, "success")}
                      >
                        {/* {!onLoad && !confirmDeposit && (type !== 'Withdraw') && <>Approve spending</> } */}
                        {onLoad && (
                          <>
                            <CircularProgress
                              variant="indeterminate"
                              size="1.5rem"
                              disableShrink
                              color="success"
                              sx={{ marginRight: 1 }}
                            />
                            <CircularProgressWithLabel
                              variant="indeterminate"
                              size="2rem"
                              disableShrink
                              value={progress}
                              color="inherit"
                              sx={{ marginRight: 1 }}
                            />
                            Processing transaction
                          </>
                        )}
                        {confirmDeposit && type !== 'Withdraw' && !onLoad && <>Confirm Deposit</>}
                        {type === 'Withdraw' && !onLoad && <>Confirm Withdrawal</>}
                      </ButtonStyled>
                    </DialogActions>
                    {/* <NotificationContainer/>  */}
                  </Dialog>

                  {window.localStorage.getItem("accountName") === null && (
                    <ConnectWallet connected={connectWallet} />
                  )}
                </Box>
              </>
            </Box>

            {/* <Box flexGrow={1} textAlign="right"> */}
            {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}> */}
            {/* <Grid item xs={2}> */}
            {/* {rightPages.map((page) => (

                <Button variant="outlined" key={page} sx={{ my: 2, color: 'white', display: 'block' }}> 
                  <Link to={page.toLowerCase()}>{page}</Link>
                </Button>

            ))} */}
            {/* </Grid> */}
            {/* </Box> */}

            {/* user account icon */}
            {window.localStorage.getItem("accountName") !== null && (
              <Box sx={{ flexGrow: 0, marginLeft: "15px" }} textAlign="right">
                <PinkTooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={window.localStorage
                        .getItem("accountName")!
                        .replaceAll('"', "")}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </PinkTooltip>
                {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
                <Menu
                  anchorEl={anchorElUser}
                  id="account-menu"
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  onClick={handleCloseUserMenu}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      backgroundColor: "#170010ff",
                      color: "#ff31b9ff",
                      border: "1px solid #ff31b9ff",
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        border: 0,
                        backgroundColor: "transparent",
                        color: "#cccccc",
                        opacity: '0.8',
                        fontSize: '0.8125rem'
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        // bgcolor: 'background.paper',
                        bgcolor: "#170010ff",
                        borderTop: "1px solid #ff31b9ff",
                        borderLeft: "1px solid #ff31b9ff",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider
                    style={{
                      color: "#238ad7",
                      borderColor: "rgba(207, 39, 150, 0.7)",
                    }}
                  />
                  <MenuItem>
                    <ListItemIcon>
                      <PersonAdd
                        style={{
                          color: "#cccccc",
                          opacity: '0.8'
                        }}
                        fontSize="small"
                      />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings style={{
                        color: "#cccccc",
                        opacity: '0.8'
                      }}
                        fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      localStorage.clear();
                      alert("cleared");
                    }}
                  >
                    <ListItemIcon>
                      <Logout style={{ // color: "#238ad7",
                        color: '#cccccc',
                        opacity: '0.8'
                      }} fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
          {/* <NotificationContainer/>  */}
          <ReactNotifications />
        </Container>
      </AppBar>

      {/* <section className="App-content">
        <span className="tags">A WalletSelectButton tag</span>
        <WalletSelectButton
          className="getWalletID"
          dappName="My Talisman Dapp"
          wallet={talismanWallet}
          onClick={(accounts) => {
            console.log("accounts", accounts);
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
        <button className="test">
          <img
            width={32}
            height={32}
            src={talismanWallet.logo.src}
            alt={talismanWallet.logo.alt}
          />
          {talismanWallet.title} Connect
        </button>

        <span className="tags">A button with enable functionality</span>
        <button
          key={talismanWallet.extensionName}
          onClick={async () => {
            try {
              await talismanWallet.enable("My Talisman Dapp");
              const unsubscribe = await talismanWallet.subscribeAccounts(
                (accounts) => {
                  // Save accounts...
                  // Also save the selected wallet name as well...
                  console.log("accounts", accounts);
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
              // `onClick` is optional here
              onClick={(wallets) => {
                console.log("wallets", wallets);
                // Do stuff with the supported wallets
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
          }
          // Override the default header
          // header={}

          // Override the default footer
          // footer={}

          // If `showAccountsList={true}`, then account selection modal will show up after selecting the a wallet. Default is `false`.
          showAccountsList={false}
          // Callback when the WalletSelect Modal is opened
          onWalletConnectOpen={(wallets) => { }}
          // Callback when the WalletSelect Modal is closed
          onWalletConnectClose={() => { }}
          // Callback when a wallet is selected on the WalletSelect Modal
          onWalletSelected={(wallet) => { }}
          // Callback when the subscribed accounts for a selected wallet are updated
          onUpdatedAccounts={(accounts) => { }}
          // Callback when an account is selected on the WalletSelect Account Modal. Only relevant when `showAccountsList=true`
          onAccountSelected={(account) => { }}
          // Callback when an error occurs. Also clears the error on Modal actions:
          // `onWalletConnectOpen`, `onWalletSelected`, `onAccountSelected` and `onWalletConnectClose`,
          onError={(error) => { }}
        />

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
      </section> */}
    </>
  );
};
export default EscherMenu;
