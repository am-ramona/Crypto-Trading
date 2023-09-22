import BoxComponent from "./box";
import CustomizedTables from "./dataGrid/dataTable";
import {
  TextField,
  Paper,
  Typography,
  Box,
  Button,
  Slider,
  styled
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

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
  const classes = useStyles();

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
            borderRadius: 0
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
            padding: { xs: "25px 15px", md: "15px 15px" }
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
                <TextField
                  id="BTC-size"
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
                borderRadius: 0
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
            borderRadius: 0
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
            padding: { xs: "25px 15px", md: "15px 15px" }
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
