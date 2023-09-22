import * as React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Toolbar,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem
} from "@mui/material";
import {
  // CssBaseline,
  makeStyles,
  useTheme,
  // useMediaQuery
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

  // const classes = useStyles();
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="xl" sx={{
      'gridArea': 3,
      'gridRowStart': 2,
      'gridRowEnd': 3,
      'gridColumnStart': 1,
      'gridColumnEnd': 3
    }}>
      <Toolbar disableGutters>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            </Box>
          </>
        </Box>

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
  );
};
export default EscherMenu;
