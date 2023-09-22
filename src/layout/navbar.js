import {
  Toolbar,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { AppBar } from '@mui/material';
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
      {isMobile ? (
        <AppBar position="static" sx={{ marginBottom: '15px' }}>
          <Toolbar>
            <Typography variant="h4" className={classes.logo}>
              Logo
            </Typography>
            <DrawerComponent />
          </Toolbar>
        </AppBar>
      ) : (<>
      </>
      )}
    </>
  );
}
export default Navbar;