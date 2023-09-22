import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import {
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Tooltip,
} from "@mui/material";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";
// import MenuIcon from "@material-ui/icons/Menu";

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
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
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
      </Box>
    </div>
  );
}
