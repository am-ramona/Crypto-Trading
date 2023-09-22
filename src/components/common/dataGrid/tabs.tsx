import React from "react"
// import { JsxElement } from "typescript"
// import { useStateWithCallbackLazy } from "use-state-with-callback"
import {
  Tabs,
  Tab,
  Box
} from "@mui/material"
import { TabScrollButton, withStyles } from "@material-ui/core"
import BoxComponent from "../box"
import CustomizedTables from "./dataTable"

/*** Types & Interfaces ***/
// type SvgInHtml = HTMLElement & SVGElement;
// type first = Array<string | number | ReactElement>;
// type third = Array<string | ReactElement | number | JsxElement>;
// type second = third[];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface LabTabsProps {
  id?: string;
  pages: Array<string>;
  isRecentTradesLiquidity?: (arg: boolean) => void;
  addNewPosition?: Array<any>;
  leverageValue?: number;
  minLeverageValue?: number;
  maxLeverageValue?: number;
  addNewEntry?: (arg: boolean) => void;
  positionsPanel?: Array<any>;
  updatePositionsPanel?: (arg: Array<any>) => void;
  updateLeverageValue?: (arg: number) => void;
  leveragePercentage?: number;
  calculateUsdcValue?: (arg: number, arg1: any) => void;
  children?: string | null | undefined;
}
/*** End ***/

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyTabScrollButton = withStyles((theme) => ({
  root: {
    width: 28,
    color: "green !important",
    overflow: "hidden",
    transition: "width 0.5s",
    "&.Mui-disabled": {
      width: 0,
    },
  },
}))(TabScrollButton);

const ordersPanel = [
  [
    "Market",
    "Direction",
    "Type",
    "Size Filled / Ordered",
    "Avg. Fill Price",
    "Status",
    "Date",
  ],
  [
    "BTC-PERP",
    "LONG",
    "MARKET",
    "0.5 BTC / 0.5 BTC",
    "$41,260.5",
    "FILLED",
    "1 week ago",
  ],
  [
    "ETH-PERP",
    "SHORT",
    "MARKET",
    "10 ETH / 10 ETH",
    "$2,900.95",
    "FILLED",
    "2 weeks ago",
  ],
];
// const orders = ordersPanel.slice(1);

const liquidationsPanel = [
  [
    "Market",
    "Direction",
    "Size",
    "Notional",
    "Avg. Entry",
    "Exit",
    "Fee",
    "Type",
    "Date",
  ],
  [
    "BTC-PERP",
    "LONG",
    0.5,
    "$20,660.0",
    "$41,260.0",
    "$40,260.0",
    "$3.0",
    "PARTIAL",
    "1 week ago",
  ],
  [
    "ETH-PERP",
    "SHORT",
    10,
    "$29,000.0",
    "$2,900.95",
    "$2,890.95",
    "$3.0",
    "PARTIAL",
    "2 weeks ago",
  ],
];
// const liquidations = liquidationsPanel.slice(1);

const fundingPaymentsPanel = [
  [
    "Market",
    "Direction",
    "Size",
    "Notional",
    "Payment",
    "Funding Rate",
    "Date",
  ],
  [
    "BTC-PERP",
    "LONG",
    0.5,
    "$20,660.0",
    "-$0.243782",
    "-0.0050%",
    "5/10/2022, 2:00:00AM",
  ],
  [
    "ETH-PERP",
    "SHORT",
    10,
    "$29,000.0",
    "-$0.243782",
    "-0.0044%",
    "5/10/2022, 1:00:00AM",
  ],
  [
    "BTC-PERP",
    "LONG",
    0.5,
    "$20,660.0",
    "-$0.243782",
    "-0.0064%",
    "5/10/2022, 12:00:00AM",
  ],
  [
    "ETH-PERP",
    "SHORT",
    10,
    "$29,000.0",
    "-$0.243782",
    "-0.1525%",
    "5/9/2022, 11:00:00PM",
  ],
];
// const fundingPayments = fundingPaymentsPanel.slice(1);

const unrealizedFundingPanel = [
  ["Market", "Direction", "Position Size", "Payment", "Market Funding Rate"],
  ["BTC-PERP", "LONG", "0.5 BTC", "-0.98 USDC", "-$191.6525"],
  ["ETH-PERP", "SHORT", "10 ETH", "-0.98 USDC", "-$191.6525"],
];
// const unrealizedFunding = unrealizedFundingPanel.slice(1);

const transfersPanel = [
  ["Amount", "Type", "Date"],
  ["500.00 USDC", "Withdraw", "5/10/2022, 12:00:00 AM"],
  ["10,000.00 USDC", "Deposit", "5/10/2022, 12:00:00 AM"],
];
// const transfers = transfersPanel.slice(1);

// function useForceUpdate() {
//   const [value, setValue] = React.useState(0); // integer state
//   window.alert("rerendered");
//   return () => setValue((value) => value + 1); // update state to force render
//   // An function that increment 👆🏻 the previous state like here
//   // is better than directly setting `value + 1`
// }

/**
 * Create the table where data is displayed.
 * @type {(arr : Array<any>, d : number) => number}
 * @param {LabTabsProps} props - properties for the function.
 * @return {JsxElement} - HTML table.  
 */

export default function LabTabs(props: LabTabsProps) {
  const {
    id,
    pages,
    isRecentTradesLiquidity,
    leverageValue,
    minLeverageValue,
    maxLeverageValue,
    leveragePercentage,
    addNewPosition,
    addNewEntry,
    updatePositionsPanel,
    updateLeverageValue,
    calculateUsdcValue
  } = props;

  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [PositionsPanel, setPositionsPanel] = React.useState<any>(//[positionsPanel]);
    [[
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
    ]]);
  const [PositionsPanelCloned,
    setPositionsPanelCloned] = React.useState<Array<any>>(PositionsPanel);

  const [finalPositionsPanel,
    setFinalPositionsPanel] = React.useState<Array<any>>(PositionsPanel);

  // const forceUpdate = useForceUpdate();
  // useForceUpdate();

  React.useEffect(() => {
    if (addNewPosition?.length === 0) return;
    async function asyncCall() {
      try {
        if (
          addNewPosition &&
          addNewPosition.length > 0
        ) {
          setPositionsPanelCloned([...PositionsPanelCloned, addNewPosition]);
          setFinalPositionsPanel([...PositionsPanelCloned, addNewPosition]);
        }
      } catch (e) {
        console.log("Error", e);
        //     if (error instanceof CreationError) {
        //         console.error(error) // from creation
        //     } else {
        //         throw error;
        //     }
      } finally {
        console.log("Add a new Position to the Panel is done.");
      }
    }
    asyncCall();
  }, [addNewPosition]);

  // const setSanitizedIndex = useCallback(
  //   (unsanitizedIndex) => setIndex(sanitizeIndex(unsanitizedIndex)),
  //   [sanitizeIndex, setIndex],
  // );

  React.useEffect(() => {
    if (PositionsPanelCloned.length === 1) return;
    async function makeCall() {
      try {

        const finalPositionsPanelCopy = [...finalPositionsPanel];

        if (
          finalPositionsPanelCopy.length === 2 &&
          addNewPosition &&
          addNewEntry &&
          addNewPosition.length > 0
        ) {
          setPositionsPanel([...PositionsPanel, addNewPosition]);
          addNewEntry(true);
        } else if (
          addNewPosition &&
          addNewEntry &&
          finalPositionsPanelCopy.length > 2 &&
          !finalPositionsPanelCopy
            .slice(0, -1)
            .flat()
            .includes(addNewPosition[0])
        ) {
          setPositionsPanel([...PositionsPanel, addNewPosition]);
          addNewEntry(true);
        } else if (
          addNewPosition &&
          addNewEntry &&
          finalPositionsPanelCopy.length > 2 &&
          finalPositionsPanelCopy
            .slice(0, -1)
            .flat()
            .includes(addNewPosition[0])
        ) {
          addNewEntry(false);
          let sum: number = 0;
          let withoutFirst = finalPositionsPanelCopy.slice(1);
          let finalEntry = [withoutFirst[withoutFirst.length - 1][0]];
          let newArray = withoutFirst.filter((currentValue, index, arr) => {
            if (currentValue[0] === addNewPosition[0]) return arr;
          });
          newArray.map((array: Array<any>, index) => {
            if (array[1] === "Long") {
              sum += +array[2];
              return "+";
            }
            sum -= +array[2];
            return "-";
          });
          if (sum >= 0) finalEntry.push("Long");
          else finalEntry.push("Short");
          finalEntry.push(Math.abs(sum));
          finalEntry.push(
            "$20,660.0",
            "$41,260.0",
            "$40,260.0",
            "$38,260.0",
            "-$38.0",
            "-$2.0",
            "+$0.55"
          );

          const updatedItems = [...PositionsPanel].map((el) =>
            el[0] === addNewPosition[0] ? finalEntry : el
          );
          setPositionsPanel(updatedItems);
          setFinalPositionsPanel(updatedItems);
        }
      } catch (e) {
        console.log('open or edit position error :', e);
      } finally {
        console.log("We do cleanup here, Open or Edit position is done.");
      }
    }

    //   } catch (error) {
    //     if (error instanceof CreationError) {
    //         console.error(error) // from creation
    //     } else {
    //         throw error;
    //     }
    // }

    makeCall();
  }, [PositionsPanelCloned]);

  React.useEffect(() => {
    if (updatePositionsPanel) {
      updatePositionsPanel(PositionsPanel);
      setPositionsPanel(PositionsPanel);
      setPositionsPanelCloned(PositionsPanel);
    }

  }, [PositionsPanel, updatePositionsPanel]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const updateFinalPositionsPanel = React.useCallback(
    (finalPositionsPanel: Array<any>): void => {
      setFinalPositionsPanel(finalPositionsPanel);
    },
    [finalPositionsPanel]
  );

  const handleClickTab = React.useCallback(
    (page: any): void => {
      if (page === 'Recent Trades / Liquidity') {
        isRecentTradesLiquidity!(true) // Or isRecentTradesLiquidity?.(true)
        return;
      }
      isRecentTradesLiquidity!(false)
    }, []
  )

  const open = Boolean(anchorEl);
  // const idd = open ? "simple-popover" : undefined;

  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        maxWidth: { xs: "93vw", md: "100vw" },
        gridArea: "footer",
        height: "max-content",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          // The MuiTabScrollButton name can be used for providing default props or style overrides at the theme level.
          ScrollButtonComponent={MyTabScrollButton}
          // centered
          style={{
            justifyContent:
              id === "portfolio-dataGrid" ? "space-between" : "none",
            width: id === "portfolio-dataGrid" ? "100%" : "fit-content",
          }}
          TabIndicatorProps={{ style: { background: "#ff31b9ff" } }}
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "space-between",
            },
            "& .MuiTabs-scroller": {
              maxWidth: { xs: "71vw", sm: "100vw" },
            },
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable tabs"
        >
          {pages.map((page: any, index) => {
            return (
              <Tab key={index}
                sx={{
                  "&.Mui-selected": {
                    borderColor: "#951369",
                    color: "#ff31b9ff",
                  },
                  "&.Mui-disabled": {
                    borderColor: "rgb(255 49 185 / 38%) !important",
                    color: "rgb(255 49 185 / 38%) !important",
                  },
                }}
                label={page}
                {...a11yProps(index)}
                disabled={
                  page === "Orders" //|| page === "Recent Trades / Liquidity"
                }
                onClick={() => handleClickTab(page)}
              />
            );
          })}
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <BoxComponent>
          <CustomizedTables name="positions"
            arr={PositionsPanel}
            updateArr={updatePositionsPanel}
            leverageValue={leverageValue}
            minLeverageValue={minLeverageValue}
            maxLeverageValue={maxLeverageValue}
            updateLeverageValue={updateLeverageValue}
            calculateUsdcValue={calculateUsdcValue}
            leveragePercentage={leveragePercentage}
            updateFinalPositionsPanel={updateFinalPositionsPanel}
          />
        </BoxComponent>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BoxComponent>
          <CustomizedTables name="orders" arr={ordersPanel} />
        </BoxComponent>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BoxComponent>
          <CustomizedTables name="liquidations" arr={liquidationsPanel} />
        </BoxComponent>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BoxComponent>
          <CustomizedTables name="fundingPayments" arr={fundingPaymentsPanel} />
        </BoxComponent>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <BoxComponent>
          <CustomizedTables
            name="unrealizedFunding"
            arr={unrealizedFundingPanel}
          />
        </BoxComponent>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <BoxComponent>
          <CustomizedTables name="transfers" arr={transfersPanel} />
        </BoxComponent>
      </TabPanel>
    </Box>
  );
}
