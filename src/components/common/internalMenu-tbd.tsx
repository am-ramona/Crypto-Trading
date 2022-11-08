// import React, { Component } from 'react';
// import Box from '@mui/material/Box';
// import { makeStyles } from '@material-ui/core';

// class InternalMenu extends Component {

//     state = {
//         selectedView: 'foo',
//         foo: true // to indicate that foo has been rendered
//     }

//     onMenuClicked(event, menuItem) {
//         switch (menuItem) {
//             case 'foo':
//                 this.setState({ selectedView: 'foo', foo: true })
//                 break;
//             case 'bar':
//                 this.setState({ selectedView: 'bar', bar: true })
//                 break;
//         }
//     }

//     renderBar() {
//         const selected = this.state.selectedView === 'bar';

//         if (!this.state.bar) {
//             return <div /> // don't render bar at all
//         }
//         return <div style={{ display: selected ? 'block' : 'none' }}>
//             {/* <Bar /> */}
//             the bar
//         </div>
//     }

//     renderFoo() {
//         const selected = this.state.selectedView === 'foo';

//         if (!this.state.foo) {
//             return <div /> // don't render foo at all
//         }
//         return <div style={{ display: selected ? 'block' : 'none' }}>
//             {/* <Foo /> */}
//             the foo
//         </div>
//     }
// }

//     export default InternalMenu;

import * as React from "react";
import { Link } from "react-router-dom";
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
  Tooltip,
  MenuItem
} from "@mui/material";
import {
  // AppBar,
  // Toolbar,
  CssBaseline,
  // Typography,
  makeStyles,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
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
}));

const pages = [ "Positions", 
                "Orders", 
                "Liquidations", 
                "Funding Payments", 
                "Unrealized Funding", 
                "Transfers"];

const EscherMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  return (
    // <AppBar color="inherit" position="static" sx={{ borderBottom: '1px solid #ff31b9ff', marginBottom: '15px'}}>
    <Container maxWidth="xl" sx={{
      'gridArea': 3,
      'gridRowStart': 2,
      'gridRowEnd': 3,
      'gridColumnStart': 1,
      'gridColumnEnd': 3
    }}>
      <Toolbar disableGutters>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" }
            }}
          >
            {/* <svg data-testid="NotificationsNoneIcon"></svg> */}


          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <>
            {pages.map((page) => (
              <Button
                variant="outlined"
                key={page}
                sx={{
                  my: 2,
                  display: "block",
                  color: "#ff31b9ff",
                  border: "1px solid #ff31b9ff",
                  textDecoration: "none"
                }}
              >
                <Link to={page.toLowerCase()}>{page}</Link>
              </Button>
            ))}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                marginLeft: "auto"
              }}
            >
              {/* {pages.map((page: any) => (
                  <Button
                    variant="outlined"
                    key={page}
                    sx={{
                      my: 2,
                      display: "block",
                      color: "#ff31b9ff",
                      border: "1px solid #ff31b9ff",
                      textDecoration: "none"
                    }}
                  >
                    <Link to={page.toLowerCase()}>{page}</Link>
                  </Button>
                ))} */}
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

        <Box sx={{ flexGrow: 0, marginLeft: "15px" }} textAlign="right">
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
          </Menu>
        </Box>
      </Toolbar>
    </Container>
    // </AppBar>
  );
};
export default EscherMenu;
