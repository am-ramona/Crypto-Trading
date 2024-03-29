import React, { useState } from "react";
import {
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Drawer, Divider, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#ff31b9ff",
    fontSize: "15px",
  },
  icon: {
    color: "white",
  }
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#170010ff",
            color: "#ff31b9ff",
            border: "1px solid #ff31b9ff",
          },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/perpetuals" className={classes.link}>
                Perpetuals
              </Link>
            </ListItemText>
          </ListItem>
          <Divider sx={{ backgroundColor: "rgba(207, 39, 150, 0.7)" }} />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/portfolio" className={classes.link}>
                Portfolio
              </Link>
            </ListItemText>
          </ListItem>
          <Divider sx={{ backgroundColor: "rgba(207, 39, 150, 0.7)" }} />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/dashboard" className={classes.link}>
                Dashboard
              </Link>
            </ListItemText>
          </ListItem>
          <Divider sx={{ backgroundColor: "rgba(207, 39, 150, 0.7)" }} />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/docs" className={classes.link}>
                Docs
              </Link>
            </ListItemText>
          </ListItem>
          <Divider sx={{ backgroundColor: "rgba(207, 39, 150, 0.7)" }} />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/deposit-withdraw" className={classes.link}>
                Deposit/Withdraw
              </Link>
            </ListItemText>
          </ListItem>
          <Divider sx={{ backgroundColor: "rgba(207, 39, 150, 0.7)" }} />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/connectWallet" className={classes.link}>
                Connect Wallet
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
