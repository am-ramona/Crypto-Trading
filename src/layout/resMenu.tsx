import React, { useState } from "react";
import {
  useLocation,
  useNavigate
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
  MenuItem,
  ListItemIcon,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  CircularProgress,
  CircularProgressProps,
  Grid,
  SvgIcon,
  Tooltip
} from "@mui/material";
import {
  withStyles
} from "@material-ui/core";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  ReactNotifications,
  Store
} from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import MenuIcon from "@mui/icons-material/Menu";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  incrementByAmount
} from "../features/notifications/notificationsSlice";
import {
  WalletAccount
} from "@talisman-connect/wallets";
import Deposit from "../components/deposit";
import Withdraw from "../components/withdraw";

const PinkTooltip = withStyles({
  tooltip: {
    color: "#ff31b9ff",
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

const pages = ["Perpetuals", "Portfolio", "Dashboard", "Docs", "..."];
const rightPages = ["Deposit/Withdraw"];

const EscherMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  let location = useLocation();
  // const match = useParams();
  const navigate = useNavigate();

  const [wallet, setWallet] = useState<WalletAccount>();
  const [connected, setConnected] = useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [type, setType] = React.useState<string>("Deposit");
  const [progress, setProgress] = React.useState(10);
  const [onLoad, setOnLoad] = React.useState<boolean>(false);
  const [confirmDeposit, setConfirmDeposit] = React.useState<boolean>(true);
  const [amount, setAmount] = React.useState<number>(0);
  const [withdrawAmount, setWithdrawAmount] = React.useState<number>(0);
  const notifications = useAppSelector((state) => state.notifications);

  const notificationsCloned = JSON.parse(JSON.stringify(notifications));
  const dispatch = useAppDispatch();

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
    window.localStorage.setItem("accountName", JSON.stringify(account.name!));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const addNotification = () => {
    if (
      notificationsCloned.length === 1 &&
      Object.values(notificationsCloned[0]).indexOf("No notification found") >
      -1
    ) {
      Store.addNotification(notificationsCloned[0]);
      return;
    }
    let notificationsClonedShifted = notificationsCloned;
    if (
      Object.values(notificationsClonedShifted[0]).indexOf(
        "No notification found"
      ) > -1
    ) {
      notificationsClonedShifted = notificationsClonedShifted.slice(1);
    }
    notificationsClonedShifted.map((notificationCloned: any, i: number) => {
      notificationCloned.content = notifications[i + 1].content;
      Store.addNotification(notificationCloned);
    });
  };

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

  function CustomContentRenderer(message: string) {
    return (
      <Grid className="rnc__notification-item rnc__notification-item--info"
        style={{ width: "100%" }}
      >
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
            <SvgIcon
              fontSize="inherit"
              color="inherit"
              component={OpenInNewIcon}
              sx={{ verticalAlign: "middle" }}
              onClick={() => navigate(`/`)}
            />
          </Box>
        </Box>
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

      setOnLoad(true);
      if (type === 'Withdraw') setTimeout(() => { setOpen(false); setOnLoad(false); displayNotification("Withdrew " + withdrawAmount + " USDC collateral."); }, 3000);
      if (!confirmDeposit && type === 'Deposit') setTimeout(() => { setOnLoad(false); setConfirmDeposit(true) }, 3000);
      else { //setConfirmDeposit(false); 
        if (type === 'Deposit') setTimeout(() => { setOnLoad(false); setOpen(false); displayNotification("Deposited " + amount + " USDC collateral.") }, 3000);
      }
    }
  };

  const settradingAmount = (amount: number): void => {
    // 👇️ take parameter passed from Child component
    setAmount(amount);
  };

  const updateWithdrawAmount = (amount: number): void => {
    // 👇️ take parameter passed from Child component
    setWithdrawAmount(amount);
  };

  return (
    <>
      <AppBar
        id="AppMenu"
        color="inherit"
        position="static"
        sx={{ marginBottom: "15px" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                  </MenuItem>
                ))}
                {rightPages.map((rightPage) => (
                  <MenuItem key={rightPage} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{rightPage}</Typography>
                  </MenuItem>
                ))}
                {window.localStorage.getItem("accountName") === null && (
                  <ConnectWallet connected={connectWallet} />
                )}
              </Menu>
            </Box>
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
                    {page}
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
                      }}
                    />
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
                      {rightPage}
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
                        {type === "Deposit" && <Deposit settradingAmount={settradingAmount} />}
                        {type === "Withdraw" && <Withdraw updateWithdrawAmount={updateWithdrawAmount} amount={amount} />}
                      </Box>
                    </DialogContent>
                    <DialogActions sx={{ p: 0, justifyContent: "center" }}>
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
                  </Dialog>

                  {window.localStorage.getItem("accountName") === null && (
                    <ConnectWallet connected={connectWallet} />
                  )}
                </Box>
              </>
            </Box>
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
                      <Logout style={{ 
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
          <ReactNotifications />
        </Container>
      </AppBar>
    </>
  );
};
export default EscherMenu;
