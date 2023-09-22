import StockChart from "../components/stockChart"
import BoxComponent from "../components/common/box"
import LabTabs from "../components/common/dataGrid/tabs"
import {
  Box,
  Slider,
  styled,
} from "@mui/material"
import { makeStyles } from "@material-ui/core/styles"

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
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#757575",
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
        <StockChart />
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
              padding: { xs: "25px 15px", md: "25px 73px" },
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
                aria-label="Always visible"
                aria-labelledby="discrete-slider-always"
                getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="on"
                marks={marks}
                classes={{ markLabel: classes.mark }}
              />
            </Box>
          </Box>
        </Box>

        <LabTabs id="portfolio-dataGrid" pages={pages} />
      </div>
  );
}

export default Portfolio;
