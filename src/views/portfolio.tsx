// import React from "react";
// import { Typography } from "@material-ui/core";
// import Button from '@mui/material/Button';
// import Canvas from "../components/canvas"
// import { ReactNotifications } from 'react-notifications-component'
import StockChart from "../components/stockChart"
import BoxComponent from "../components/common/box"
// import FeedbackComponent from "../layout/feedback"
// import InternalMenu from "../components/common/internalMenu";
// import CustomizedTables from "../components/common/dataGrid/dataTable";
import LabTabs from "../components/common/dataGrid/tabs"
import {
  // Grid,
  // Paper,
  // Typography,
  Box,
  // Container,
  // Button,
  // ButtonBase,
  Slider,
  styled,
} from "@mui/material"
import { makeStyles, 
        //  withStyles 
        } from "@material-ui/core/styles"

// import Highchart from '../components/common/highchart/highchart';
// import HighchartReact from '../components/common/highchart-react';

// import Counter from '../features/counter/counter'
// import { grid } from "@mui/system";
// import CollateralLeverage from "../constants";

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#170010ff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   maxWidth: 400,
//   color: theme.palette.text.primary,
// }));

// const Formats = styled.div`
// margin-left: 0px;
// padding:12px;
// background-color: ${gray.brightest};
// border-radius: 20px;
// width: ${props => props.isFullWidth ? '100%' : '59%'}
// & select {
// height: 31px;
// padding: 0;
// margin-left: 12px;
// }
// `;

// declare namespace JSX {
//   interface IntrinsicElements {
//     [elemName: string]: any;
//   }
// }

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: 300
  // },
  // margin: {
  //   height: theme.spacing(3)
  // },
  mark: {
    color: "#ff31b9ff !important",
    fontSize: "13px",
  },
}));

// const CustomBox = styled(BoxComponent)({
//   // your custom styles go here
//   width: "50%",
//   justifySelf: "center",
// });
//as typeof BoxComponent;

const marks = [
  {
    value: 0,
    label: "0%",
  },
  // {
  //   value: 20,
  //   label: '20°C',
  // },
  // {
  //   value: 37,
  //   label: '37°C',
  // },
  {
    value: 100,
    label: "100%",
  },
];

const PrettoSlider = styled(Slider)({
  color: "#ff31b9ff",
  height: 2,
  fontSize: "13px",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    // height: 15,
    // width: 15,
    backgroundColor: "#ff31b9ff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .Mui-disabled, &.Mui-disabled": {
    color: "#ff31b9ff",
    cursor: "not-allowed",
    pointerEvents: "auto",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    // width: 32,
    // height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#757575",
    // color: '#ffffff',
    color: "#cccccc",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      // style the value for the disability
      backgroundColor: "transparent",
      top: "39px",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

function valuetext(value: number) {
  return `${value}%`;
}

const pages = [
  "Positions",
  "Orders",
  "Liquidations",
  "Funding Payments",
  "Unrealized Funding",
  "Transfers",
];

function Portfolio() {
  const classes = useStyles();
  // Initialize exporting module.
  // Exporting(Highcharts);

  return (
      <div
        className="portfolioWrapper"
        style={{
          display: "grid",
          // gridTemplateColumns: 'repeat(2, 1fr)',
          gap: "15px",
          gridTemplateRows: "auto",
          gridTemplateAreas: `
                "main sidebar"
                "footer footer"`,
          position: "relative",
          gridTemplateColumns: "68% auto",
          // -ms-grid-columns: 62% auto;
          padding: "0 24px",
          maxWidth: "100vw",
        }}
      >
                {/* <ReactNotifications /> */}
        {/* <Canvas /> */}
        <StockChart />
        {/* <Counter /> */}
        {/* <div className="graph"> <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }}> Connect Wallet</Button></div> */}
        {/* <div className="collateral-leverage"><Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }}> Connect Wallet</Button></div> */}
        {/* <BoxComponent>Collateral & Leverage, tralala, eh sure rah ykoun website bi jannine :)
        Awesome ! Awesomeeeeeeee ... Oh lala, let's do it !
      </BoxComponent> */}

        <Box
          sx={{
            gridArea: "sidebar",
            width: "100%",
            maxWidth: "100vw",
            color: "#ff31b9ff",
            margin: "auto",
            border: "1px solid #ff31b9ff",
            borderRadius: 0,
            marginLeft: "auto",
            "& > .MuiBox-root > .MuiBox-root": {
              p: 1,
              borderRadius: 0,
              // fontSize: '0.875rem',
              // fontWeight: '700',
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, auto)",
              gap: 1,
              gridTemplateRows: "auto",
              gridTemplateAreas: `"title1 title1"
        "left1 right1"
        "left2 right2"
        "left3 right3"
        "left4 right4"
        "left5 right5"
        "left6 right6"
        "left7 right7"
        "left8 right8"
        "title2 title2"
        "footer footer"`,
              // padding: '25px 80px',
              padding: { xs: "25px 15px", md: "25px 73px" },
              // margin: 'auto',
              // border: '1px solid #ff31b9ff',
              // borderRadius: 0,
              // color: '#ff31b9ff',
            }}
          >
            <Box
              sx={{
                gridArea: "title1",
                justifySelf: "center",
                padding: "0 0 18px !important",
                width: "100%",
              }}
            >
              <BoxComponent>Collateral & Leverage</BoxComponent>
            </Box>
            <Box
              sx={{
                gridArea: "left1",
                justifySelf: "start",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              Total Collateral :
            </Box>
            <Box
              sx={{
                gridArea: "right1",
                justifySelf: "end",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              $10000.00
            </Box>
            <Box
              sx={{
                gridArea: "left2",
                justifySelf: "start",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              Total National :
            </Box>
            <Box
              sx={{
                gridArea: "right2",
                justifySelf: "end",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              $-.--
            </Box>
            <Box
              sx={{
                gridArea: "left3",
                justifySelf: "start",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              Free Margin :
            </Box>
            <Box
              sx={{
                gridArea: "right3",
                justifySelf: "end",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              $100000.00
            </Box>
            <Box
              sx={{
                gridArea: "left4",
                justifySelf: "start",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              Margin Ratio :
            </Box>
            <Box
              sx={{
                gridArea: "right4",
                justifySelf: "end",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              10%
            </Box>
            <Box
              sx={{
                gridArea: "left5",
                justifySelf: "start",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              Leverage :
            </Box>
            <Box
              sx={{
                gridArea: "right5",
                justifySelf: "end",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              0x
            </Box>
            <Box
              sx={{
                gridArea: "left6",
                justifySelf: "start",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              Max Leverage :
            </Box>
            <Box
              sx={{
                gridArea: "right6",
                justifySelf: "end",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              50x
            </Box>
            <Box
              sx={{
                gridArea: "left7",
                justifySelf: "start",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              Unrealized PnL :
            </Box>
            <Box
              sx={{
                gridArea: "right7",
                justifySelf: "end",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              $-.--
            </Box>
            <Box
              sx={{
                gridArea: "left8",
                justifySelf: "start",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              Unrealized Funding :
            </Box>
            <Box
              sx={{
                gridArea: "right8",
                justifySelf: "end",
                padding: "0 8px !important",
                fontSize: "13px",
              }}
            >
              $-.--
            </Box>
            <Box sx={{ gridArea: "title2", padding: "18px 0 0 !important" }}>
              <BoxComponent id="discrete-slider-always">
                Account Health
              </BoxComponent>
            </Box>
            <Box sx={{ gridArea: "footer", padding: "0 8px" }}>
              <PrettoSlider
                // track="inverted"
                size="small"
                defaultValue={30}
                sx={{
                  width: "100%",
                  color: "#ff31b9ff",
                  marginBottom: 0,
                  fontSize: "13px",
                }}
                disabled
                // step={1}
                // marks
                // min={0}
                // max={100}
                // valueLabelDisplay="on"
                // aria-label="Custom marks"
                aria-label="Always visible"
                aria-labelledby="discrete-slider-always"
                // defaultValue={20}
                getAriaValueText={valuetext}
                step={10}
                // valueLabelDisplay="auto"
                valueLabelDisplay="on"
                marks={marks}
                // size="small"
                classes={{ markLabel: classes.mark }}
              />
            </Box>
          </Box>
        </Box>

        {/* <InternalMenu /> */}
        <LabTabs id="portfolio-dataGrid" pages={pages} />
        {/* <iframe src="https://codesandbox.io/embed/react-ts-9dgdnl?fontsize=14&hidenavigation=1&theme=dark"
     style={{width:'100%', height:'500px', border:0, borderRadius: '4px', overflow:'hidden'}}
     title="React TS"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe> */}

         {/* <Highchart />  */}
        {/* <HighchartReact />  */}


        {/* <Paper
        sx={{
          p: 2,
          margin: 'auto',
          width: '100%',
          border: '1px solid #ff31b9ff',
          borderRadius: 0,
          color: '#ff31b9ff',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#170010ff'
        }}
      >
        <Grid container spacing={2} sx={{ margin: 0 }}>
          <Grid item xs={12} sm container sx={{ padding: 0, margin: 0 }}>
            <Grid spacing={1} container item xs={12} sx={{ justifyContent: 'center', padding: 0 }}>
              <BoxComponent>
                Collateral & Leverage
              </BoxComponent>
            </Grid>
            <Grid item xs container direction="column" spacing={2} sx={{ padding: 0, margin: 0 }}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper> */}

        {/* <div className="stockData">
          <Button variant="outlined" sx={{
            my: 2,
            color: '#ff31b9ff',
            display: 'block',
            borderColor: '#ff31b9ff',
            '&:hover': {
              borderColor: '#951369'
            },
          }}>
            Connect Wallet
          </Button>
        </div> */}
      </div>
  );
}

export default Portfolio;
