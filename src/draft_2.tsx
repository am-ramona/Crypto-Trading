// import React, {
//     ReactElement,
//     useEffect,
//     useLayoutEffect,
//     useState,
//   } from "react";
//   import { styled } from "@mui/material/styles";
//   import {
//     Table,
//     TableBody,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     SvgIcon,
//   } from "@mui/material";
//   // import TableBody from '@mui/material/TableBody';
//   import TableCell, { tableCellClasses } from "@mui/material/TableCell";
//   // import TableContainer from '@mui/material/TableContainer';
//   // import TableHead from '@mui/material/TableHead';
//   // import TableRow from '@mui/material/TableRow';
//   // import Paper from '@mui/material/Paper';
//   import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
//   import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
//   import { makeStyles } from "@material-ui/core/styles";
//   import { WindowSharp } from "@mui/icons-material";
//   import { JsxElement } from "typescript";
  
//   /*** Types & Interfaces ***/
//   type first = Array<string | number | ReactElement>;
//   type third = Array<string | ReactElement | number | ReactElement | JsxElement>;
//   type second = third[];
  
//   interface CustomizedTablesProps {
//     children?: React.ReactNode;
//     // name?: string | object | Array<string | React.ReactNode> | undefined | React.ReactNode | null ;
//     // addNewEntry?: (arg: boolean) => void;
//     arr?: any;
//     name: string;
//   }
//   /*** End ***/
  
//   const useStyles = makeStyles({
//     finalRow: {
//       display: "grid !important",
//       gridTemplateColumns: "auto auto",
//     },
//   });
  
//   const styles = {
//     finalRow: {
//       display: "grid",
//       gridTemplateColumns: "auto auto",
//       gridGap: 10,
//     },
//   };
  
//   const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     backgroundColor: "transparent",
//   }));
  
//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     // [`&:not(last-child)`]: { borderBottom: '1px solid rgba(224, 224, 224, 1)' } ,
  
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: "transparent",
//       color: "#ff31b9ff",
//       borderBottom: "1px solid rgba(224, 224, 224, 1)",
//       // '& th': {
//       //   border: '3px',
//       //   display: 'grid',
//       //   gridTemplateColumns: 'auto auto'
//       // },
//     },
  
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 13,
//       color: "#ff31b9ff",
//       border: 0,
//     },
//     "& svg": {
//       cursor: "pointer",
//     },
//     "& th:last-child": {
//       display: "none",
//     },
//     "& div": {
//       display: "grid",
//       gridTemplateColumns: "auto auto",
//       gridGap: 10,
//     },
//   }));
  
//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     [`&:not(:last-child)`]: { borderBottom: "1px solid rgba(224, 224, 224, 1)" },
  
//     // '&:nth-of-type(odd)': {
//     //   backgroundColor: theme.palette.action.hover,
//     // },
//     // // hide last border
//     // '&:last-child td, &:last-child th': {
//     //   border: 0,
//     // },
//   }));
  
//   function createData(
//     name: string,
//     calories: string,
//     fat: number,
//     carbs: string,
//     protein: string,
//     title6: string,
//     title7: string,
//     title8: string,
//     title9: string,
//     title10: string,
//     closeAllPos: React.ReactNode
//   ) {
//     return {
//       name,
//       calories,
//       fat,
//       carbs,
//       protein,
//       title6,
//       title7,
//       title8,
//       title9,
//       title10,
//       closeAllPos,
//     };
//     // return { name, title2, title3, title4, title5, title6, title7, title8, title9, title10 };
//   }
  
//   // interface TabsPanel {
//   //   name: string,
//   //   calories: string,
//   //   fat: number,
//   //   carbs: string,
//   //   protein: string,
//   //   title6: string,
//   //   title7: string,
//   //   title8: string,
//   //   title9: string,
//   //   title10: string,
//   //   closeAllPos: React.ReactNode
//   // }
  
//   const positionsPanel = [
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
//     [
//       "BTC-PERP",
//       "LONG",
//       0.5,
//       "$20,660.0",
//       "$41,260.0",
//       "$40,260.0",
//       "$38,260.0",
//       "-$38.0",
//       "-$2.0",
//       "+$0.55",
//       <>
//         <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//         <CancelPresentationOutlinedIcon style={{ justifySelf: "start" }} />
//       </>,
//     ],
//     [
//       "BTC-PERP",
//       "SHORT",
//       10,
//       "$29,000.0",
//       "$2,900.95",
//       "$2,890.95",
//       "$3,000.0",
//       "+$100.0",
//       "-$2.0",
//       "+$0.55",
//       <>
//         <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//         <CancelPresentationOutlinedIcon style={{ justifySelf: "start" }} />
//       </>,
//     ],
//   ];
//   const positions = positionsPanel.slice(1);
  
//   const ordersPanel = [
//     [
//       "Market",
//       "Direction",
//       "Type",
//       "Size Filled / Ordered",
//       "Avg. Fill Price",
//       "Status",
//       "Date",
//     ],
//     [
//       "BTC-PERP",
//       "LONG",
//       "MARKET",
//       "0.5 BTC / 0.5 BTC",
//       "$41,260.5",
//       "FILLED",
//       "1 week ago",
//     ],
//     [
//       "ETH-PERP",
//       "SHORT",
//       "MARKET",
//       "10 ETH / 10 ETH",
//       "$2,900.95",
//       "FILLED",
//       "2 weeks ago",
//     ],
//   ];
//   const orders = ordersPanel.slice(1);
  
//   const liquidationsPanel = [
//     [
//       "Market",
//       "Direction",
//       "Size",
//       "Notional",
//       "Avg. Entry",
//       "Exit",
//       "Fee",
//       "Type",
//       "Date",
//     ],
//     [
//       "BTC-PERP",
//       "LONG",
//       0.5,
//       "$20,660.0",
//       "$41,260.0",
//       "$40,260.0",
//       "$3.0",
//       "PARTIAL",
//       "1 week ago",
//     ],
//     [
//       "ETH-PERP",
//       "SHORT",
//       10,
//       "$29,000.0",
//       "$2,900.95",
//       "$2,890.95",
//       "$3.0",
//       "PARTIAL",
//       "2 weeks ago",
//     ],
//   ];
//   const liquidations = liquidationsPanel.slice(1);
  
//   const fundingPaymentsPanel = [
//     [
//       "Market",
//       "Direction",
//       "Size",
//       "Notional",
//       "Payment",
//       "Funding Rate",
//       "Date",
//     ],
//     [
//       "BTC-PERP",
//       "LONG",
//       0.5,
//       "$20,660.0",
//       "-$0.243782",
//       "-0.0050%",
//       "5/10/2022, 2:00:00 AM",
//     ],
//     [
//       "ETH-PERP",
//       "SHORT",
//       10,
//       "$29,000.0",
//       "-$0.243782",
//       "-0.0044%",
//       "5/10/2022, 1:00:00 AM",
//     ],
//     [
//       "BTC-PERP",
//       "LONG",
//       0.5,
//       "$20,660.0",
//       "-$0.243782",
//       "-0.0064%",
//       "5/10/2022, 12:00:00 AM",
//     ],
//     [
//       "ETH-PERP",
//       "SHORT",
//       10,
//       "$29,000.0",
//       "-$0.243782",
//       "-0.1525%",
//       "5/9/2022, 11:00:00 PM",
//     ],
//   ];
//   const fundingPayments = fundingPaymentsPanel.slice(1);
  
//   const unrealizedFundingPanel = [
//     ["Market", "Direction", "Position Size", "Payment", "Market Funding Rate"],
//     ["BTC-PERP", "LONG", "0.5 BTC", "-0.98 USDC", "-$191.6525"],
//     ["ETH-PERP", "SHORT", "10 ETH", "-0.98 USDC", "-$191.6525"],
//   ];
//   const unrealizedFunding = unrealizedFundingPanel.slice(1);
  
//   const transfersPanel = [
//     ["Amount", "Type", "PositioDate"],
//     ["500.00 USDC", "Withdraw", "5/10/2022, 12:00:00 AM"],
//     ["10,000.00 USDC", "Deposit", "5/10/2022, 12:00:00 AM"],
//   ];
//   const transfers = transfersPanel.slice(1);
  
//   const rows = [
//     createData(
//       "BTC-PERP",
//       "LONG",
//       0.5,
//       "$20,660.0",
//       "$41,260.0",
//       "$40,260.0",
//       "$38,260.0",
//       "-$38.0",
//       "-$2.0",
//       "+$0.55",
//       <>
//         <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//         <CancelPresentationOutlinedIcon style={{ justifySelf: "start" }} />
//       </>
//     ),
//     createData(
//       "BTC-PERP",
//       "SHORT",
//       10,
//       "$29,000.0",
//       "$2,900.95",
//       "$2,890.95",
//       "$3,000.0",
//       "+$100.0",
//       "-$2.0",
//       "+$0.55",
//       <>
//         <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//         <CancelPresentationOutlinedIcon style={{ justifySelf: "start" }} />
//       </>
//     ),
//     // createData('Eclair', 262, 16.0, 24, 6.0),
//     // createData('Cupcake', 305, 3.7, 67, 4.3),
//     // createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
  
//   // const hideElement = (arr: any, el) =>{
//   //   return arr.filter(e => e !== el)
//   // }
  
//   export default function CustomizedTables(props: CustomizedTablesProps) {
//     const classes = useStyles();
//     const { finalRow } = classes;
//     const { children, name, arr, ...other } = props;
//     if (name) console.log("CustomizedTables name", name);
//     console.log("datatable arr", arr);
//     let [panelActionsCombined, setPanelActionsCombined] = useState<second>([]);
//     // const [panel, setPanel] = useState<any[]>(arr.slice(1));
//     // const [actions, setActions] = useState<any[]>([
//     //   <div id="lastElement1" key="1"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="1" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement1'); }} style={{ justifySelf: 'start' }} /></div>,
//     //   <div id="lastElement2" key="2"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="2" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement2'); }} style={{ justifySelf: 'start' }} /></div>
//     // ]);
  
//     let ConvertStringToHTML: any = function (str: any) {
//       let parser = new DOMParser();
//       let doc = parser.parseFromString(str, "text/html");
//       console.log("doc", doc);
//       console.log("doc.body", doc.body);
//       return doc.body;
//     };
  
//     // var actions: Array<any> = [
//     //   <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>,
//     //   <div id='lastElement2' key='2'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='2' component='svg' style={{ justifySelf: 'start' }} /></div>
//     // ]
  
//     // useEffect(() => {
//     //       // Create an scoped async function in the hook
//     //       async function anyNameFunction() {
//     //         await loadContent();
//     //       }
//     //       // Execute the created function directly
//     //       anyNameFunction();
//     // },[]);
  
//     const hideElement = React.useCallback((id: any) => {
//       console.log("hideElement panelActionsCombined", panelActionsCombined);
//       // let copy = [...panelActionsCombined];
//       // console.log("hideElement copy", copy);
//       // let data = copy.filter(
//       //   (panel: any) =>
//       //     !panel.find((el: any) => typeof el === "object" && el.props.id === id)
//       // );
//       // console.log("hideElement data", data);
//       // setPanelActionsCombined(data);
//     }, [panelActionsCombined, arr]);
  
//    // let hideElement = (id: any) => {
//       // window.alert("clicked")
//       // return function () {
//       // you code
//       // console.log('hideElement panelWithActions', panelWithActions)
//       // console.log('hideElement panelLength', panelLength)
  
//       // console.log('hideElement panel', panel)
//       // console.log("hideElement panelActionsCombined", panelActionsCombined);
//       // let copy = [...panelActionsCombined];
//       // console.log("hideElement copy", copy);
//       // let data = copy.filter(
//       //   (panel: any) =>
//       //     !panel.find((el: any) => typeof el === "object" && el.props.id === id)
//       // );
//       // console.log("hideElement data", data);
//       // setPanelActionsCombined(data);
  
//       // var actions: Array<any> = [
//       //   <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>,
//       //   <div id='lastElement2' key='2'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='2' component='svg' style={{ justifySelf: 'start' }} /></div>
//       // ]
//       // setPanelWithActions([['trlalal', actions[0]], ['tralala', actions[1]], ['tralal', actions[1]]]);
  
//       // setPanelLength(panelLength - 1)
//       //  }
//    // };
  
//     //   function loadContent() {
//     //     let panel = arr.slice(1);
//     //     type first = Array<string | number | ReactElement>;
//     //     type third = Array<
//     //       string | ReactElement | number | ReactElement | JsxElement
//     //     >;
//     //     type second = third[];
  
//     //     var actions: third = [];
//     //     let positionsPanelWithAction: second = [];
  
//     //     let panelActionsCombinedVar: second = panel.map((ele: third, i: number) => {
//     //       if (ele) {
//     //         console.log("useEffect ele", Array.isArray(ele));
//     // console.log('inside panel', panel)
//     // console.log('inside ele', ele)
//     //         // actions.push(ConvertStringToHTML(JSON.stringify(`<div id='lastElement${i}' key=${i}><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key=${i} component='svg' style={{ justifySelf: 'start' }} /></div>`)))
//     //         // actions.push(<span dangerouslySetInnerHTML={{ __html: `<div id='lastElement${i}' key=${i}><SvgIcon component={FileUploadOutlinedIcon} style={ justifySelf: 'end' }></SvgIcon><SvgIcon component={CancelPresentationOutlinedIcon} key=${i} style={ justifySelf: 'start' }></SvgIcon></div>` }} />)
//     //         // actions.push(<span dangerouslySetInnerHTML={{ __html: `<div id='lastElement${i}' key=${i}><FileUploadOutlinedIcon component='svg' style=justify-self:end /></FileUploadOutlinedIcon><CancelPresentationOutlinedIcon key=${i} component='svg' style=justify-self:start /></div>`}} />)
//     //         // actions.push(<div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>)
//     //         actions.splice(
//     //           actions.length,
//     //           0,
//     //           <div id={`lastElement${i}`} key={`${i}`}>
//     //             <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//     //             <CancelPresentationOutlinedIcon
//     //               key={`${i}`}
//     //               component="svg"
//     //               style={{ justifySelf: "start" }}
//     //               onClick={() => hideElement(`lastElement${i}`)}
//     //             />
//     //           </div>
//     //         );
//     //         let eleCopy = ele.slice();
//     //         // positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]]
//     //         // let uploadDelete: first
//     //         positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]];
//     //         // <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>
//     //         // `${positionsPanelWithAction}${i}` = [...ele, ...[actions[i]]]
//     //         return positionsPanelWithAction[i];
//     //       }
//     //     });
  
//     //     setPanelActionsCombined(panelActionsCombinedVar);
//     //     // <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>
//     //     console.log("useEffect panelActionsCombined", panelActionsCombined);
  
//     //   }
  
//     const appendLastElement = React.useCallback((arg: any) => {
//       var actions: third = [];
//       let positionsPanelWithAction: second = [];
  
//       let panelActionsCombinedVar: second = arg.map((ele: third, i: number) => {
//         if (ele) {
//           console.log("useEffect ele", Array.isArray(ele));
//           console.log("inside panel", panel);
//           console.log("inside ele", ele);
  
//           actions.push(
//             <div id={`lastElement${i}`} key={`${i}`}>
//               <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//               <CancelPresentationOutlinedIcon
//                 key={`${i}`}
//                 component="svg"
//                 style={{ justifySelf: "start" }}
//                 onClick={() => hideElement(`lastElement${i}`)}
//               />
//             </div>
//           );
//           let eleCopy = ele.slice();
//           positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]];
//           return positionsPanelWithAction[i];
//         }
//       });
//     }, [arg, arr]);
  
//     useEffect(() => {
//           async function asyncCall() {
//         console.log('calling');
//         let panel = arr.slice(1);
//         console.log("inside useEffect arr");
//         console.log("useEffect panel1", panel);
//         // panel = panel.slice(0, panel.length - 1);
//         console.log("useEffect panell", panel);
//         console.log("useEffect isArray(panel)", Array.isArray(panel));
//         console.log("state panelActionsCombined", panelActionsCombined);
//         const result = await appendLastElement(panel);
//         console.log("panelActionsCombinedVar", panelActionsCombinedVar);
//         setPanelActionsCombined(panelActionsCombinedVar);
//         // console.log(result);
//         // expected output: "resolved"
//       }
//       let panel = arr.slice(1);
//       console.log("inside useEffect arr");
//       console.log("useEffect panel1", panel);
//       // panel = panel.slice(0, panel.length - 1);
//       console.log("useEffect panell", panel);
//       console.log("useEffect isArray(panel)", Array.isArray(panel));
//       console.log("state panelActionsCombined", panelActionsCombined);
  
//       // Create an scoped async function in the hook
//       // async function anyNameFunction() {
//       //   await loadContent();
//       // }
//       // // Execute the created function directly
//       // anyNameFunction();
  
//       // type first = Array<string | number | ReactElement>;
//       // type third = Array<
//       //   string | ReactElement | number | ReactElement | JsxElement
//       // >;
//       // type second = third[];
  
//       var actions: third = [];
//       let positionsPanelWithAction: second = [];
  
//       let panelActionsCombinedVar: second = panel.map((ele: third, i: number) => {
//         if (ele) {
//           console.log("useEffect ele", Array.isArray(ele));
  
//           //     <SvgIcon fontSize="inherit"
//           //     color="inherit"
//           //     sx={{ verticalAlign: 'middle' }}
//           //     component={OpenInNewIcon}
//           //     onClick={() =>  navigate(`/`)}
//           // />
//           console.log("inside panel", panel);
//           console.log("inside ele", ele);
//           // actions.push(ConvertStringToHTML(JSON.stringify(`<div id='lastElement${i}' key=${i}><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key=${i} component='svg' style={{ justifySelf: 'start' }} /></div>`)))
//           // actions.push(<span dangerouslySetInnerHTML={{ __html: `<div id='lastElement${i}' key=${i}><SvgIcon component={FileUploadOutlinedIcon} style={ justifySelf: 'end' }></SvgIcon><SvgIcon component={CancelPresentationOutlinedIcon} key=${i} style={ justifySelf: 'start' }></SvgIcon></div>` }} />)
//           // actions.push(<span dangerouslySetInnerHTML={{ __html: `<div id='lastElement${i}' key=${i}><FileUploadOutlinedIcon component='svg' style=justify-self:end /></FileUploadOutlinedIcon><CancelPresentationOutlinedIcon key=${i} component='svg' style=justify-self:start /></div>`}} />)
//           // actions.push(<div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>)
//           // actions.splice(
//           //   actions.length,
//           //   0,
//           //   <div id={`lastElement${i}`} key={`${i}`}>
//           //     <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//           //     <CancelPresentationOutlinedIcon
//           //       key={`${i}`}
//           //       component="svg"
//           //       style={{ justifySelf: "start" }}
//           //       onClick={() => hideElement(`lastElement${i}`)}
//           //     />
//           //   </div>
//           // );
  
//           actions.push(
//             <div id={`lastElement${i}`} key={`${i}`}>
//               <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//               <CancelPresentationOutlinedIcon
//                 key={`${i}`}
//                 component="svg"
//                 style={{ justifySelf: "start" }}
//                 onClick={() => hideElement(`lastElement${i}`)}
//               />
//             </div>
//           );
//           let eleCopy = ele.slice();
//           positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]];
  
//           // positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]]
//           // let uploadDelete: first
  
//           // <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>
//           // `${positionsPanelWithAction}${i}` = [...ele, ...[actions[i]]]
//           // positionsPanelWithAction[i] = ele.push(
//           //            <div id={`lastElement${i}`} key={`${i}`}>
//           //     <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//           //     <CancelPresentationOutlinedIcon
//           //       key={`${i}`}
//           //       component="svg"
//           //       style={{ justifySelf: "start" }}
//           //       onClick={() => hideElement(`lastElement${i}`)}
//           //     />
//           //   </div>
//           // )
//           return positionsPanelWithAction[i];
//         }
//       });
//       console.log("panelActionsCombinedVar", panelActionsCombinedVar);
//       setPanelActionsCombined(panelActionsCombinedVar);
//       // <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>
//       console.log("useEffect panelActionsCombined", panelActionsCombined);
//       // let positionsPanelWithActions = [...panel[0], ...[actions[0]]],
//       //   positionsPanelWithActions1 = [...panel[1], ...[actions[1]]],
//       //   positionsPanelWithActions2 = [...[positionsPanelWithActions], ...[positionsPanelWithActions1]]
  
//       // const deleteDownloadCell = (arr: any) => {
//       //   arr[1].push(<div id="lastElement1" key="1"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="1" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement1'); }} style={{ justifySelf: 'start' }} /></div>);
//       //   arr[2].push(<div id="lastElement2" key="2"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="2" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement2'); }} style={{ justifySelf: 'start' }} /></div>);
//       //   setPanel(arr);
//       // }
  
//       // let [panelWithActions, setPanelWithActions] = useState<any[]>(panelActionsCombined);
//       // let [panelLength, setPanelLength] = useState(2);
//     }, [arr]);
  
//     // useEffect(() => {
//     //   const lastElement1 = document.getElementById("lastElement1");
//     //   const lastElement2 = document.getElementById("lastElement2");
  
//     //   // 👇️ using optional (?.) chaining
//     //   lastElement1?.addEventListener("click", () => {
//     //     hideElement("lastElement1");
//     //     console.log("button1 clicked");
//     //   });
  
//     //   lastElement2?.addEventListener("click", () => {
//     //     hideElement("lastElement2");
//     //     console.log("button2 clicked");
//     //   });
//     // }, [panelActionsCombined]);
  
//     //  let positionsPanelWithActions = panel[0].push(<div id="lastElement1" key="1"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="1" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement1'); }} style={{ justifySelf: 'start' }} /></div>)
//     //   positionsPanelWithActions = panel[1].push(<div id="lastElement2" key="2"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="2" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement2'); }} style={{ justifySelf: 'start' }} /></div>)
//     // console.log('positionsPanelWithActions', positionsPanelWithActions)
  
//     useEffect(() => {
//       // deleteDownloadCell(arr);
//       console.log("useEffect 2 panelActionsCombined", panelActionsCombined);
//       // let copy = [...panelActionsCombined];
//       // console.log("useEffect copy", copy);
//       // let data = copy.filter(
//       //   (panel: any) =>
//       //     panel.map((el: any) => {typeof el === "object"}
//       //     )
//       // );
//       // console.log("useEffect data", data);
//       // hideElement('lastElement1');
//       // console.log('positionsPanelWithActions1', positionsPanelWithActions1 )
//       // console.log('useEffect positionsPanelWithActions2', positionsPanelWithActions2)
//       // console.log('panel[0], actions', panel[0], actions)
//       // console.log('panel, arr, arr.slice(1), positionsPanelWithActions', panel, arr, arr.slice(1), positionsPanelWithActions)
//     }, [panelActionsCombined]);
  
//     return (
//       <TableContainer
//         component={Paper}
//         style={{ backgroundColor: "transparent" }}
//         sx={{
//           minWidth:
//             name !== "orderCreationPositions" ? { md: "93vw" } : { md: "100%" },
//         }}
//       >
//         <Table sx={{ minWidth: "auto" }} aria-label="customized table">
//           <TableHead>
//             <StyledTableRow>
//               {arr[0].map((title: any, index: any) => {
//                 console.log("arr[0]", arr[0]);
//                 return (
//                   <StyledTableCell
//                     // style={styles.finalRow}
//                     style={{
//                       display:
//                         index === arr[0].length - 1 && name === "positions"
//                           ? "grid"
//                           : "",
//                       gridTemplateColumns:
//                         index === arr[0].length - 1 && name === "positions"
//                           ? "auto auto"
//                           : "",
//                       // textAlign: index === 0 ? "left" : "right"
//                       gridGap:
//                         index === arr[0].length - 1 && name === "positions"
//                           ? 10
//                           : "none",
//                       textAlign: "center",
//                     }}
//                   >
//                     {title}{" "}
//                     {index === arr[0].length - 1 && name === "positions" && (
//                       <CancelPresentationOutlinedIcon
//                         onClick={() => setPanelActionsCombined([])}
//                       />
//                     )}
//                   </StyledTableCell>
//                 );
//               })}
//               {/* <StyledTableCell>Market</StyledTableCell>
//               <StyledTableCell align="right">Direction</StyledTableCell>
//               <StyledTableCell align="right">Size</StyledTableCell>
//               <StyledTableCell align="right">Notional</StyledTableCell>
//               <StyledTableCell align="right">Avg. Entry</StyledTableCell>
//               <StyledTableCell align="right">Est. Exit</StyledTableCell>
//               <StyledTableCell align="right">Est. Liq Price</StyledTableCell>
//               <StyledTableCell align="right">Tot. PnL</StyledTableCell>
//               <StyledTableCell align="right">Fund. PnL</StyledTableCell>
//               <StyledTableCell align="right">Next Fund.</StyledTableCell>
//               <StyledTableCell align="right" className={finalRow} >Close All pos. &nbsp; <CancelPresentationOutlinedIcon />
//                 {/* <svg data-testid="CancelPresentationOutlinedIcon"></svg> */}
//               {/* </StyledTableCell>  */}
//             </StyledTableRow>
//           </TableHead>
//           <TableBody>
//             <>
//               {/* {rows.map((row) => (
//               <StyledTableRow key={row.name}>
//                 <StyledTableCell component="th" scope="row">
//                   {row.name}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                 <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                 <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                 <StyledTableCell align="right">{row.protein}</StyledTableCell>
//                 <StyledTableCell align="right">{row.title6}</StyledTableCell>
//                 <StyledTableCell align="right">{row.title7}</StyledTableCell>
//                 <StyledTableCell align="right">{row.title8}</StyledTableCell>
//                 <StyledTableCell align="right">{row.title9}</StyledTableCell>
//                 <StyledTableCell align="right">{row.title10}</StyledTableCell>
//                 <StyledTableCell align="right" className={finalRow} style={{ gridGap: 10 }}>{row.closeAllPos}</StyledTableCell>
//               </StyledTableRow>
//             ))} */}
//               {name !== "positions"
//                 ? arr.slice(1).map((position: any, i: any) => (
//                   <>
//                     {/* // console.log('position', position)
//               // return "tralala"
//               // console.log('position[index]', position[index]) */}
//                     <StyledTableRow key={i}>
//                       {position.map((pos: any, index: any) => (
//                         <>
//                           <StyledTableCell
//                             style={{
//                               // textAlign: index !== 0 ? "right" : "left",
//                               textAlign: "center",
//                               display:
//                                 index === position.length - 1 &&
//                                   name === "positions"
//                                   ? "grid"
//                                   : "",
//                               gridTemplateColumns:
//                                 index === position.length - 1 &&
//                                   name === "positions"
//                                   ? "auto auto"
//                                   : "",
//                               gridGap:
//                                 index === position.length - 1 &&
//                                   name === "positions"
//                                   ? 10
//                                   : "none",
//                             }}
//                           >
//                             {pos}
//                           </StyledTableCell>
//                         </>
//                       ))}
//                     </StyledTableRow>
//                   </>
//                 ))
//                 : panelActionsCombined.map((position: any, i: any) => {
//                   console.log("JSX panelWithActions", panelActionsCombined);
//                   console.log("JSX position", position);
//                   console.log("JSX position[index]", position[i]);
//                   return (
//                     <>
//                       <StyledTableRow key={i}>
//                         {position.map((pos: any, index: any) => (
//                           <>
//                             <StyledTableCell
//                               style={{
//                                 // textAlign: index !== 0 ? "right" : "left",
//                                 textAlign: "center",
//                                 // display: index === position.length - 1 && name === 'positions' ? 'grid' : '',
//                                 // gridTemplateColumns: index === position.length - 1 && name === 'positions' ? 'auto auto' : '',
//                                 // gridGap: index === position.length - 1 && name === 'positions' ? 10 : 'none'
//                               }}
//                             >
//                               {pos}
//                             </StyledTableCell>
//                           </>
//                         ))}
//                       </StyledTableRow>
//                     </>
//                   );
//                 })}
//             </>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     );
//   }
  
export {}