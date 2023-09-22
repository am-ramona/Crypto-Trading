// import React, { useEffect, useState } from "react";
// import { useStateWithCallbackLazy } from "use-state-with-callback";
// // import { ReactElement } from "react";
// import { Tabs, Tab, Typography, Box } from "@mui/material";
// // import Tab from '@mui/material/Tab';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import TabScrollButton from '@material-ui/core/TabScrollButton';
// import { TabScrollButton, withStyles } from "@material-ui/core";
// import BoxComponent from "../box";
// import CustomizedTables from "./dataTable";
// import { styled } from "@mui/material";
// import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
// import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

// /*** Types & Interfaces ***/
// type SvgInHtml = HTMLElement & SVGElement;

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// interface LabTabsProps {
//   id?: string;
//   pages: Array<string>;
//   addNewPosition?: Array<any>;
//   addNewEntry?: (arg: boolean) => void;
//   updatePositionsPanel?: (arg: Array<any>) => void;
//   children?: string | null | undefined;
// }
// /*** End ***/

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// // const pages = [
// //   "Positions",
// //   "Orders",
// //   "Liquidations",
// //   "Funding Payments",
// //   "Unrealized Funding",
// //   "Transfers",
// // ];

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

// // const hideElement = (arr: any, el) =>{
// //   return arr.filter(e => e !== el)
// // }

// const MyTabScrollButton = withStyles((theme) => ({
//   root: {
//     width: 28,
//     color: "green !important",
//     overflow: "hidden",
//     transition: "width 0.5s",
//     "&.Mui-disabled": {
//       width: 0,
//     },
//   },
// }))(TabScrollButton);

// // const MyTabScrollButton2 = styled(TabScrollButton)({
// //   root: {
// //     color: "#ff31b9ff !important",
// //     // width: 28,
// //     // overflow: 'hidden',
// //     // transition: 'width 0.5s',
// //     "&.Mui-disabled": {
// //       width: 0,
// //     },
// //   },
// // });

// const ordersPanel = [
//   [
//     "Market",
//     "Direction",
//     "Type",
//     "Size Filled / Ordered",
//     "Avg. Fill Price",
//     "Status",
//     "Date",
//   ],
//   [
//     "BTC-PERP",
//     "LONG",
//     "MARKET",
//     "0.5 BTC / 0.5 BTC",
//     "$41,260.5",
//     "FILLED",
//     "1 week ago",
//   ],
//   [
//     "ETH-PERP",
//     "SHORT",
//     "MARKET",
//     "10 ETH / 10 ETH",
//     "$2,900.95",
//     "FILLED",
//     "2 weeks ago",
//   ],
// ];
// const orders = ordersPanel.slice(1);

// const liquidationsPanel = [
//   [
//     "Market",
//     "Direction",
//     "Size",
//     "Notional",
//     "Avg. Entry",
//     "Exit",
//     "Fee",
//     "Type",
//     "Date",
//   ],
//   [
//     "BTC-PERP",
//     "LONG",
//     0.5,
//     "$20,660.0",
//     "$41,260.0",
//     "$40,260.0",
//     "$3.0",
//     "PARTIAL",
//     "1 week ago",
//   ],
//   [
//     "ETH-PERP",
//     "SHORT",
//     10,
//     "$29,000.0",
//     "$2,900.95",
//     "$2,890.95",
//     "$3.0",
//     "PARTIAL",
//     "2 weeks ago",
//   ],
// ];
// const liquidations = liquidationsPanel.slice(1);

// const fundingPaymentsPanel = [
//   [
//     "Market",
//     "Direction",
//     "Size",
//     "Notional",
//     "Payment",
//     "Funding Rate",
//     "Date",
//   ],
//   [
//     "BTC-PERP",
//     "LONG",
//     0.5,
//     "$20,660.0",
//     "-$0.243782",
//     "-0.0050%",
//     "5/10/2022, 2:00:00AM",
//   ],
//   [
//     "ETH-PERP",
//     "SHORT",
//     10,
//     "$29,000.0",
//     "-$0.243782",
//     "-0.0044%",
//     "5/10/2022, 1:00:00AM",
//   ],
//   [
//     "BTC-PERP",
//     "LONG",
//     0.5,
//     "$20,660.0",
//     "-$0.243782",
//     "-0.0064%",
//     "5/10/2022, 12:00:00AM",
//   ],
//   [
//     "ETH-PERP",
//     "SHORT",
//     10,
//     "$29,000.0",
//     "-$0.243782",
//     "-0.1525%",
//     "5/9/2022, 11:00:00PM",
//   ],
// ];
// const fundingPayments = fundingPaymentsPanel.slice(1);

// const unrealizedFundingPanel = [
//   ["Market", "Direction", "Position Size", "Payment", "Market Funding Rate"],
//   ["BTC-PERP", "LONG", "0.5 BTC", "-0.98 USDC", "-$191.6525"],
//   ["ETH-PERP", "SHORT", "10 ETH", "-0.98 USDC", "-$191.6525"],
// ];
// const unrealizedFunding = unrealizedFundingPanel.slice(1);

// const transfersPanel = [
//   ["Amount", "Type", "Date"],
//   ["500.00 USDC", "Withdraw", "5/10/2022, 12:00:00 AM"],
//   ["10,000.00 USDC", "Deposit", "5/10/2022, 12:00:00 AM"],
// ];

// const transfers = transfersPanel.slice(1);

// function useForceUpdate() {
//   const [value, setValue] = useState(0); // integer state
//   window.alert("rerendered");
//   return () => setValue((value) => value + 1); // update state to force render
//   // An function that increment 👆🏻 the previous state like here
//   // is better than directly setting `value + 1`
// }

// export default function LabTabs(props: LabTabsProps) {
//   const {
//     id,
//     pages,
//     children,
//     addNewPosition,
//     addNewEntry,
//     updatePositionsPanel,
//   } = props;
//   const [value, setValue] = React.useState(0);
//   // const forceUpdate = useForceUpdate();
//   // useForceUpdate();

//   // const positionsPanel = [
//   //     ['Market', 'Direction', 'Size', 'Notional', 'Avg. Entry', 'Est. Exit', 'Est. Liq Price', 'Tot. PnL', 'Fund. PnL', 'Next Fund.', 'closeAllPos'],
//   //     ['BTC-PERP', 'LONG', 0.5, '$20,660.0', '$41,260.0', '$40,260.0', '$38,260.0', '-$38.0', '-$2.0', '+$0.55', <><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="1" component="svg" onClick={(e: any) => hideElement(e, 1)} style={{ justifySelf: 'start' }} /></>],
//   //     ['BTC-PERP', 'SHORT', 10, '$29,000.0', '$2,900.95', '$2,890.95', '$3,000.0', '+$100.0', '-$2.0', '+$0.55', <><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="2" component="svg" onClick={(e: any) => hideElement(e, 2)} style={{ justifySelf: 'start' }} /></>]
//   // ]
//   // const positions = positionsPanel.slice(1);

//   const [PositionsPanel, setPositionsPanel] = useState<any>([
//     [
//       "Market",
//       "Direction",
//       "Size",
//       "Notional",
//       "Avg. Entry",
//       "Est. Exit",
//       "Est. Liq Price",
//       "Tot. PnL",
//       "Fund. PnL",
//       "Next Fund.",
//       "closeAllPos",
//     ],
//     // [
//     //   "BTC-PERP",
//     //   "LONG",
//     //   0.5,
//     //   "$20,660.0",
//     //   "$41,260.0",
//     //   "$40,260.0",
//     //   "$38,260.0",
//     //   "-$38.0",
//     //   "-$2.0",
//     //   "+$0.55",
//     // ],
//     // [
//     //   "BTC-PERP",
//     //   "SHORT",
//     //   10,
//     //   "$29,000.0",
//     //   "$2,900.95",
//     //   "$2,890.95",
//     //   "$3,000.0",
//     //   "+$100.0",
//     //   "-$2.0",
//     //   "+$0.55",
//     // ],
//     // [
//     //   "BTC-PERP",
//     //   "SHORT",
//     //   10,
//     //   "$29,000.0",
//     //   "$2,900.95",
//     //   "$2,890.95",
//     //   "$3,000.0",
//     //   "+$100.0",
//     //   "-$2.0",
//     //   "+$0.55",
//     // ],
//     // [
//     //   "BTC-PERP",
//     //   "SHORT",
//     //   10,
//     //   "$29,000.0",
//     //   "$2,900.95",
//     //   "$2,890.95",
//     //   "$3,000.0",
//     //   "+$100.0",
//     //   "-$2.0",
//     //   "+$0.55",
//     // ],
//   ]);
//   const [PositionsPanelsLength, SetPositionsPanelsLength] = useState<number>(3);
//   const [PositionsPanelCloned, setPositionsPanelCloned] =
//     useState<any>([
//       [
//         "Market",
//         "Direction",
//         "Size",
//         "Notional",
//         "Avg. Entry",
//         "Est. Exit",
//         "Est. Liq Price",
//         "Tot. PnL",
//         "Fund. PnL",
//         "Next Fund.",
//         "closeAllPos",
//       ]]);
//   const [finalPositionsPanel, setFinalPositionsPanel] =
//     useState<any>(PositionsPanel);

//   console.log("raw PositionsPanelCloned", PositionsPanelCloned);
//   console.log("raw finalPositionsPanel", finalPositionsPanel);

//   useEffect(() => {
//     console.log("useEffect tabs addNewPosition", addNewPosition);
//     if (addNewPosition)
//       console.log(
//         "useEffect tabs addNewPosition",
//         addNewPosition
//       );
//     console.log("useEffect tabs PositionsPanel", PositionsPanel);
//     console.log("useEffect tabs PositionsPanelCloned", PositionsPanelCloned);
//     const positionsCloned = [...PositionsPanel];
//     // positionsCloned.push(addNewPosition)
//     // setPositionsPanel(positionsCloned)

//     // positionsCloned.map((panel: any) => {
//     //   console.log("a positionsCloned panel", panel);

//       if (
//         addNewPosition &&
//         addNewPosition.length > 0 //&&
//         // !panel.includes(addNewPosition[0])
//       ) {
//         console.log("addNewPosition", addNewPosition);
//         console.log("does not exist before");
//         // setPositionsPanel([...PositionsPanel, addNewPosition]);
//         const copy = [...PositionsPanelCloned]
//         copy.push(addNewPosition)
//         console.log('test, addNewPosition', copy, addNewPosition)
//         setPositionsPanelCloned([...PositionsPanelCloned, addNewPosition]);
//         setFinalPositionsPanel([...PositionsPanelCloned, addNewPosition]);

//         // Update the document title using the browser API    document.title = `You clicked ${count} times`;
//         console.log(
//           "useEffect tabs PositionsPanelCloned after add",
//           PositionsPanelCloned
//         );
//       };
//     // });

//     // if (addNewPosition && addNewPosition.length > 0) {
//     //   setPositionsPanel([...PositionsPanel, addNewPosition]);
//     //   // Update the document title using the browser API    document.title = `You clicked ${count} times`;
//     //   console.log("useEffect tabs PositionsPanel after add", PositionsPanel);
//     // }
//   }, [addNewPosition]);

//   // const setSanitizedIndex = useCallback(
//   //   (unsanitizedIndex) => setIndex(sanitizeIndex(unsanitizedIndex)),
//   //   [sanitizeIndex, setIndex],
//   // );
//   React.useEffect(() => {
//     // const setSanitizedIndex = React.useCallback((finalPositionsPanel: any)=> {
//     // Update the document title using the browser API    document.title = `You clicked ${count} times`;
//     // const PositionsPanelClonedCloned = [...PositionsPanelCloned]
//     // PositionsPanelClonedCloned.some((panel:any) => {
//     //   console.log('a PositionsPanelClonedCloned panel', panel)

//     //     if (addNewPosition && addNewPosition.length > 0 && !panel.includes(addNewPosition[0])) {
//     //       console.log('addNewPosition[0]', addNewPosition[0])
//     //       console.log('does not exist before')
//     //       // setPositionsPanel([...PositionsPanel, addNewPosition]);
//     //       setPositionsPanelCloned([...PositionsPanelCloned, addNewPosition]);
//     //       // Update the document title using the browser API    document.title = `You clicked ${count} times`;
//     //       console.log("useEffect tabs PositionsPanel after add", PositionsPanel);
//     //     }
//     //   });

//     async function makeCall() {
//       try {
//         const finalPositionsPanelCopy = [...finalPositionsPanel];
//         // const PositionsPanelClonedCloned = [...PositionsPanel];
//         console.log("first finalPositionsPanelCopy", finalPositionsPanelCopy);
//         console.log('makeCall PositionsPanelCloned', PositionsPanelCloned)
//         // console.log(
//         //   "PositionsPanelClonedCloned.length",
//         //   PositionsPanelClonedCloned.length
//         // );
//         // console.log(
//         //   "flatten PositionsPanelClonedCloned",
//         //   PositionsPanelClonedCloned.flat()
//         // );
//         // if (addNewPosition && PositionsPanelClonedCloned.length > 1)
//         //   console.log(
//         //     "PositionsPanelClonedCloned slice",
//         //     PositionsPanelClonedCloned.slice(
//         //       0,
//         //       PositionsPanelClonedCloned.length - 1
//         //     )
//         //   );
//         // console.log(
//         //   "flatten PositionsPanelClonedCloned slice",
//         //   PositionsPanelClonedCloned.slice(
//         //     0,
//         //     PositionsPanelClonedCloned.length - 1
//         //   ).  ()
//         // );
//         // if (addNewPosition && PositionsPanelClonedCloned.length > 1)
//         //   console.log(
//         //     "flatten PositionsPanelClonedCloned include",
//         //     PositionsPanelClonedCloned.slice(
//         //       0,
//         //       PositionsPanelClonedCloned.length - 1
//         //     )
//         //       .flat()
//         //       .includes(addNewPosition[0])
//         //   );
//         // console.log('PositionsPanelClonedCloned, PositionsPanelClonedCloned.pop()', PositionsPanelClonedCloned, PositionsPanelClonedCloned.pop())

//         if (
//           finalPositionsPanelCopy.length === 2 &&
//           addNewPosition &&
//           addNewEntry &&
//           addNewPosition.length > 0
//         ) {
//           console.log(
//             "PositionsPanelClonedCloned.length === 2, open a position"
//           );
//           setPositionsPanel([...PositionsPanel, addNewPosition]);
//           addNewEntry(true);
//         } else if (
//           addNewPosition &&
//           addNewEntry &&
//           finalPositionsPanelCopy.length > 2 &&
//           !finalPositionsPanelCopy
//             .slice(1)
//             .flat()
//             .includes(addNewPosition[0])
//         ) {
//           //    console.log('flatten, pop flat, flatten PositionsPanelClonedCloned include, addNewPosition[0]', PositionsPanelClonedCloned.flat(), PositionsPanelClonedCloned.pop().flat(), PositionsPanelClonedCloned.pop().flat().includes(addNewPosition[0]), addNewPosition[0])
//           console.log(
//             "PositionsPanelClonedCloned.length > 2, not includes, open a position"
//           );
//           setPositionsPanel([...PositionsPanel, addNewPosition]);
//           addNewEntry(true);
//         } else if (
//           addNewPosition &&
//           addNewEntry &&
//           finalPositionsPanelCopy.length > 2 &&
//           finalPositionsPanelCopy
//             .slice(1)
//             .flat()
//             .includes(addNewPosition[0])
//         ) {
//           addNewEntry(false);
//           console.log(
//             "PositionsPanelClonedCloned.length > 2, includes, edit a position"
//           );
//           console.log("PositionsPanel Editable", PositionsPanel);
//           console.log(
//             "PositionsPanelClonedCloned Editable",
//             finalPositionsPanelCopy
//           );
//           console.log(
//             "PositionsPanelClonedCloned Editable length",
//             finalPositionsPanelCopy.length
//           );
//           console.log("tabs slice", finalPositionsPanelCopy.slice(1));
//           let sum: number = 0;
//           let withoutFirst = finalPositionsPanelCopy.slice(1);
//           let BTCArray: Array<any> = [];
//           let ETHArray: Array<any> = [];
//           console.log('withoutFirst original', withoutFirst )
//           let finalEntry = [withoutFirst[0][0]];
//           let operatorsArr = withoutFirst
//               .map((finalPositionPanelCopy: Array<any>, index) => {
//                 console.log("finalPositionPanelCopy[2]", +finalPositionPanelCopy[2]);
//                 // if (finalPositionPanelCopy[0] === 'BTC-PERP' ) BTCArray.push(finalPositionPanelCopy)
//                 // if (finalPositionPanelCopy[0] === 'ETH-PERP' ) ETHArray.push(finalPositionPanelCopy)
//               });

//               let newArray =  withoutFirst.filter((currentValue, index, arr) => currentValue[0] = addNewPosition[0])  
//               console.log('newArray', newArray) 

//               // if (BTCArray.length > 2) {
//               //   let finalBTCArr = BTCArray.map((array: Array<any>, index) => {
//               //     console.log("BTCArray[2]", +BTCArray[2]);
//               //     if (array[1] === "Long") { sum += +array[2]; console.log('sum inside', sum); return '+'; }
//               //     sum -= +array[2]; console.log('sum inside', sum); return '-';
//               //   });
//               // }
              
//               //   if (ETHArray.length > 2) {
//               //     let finalETHArr = ETHArray.map((array: Array<any>, index) => {
//               //       console.log("BTCArray[2]", +ETHArray[2]);
//               //       if (array[1] === "Long") { sum += +array[2]; console.log('sum inside', sum); return '+'; }
//               //       sum -= +array[2]; console.log('sum inside', sum); return '-';
//               //     });
              
//               // }



//           // let operatorsArr = withoutFirst.reduce((previousValue, currentValue, currentIndex, array) => 
//           // {//console.log("operatorsArr" + previousValue, currentValue, currentIndex, array)
//           //  if (previousValue[0] === currentValue[0]) {
//           //   console.log('previousValue, currentValue', previousValue, currentValue)
//           //       if (previousValue[1] === "Long") { sum += +previousValue[2]; console.log('sum inside', sum); return '+'; }
//           //       sum -= +previousValue[2]; console.log('sum inside', sum); return '-';
//           //  } //else  console.log('previousValue, currentValue', previousValue, currentValue)
//           // }
//           // );
//           console.log('sum', sum)
//           console.log("operatorsArr", operatorsArr);
//           if (sum >= 0) finalEntry.push('Long');
//           else finalEntry.push('Short');
//           finalEntry.push(Math.abs(sum));

//           // if ( PositionsPanelClonedCloned.length === 3 && PositionsPanelClonedCloned[1][0] === PositionsPanelClonedCloned[2][0] ) {
//           // if (
//           //   finalPositionsPanelCopy[finalPositionsPanelCopy.length - 2][0] ===
//           //   finalPositionsPanelCopy[finalPositionsPanelCopy.length - 1][0]
//           // ) {
//           //   finalEntry.push(
//           //     finalPositionsPanelCopy[finalPositionsPanelCopy.length - 2][0]
//           //   );
//           //   if (
//           //     finalPositionsPanelCopy[finalPositionsPanelCopy.length - 2][1] ===
//           //     finalPositionsPanelCopy[finalPositionsPanelCopy.length - 1][1]
//           //   ) {
//           //     finalEntry.push(
//           //       finalPositionsPanelCopy[finalPositionsPanelCopy.length - 2][1]
//           //     );
//           //     finalEntry.push(
//           //       +finalPositionsPanelCopy[
//           //       finalPositionsPanelCopy.length - 2
//           //       ][2] +
//           //       +finalPositionsPanelCopy[
//           //       finalPositionsPanelCopy.length - 1
//           //       ][2]
//           //     );
//           //   }
//           //   if (
//           //     finalPositionsPanelCopy[finalPositionsPanelCopy.length - 2][1] ===
//           //     "Long" &&
//           //     finalPositionsPanelCopy[finalPositionsPanelCopy.length - 1][1] ===
//           //     "Short"
//           //   ) {
//           //     if (
//           //       +finalPositionsPanelCopy[
//           //       finalPositionsPanelCopy.length - 2
//           //       ][2] >
//           //       +finalPositionsPanelCopy[finalPositionsPanelCopy.length - 1][2]
//           //     ) {
//           //       finalEntry.push("Long");
//           //       finalEntry.push(
//           //         +finalPositionsPanelCopy[
//           //         finalPositionsPanelCopy.length - 2
//           //         ][2] -
//           //         +finalPositionsPanelCopy[
//           //         finalPositionsPanelCopy.length - 1
//           //         ][2]
//           //       );
//           //     } else {
//           //       finalEntry.push("Short");
//           //       finalEntry.push(
//           //         +finalPositionsPanelCopy[
//           //         finalPositionsPanelCopy.length - 1
//           //         ][2] -
//           //         +finalPositionsPanelCopy[
//           //         finalPositionsPanelCopy.length - 2
//           //         ][2]
//           //       );
//           //     }
//           //   } else if (
//           //     finalPositionsPanelCopy[finalPositionsPanelCopy.length - 2][1] ===
//           //     "Short" &&
//           //     finalPositionsPanelCopy[finalPositionsPanelCopy.length - 1][1] ===
//           //     "Long"
//           //   ) {
//           //     if (
//           //       +finalPositionsPanelCopy[
//           //       finalPositionsPanelCopy.length - 2
//           //       ][2] >
//           //       +finalPositionsPanelCopy[finalPositionsPanelCopy.length - 1][2]
//           //     ) {
//           //       finalEntry.push("Short");
//           //       finalEntry.push(
//           //         +finalPositionsPanelCopy[
//           //         finalPositionsPanelCopy.length - 2
//           //         ][2] -
//           //         +finalPositionsPanelCopy[
//           //         finalPositionsPanelCopy.length - 1
//           //         ][2]
//           //       );
//           //     } else {
//           //       finalEntry.push("Long");
//           //       finalEntry.push(
//           //         +finalPositionsPanelCopy[
//           //         finalPositionsPanelCopy.length - 1
//           //         ][2] -
//           //         +finalPositionsPanelCopy[
//           //         finalPositionsPanelCopy.length - 2
//           //         ][2]
//           //       );
//           //     }
//           //   }
//           // }

//           finalEntry.push(
//             "$20,660.0",
//             "$41,260.0",
//             "$40,260.0",
//             "$38,260.0",
//             "-$38.0",
//             "-$2.0",
//             "+$0.55"
//           );

//           console.log("finalEntry", finalEntry);
//           const positionsPanelCopy = [...PositionsPanel];
//           let pop = positionsPanelCopy.pop();
//           setPositionsPanel(positionsPanelCopy.concat([finalEntry]));
//           setFinalPositionsPanel(positionsPanelCopy.concat([finalEntry]));
//           console.log("concat", positionsPanelCopy.concat([finalEntry]));
//           console.log("with similarity PositionsPanel", PositionsPanel);
//           // if (updatePositionsPanel) {
//           //   updatePositionsPanel(positionsPanelCopy.concat([finalEntry]))
//           // }
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     }
//     makeCall();

//     // && addNewPosition && addNewPosition.length > 0
//     // if (updatePositionsPanel) {
//     //   console.log("updatePositionsPanel addNewPosition", addNewPosition);
//     //   if (addNewPosition && addNewEntry && addNewPosition.length > 0) {
//     //     updatePositionsPanel([...PositionsPanel, addNewPosition]);
//     //     // addNewEntry(true);
//     //     return;
//     //   }
//     //   updatePositionsPanel(PositionsPanel);
//     // }
//     // .includes(addNewPosition)
//     // console.log('flatten', PositionsPanelClonedCloned.find(addNewPosition))
//     // eslint-disable-next-line no-restricted-globals
//     // if (PositionsPanelClonedCloned.length < 2) { } //setPositionsPanel([...PositionsPanel, addNewPosition]);
//     // else if (!PositionsPanelClonedCloned.some(a => a.find(PositionsPanelClonedCloned.flat().includes(addNewPosition))))
//     // // eslint-disable-next-line no-restricted-globals
//     // {
//     //   console.log(
//     //     "PositionsPanelClonedCloned length > 2",
//     //     PositionsPanelClonedCloned
//     //   );
//     //   console.log('PositionsPanelClonedCloned.length length > 2', PositionsPanelClonedCloned.length)
//     //   console.log('PositionsPanelClonedCloned length - 1', PositionsPanelClonedCloned[PositionsPanelClonedCloned.length - 1])
//     //   // eslint-disable-next-line no-restricted-globals
//     //   //  console.log('PositionsPanelClonedCloned[length - 2][0]', PositionsPanelClonedCloned[length - 2][0])
//     // setPositionsPanel([...PositionsPanel, addNewPosition]);
//     //   if (addNewEntry) addNewEntry(true);
//     // }
//     // const duplicateElement = PositionsPanelClonedCloned.filter((item, index) => PositionsPanelClonedCloned.indexOf(item[0]) !== 0)
//     // console.log('duplicateElement', duplicateElement)
//     // PositionsPanelClonedCloned.map((panel:any) => {
//     //   console.log('a positionsCloned panel', panel)

//     //     if (addNewPosition && addNewPosition.length > 0 && !panel.includes(addNewPosition[0])) {
//     //       console.log('addNewPosition[0]', addNewPosition[0])
//     //       console.log('does not exist before')
//     //       // setPositionsPanel([...PositionsPanel, addNewPosition]);
//     //       setPositionsPanelCloned([...PositionsPanelCloned, addNewPosition]);
//     //       // Update the document title using the browser API    document.title = `You clicked ${count} times`;
//     //       console.log("useEffect tabs PositionsPanelCloned after add", PositionsPanelCloned);
//     //     }
//     //   });
//     // const allUnique = !PositionsPanelCloned.some((v[0], i) => PositionsPanelCloned.indexOf(v[0]) < i);
//     // let result = PositionsPanelCloned.filter(o1 => result2.some(o2 => o1.id === o2.id));
//     // console.log('allUnique', allUnique)
//   }, [PositionsPanelCloned]);

//   // useEffect(
//   //   () => setSanitizedIndex(finalPositionsPanel),
//   //   [setSanitizedIndex, finalPositionsPanel],
//   // );

//   console.log("PositionsPanel on root", PositionsPanel);

//   useEffect(() => {
//     // Update the document title using the browser API document.title = `You clicked ${count} times`;
//     console.log("useEffect PositionsPanel", PositionsPanel);
//     // setPositionsPanelCloned(PositionsPanel);
//     if (updatePositionsPanel) {
//       updatePositionsPanel(PositionsPanel);
//     }
//     //   PositionsPanel.some((panel:any) =>
//     //   console.log('a position panel', panel)
//     //     // panel.includes(value)
//     // );
//     // PositionsPanel.some((panel:any) => {
//     //   console.log('a positionsCloned panel', panel)

//     //     if (addNewPosition && addNewPosition.length > 0 && !panel.includes(addNewPosition[0])) {
//     //       console.log('addNewPosition[0]', addNewPosition[0])
//     //       console.log('does not exist before')
//     //       setPositionsPanel([...PositionsPanel, addNewPosition]);
//     //       // Update the document title using the browser API    document.title = `You clicked ${count} times`;
//     //       console.log("useEffect tabs PositionsPanel after add", PositionsPanel);
//     //     }
//     //   });
//   }, [PositionsPanel]);

//   useEffect(() => {
//     // Update the document title using the browser API    document.title = `You clicked ${count} times`;
//     console.log("useEffect PositionsPanelsLength", PositionsPanelsLength);
//   }, [PositionsPanelsLength]);

//   function containsDuplicates(array: any) {
//     if (array.length !== new Set(array).size) {
//       return true;
//     }

//     return false;
//   }

//   // const updateState = () => {

//   // }

//   //  let updateState = new Promise(function(myResolve, myReject) {
//   //         // "Producing Code" (May take some time)
//   //         let copy = [...PositionsPanel];
//   // let data = copy.filter((panel: any) => !panel.find((el: any) => (typeof el === 'object' && el.props.id===id)))
//   // console.log('data', data)
//   // setPositionsPanel(data);

//   //           myResolve(); // when successful
//   //           myReject();  // when error
//   //         });

//   // printDelayed is a 'Promise<void>'
//   // async function printDelayed(elements: string[]) {
//   //       await delay(400);
//   //       console.log(elements);
//   //   }

//   //   async function delay(milliseconds: number) {
//   //     return new Promise<void>((resolve) => {
//   //       setTimeout(resolve, milliseconds);
//   //     });
//   //   }
//   //   printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
//   //     console.log();
//   //     console.log("Printed every element!");
//   //   });

//   //   function resolveAfter2Seconds() {
//   //     return new Promise(resolve => {
//   //       setTimeout(() => {
//   //         resolve('resolved');
//   //       }, 2000);
//   //     });
//   //   }

//   //   async function asyncCall() {
//   //     console.log('calling');
//   //     const result = await resolveAfter2Seconds();
//   //     console.log(result);
//   //     // expected output: "resolved"
//   //   }

//   // "Consuming Code" (Must wait for a fulfilled Promise)
//   // updateState.then(
//   //   function(value) { /* code if successful */ },
//   //   function(error) { /* code if some error */ }
//   // );

//   const hideElement = (event: React.MouseEvent<HTMLElement>, id: any) => {
//     // forceUpdate();

//     // console.log('event', event)
//     // console.log('event.target', event.target)
//     // console.log('hideElement index', (event.target as any).index)
//     // const { target }: any = event;
//     // console.log('any')
//     // console.log('index', index)
//     // console.log('last elememt type', typeof PositionsPanel[1][PositionsPanel[1][PositionsPanel[1].length - 1]])

//     SetPositionsPanelsLength(PositionsPanelsLength - 1);

//     //             const newState = PositionsPanel.map((panel: any) => {
//     //               // 👇️ if id equals 2, update country property
//     //               const startsWithdiv = panel.filter((el: any) => typeof el !== 'object' && el.key === 1);
//     //             // const num2x = panel.map((n: any) => {if ((typeof n) === 'object') console.log('n.key', n.key)})
//     // // console.log('startsWithdiv', startsWithdiv)
//     //               // 👇️ otherwise return object as is
//     //                 return startsWithdiv
//     //             });
//     console.log("hideElement PositionsPanel", PositionsPanel);
//     let copy = [...PositionsPanel];
//     let data = copy.filter(
//       (panel: any) =>
//         !panel.find((el: any) => typeof el === "object" && el.props.id === id)
//     );
//     console.log("data", data);
//     setPositionsPanel(data);
//     // forceUpdate();
//     //   const find =          PositionsPanel.find((panel: any) => {
//     //   return panel.some((item: any) => {
//     // //^^^^^^
//     //     return item.key === 1;
//     //   });
//     // });

//     // console.log('find', find)
//     // console.log('newState', newState)

//     // PositionsPanel.find(x => x[x.length - 1].includes === '45').foo;

//     // type FindElement = {
//     //     name: string;
//     //     author: string;
//     //     price: number;
//     //   };

//     // const match = PositionsPanel.find((element: HTMLElement) => {
//     //     console.log('PositionPanel new outside', PositionsPanel)
//     //     // if (element.includes()) {
//     //     //   setPositionsPanel(PositionsPanel.filter((panel: any, i: any) => panel !== element));
//     //     //   console.log('PositionPanel new', PositionsPanel)
//     //     //   return true;
//     //     // }
//     //   });
//     //   setPositionPanel(PositionPanel.filter((panel, i) => i !== index));
//     //   const removeItem = index => setPositionPanel(o => ({
//     //     ...o,
//     //     c: PositionPanel.filter((_, i) => i !== index)
//     //   }))
//     //   const removeItem = index => setObj(o => {
//     // console.log('hideElement PositionsPanel', PositionsPanel)
//     // const positionsArray = [...PositionsPanel]

//     // positionsArray.splice(PositionsPanel.length - 1,1)
//     // positionsArray.shift();
//     // const newPositions = PositionsPanel.filter((panel, i) => i !== index)
//     // console.log('newPositions', newPositions)
//     // console.log('positionsArray', positionsArray)
//     // setPositionsPanel(positionsArray);
//     //     let newPositions = PositionsPanel.map((el, i) => (
//     //         i !== index ? [...el]: el
//     //   ))
//     // let newPositions = [...PositionsPanel];
//     //   newPositions[index] = {...newPositions[index], key: value};

//     // console.log('newPositions', newPositions)
//     //   setPositionsPanel([["tralal"],["tralal"]]);
//     //   setPositionsPanel(positionsArray);
//     // setPositionsPanel(positionsArray)

//     //     return { ...obj, c }
//     //   })
//     // console.log('PositionsPanel.length', PositionsPanel.length)

//     // setPositionPanel(PositionPanel.filter((panel, i) => i !== (event.target as any).index));
//   };

//   //   useEffect(() =>
//   // //   console.log('panels', panels)
//   //   ), []

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   let tabsMapping = new Map<string, number>([
//     ["Positions", 0],
//     ["Orders", 1],
//     ["Liquidations", 2],
//     ["Funding Payments", 3],
//     ["Unrealized Funding", 4],
//     ["Transfers", 5],
//   ]);
//   //   const searchBarProps = { // make sure all required component's inputs/Props keys&types match
//   //     term: this.props.term
//   //   }
//   // let CustomizedTables: ReactElement | null = null;
//   return (
//     <Box
//       id={id}
//       sx={{
//         width: "100%",
//         maxWidth: { xs: "93vw", md: "100vw" },
//         gridArea: "footer",
//         height: "max-content",
//       }}
//     >
//       <Box
//         sx={{
//           borderBottom: 1,
//           borderColor: "divider",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Tabs
//           // The MuiTabScrollButton name can be used for providing default props or style overrides at the theme level.
//           ScrollButtonComponent={MyTabScrollButton}
//           centered
//           style={{
//             justifyContent:
//               id === "portfolio-dataGrid" ? "space-between" : "none",
//             width: id === "portfolio-dataGrid" ? "100%" : "fit-content",
//           }}
//           TabIndicatorProps={{ style: { background: "#ff31b9ff" } }}
//           sx={{
//             "& .MuiTabs-flexContainer": {
//               justifyContent: "space-between",
//             },
//             "& .MuiTabs-scroller": {
//               maxWidth: { xs: "71vw", sm: "100vw" },
//             },
//           }}
//           value={value}
//           onChange={handleChange}
//           variant="scrollable"
//           scrollButtons
//           allowScrollButtonsMobile
//           aria-label="scrollable tabs"
//         >
//           {pages.map((page: any, index) => {
//             return (
//               <Tab
//                 sx={{
//                   "&.Mui-selected": {
//                     borderColor: "#951369",
//                     color: "#ff31b9ff",
//                   },
//                   "&.Mui-disabled": {
//                     borderColor: "rgb(255 49 185 / 38%) !important",
//                     color: "rgb(255 49 185 / 38%) !important",
//                   },
//                 }}
//                 label={page}
//                 {...a11yProps(index)}
//                 disabled={
//                   page === "Orders" || page === "Recent Trades / Liquidity"
//                 }
//               />
//             );
//           })}
//           {/* { for (let [key, value] of tabsMapping) {
//      <Tab
//      label={`Item ${value}`} {...a11yProps(value)}
//      >
//        ${key}
//      </Tab>           //"Lokesh" 37 "Raj" 35 "John" 40
// } */}
//         </Tabs>
//       </Box>

//       <TabPanel value={value} index={0}>
//         <BoxComponent>
//           <CustomizedTables name="positions" arr={PositionsPanel} />
//         </BoxComponent>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <BoxComponent>
//           <CustomizedTables name="orders" arr={ordersPanel} />
//         </BoxComponent>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <BoxComponent>
//           <CustomizedTables name="liquidations" arr={liquidationsPanel} />
//         </BoxComponent>
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         <BoxComponent>
//           <CustomizedTables name="fundingPayments" arr={fundingPaymentsPanel} />
//         </BoxComponent>
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         <BoxComponent>
//           <CustomizedTables
//             name="unrealizedFunding"
//             arr={unrealizedFundingPanel}
//           />
//         </BoxComponent>
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         <BoxComponent>
//           <CustomizedTables name="transfers" arr={transfersPanel} />
//         </BoxComponent>
//       </TabPanel>
//     </Box>
//   );
// }

export {}