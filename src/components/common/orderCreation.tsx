import React, { 
      //  useEffect
      } from "react";
// import { css } from "@emotion/react";
import BoxComponent from "./box";
// import ComboBox from "./comboBox";
import CustomizedTables from "./dataGrid/dataTable";
import {
  // Grid,
  TextField,
  // Dialog,
  // DialogActions,
  // DialogContent,
  // DialogTitle,
  // InputLabel,
  // OutlinedInput,
  // MenuItem,
  // FormControl,
  Paper,
  Typography,
  Box,
  // Container,
  Button,
  // ButtonBase,
  Slider,
  styled,
  // Divider,
  // Stack,
  // Modal,
} from "@mui/material";
// import Select, 
//        { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles, 
        //  withStyles 
        } from "@material-ui/core/styles";

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

/*** Types & Interfaces ***/
// interface PerpetualsMarketsType {
//   label: string;
//   year?: number;
//   id?: number;
// }

interface OrderCreationProps {
  orderCreationPanel: Array<any>;
  direction?: string;
  usdcValue?: number;
  btcValue?: number;
  leverageValue?: number | number[] | undefined;
  updateDirection: (arg: string) => void;
  updateBTCValue: (arg: number) => void;
  updateUsdcValue: (arg: number) => void;
  updateLeverageValue: (arg: number) => void;
}
/*** End ***/

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: 300
  // },
  // margin: {
  //   height: theme.spacing(3)
  // },
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

// const CustomBox = styled(BoxComponent)({
//   // your custom styles go here
//   width: "50%",
//   justifySelf: "center",
// });
//as typeof BoxComponent;

// const marks = [
//   {
//     value: 0,
//     label: "0%",
//   },
//   // {
//   //   value: 20,
//   //   label: '20°C',
//   // },
//   // {
//   //   value: 37,
//   //   label: '37°C',
//   // },
//   {
//     value: 100,
//     label: "100%",
//   },
// ];

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

// const PrettoSlider = styled(Slider)({
//   color: "#ff31b9ff",
//   height: 2,
//   fontSize: "12px",
//   "& .MuiSlider-track": {
//     border: "none",
//   },
//   "& .MuiSlider-thumb": {
//     // height: 12,
//     // width: 12,
//     backgroundColor: "#ff31b9ff",
//     border: "2px solid currentColor",
//     "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
//       boxShadow: "inherit",
//     },
//     "&:before": {
//       display: "none",
//     },
//   },
//   "& .Mui-disabled, &.Mui-disabled": {
//     color: "#ff31b9ff",
//     cursor: "not-allowed",
//     pointerEvents: "auto",
//   },
//   "& .MuiSlider-valueLabel": {
//     lineHeight: 1.2,
//     fontSize: 12,
//     background: "unset",
//     padding: 0,
//     width: 32,
//     height: 32,
//     borderRadius: "50% 50% 50% 0",
//     backgroundColor: "#757575",
//     color: "#ffffff",
//     transformOrigin: "bottom left",
//     transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
//     "&:before": { display: "none" },
//     "&.MuiSlider-valueLabelOpen": {
//       transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
//     },
//     "& > *": {
//       transform: "rotate(45deg)",
//     },
//   },
// });

// const ComboBoxStyled = styled(ComboBox)`
//   grid-area: market;
// `;

// const InfoDisplayStyled = styled(Box)`
//   grid-area: mainTop;
//   color: #ff31b9ff;
//   width: 100%;
//   max-width: 100vw;
//   height: 52px;
//   margin: auto;
//   border: 1px solid #ff31b9ff;
//   border-radius: 0;
// `;

// const Item = styled(Paper)`
//   text-align: center;
//   border: 0;
//   background-color: transparent;
//   color: #ff31b9ff;

//   &:first-of-type {
//     padding: 0 7px;
//   }

//   &:not(:first-of-type) {
//     flex-grow: 1;
//     flex-basis: 0;
//   }
// `;

// function valuetext(value: number) {
//   return `${value}%`;
// }

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const ReviewOrder = styled("div")`
  display: grid;
  gap: 15px;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "left right"
    "footer footer";
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  padding: 0 24px;
  max-width: 100vw;

  & table {
     & th {
        padding : 13px;
     }
  }
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

// const perpetualsMarkets: readonly PerpetualsMarketsType[] = [
//   // const perpetualsMarkets = [
//   { label: "BTC-PERP", id: 1 },
//   { label: "ETH-PERP", id: 2 },
// ];

let marketPrice: number = 41260.5;
// let freeMargin: number = 100000;

const OrderCreation = ({
  orderCreationPanel,
  direction,
  usdcValue,
  btcValue,
  leverageValue,
  updateDirection,
  updateBTCValue,
  updateUsdcValue,
  updateLeverageValue,
}: OrderCreationProps) => {
  // const [ direction,
  // usdcValue,
  // btcValue,
  // leverageValue ] = props
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  // const [perpetualsMarketValue, setPerpetualsMarketValue] =
  //   React.useState<PerpetualsMarketsType>(perpetualsMarkets[0]);
  // const [directionn, setDirection] = React.useState<string | undefined>(
  //   direction
  // );
  // const [usdcValuee, setUsdcValue] = React.useState<number | undefined>(
  //   usdcValue
  // );
  // const [btcValuee, setBtcValue] = React.useState<number | undefined>(btcValue);
  // const [leverageValuee, setLeverageValue] = React.useState<
  //   number | number[] | undefined
  // >(leverageValue);
  // const [minLeverageValue, setMinLeverageValue] = React.useState<number>(0);
  // const [maxLeverageValue, setMaxLeverageValue] = React.useState<number>(25);
  // const [age, setAge] = React.useState<number | string>("");

  // useEffect(() => {
  //   // console.log("perpetualsMarketValue.label", perpetualsMarketValue.label);
  // }, []);

  // console.log("orderCreation orderCreationPanel", orderCreationPanel);
  // console.log(
  //   "orderCreation orderCreationPanel.slice",
  //   orderCreationPanel.slice(1, orderCreationPanel.length)
  // );
  // console.log(
  //   "orderCreation orderCreationPanel.slice length",
  //   orderCreationPanel.slice(1, orderCreationPanel.length).length
  // );

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const [open, setOpen] = React.useState(false);

  // const handleChange = (event: SelectChangeEvent<typeof age>) => {
  //   setAge(Number(event.target.value) || "");
  // };

  // const handleLeverageChange = (event: Event, newValue: number | number[]) => {
  //   // if (typeof newValue === 'number') {
  //   //   setLeverageValue(newValue);
  //   // }
  //   // console.log("in function handleLeverageChange");
  //   // console.log(
  //   //   "in function handleLeverageChange leverageValue",
  //   //   leverageValue
  //   // );
  //   // if (leverageValue) {
  //   // console.log("in function handleLeverageChange leverageValue");
  //   // console.log("in function handleLeverageChange newValue", newValue);
  //   updateLeverageValue(newValue as number);
  //   // }
  // };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const updateValue = (value: any): void => {
  //   setPerpetualsMarketValue(value);
  // };

  //   const onKeyPressed = (e: any) => {
  //     if (!/[0-9]/.test(e.key)) {
  //       e.preventDefault();
  //     }
  //     // console.log(e.keyCode);
  //     setUsdcValue(e.target.value / marketPrice);

  //     console.log("value is:", e.target.value);
  //     console.log(e.target.value);
  //     // setUsdcValue
  //     // return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(e.code) ? true : !isNaN(Number(e.key)) && e.code!=='Space'
  //   };

  //   const calculateUsdcValue = (percentage: number, e: any) => {
  //     console.log("calculateUsdcValue", percentage * freeMargin);
  //     let newValue =
  //       leverageValue + percentage.valueOf() * (maxLeverageValue - leverageValue);
  //     handleLeverageChange(e, newValue);
  //     setUsdcValue(percentage * freeMargin);
  //     setBtcValue((percentage * freeMargin) / marketPrice);
  //   };

  // const handleClose = (
  //   event: React.SyntheticEvent<unknown>,
  //   success?: string,
  //   reason?: string
  // ) => {
  //   if (reason !== "backdropClick") {
  //     setOpen(false);
  //   }
  // };

  function valueLabelFormat(value: number) {
    return `${value}.00x`;
  }



  return (
    <ReviewOrder>
      <Box
        sx={{
          gridArea: "left",
          width: "100%",
          maxWidth: "100vw",
          color: "#ff31b9ff",
          margin: "auto",
          border: "1px solid #ff31b9ff",
          borderRadius: 0,
          height: "433px",
          boxSizing: "border-box",
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
            gridTemplateColumns: "1fr",
            gap: "5px",
            gridTemplateRows: "auto",
            gridTemplateAreas: `
      "marketDirection"
      "orderType"
      "marketSize"
      "leverage"
      "marketData"`,
            // padding: '25px 80px',
            padding: { xs: "25px 15px", md: "15px 15px" },
            // margin: 'auto',
            // border: '1px solid #ff31b9ff',
            // borderRadius: 0,
            // color: '#ff31b9ff',
          }}
        >
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
                fontSize: "12px",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              onClick={() => {
                updateDirection("Long");
              }}
              variant={direction === "Long" ? "contained" : "outlined"}
            >
              Long
            </ButtonStyled>
            <ButtonStyled
              color="inherit"
              style={{
                textTransform: "capitalize",
                fontSize: "12px",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              onClick={() => {
                updateDirection("Short");
              }}
              variant={direction === "Short" ? "contained" : "outlined"}
            >
              Short
            </ButtonStyled>
          </div>

          <Paper
            id="orderType"
            component="div"
            elevation={0}
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
            {/* <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                }}
              > */}
            <BoxComponent sx={{ fontSize: "12px", gridArea: "c" }}>
              Market
            </BoxComponent>
            <BoxComponent
              sx={{
                fontSize: "12px",
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
            elevation={0}
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
              <BoxComponent
                sx={{ fontSize: "12px", gridArea: "a", color: "#cccccc" }}
              >
                {/* {btcValuee} */}
                <TextField
                  id="BTC-size"
                  // label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={btcValue && btcValue}
                  sx={{
                    "& label, & label.Mui-focused, #BTC-size, .MuiTextField-root & input":
                      { color: "#ff31b9ff", paddingTop: 0 },
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
                    updateUsdcValue(e.target.value * marketPrice);
                    updateBTCValue(e.target.value);
                  }}
                />
              </BoxComponent>
              <BoxComponent
                sx={{ fontSize: "12px", gridArea: "c", color: "#cccccc" }}
              >
                {/* {usdcValuee && usdcValuee} */}
                <TextField
                  id="USDC-size"
                  // label="Number"
                  type="number"
                  value={usdcValue && usdcValue}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    "& label, & label.Mui-focused, #USDC-size, & input.MuiFilledInput-input.MuiInputBase-input":
                      { color: "#ff31b9ff", paddingTop: 0 },
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
                    updateBTCValue(e.target.value / marketPrice);
                    updateUsdcValue(e.target.value);
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
            elevation={0}
            sx={{
              gridArea: "leverage",
              backgroundColor: "transparent",
              color: "#ff31b9ff",
              padding: "0",
            }}
          >
            {/* <Box sx={{ gridArea: "leverage", padding: "0 8px" }}> */}
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
              onChange={(e, value) => updateLeverageValue(value as number)}
              sx={{
                width: "100%",
                color: "#ff31b9ff",
                marginBottom: 0,
                paddingBottom: "0",
              }}
              step={1}
              // marks
              min={0}
              max={25}
              // valueLabelDisplay="on"
              // aria-label="Custom marks"
              aria-label="Leverage"
              aria-labelledby="leverage-market"
              getAriaValueText={valueLabelFormat}
              valueLabelFormat={valueLabelFormat}
              // defaultValue={20}
              // getAriaValueText={"tralala"}
              // aria-valuetext={"tralala"}
              valueLabelDisplay="auto"
              marks={leverageMarks}
              // size="small"
              classes={{ markLabel: classes.hiddenMark }}
            // onChange={handleLeverageChange}
            />
          </Paper>

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
                gridTemplateAreas: `
      "left1 right1"
      "left2 right2"
      "left3 right3"
      "left4 right4"
      "left5 right5"
`,
                // padding: { xs: "25px 15px", md: "25px 23px" },
                // margin: 'auto',
                // border: '1px solid #ff31b9ff',
                // borderRadius: 0,
                //, color: '#ff31b9ff',
              }}
            >
              <Box
                sx={{
                  fontSize: "12px",
                  gridArea: "left1",
                  justifySelf: "start",
                  padding: "0 8px !important",
                }}
              >
                Margin used :
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  gridArea: "right1",
                  justifySelf: "end",
                  padding: "0 8px !important",
                }}
              >
                $10,660.0
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  gridArea: "left2",
                  justifySelf: "start",
                  padding: "0 8px !important",
                }}
              >
                AMM Price :
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  gridArea: "right2",
                  justifySelf: "end",
                  padding: "0 8px !important",
                }}
              >
                $41,260.5
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  gridArea: "left3",
                  justifySelf: "start",
                  padding: "0 8px !important",
                }}
              >
                Fee :
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  gridArea: "right3",
                  justifySelf: "end",
                  padding: "0 8px !important",
                }}
              >
                0.1%
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  gridArea: "left4",
                  justifySelf: "start",
                  padding: "0 8px !important",
                }}
              >
                Est. slippage :
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  gridArea: "right4",
                  justifySelf: "end",
                  padding: "0 8px !important",
                }}
              >
                0.2%
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                  gridArea: "left5",
                  justifySelf: "start",
                  padding: "0 8px !important",
                }}
              >
                Est. liquidation price :
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
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

      <Box
        sx={{
          gridArea: "right",
          alignSelf: "flex-start",
          width: "100%",
          // height: "475px",
          maxWidth: "100vw",
          color: "#ff31b9ff",
          border: "1px solid #ff31b9ff",
          borderRadius: 0,
          height: "433px",
          boxSizing: "border-box",
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
      "footer footer"
      "note note"`,
            padding: { xs: "25px 15px", md: "15px 15px" },
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
              padding: "0 0 18px",
              width: "100%",
            }}
          >
            <BoxComponent>Collateral & Leverage</BoxComponent>
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "left1",
              justifySelf: "start",
              padding: "8px 0 !important",
            }}
          >
            Total Collateral :
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "right1",
              justifySelf: "end",
              padding: "8px 0 !important",
            }}
          >
            $10000.00
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "left2",
              justifySelf: "start",
              padding: "8px 0 !important",
            }}
          >
            Total National :
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "right2",
              justifySelf: "end",
              padding: "8px 0 !important",
            }}
          >
            $0.00 -{">"} $20,660.00
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "left3",
              justifySelf: "start",
              padding: "8px 0 !important",
            }}
          >
            Free Margin :
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "right3",
              justifySelf: "end",
              padding: "8px 0 !important",
            }}
          >
            $100,000.00 -{">"} $79,340.00
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "left4",
              justifySelf: "start",
              padding: "8px 0 !important",
            }}
          >
            Margin Ratio :
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "right4",
              justifySelf: "end",
              padding: "8px 0 !important",
            }}
          >
            10% -{">"} 8%
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "left5",
              justifySelf: "start",
              padding: "8px 0 !important",
            }}
          >
            Leverage :
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "right5",
              justifySelf: "end",
              padding: "8px 0 !important",
            }}
          >
            0x -{">"} 2x
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "left6",
              justifySelf: "start",
              padding: "8px 0 !important",
            }}
          >
            Max Leverage :
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              gridArea: "right6",
              justifySelf: "end",
              padding: "8px 0 !important",
            }}
          >
            50x
          </Box>

          <Box sx={{ gridArea: "title2", padding: "9px 0 0 !important" }}>
            <BoxComponent id="discrete-slider-always">
              Account Health
            </BoxComponent>
          </Box>
          <Box sx={{ gridArea: "footer", padding: "0 8px" }}>
            <Typography align="center" fontSize="12px">
              100% -{">"} 94%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        component='div'
        sx={{ gridArea: "footer" }}
      >
        {orderCreationPanel.slice(1, orderCreationPanel.length).length === 0
          ? (
            <Typography gridArea="footer"
              fontSize="10px"
              color="#ff31b9ff"
              align="center">No Open Positions Found</Typography>
          ) : ( 
            <CustomizedTables key='1253.0'
              name="orderCreationPositions"
              arr={orderCreationPanel}
            />
          )}
      </Box>
    </ReviewOrder>
  );
};

export default OrderCreation;
