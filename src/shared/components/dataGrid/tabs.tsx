import React, {
  // ReactElement,
  // useEffect,
  // useLayoutEffect,
  // useState,
} from "react"
// import { JsxElement } from "typescript"
// import { useStateWithCallbackLazy } from "use-state-with-callback"
import { Tabs, Tab, 
        //  Typography, 
         Box } from "@mui/material"
// import Tab from '@mui/material/Tab'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import TabScrollButton from '@material-ui/core/TabScrollButton'
import { TabScrollButton, withStyles } from "@material-ui/core"
import BoxComponent from "../boxComponent/box"
import CustomizedTables from "./dataTable"
// import { styled, 
//          Popover 
//         } from "@mui/material"
// import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined"
// import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined"

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

// const pages = [
//   "Positions",
//   "Orders",
//   "Liquidations",
//   "Funding Payments",
//   "Unrealized Funding",
//   "Transfers",
// ];

// const TabPanelStyled = styled(TabPanel)({
//   my: 2,
//   color: "#ff31b9ff",
//   border: "1px solid #ff31b9ff",
//   textDecoration: "none",
//   display: "grid",
//   alignContent: "center",
//   justifyContent: "center",
//   height: "300px",
// });

// const StyledTabs = styled(Tabs)({
//   "& .MuiTabs-flexContainer": {
//     width: "100vw",
//     justifyContent: "space-between",
//     display: "flex",
//   },
// });

// const hideElement = (arr: any, el) =>{
//   return arr.filter(e => e !== el)
// }

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

// const MyTabScrollButton2 = styled(TabScrollButton)({
//   root: {
//     color: "#ff31b9ff !important",
//     // width: 28,
//     // overflow: 'hidden',
//     // transition: 'width 0.5s',
//     "&.Mui-disabled": {
//       width: 0,
//     },
//   },
// });

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
    // children,
    isRecentTradesLiquidity,
    leverageValue,
    minLeverageValue,
    maxLeverageValue,
    leveragePercentage,
    addNewPosition,
    addNewEntry,
    // positionsPanel,
    updatePositionsPanel,
    updateLeverageValue,
    calculateUsdcValue
  } = props;

  const [value, setValue] = React.useState(0);
  // const [PositionsPanelsLength, 
  //        SetPositionsPanelsLength
  //       ] = React.useState<number>(3);
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
  //   // [
  //   //   "BTC-PERP",
  //   //   "LONG",
  //   //   0.5,
  //   //   "$20,660.0",
  //   //   "$41,260.0",
  //   //   "$40,260.0",
  //   //   "$38,260.0",
  //   //   "-$38.0",
  //   //   "-$2.0",
  //   //   "+$0.55",
  //   // ],
  //   // [
  //   //   "BTC-PERP",
  //   //   "SHORT",
  //   //   10,
  //   //   "$29,000.0",
  //   //   "$2,900.95",
  //   //   "$2,890.95",
  //   //   "$3,000.0",
  //   //   "+$100.0",
  //   //   "-$2.0",
  //   //   "+$0.55",
  //   // ],
  //   // [
  //   //   "BTC-PERP",
  //   //   "SHORT",
  //   //   10,
  //   //   "$29,000.0",
  //   //   "$2,900.95",
  //   //   "$2,890.95",
  //   //   "$3,000.0",
  //   //   "+$100.0",
  //   //   "-$2.0",
  //   //   "+$0.55",
  //   // ],
  //   // [
  //   //   "BTC-PERP",
  //   //   "SHORT",
  //   //   10,
  //   //   "$29,000.0",
  //   //   "$2,900.95",
  //   //   "$2,890.95",
  //   //   "$3,000.0",
  //   //   "+$100.0",
  //   //   "-$2.0",
  //   //   "+$0.55",
  //   // ],
  // ]);
  const [PositionsPanelCloned,
    setPositionsPanelCloned] = React.useState<Array<any>>(PositionsPanel);

  const [finalPositionsPanel,
    setFinalPositionsPanel] = React.useState<Array<any>>(PositionsPanel);

  // const [flag, setFlag] = React.useState<boolean>(false)
  // const timelineLoaded = React.useRef<boolean>(false);
  // const forceUpdate = useForceUpdate();
  // useForceUpdate();

  // const positionsPanel = [
  //     ['Market', 'Direction', 'Size', 'Notional', 'Avg. Entry', 'Est. Exit', 'Est. Liq Price', 'Tot. PnL', 'Fund. PnL', 'Next Fund.', 'closeAllPos'],
  //     ['BTC-PERP', 'LONG', 0.5, '$20,660.0', '$41,260.0', '$40,260.0', '$38,260.0', '-$38.0', '-$2.0', '+$0.55', <><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="1" component="svg" onClick={(e: any) => hideElement(e, 1)} style={{ justifySelf: 'start' }} /></>],
  //     ['BTC-PERP', 'SHORT', 10, '$29,000.0', '$2,900.95', '$2,890.95', '$3,000.0', '+$100.0', '-$2.0', '+$0.55', <><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="2" component="svg" onClick={(e: any) => hideElement(e, 2)} style={{ justifySelf: 'start' }} /></>]
  // ]
  // const positions = positionsPanel.slice(1);

  // console.log("raw PositionsPanel", PositionsPanel);
  // console.log("raw PositionsPanelCloned", PositionsPanelCloned);
  // console.log('raw PositionsPanel', PositionsPanel)
  // console.log("raw finalPositionsPanel", finalPositionsPanel);

  React.useEffect(() => {
    if (addNewPosition?.length === 0) return;
    async function asyncCall() {
      // console.log("calling");
      try {
        // console.log("useEffect tabs addNewPosition", addNewPosition);
      //   if (addNewPosition)
      //   {  console.log("useEffect tabs addNewPosition", addNewPosition);
      //     console.log("useEffect tabs addNewPosition.length", addNewPosition.length);
      // }
        // console.log("useEffect tabs PositionsPanel", PositionsPanel);
        // console.log(
        //   "useEffect tabs PositionsPanelCloned",
        //   PositionsPanelCloned
        // );
        // const positionsCloned = [...PositionsPanel];
        // positionsCloned.push(addNewPosition)
        // setPositionsPanel(positionsCloned)

        // positionsCloned.map((panel: any) => {
        //   console.log("a positionsCloned panel", panel);

        if (
          addNewPosition &&
          addNewPosition.length > 0 //&&
          // !panel.includes(addNewPosition[0])
        ) {
          // console.log("addNewPosition", addNewPosition);
          // console.log("does not exist before");
          // setPositionsPanel([...PositionsPanel, addNewPosition]);
          // const copy = [...PositionsPanelCloned];
          // copy.push(addNewPosition);
          // console.log("test, addNewPosition", copy, addNewPosition);
          // const result = appendLastElement(addNewPosition);
          // console.log("appended result", result);
          setPositionsPanelCloned([...PositionsPanelCloned, addNewPosition]);
          setFinalPositionsPanel([...PositionsPanelCloned, addNewPosition]);

          // Update the document title using the browser API    document.title = `You clicked ${count} times`;
          // console.log(
          //   "useEffect tabs PositionsPanelCloned after add",
          //   PositionsPanelCloned
          // );
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

    // });

    // if (addNewPosition && addNewPosition.length > 0) {
    //   setPositionsPanel([...PositionsPanel, addNewPosition]);
    //   // Update the document title using the browser API    document.title = `You clicked ${count} times`;
    //   console.log("useEffect tabs PositionsPanel after add", PositionsPanel);
    // }
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
        // const PositionsPanelClonedCloned = [...PositionsPanel];
        // console.log("first PositionsPanel", PositionsPanel);
        // console.log("first finalPositionsPanelCopy", finalPositionsPanelCopy);
        // console.log("makeCall PositionsPanelCloned", PositionsPanelCloned);
        // console.log("open or edit position addNewEntry", addNewEntry);

        if (
          finalPositionsPanelCopy.length === 2 &&
          addNewPosition &&
          addNewEntry &&
          addNewPosition.length > 0
        ) {
          // console.log(
          //   "PositionsPanelClonedCloned.length === 2, open a position"
          // );
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
          //    console.log('flatten, pop flat, flatten PositionsPanelClonedCloned include, addNewPosition[0]', PositionsPanelClonedCloned.flat(), PositionsPanelClonedCloned.pop().flat(), PositionsPanelClonedCloned.pop().flat().includes(addNewPosition[0]), addNewPosition[0])
          // console.log(
          //   "PositionsPanelClonedCloned.length > 2, not includes, open a position"
          // );
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
          // console.log(
          //   "include",
          //   finalPositionsPanelCopy
          //     .slice(0, -1)
          //     .flat()
          //     .includes(addNewPosition[0]),
          //   addNewPosition[0]
          // );
          // console.log(
          //   "PositionsPanelClonedCloned.length > 2, includes, edit a position"
          // );
          // console.log("PositionsPanel Editable", PositionsPanel);
          // console.log(
          //   "PositionsPanelClonedCloned Editable",
          //   finalPositionsPanelCopy
          // );
          // console.log(
          //   "PositionsPanelClonedCloned Editable length",
          //   finalPositionsPanelCopy.length
          // );
          // console.log("tabs slice", finalPositionsPanelCopy.slice(1));
          let sum: number = 0;
          let withoutFirst = finalPositionsPanelCopy.slice(1);
          // let BTCArray: Array<any> = [];
          // let ETHArray: Array<any> = [];
          // console.log("withoutFirst original", withoutFirst);
          let finalEntry = [withoutFirst[withoutFirst.length - 1][0]];
          // let operatorsArr = withoutFirst
          //     .map((finalPositionPanelCopy: Array<any>, index) => {
          //       console.log("finalPositionPanelCopy[2]", +finalPositionPanelCopy[2]);
          //       // if (finalPositionPanelCopy[0] === 'BTC-PERP' ) BTCArray.push(finalPositionPanelCopy)
          //       // if (finalPositionPanelCopy[0] === 'ETH-PERP' ) ETHArray.push(finalPositionPanelCopy)
          //    });
          // console.log("finalEntry 1", finalEntry);
          let newArray = withoutFirst.filter((currentValue, index, arr) => {
            // console.log("currentValue, index, arr", currentValue, index, arr);
            if (currentValue[0] === addNewPosition[0]) return arr;
          });
          // console.log("newArray", newArray);
          newArray.map((array: Array<any>, index) => {
            if (array[1] === "Long") {
              sum += +array[2];
              // console.log("sum inside", sum);
              return "+";
            }
            sum -= +array[2];
            // console.log("sum inside", sum);
            return "-";
          });
          // console.log("sum", sum);
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

          // console.log("P P see finalEntry", finalEntry);
          // const positionsPanelCopy = [...PositionsPanel];
          // let pop = positionsPanelCopy.pop();
          // console.log("P P see PositionsPanelCloned", PositionsPanelCloned);
          // const PositionsPanelClonedCopy = [...PositionsPanelCloned];
          // const PositionsPanelClonedCopyWithoutLast =
          //   PositionsPanelClonedCopy.slice(0, -1);
          // var foundIndex = PositionsPanelClonedCopyWithoutLastFirst.findIndex(x => x[0] == addNewPosition[0]);
          // PositionsPanelClonedCopyWithoutLastFirst[foundIndex] = item;
          // const PositionsPanelClonedCopyWithoutLastFirst = PositionsPanelClonedCopyWithoutFirst.slice(0, - 1);
          // console.log(
          //   "P P see PositionsPanelClonedCopyWithoutLast",
          //   PositionsPanelClonedCopyWithoutLast
          // );
          // console.log("P P see pop", pop);
          // console.log("P P see positionsPanelCopy", positionsPanelCopy);
          const updatedItems = [...PositionsPanel].map((el) =>
            el[0] === addNewPosition[0] ? finalEntry : el
          );
          // const updatedItems = [].concat(...PositionsPanelClonedCopyWithoutLast.map(el => el[0] == addNewPosition[0] ));
          // console.log("updatedItems", updatedItems);
          // const uniq = [...new Set(updatedItems)];
          setPositionsPanel(updatedItems);
          setFinalPositionsPanel(updatedItems);
          // console.log("concat", positionsPanelCopy.concat([finalEntry]));
          // console.log("with similarity PositionsPanel", PositionsPanel);
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

  // useEffect(() => {
  //    setPositionsPanelCloned(finalPositionsPanel)
  // }, [finalPositionsPanel])

  // useEffect(
  //   () => setSanitizedIndex(finalPositionsPanel),
  //   [setSanitizedIndex, finalPositionsPanel],
  // );

  // console.log("PositionsPanel on root", PositionsPanel);

  // useEffect(() => {

  // }, [PositionsPanel])

  React.useEffect(() => {
    // Update the document title using the browser API document.title = `You clicked ${count} times`;
    // console.log("useEffect PositionsPanel", PositionsPanel);
    // setPositionsPanelCloned(PositionsPanel);
    if (updatePositionsPanel) {
      // console.log('updatePositionsPanel called')
      // console.log('useEffect PositionsPanel', PositionsPanel)
      updatePositionsPanel(PositionsPanel);
      setPositionsPanel(PositionsPanel);
      // setFinalPositionsPanel(PositionsPanel);
      setPositionsPanelCloned(PositionsPanel);
    }
    //   PositionsPanel.some((panel:any) =>
    //   console.log('a position panel', panel)
    //     // panel.includes(value)
    // );
    // PositionsPanel.some((panel:any) => {
    //   console.log('a positionsCloned panel', panel)

    //     if (addNewPosition && addNewPosition.length > 0 && !panel.includes(addNewPosition[0])) {
    //       console.log('addNewPosition[0]', addNewPosition[0])
    //       console.log('does not exist before')
    //       setPositionsPanel([...PositionsPanel, addNewPosition]);
    //       // Update the document title using the browser API    document.title = `You clicked ${count} times`;
    //       console.log("useEffect tabs PositionsPanel after add", PositionsPanel);
    //     }
    //   });
  }, [PositionsPanel, updatePositionsPanel]);

  // React.useEffect(() => {
  //   // Update the document title using the browser API    document.title = `You clicked ${count} times`;
  //   // console.log("useEffect PositionsPanelsLength", PositionsPanelsLength);
  // }, [PositionsPanelsLength]);

  // const appendLastElement = React.useCallback(
  //   async (arg: any) => {
  //     // setArrCloned(arr, () => console.log("done"));
  //     // await setArrCloned(arr, () => console.log("done"));
  //     var actions: third = [];
  //     let positionsPanelWithAction: second = [];

  //     return arg.map((ele: third, i: number) => {
  //       if (ele) {
  //         console.log("useEffect ele", Array.isArray(ele));
  //         console.log("inside panel", arg);
  //         // console.log("inside ele", ele);
  //         // console.log("inside arr", arr);
  //         // console.log("inside arrCloned", arrCloned);
  //         // console.log("inside panelActionsCombined", panelActionsCombined);

  //         actions.push(
  //           <div id={`lastElement${i}`} key={`${i}`}>
  //             <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
  //             <CancelPresentationOutlinedIcon
  //               key={`${i}`}
  //               component="svg"
  //               // aria-describedby={id}
  //               style={{ justifySelf: "start" }}
  //               onClick={(event: any) => hideElement(event, `lastElement${i}`)}
  //             // onClick={handlePopUpClick}
  //             />
  //             <Popover
  //               id={open ? "simple-popover" : undefined}
  //               open={open}
  //               anchorEl={anchorEl}
  //               onClose={handleClosePopup}
  //               anchorOrigin={{
  //                 vertical: "bottom",
  //                 horizontal: "left",
  //               }}
  //             >
  //               <Typography sx={{ p: 2 }}>
  //                 The content of the Popover.
  //               </Typography>
  //             </Popover>
  //             {/* <div>
  //     <Button aria-describedby={id} variant="contained" onClick={handleClick}>
  //       Open Popover
  //     </Button>
  //     <Popover
  //       id={id}
  //       open={true}
  //       anchorEl={anchorEl}
  //       onClose={handleClose}
  //       anchorOrigin={{
  //         vertical: 'bottom',
  //         horizontal: 'left',
  //       }}
  //     >
  //       <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
  //     </Popover>
  //   </div> */}
  //           </div>
  //         );
  //         let eleCopy = ele.slice();
  //         positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]];
  //         return positionsPanelWithAction[i];
  //       }
  //     });
  //   },
  //   [addNewPosition]
  // );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClosePopup = () => {
  //   setAnchorEl(null);
  //   // setOpen(false);
  // };

  // function containsDuplicates(array: any) {
  //   if (array.length !== new Set(array).size) {
  //     return true;
  //   }

  //   return false;
  // }

  // let tabsMapping = new Map<string, number>([
  //   ["Positions", 0],
  //   ["Orders", 1],
  //   ["Liquidations", 2],
  //   ["Funding Payments", 3],
  //   ["Unrealized Funding", 4],
  //   ["Transfers", 5],
  // ]);

  // const updateState = () => {

  // }

  //  let updateState = new Promise(function(myResolve, myReject) {
  //         // "Producing Code" (May take some time)
  //         let copy = [...PositionsPanel];
  // let data = copy.filter((panel: any) => !panel.find((el: any) => (typeof el === 'object' && el.props.id===id)))
  // console.log('data', data)
  // setPositionsPanel(data);

  //           myResolve(); // when successful
  //           myReject();  // when error
  //         });

  // printDelayed is a 'Promise<void>'
  // async function printDelayed(elements: string[]) {
  //       await delay(400);
  //       console.log(elements);
  //   }

  //   async function delay(milliseconds: number) {
  //     return new Promise<void>((resolve) => {
  //       setTimeout(resolve, milliseconds);
  //     });
  //   }
  //   printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
  //     console.log();
  //     console.log("Printed every element!");
  //   });

  //   function resolveAfter2Seconds() {
  //     return new Promise(resolve => {
  //       setTimeout(() => {
  //         resolve('resolved');
  //       }, 2000);
  //     });
  //   }

  //   async function asyncCall() {
  //     console.log('calling');
  //     const result = await resolveAfter2Seconds();
  //     console.log(result);
  //     // expected output: "resolved"
  //   }

  // "Consuming Code" (Must wait for a fulfilled Promise)
  // updateState.then(
  //   function(value) { /* code if successful */ },
  //   function(error) { /* code if some error */ }
  // );

  // const hideElement = (event: React.MouseEvent<HTMLElement>, id: any) => {
  //   // forceUpdate();

  //   // console.log('event', event)
  //   // console.log('event.target', event.target)
  //   // console.log('hideElement index', (event.target as any).index)
  //   // const { target }: any = event;
  //   // console.log('any')
  //   // console.log('index', index)
  //   // console.log('last elememt type', typeof PositionsPanel[1][PositionsPanel[1][PositionsPanel[1].length - 1]])

  //   SetPositionsPanelsLength(PositionsPanelsLength - 1);

  //   //             const newState = PositionsPanel.map((panel: any) => {
  //   //               // 👇️ if id equals 2, update country property
  //   //               const startsWithdiv = panel.filter((el: any) => typeof el !== 'object' && el.key === 1);
  //   //             // const num2x = panel.map((n: any) => {if ((typeof n) === 'object') console.log('n.key', n.key)})
  //   // // console.log('startsWithdiv', startsWithdiv)
  //   //               // 👇️ otherwise return object as is
  //   //                 return startsWithdiv
  //   //             });
  //   console.log("hideElement PositionsPanel", PositionsPanel);
  //   let copy = [...PositionsPanel];
  //   let data = copy.filter(
  //     (panel: any) =>
  //       !panel.find((el: any) => typeof el === "object" && el.props.id === id)
  //   );
  //   console.log("data", data);
  //   setPositionsPanel(data);
  //   // forceUpdate();
  //   //   const find = PositionsPanel.find((panel: any) => {
  //   //   return panel.some((item: any) => {
  //   // //^^^^^^
  //   //     return item.key === 1;
  //   //   });
  //   // });

  //   // console.log('find', find)
  //   // console.log('newState', newState)

  //   // PositionsPanel.find(x => x[x.length - 1].includes === '45').foo;

  //   // type FindElement = {
  //   //     name: string;
  //   //     author: string;
  //   //     price: number;
  //   //   };

  //   // const match = PositionsPanel.find((element: HTMLElement) => {
  //   //     console.log('PositionPanel new outside', PositionsPanel)
  //   //     // if (element.includes()) {
  //   //     //   setPositionsPanel(PositionsPanel.filter((panel: any, i: any) => panel !== element));
  //   //     //   console.log('PositionPanel new', PositionsPanel)
  //   //     //   return true;
  //   //     // }
  //   //   });
  //   //   setPositionPanel(PositionPanel.filter((panel, i) => i !== index));
  //   //   const removeItem = index => setPositionPanel(o => ({
  //   //     ...o,
  //   //     c: PositionPanel.filter((_, i) => i !== index)
  //   //   }))
  //   //   const removeItem = index => setObj(o => {
  //   // console.log('hideElement PositionsPanel', PositionsPanel)
  //   // const positionsArray = [...PositionsPanel]

  //   // positionsArray.splice(PositionsPanel.length - 1,1)
  //   // positionsArray.shift();
  //   // const newPositions = PositionsPanel.filter((panel, i) => i !== index)
  //   // console.log('newPositions', newPositions)
  //   // console.log('positionsArray', positionsArray)
  //   // setPositionsPanel(positionsArray);
  //   //     let newPositions = PositionsPanel.map((el, i) => (
  //   //         i !== index ? [...el]: el
  //   //   ))
  //   // let newPositions = [...PositionsPanel];
  //   //   newPositions[index] = {...newPositions[index], key: value};

  //   // console.log('newPositions', newPositions)
  //   //   setPositionsPanel([["tralal"],["tralal"]]);
  //   //   setPositionsPanel(positionsArray);
  //   //   setPositionsPanel(positionsArray)

  //   //     return { ...obj, c }
  //   //   })
  //   // console.log('PositionsPanel.length', PositionsPanel.length)

  //   // setPositionPanel(PositionPanel.filter((panel, i) => i !== (event.target as any).index));
  // };

  //   useEffect(() =>
  // //   console.log('panels', panels)
  //   ), []

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const updatePositionsPanel = useCallback(
  //   (value) => {
  //     setPositionsPanel(value)
  //   },
  //   [],
  // );

  const updateFinalPositionsPanel = React.useCallback(
    (finalPositionsPanel: Array<any>): void => {
      setFinalPositionsPanel(finalPositionsPanel);
    },
    [finalPositionsPanel]
  );

  const handleClickTab = React.useCallback(
    (page: any): void => {
      // console.log('page', page)
      if (page === 'Recent Trades / Liquidity') { 
        // console.log('Recent Trades / Liquidity')
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
          {pages.map((page: any, index)=> {
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
          {/* { for (let [key, value] of tabsMapping) {
     <Tab
     label={`Item ${value}`} {...a11yProps(value)}
     >
       ${key}
     </Tab>           //"Lokesh" 37 "Raj" 35 "John" 40
} */}
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <BoxComponent>
          <CustomizedTables name="positions"
            arr={PositionsPanel}
            // addNewEntry={addNewEntry}
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
