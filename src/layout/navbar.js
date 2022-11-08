import React from "react";
import {
  // AppBar,
  Toolbar,
  // CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { AppBar } from '@mui/material';
// import { Link } from "react-router-dom";
import DrawerComponent from "./drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* <AppBar position="static"> */}
      {/* <CssBaseline /> */}

      {isMobile ? (
        <AppBar position="static" sx={{ marginBottom: '15px' }}>
          {/* <CssBaseline /> */}
          <Toolbar>
            <Typography variant="h4" className={classes.logo}>
              Logo
            </Typography>
            <DrawerComponent />
          </Toolbar>
        </AppBar>
      ) : (<>
        {/* <div className={classes.navlinks}> */}
        {/* <Link to="/perpetuals" className={classes.link}>
              Perpetuals
            </Link>
            <Link to="/portfolio" className={classes.link}>
              Portfolio
            </Link>
            <Link to="/dashboard" className={classes.link}>
              Dashboard
            </Link>
            <Link to="/docs" className={classes.link}>
              Docs
            </Link> */}
        {/* </div> */}
      </>
      )}
      {/*  </AppBar>*/}
    </>
  );
}
export default Navbar;