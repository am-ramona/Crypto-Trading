import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Grid,
  IconButton,
} from "@material-ui/core";
import {
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  // MenuIcon,
  ListItemIcon,
  Divider,
  // IconButton,
  // Typography,
  Tooltip,
} from "@mui/material";
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
import MenuIcon from "@material-ui/icons/Menu";
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';

export default function EscherMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div id="menu">
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Typography variant="h4" className="logo">
          Logo
        </Typography>
        <Button variant="outlined">
          {" "}
          <Link to="perpetuals">Perpetuals</Link>
        </Button>
        <Button variant="outlined">
          <Link to="portfolio">Portfolio</Link>
        </Button>
        <Button variant="outlined">Dashboard</Button>
        <Button variant="outlined">Docs</Button>
        <Button variant="outlined">...</Button>
        {/* 
        <Typography sx={{ minWidth: 100 }}>Perpetuals</Typography>
        <Typography sx={{ minWidth: 100 }}>Portfolio</Typography>
        <Typography sx={{ minWidth: 100 }}>Dashboard</Typography>
        <Typography sx={{ minWidth: 100 }}>Docs</Typography>
        <Typography sx={{ minWidth: 100 }}>...</Typography> */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            // sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>R</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
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
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Button variant="outlined">Deposit/Withdraw</Button>
        <Button variant="outlined">Connect Wallet</Button>
      </Box>
      <div className="owy-header-container">
        <AppBar color="inherit" position="static">
          <Grid
            container
            direction="row"
            wrap="nowrap"
            alignContent="center"
            alignItems="center"
          >
            <Grid item xs={1}>
              {/* <CmaIcon name="cmaLogo" /> */}
              <Typography variant="h4" className="logo">
                Logo
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Grid
                container
                direction="row"
                wrap="nowrap"
                alignContent="center"
                alignItems="center"
              >
                {/* <Navigation style={NavigationStyle.HEADER} navigationItems={Menu} /> */}
                <Button variant="outlined">
                  {" "}
                  <Link to="perpetuals">Perpetuals</Link>
                </Button>
                <Button variant="outlined">
                  <Link to="portfolio">Portfolio</Link>
                </Button>
                <Button variant="outlined">Dashboard</Button>
                <Button variant="outlined">Docs</Button>
                <Button variant="outlined">...</Button>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              {/* <UserLogin /> */}
              <Button variant="outlined">Connect Wallet</Button>
            </Grid>
          </Grid>
        </AppBar>
      </div>
      <Box display="flex" bgcolor="grey.200" p={2} alignItems="center">
        <Typography>React-bootstrap</Typography>
        <Box>
          <Button color="primary">Link</Button>
          <Button color="primary">Link</Button>
        </Box>
        <Box flexGrow={1} textAlign="right">
          <IconButton>{/* <MenuIcon /> */}</IconButton>
        </Box>
      </Box>
    </div>
  );
}
