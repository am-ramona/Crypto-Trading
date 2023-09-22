import React from "react"
import { useNavigate } from "react-router-dom"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import CryptoChart from "../components/chart"
import RecentTradesLiquidityTable from "../components/recentTradesLiquidity"
import BoxComponent from "../components/common/box"
import OrderCreation from "../components/common/orderCreation"
import ComboBox from "../components/common/comboBox"
import MuiVirtualizedTable from '../components/common/virtualizedTable';
import LabTabs from "../components/common/dataGrid/tabs"
import {
  Grid,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
  Box,
  Button,
  Slider,
  styled,
  Divider,
  Stack,
  SvgIcon
} from "@mui/material"
import { makeStyles } from "@material-ui/core/styles"
import { PerpetualsMarketsType } from "../interfaces"
import {
  Store
} from "react-notifications-component"
import "react-notifications-component/dist/theme.css"

import { useAppSelector, useAppDispatch } from "../app/hooks"
import {
  incrementByAmount
} from "../features/notifications/notificationsSlice"

// Add them outside the function because they are fixed value and won't change
let marketPrice: number = 41260.5;
let freeMargin: number = 100000;
let recentTradesColumns = [
  { id: 'price', label: 'Price (USDC)' },
  { id: 'size', label: 'Size (ETH)' },
  { id: 'time', label: 'Time' }
]
let liquidityColumns = [
  { id: 'size', label: 'Size (ETH)' },
  { id: 'price', label: 'Price (USDC)' },
  { id: 'sizeAfter', label: 'Size (ETH)' }
]

const useStyles = makeStyles((theme) => ({
  mark: {
    color: "#ff31b9ff !important",
  },
  hiddenMark: {
    color: "#ff31b9ff !important",
    display: "none",
  },
  display: {
    "&:hover": {
      display: "block",
    },
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

const leverageMarks = [
  {
    value: 0.0,
    label: "0.0x",
  },
  // {
  //   value: 2,
  //   label: "2.00x",
  // },
  // {
  //   value: 37,
  //   label: '37°C',
  // },
  {
    value: 25.0,
    label: "25.0x",
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
    // height: 12,
    // width: 12,
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
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#757575",
    color: "#ffffff",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const ComboBoxStyled = styled(ComboBox)`
  grid-area: market;
`;

const InfoDisplayStyled = styled(Box)`
  grid-area: mainTop;
  color: #ff31b9ff;
  width: 100%;
  max-width: 100vw;
  height: 52px;
  margin: auto;
  border: 1px solid #ff31b9ff;
  border-radius: 0;
`;

const Item = styled(Paper)`
  text-align: center;
  border: 0;
  background-color: transparent;
  color: #ff31b9ff;

  &:first-of-type {
    padding: 0 7px;
  }

  &:not(:first-of-type) {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

const PerpetualsWrapper = styled("div")`
  display: grid;
  gap: 15px;
  grid-template-rows: 54px auto auto;
  grid-template-areas:
    "left mainTop rightTop"
    "left main sidebar"
    "footer footer footer";
  position: relative;
  grid-template-columns: 22.2% auto 22.2%;
  align-items: start;
  padding: 0 24px;
  max-width: 100vw;
`;

const ButtonStyled = styled(Button)`
  &.MuiButton-outlinedInherit {
  }

  &.MuiButton-containedInherit {
    color: #170010;
    background-color: #ff31b9;
    border-color: #ff31b9;
  }
`;

const perpetualsMarkets: readonly PerpetualsMarketsType[] = [
  { label: "BTC-PERP", id: 1 },
  { label: "ETH-PERP", id: 2 },
];

const pages = [
  "Positions",
  "Orders",
  "Unrealised Funding",
  "Price Chart",
  "Funding Chart",
  "Recent Trades / Liquidity",
];

/**
 * Create the Perpetuals elements.
 * @type {}
 * @param {} - no parameters.
 * @return {JsxElement} - HTML Elements.  
 */

const Perpetuals = () => {
  const navigate = useNavigate();

  /*** add an id ***/
  // const id = React.useId();

  const classes = useStyles();

  const [open, setOpen] = React.useState<boolean>(false);
  const [perpetualsMarketValue,
    setPerpetualsMarketValue] = React.useState<PerpetualsMarketsType>(perpetualsMarkets[0]);
  const [direction, setDirection] = React.useState<string>("Long");
  const [usdcValue, setUsdcValue] = React.useState<number>();
  const [btcValue, setBtcValue] = React.useState<number>();
  const [leverageValue, setLeverageValue] = React.useState<number>(0);
  const [minLeverageValue, setMinLeverageValue] = React.useState<number>(0);
  const [maxLeverageValue, setMaxLeverageValue] = React.useState<number>(25);
  const [leveragePercentage, setLeveragePercentage] = React.useState<number>(0);
  const [addNewPosition, setAddNewPosition] = React.useState<any>([]);
  const [positionsPanel, setPositionsPanel] = React.useState<any>([
    "Market",
    "Direction",
    "Size",
    "Notional",
    "Avg. Entry",
    "Est. Exit",
    "Est. Liq Price",
    "Tot. PnL",
    "Fund. PnL",
    "Next Fund.",
    "closeAllPos",
  ]);
  const [orderCreationPanel, setOrderCreationPanel] = React.useState<any>([]);
  const [isRecentTradesLiquidity, setIsRecentTradesLiquidity] = React.useState<boolean>(false);
  const timelineLoaded = React.useRef<boolean>(false);

  const notifications = useAppSelector((state) => state.notifications);
  const dispatch = useAppDispatch();

  const handleLeverageChange = React.useCallback(
    (event: Event, newValue: number | number[]) => {
      setLeverageValue(newValue as number);
    },
    [leverageValue]
  );

  const handleClickOpen = React.useCallback(() => {
    setOpen(true);
  }, [open]);

  const calculateUsdcValue = React.useCallback(
    (percentage: number, e: any) => {
      let newValue =
        leverageValue +
        percentage.valueOf() * (maxLeverageValue - leverageValue);
      handleLeverageChange(e, newValue);
      setUsdcValue(percentage * freeMargin);
      setBtcValue((percentage * freeMargin) / marketPrice);
      setLeveragePercentage(percentage.valueOf());
    },
    [leverageValue, usdcValue, btcValue, leveragePercentage]
  );

  const valueLabelFormat = React.useCallback((value: number) => {
    return `${value}.00x`;
  }, []);

  const updateValue = React.useCallback(
    (value: any): void => {
      setPerpetualsMarketValue(value);
    },
    [perpetualsMarketValue]
  );

  const updateIsRecentTradesLiquidity = React.useCallback(
    (value: any): void => {
      // console.log('updateIsRecentTradesLiquidity')
      setIsRecentTradesLiquidity(value);
    },
    [perpetualsMarketValue]
  );

  const CustomContentRenderer = React.useCallback(
    (message: string) => {
      return (
        <Grid
          className="rnc__notification-item rnc__notification-item--info"
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
              {message} {direction} Position {perpetualsMarketValue.label}
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
                sx={{ verticalAlign: "middle" }}
                component={OpenInNewIcon}
                onClick={() => navigate(`/`)}
              />
            </Box>
          </Box>
        </Grid>
      );
    },
    [direction, perpetualsMarketValue]
  );

  const updateDirection = React.useCallback(
    (direction: string): void => {
      setDirection(direction);
    },
    [direction]
  );

  const updateBTCValue = React.useCallback(
    (btcValue: number): void => {
      setBtcValue(btcValue);
    },
    [btcValue]
  );

  const updateUsdcValue = React.useCallback(
    (usdcValue: number): void => {
      setUsdcValue(usdcValue);
    },
    [usdcValue]
  );

  const updateLeverageValue = React.useCallback(
    (leverageValue: number): void => {
      setLeverageValue(leverageValue);
    },
    [leverageValue]
  );

  const updatePositionsPanel = React.useCallback(
    (positions: any): void => {
      setPositionsPanel(positions);
    },
    [positionsPanel]
  );

  React.useEffect(() => {
    const positionsPanelCloned = [...positionsPanel];
    const newPositionsPanel = positionsPanelCloned.map((positionPanel: any) => {
      return positionPanel.slice(0, 5).concat(positionPanel[6]);
    });

    setOrderCreationPanel(newPositionsPanel);
  }, [positionsPanel]);

  const addNewEntry = React.useCallback(
    (arg: boolean) => {
      if (!timelineLoaded.current && arg === true) {
        displayNotification("Opened");
      } else if (!timelineLoaded.current) {
        displayNotification("Edited");
      }
      timelineLoaded.current = true;
    },
    [direction, perpetualsMarketValue]
  );

  const displayNotification = React.useCallback(
    (message: string) => {
      Store.addNotification({
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
    },
    [CustomContentRenderer, Store, direction, perpetualsMarketValue]
  );

  const handleClose = React.useCallback(
    (
      event: React.SyntheticEvent<unknown>,
      success?: string,
      reason?: string
    ) => {
      if (reason !== "backdropClick") {
        setOpen(false);
      }

      if (success === "success") {

        setAddNewPosition([
          perpetualsMarketValue.label,
          direction,
          btcValue,
          "$20,660.0",
          "$41,260.0",
          "$40,260.0",
          "$38,260.0",
          "-$38.0",
          "-$2.0",
          "+$0.55",
        ]);
        timelineLoaded.current = false;
      }
    },
    [addNewPosition, open, direction, btcValue]
  );

  const valuetext = React.useCallback((value: number) => {
    return `${value}%`;
  }, []);

  return (
    <PerpetualsWrapper className="perpetualsWrapper">
      <Box
        sx={{
          gridArea: "left",
          width: "100%",
          maxWidth: "100vw",
          color: "#ff31b9ff",
          margin: "auto",
          border: "1px solid #ff31b9ff",
          borderRadius: 0,
          "& > .MuiBox-root > .MuiBox-root": {
            p: 1,
            borderRadius: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "7px",
            gridTemplateRows: "auto",
            gridTemplateAreas: `"market"
      "marketDirection"
      "orderType"
      "marketSize"
      "leverage"
      "marketNameType"
      "marketData"`,
            padding: { xs: "25px 15px", md: "14px 23px" },
          }}
        >
          <ComboBoxStyled updateValue={updateValue} />

          <div
            style={{
              display: "grid",
              gridArea: "marketDirection",
              gridTemplateColumns: "auto auto",
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
                setDirection("Long");
              }}
              variant={direction === "Long" ? "contained" : "outlined"}
            >
              Long
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
                setDirection("Short");
              }}
              variant={direction === "Short" ? "contained" : "outlined"}
            >
              Short
            </ButtonStyled>
          </div>

          <Paper
            id="orderType"
            component="div"
            sx={{
              gridArea: "orderType",
              display: "grid",
              gridTemplateAreas: '"a b""c b"',
              gridTemplateColumns: "repeat(2, 1fr)",
              gridGap: "10px",
              backgroundColor: "transparent",
              color: "#ff31b9ff",
            }}
          >
            <Typography
              variant="inherit"
              component="span"
              sx={{ fontSize: "13px", gridArea: "a", padding: "4px 0" }}
            >
              Order Type
            </Typography>
            <BoxComponent sx={{ fontSize: "13px", gridArea: "c" }}>
              Market
            </BoxComponent>
            <BoxComponent
              sx={{
                fontSize: "13px",
                gridArea: "b",
                gridGap: "8px",
                textAlign: "right",
              }}
            >
              <Typography variant="inherit" component="span">
                Est/ Entry Price
              </Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontSize: "14px", fontWeight: "bold" }}
              >
                $ 41,260.5
              </Typography>
            </BoxComponent>
            {/* </div> */}
          </Paper>

          <Paper
            id="marketSize"
            component="div"
            sx={{
              gridArea: "marketSize",
              backgroundColor: "transparent",
              color: "#ff31b9ff",
            }}
          >
            <Typography
              variant="inherit"
              component="div"
              sx={{ fontSize: "13px", padding: "4px 0" }}
            >
              Size
            </Typography>
            <Paper
              component="div"
              sx={{
                display: "grid",
                gridTemplateAreas: '"a b""c d"',
                gridTemplateColumns: "repeat(2, 1fr)",
                backgroundColor: "transparent",
              }}
            >
              <BoxComponent sx={{ fontSize: "13px", gridArea: "a" }}>
                <TextField
                  id="BTC-size"
                  type="number"
                  value={btcValue && (btcValue || "")}
                  sx={{
                    "& label, & label.Mui-focused, #BTC-size, .MuiTextField-root & input":
                    {
                      color: "#ff31b9ff",
                      paddingTop: 0,
                    },
                    "& .MuiFilledInput-underline::after, & .MuiFilledInput-underline::before":
                    {
                      borderBottom: "2px solid #ff31b9ff",
                    },
                  }}
                  variant="filled"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    color: "#ff31b9ff !important",
                  }}
                  onChange={(e: any) => {
                    setUsdcValue(
                      e.target.value < 0 ? 0 : e.target.value * marketPrice
                    );
                    setBtcValue(e.target.value < 0 ? 0 : e.target.value);
                  }}
                />
              </BoxComponent>
              <BoxComponent sx={{ fontSize: "13px", gridArea: "c" }}>
                <TextField
                  id="USDC-size"
                  type="number"
                  value={usdcValue && (usdcValue  || "")}
                  sx={{
                    "& label, & label.Mui-focused, #USDC-size, & input.MuiFilledInput-input.MuiInputBase-input":
                    {
                      color: "#ff31b9ff",
                      paddingTop: 0,
                    },
                    "& .MuiFilledInput-underline::after, & .MuiFilledInput-underline::before":
                    {
                      borderBottom: "2px solid #ff31b9ff",
                    },
                  }}
                  variant="filled"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    color: "#ff31b9ff !important",
                  }}
                  onChange={(e: any) => {
                    setBtcValue(
                      e.target.value < 0 ? 0 : e.target.value / marketPrice
                    );
                    setUsdcValue(e.target.value < 0 ? 0 : e.target.value);
                  }}
                />
              </BoxComponent>
              <BoxComponent
                sx={{
                  fontSize: "14px",
                  gridArea: "b",
                  color: "#ff31b9ff",
                  justifyContent: "flex-start",
                  paddingLeft: "12px",
                }}
              >
                BTC
              </BoxComponent>
              <BoxComponent
                sx={{
                  fontSize: "14px",
                  gridArea: "d",
                  color: "#ff31b9ff",
                  justifyContent: "flex-start",
                  paddingLeft: "12px",
                }}
              >
                USDC
              </BoxComponent>
            </Paper>
          </Paper>

          <Paper
            id="leverage"
            component="div"
            sx={{
              gridArea: "leverage",
              backgroundColor: "transparent",
              color: "#ff31b9ff",
              padding: "0",
            }}
          >
            <Typography
              variant="inherit"
              component="div"
              sx={{ fontSize: "13px", padding: "4px 0" }}
            >
              Leverage
            </Typography>
            <Slider
              size="small"
              defaultValue={leverageValue}
              value={leverageValue}
              onChange={(e, value) => setLeverageValue(value as number)}
              sx={{
                width: "100%",
                color: "#ff31b9ff",
                marginBottom: 0,
                paddingBottom: "15px",
              }}
              step={1}
              min={0}
              max={25}
              aria-label="Leverage"
              aria-labelledby="leverage-market"
              getAriaValueText={valueLabelFormat}
              valueLabelFormat={valueLabelFormat}
              valueLabelDisplay="auto"
              marks={leverageMarks}
              classes={{ markLabel: classes.hiddenMark }}
            />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(5, minmax(0, auto))",
                justifyContent: "space-between",
                gridGap: "9px",
              }}
            >
              <Button
                onClick={(e) => calculateUsdcValue(0, e)}
                sx={{
                  color: "#ff31b9ff",
                  border: "1px solid #ff31b9ff",
                  marginRight: "0 !important",
                  fontSize: "10px",
                  padding: "2px 10px",
                  borderRadius: "4px",
                  minWidth: "fit-content",
                  lineHeight: "normal",
                }}
              >
                0%
              </Button>
              <Button
                onClick={(e) => calculateUsdcValue(0.25, e)}
                sx={{
                  color: "#ff31b9ff",
                  border: "1px solid #ff31b9ff",
                  marginRight: "0 !important",
                  fontSize: "10px",
                  padding: "2px 10px",
                  borderRadius: "4px",
                  minWidth: "fit-content",
                  lineHeight: "normal",
                }}
              >
                25%
              </Button>
              <Button
                onClick={(e) => calculateUsdcValue(0.5, e)}
                sx={{
                  color: "#ff31b9ff",
                  border: "1px solid #ff31b9ff",
                  marginRight: "0 !important",
                  fontSize: "10px",
                  padding: "2px 10px",
                  borderRadius: "4px",
                  minWidth: "fit-content",
                  lineHeight: "normal",
                }}
              >
                50%
              </Button>
              <Button
                onClick={(e) => calculateUsdcValue(0.75, e)}
                sx={{
                  color: "#ff31b9ff",
                  border: "1px solid #ff31b9ff",
                  marginRight: "0 !important",
                  fontSize: "10px",
                  padding: "2px 10px",
                  borderRadius: "4px",
                  minWidth: "fit-content",
                  lineHeight: "normal",
                }}
              >
                75%
              </Button>
              <Button
                onClick={(e) => calculateUsdcValue(1, e)}
                sx={{
                  color: "#ff31b9ff",
                  border: "1px solid #ff31b9ff",
                  marginRight: "0 !important",
                  fontSize: "10px",
                  padding: "2px 10px",
                  borderRadius: "4px",
                  minWidth: "fit-content",
                  lineHeight: "normal",
                }}
              >
                100%
              </Button>
            </Box>
          </Paper>

          <Button
            onClick={handleClickOpen}
            sx={{
              color: "#ff31b9ff",
              border: "1px solid #ff31b9ff",
              marginRight: "0 !important",
            }}
          >
            {direction} {perpetualsMarketValue.label}
          </Button>
          <Dialog
            BackdropProps={{
              style: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
            }}
            sx={{
              color: "#ff31b9ff",
              "& .MuiPaper-root": { backgroundColor: "#170010ff" },
            }}
            disableEscapeKeyDown
            open={open}
            onClose={handleClose}
          >
            <DialogTitle
              align="center"
              fontSize="0.938rem"
              color="#ff31b9ff"
              padding="12px 24px"
            >
              Review Order
            </DialogTitle>
            <DialogContent sx={{ padding: 0 }}>
              <OrderCreation
                orderCreationPanel={orderCreationPanel}
                direction={direction}
                usdcValue={usdcValue}
                btcValue={btcValue}
                leverageValue={leverageValue}
                updateDirection={updateDirection}
                updateBTCValue={updateBTCValue}
                updateUsdcValue={updateUsdcValue}
                updateLeverageValue={updateLeverageValue}
              />
            </DialogContent>
            <DialogActions>
              <ButtonStyled
                color="inherit"
                sx={{
                  width: "100%",
                  borderColor: "#ff31b9ff",
                  color: "#ff31b9ff",
                }}
                variant="outlined"
                onClick={(event) => handleClose(event, "success")}
              >
                {direction} {perpetualsMarketValue.label}
              </ButtonStyled>
            </DialogActions>
          </Dialog>

          <Box
            sx={{
              gridArea: "marketData",
              width: "100%",
              color: "#ff31b9ff",
              margin: "auto",
              border: "1px solid #ff31b9ff",
              boxSizing: "border-box",
              borderRadius: 0,
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
                gridTemplateAreas: `
      "left1 right1"
      "left2 right2"
      "left3 right3"
      "left4 right4"
      "left5 right5"
`
              }}
            >
              <Box
                sx={{
                  fontSize: "13px",
                  gridArea: "left1",
                  justifySelf: "start",
                  padding: "0 8px !important",
                }}
              >
                Margin used :
              </Box>
              <Box
                sx={{
                  fontSize: "13px",
                  gridArea: "right1",
                  justifySelf: "end",
                  padding: "0 8px !important",
                }}
              >
                $10,660.0
              </Box>
              <Box
                sx={{
                  fontSize: "13px",
                  gridArea: "left2",
                  justifySelf: "start",
                  padding: "0 8px !important",
                }}
              >
                AMM Price :
              </Box>
              <Box
                sx={{
                  fontSize: "13px",
                  gridArea: "right2",
                  justifySelf: "end",
                  padding: "0 8px !important",
                }}
              >
                $41,260.5
              </Box>
              <Box
                sx={{
                  fontSize: "13px",
                  gridArea: "left3",
                  justifySelf: "start",
                  padding: "0 8px !important",
                }}
              >
                Fee :
              </Box>
              <Box
                sx={{
                  fontSize: "13px",
                  gridArea: "right3",
                  justifySelf: "end",
                  padding: "0 8px !important",
                }}
              >
                0.1%
              </Box>
              <Box
                sx={{
                  fontSize: "13px",
                  gridArea: "left4",
                  justifySelf: "start",
                  padding: "0 8px !important",
                }}
              >
                Est. slippage :
              </Box>
              <Box
                sx={{
                  fontSize: "13px",
                  gridArea: "right4",
                  justifySelf: "end",
                  padding: "0 8px !important",
                }}
              >
                0.2%
              </Box>
              <Box
                sx={{
                  fontSize: "13px",
                  gridArea: "left5",
                  justifySelf: "start",
                  padding: "0 8px !important",
                }}
              >
                Est. liquidation price :
              </Box>
              <Box
                sx={{
                  fontSize: "13px",
                  gridArea: "right5",
                  justifySelf: "end",
                  padding: "0 8px !important",
                }}
              >
                $40,260.5
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <InfoDisplayStyled>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          height="100%"
          divider={
            <Divider
              sx={{
                backgroundColor: "#ff31b9ff",
              }}
              orientation="vertical"
              flexItem
            />
          }
          spacing={0}
        >
          <Item
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gridGap: 10,
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <Typography
              sx={{ margin: 0, lineHeight: 1 }}
              variant="button"
              display="block"
              gutterBottom
            >
              $41,260.5
            </Typography>
            <Typography
              sx={{ margin: 0, lineHeight: 1 }}
              variant="caption"
              display="block"
              gutterBottom
            >
              -0.49%
            </Typography>
          </Item>
          <Item>
            <Typography
              sx={{
                color: "#cccccc",
                margin: 0,
                lineHeight: 1,
                paddingBottom: "10px",
                fontSize: "11px",
              }}
              variant="caption"
              display="block"
              gutterBottom
            >
              Index Price
            </Typography>
            <Typography
              sx={{ margin: 0, lineHeight: 1, fontSize: "11px" }}
              variant="button"
              display="block"
              gutterBottom
            >
              $41,254.3
            </Typography>
          </Item>
          <Item>
            <Typography
              sx={{
                color: "#cccccc",
                margin: 0,
                lineHeight: 1,
                paddingBottom: "10px",
                fontSize: "11px",
              }}
              variant="caption"
              display="block"
              gutterBottom
            >
              8h Funding %
            </Typography>
            <Typography
              sx={{ margin: 0, lineHeight: 1, fontSize: "11px" }}
              variant="button"
              display="block"
              gutterBottom
            >
              -0.00212%
            </Typography>
          </Item>
          <Item>
            <Typography
              sx={{
                color: "#cccccc",
                margin: 0,
                lineHeight: 1,
                paddingBottom: "10px",
                fontSize: "11px",
              }}
              variant="caption"
              display="block"
              gutterBottom
            >
              Next Funding %{" "}
            </Typography>
            <Typography
              sx={{ margin: 0, lineHeight: 1, fontSize: "11px" }}
              variant="button"
              display="block"
              gutterBottom
            >
              -0.00212%
            </Typography>
          </Item>
          <Item>
            <Typography
              sx={{
                color: "#cccccc",
                margin: 0,
                lineHeight: 1,
                paddingBottom: "10px",
                fontSize: "11px",
              }}
              variant="caption"
              display="block"
              gutterBottom
            >
              24h Volume
            </Typography>
            <Typography
              sx={{ margin: 0, lineHeight: 1, fontSize: "11px" }}
              variant="button"
              display="block"
              gutterBottom
            >
              $1.47M
            </Typography>
          </Item>
          <Item>
            <Typography
              sx={{
                color: "#cccccc",
                margin: 0,
                lineHeight: 1,
                paddingBottom: "10px",
                fontSize: "11px",
              }}
              variant="caption"
              display="block"
              gutterBottom
            >
              Open Interest
            </Typography>
            <Typography
              sx={{ margin: 0, lineHeight: 1, fontSize: "11px" }}
              variant="button"
              display="block"
              gutterBottom
            >
              79.2 BTC
            </Typography>
          </Item>
        </Stack>
      </InfoDisplayStyled>
      {isRecentTradesLiquidity ?
        <Stack
          direction="row"
          gridArea="main"
          height="455px"
          spacing={0}
        >
          <RecentTradesLiquidityTable
            columns={recentTradesColumns}
            cell="Recent Trades"
          />
          <RecentTradesLiquidityTable
            columns={liquidityColumns}
            cell="Liquidity"
          />
        </Stack>
        :
        <CryptoChart
          height="455px"
          gridArea="main"
        />
      }

      <Box
        sx={{
          gridArea: "sidebar",
          height: "453px",
          alignSelf: "flex-start",
          width: "100%",
          maxWidth: "100vw",
          color: "#ff31b9ff",
          border: "1px solid #ff31b9ff",
          borderRadius: 0,
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
      "footer footer"
      "note note"`,
            padding: { xs: "25px 15px", md: "25px 23px" }
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
              fontSize: "13px",
              gridArea: "left1",
              justifySelf: "start",
              padding: "0 8px !important",
            }}
          >
            Total Collateral :
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "right1",
              justifySelf: "end",
              padding: "0 8px !important",
            }}
          >
            $10000.00
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "left2",
              justifySelf: "start",
              padding: "0 8px !important",
            }}
          >
            Total Notional :
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "right2",
              justifySelf: "end",
              padding: "0 8px !important",
            }}
          >
            $-.--
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "left3",
              justifySelf: "start",
              padding: "0 8px !important",
            }}
          >
            Free Margin :
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "right3",
              justifySelf: "end",
              padding: "0 8px !important",
            }}
          >
            $100000.00
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "left4",
              justifySelf: "start",
              padding: "0 8px !important",
            }}
          >
            Margin Ratio :
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "right4",
              justifySelf: "end",
              padding: "0 8px !important",
            }}
          >
            10%
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "left5",
              justifySelf: "start",
              padding: "0 8px !important",
            }}
          >
            Leverage :
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "right5",
              justifySelf: "end",
              padding: "0 8px !important",
            }}
          >
            0x
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "left6",
              justifySelf: "start",
              padding: "0 8px !important",
            }}
          >
            Max Leverage :
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "right6",
              justifySelf: "end",
              padding: "0 8px !important",
            }}
          >
            50x
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "left7",
              justifySelf: "start",
              padding: "0 8px !important",
            }}
          >
            Unrealized PnL :
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "right7",
              justifySelf: "end",
              padding: "0 8px !important",
            }}
          >
            $-.--
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "left8",
              justifySelf: "start",
              padding: "0 8px !important",
            }}
          >
            Unrealized Funding :
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              gridArea: "right8",
              justifySelf: "end",
              padding: "0 8px !important",
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
              size="small"
              defaultValue={100}
              disabled
              sx={{
                width: "100%",
                color: "#ff31b9ff",
                marginBottom: 0,
              }}
              aria-label="Always visible"
              aria-labelledby="discrete-slider-always"
              getAriaValueText={valuetext}
              step={10}
              valueLabelDisplay="auto"
              marks={marks}
              classes={{ markLabel: classes.mark }}
            />
          </Box>
          <span
            style={{
              gridArea: "note",
              color: "#cccccc",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            You are nowhere close to liquidation.
          </span>
        </Box>
      </Box>

      <LabTabs
        id="perpetuals-dataGrid"
        pages={pages}
        isRecentTradesLiquidity={updateIsRecentTradesLiquidity}
        leverageValue={leverageValue}
        minLeverageValue={minLeverageValue}
        maxLeverageValue={maxLeverageValue}
        leveragePercentage={leveragePercentage}
        addNewPosition={addNewPosition}
        addNewEntry={addNewEntry}
        positionsPanel={positionsPanel}
        updatePositionsPanel={updatePositionsPanel}
        updateLeverageValue={updateLeverageValue}
        calculateUsdcValue={calculateUsdcValue}
      />

      {isRecentTradesLiquidity && <MuiVirtualizedTable />}
    </PerpetualsWrapper>
  );
};

export default Perpetuals;
