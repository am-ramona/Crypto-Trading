import React, {
  // MouseEventHandler,
  ReactElement,
  ReactNode,
  useEffect,
  // useLayoutEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
// import { useStateWithCallbackLazy } from 'use-state-with-callback'
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  // TextField,
  Slider,
  Paper,
  SvgIcon,
  Popover,
  Typography,
  Button,
  Box,
  Divider,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  // DialogActions,
  // Menu
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
// import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined'
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import BoxComponent from '../box'
import {
  // ReactNotifications,
  Store,
  // iNotification,
} from 'react-notifications-component'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import {
  incrementByAmount,
  // selectNotifications,
} from '../../../features/notifications/notificationsSlice'
// import { WindowSharp } from '@mui/icons-material'
import { JsxElement } from 'typescript'
// import { CollectionsOutlined } from '@material-ui/icons'
/* ES6 */
import * as htmlToImage from 'html-to-image'
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image'
import download from 'downloadjs'
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/material/styles'

/*** Types & Interfaces ***/
// type first = Array<string | number | ReactElement>;
type third = Array<string | number | ReactElement | ReactNode | React.ReactFragment | JsxElement>;
type second = third[];
// type handleCopySharePnlWindowType = (ele: number | string) => MouseEventHandler<SVGSVGElement> | undefined;
// type Color = string | null;

interface CustomizedTablesProps {
  children?: React.ReactNode;
  // name?: string | object | Array<string | React.ReactNode | undefined | null ;
  // addNewEntry?: (arg: boolean) => void;
  arr?: any;
  name: string;
  leverageValue?: number;
  minLeverageValue?: number;
  maxLeverageValue?: number;
  leveragePercentage?: number;
  updateLeverageValue?: (arg: number) => void;
  updateFinalPositionsPanel?: (arg: Array<any>) => void;
  updateArr?: (arg: any) => void;
  calculateUsdcValue?: (arg: number, arg1: any) => void;
}
/*** End ***/

const useStyles = makeStyles({
  finalRow: {
    display: "grid !important",
    gridTemplateColumns: "auto auto",
  },
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
});

// const styles = {
//   finalRow: {
//     display: "grid",
//     gridTemplateColumns: "auto auto",
//     gridGap: 10,
//   },
// };

// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//   backgroundColor: "transparent",
// }));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // [`&:not(last-child)`]: { borderBottom: '1px solid rgba(224, 224, 224, 1)' } ,

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: "#ff31b9ff",
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
    // '& th': {
    //   border: '3px',
    //   display: 'grid',
    //   gridTemplateColumns: 'auto auto'
    // },
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    color: "#ff31b9ff",
    border: 0,
  },
  "& svg": {
    cursor: "pointer",
  },
  "& th:last-child": {
    display: "none",
  },
  "& div": {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  [`&:not(:last-child)`]: { borderBottom: "1px solid rgba(224, 224, 224, 1)" },

  // '&:nth-of-type(odd)': {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // // hide last border
  // '&:last-child td, &:last-child th': {
  //   border: 0,
  // },
}));

// const ButtonStyled = styled(Button)`
//   &.MuiButton-outlinedInherit {
//   }

//   &.MuiButton-containedInherit {
//     color: #170010;
//     background-color: #ff31b9;
//     border-color: #ff31b9;
//   }
// `;

// function createData(
//   name: string,
//   calories: string,
//   fat: number,
//   carbs: string,
//   protein: string,
//   title6: string,
//   title7: string,
//   title8: string,
//   title9: string,
//   title10: string,
//   closeAllPos: React.ReactNode
// ) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     title6,
//     title7,
//     title8,
//     title9,
//     title10,
//     closeAllPos,
//   };
//   // return { name, title2, title3, title4, title5, title6, title7, title8, title9, title10 };
// }

// interface TabsPanel {
//   name: string,
//   calories: string,
//   fat: number,
//   carbs: string,
//   protein: string,
//   title6: string,
//   title7: string,
//   title8: string,
//   title9: string,
//   title10: string,
//   closeAllPos: React.ReactNode
// }

// const positionsPanel = [
//   [
//     "Market",
//     "Direction",
//     "Size",
//     "Notional",
//     "Avg. Entry",
//     "Est. Exit",
//     "Est. Liq Price",
//     "Tot. PnL",
//     "Fund. PnL",
//     "Next Fund.",
//     "closeAllPos",
//   ],
//   [
//     "BTC-PERP",
//     "LONG",
//     0.5,
//     "$20,660.0",
//     "$41,260.0",
//     "$40,260.0",
//     "$38,260.0",
//     "-$38.0",
//     "-$2.0",
//     "+$0.55",
//     <>
//       <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//       <CancelPresentationOutlinedIcon style={{ justifySelf: "start" }} />
//     </>,
//   ],
//   [
//     "BTC-PERP",
//     "SHORT",
//     10,
//     "$29,000.0",
//     "$2,900.95",
//     "$2,890.95",
//     "$3,000.0",
//     "+$100.0",
//     "-$2.0",
//     "+$0.55",
//     <>
//       <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//       <CancelPresentationOutlinedIcon style={{ justifySelf: "start" }} />
//     </>,
//   ],
// ];
// const positions = positionsPanel.slice(1);

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
//     "5/10/2022, 2:00:00 AM",
//   ],
//   [
//     "ETH-PERP",
//     "SHORT",
//     10,
//     "$29,000.0",
//     "-$0.243782",
//     "-0.0044%",
//     "5/10/2022, 1:00:00 AM",
//   ],
//   [
//     "BTC-PERP",
//     "LONG",
//     0.5,
//     "$20,660.0",
//     "-$0.243782",
//     "-0.0064%",
//     "5/10/2022, 12:00:00 AM",
//   ],
//   [
//     "ETH-PERP",
//     "SHORT",
//     10,
//     "$29,000.0",
//     "-$0.243782",
//     "-0.1525%",
//     "5/9/2022, 11:00:00 PM",
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
//   ["Amount", "Type", "PositioDate"],
//   ["500.00 USDC", "Withdraw", "5/10/2022, 12:00:00 AM"],
//   ["10,000.00 USDC", "Deposit", "5/10/2022, 12:00:00 AM"],
// ];
// const transfers = transfersPanel.slice(1);

// const rows = [
//   createData(
//     "BTC-PERP",
//     "LONG",
//     0.5,
//     "$20,660.0",
//     "$41,260.0",
//     "$40,260.0",
//     "$38,260.0",
//     "-$38.0",
//     "-$2.0",
//     "+$0.55",
//     <>
//       <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//       <CancelPresentationOutlinedIcon style={{ justifySelf: "start" }} />
//     </>
//   ),
//   createData(
//     "BTC-PERP",
//     "SHORT",
//     10,
//     "$29,000.0",
//     "$2,900.95",
//     "$2,890.95",
//     "$3,000.0",
//     "+$100.0",
//     "-$2.0",
//     "+$0.55",
//     <>
//       <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
//       <CancelPresentationOutlinedIcon style={{ justifySelf: "start" }} />
//     </>
//   ),
//   // createData('Eclair', 262, 16.0, 24, 6.0),
//   // createData('Cupcake', 305, 3.7, 67, 4.3),
//   // createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const hideElement = (arr: any, el) =>{
//   return arr.filter(e => e !== el)
// }

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

/**
 * Add the data inside the table.
 * @type {(props: CustomizedTablesProps) => JsxElement}
 * @param {CustomizedTablesProps} props - properties for CustomizedTables function.
 * @return {JsxElement} - HTML table.  
 */

export default function CustomizedTables(props: CustomizedTablesProps) {
  const classes = useStyles();
  const { finalRow } = classes;
  const {
    children,
    name,
    arr,
    // addNewEntry,
    leverageValue,
    minLeverageValue,
    maxLeverageValue,
    leveragePercentage,
    updateLeverageValue,
    calculateUsdcValue,
    updateArr,
    updateFinalPositionsPanel,
    ...other
  } = props

  const notifications = useAppSelector((state: any) => state.notifications)
  // console.log("selectNotifications", selectNotifications)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const ref = React.useRef(null);

  const [panelActionsCombined, setPanelActionsCombined] = useState<second>([])
  // const [arrCloned, setArrCloned] = useStateWithCallbackLazy(arr)
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null)
  const [elementToHide, setElementToHide] = useState<any>(undefined)
  const [openSharePnl, setOpenSharePnl] = React.useState<any>(Boolean(false))
  const [popoverSelected, setPopoverSelected] = React.useState<number>(0)
  // const didMount = React.useRef(false)
  // const isFirstRender = React.useRef(true)

  // const [id, setId]
  // const id = open ? 'simple-popover' : undefined;
  // console.log('open', open)

  // const [panel, setPanel] = useState<any[]>(arr.slice(1));
  // const [actions, setActions] = useState<any[]>([
  //   <div id="lastElement1" key="1"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="1" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement1'); }} style={{ justifySelf: 'start' }} /></div>,
  //   <div id="lastElement2" key="2"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="2" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement2'); }} style={{ justifySelf: 'start' }} /></div>
  // ]);

  // if (name) console.log("CustomizedTables name", name)
  // console.log("root arr", arr)
  // console.log("root arrCloned", arrCloned)
  // console.log("root dataTable leverageValue", leverageValue)
  // console.log("root panelActionsCombined", panelActionsCombined)

  // useEffect(() => {
  //   setArrCloned(arr, () => console.log("done"));
  // }, [arr]);

  // var actions: Array<any> = [
  //   <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>,
  //   <div id='lastElement2' key='2'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='2' component='svg' style={{ justifySelf: 'start' }} /></div>
  // ]

  // async function hideElement(id: any) {

  //   const HideElement = (array: any, id: any) => {
  //   return React.useCallback(async () => {
  //     console.log("hideElement panelActionsCombined", panelActionsCombined);
  //     console.log("hideElement arr", arr);
  //     console.log("hideElement array", array);
  //     console.log("hideElement arrCloned", arrCloned);
  //     console.log('hideElement id', id)
  //     let copy = [...arr];//.slice(1);
  //     console.log("hideElement copy", copy);
  //     const result = await appendLastElement(copy);
  //     console.log("hideElement await copy", copy);
  //     // let data = copy.filter(
  //     //   (panel: any) =>
  //     //     !panel.find((el: any, index: number) => index === id.substring(11))
  //     // );
  //     if (id.substring(11) > -1) { // only splice array when item is found
  //       copy.splice(id.substring(11), 1); // 2nd parameter means remove one item only
  //     }
  //     console.log("hideElement copy after", copy);
  //     // return await new Promise((resolve) => {
  //     //   setTimeout(resolve, time);
  //     // });
  //   }, [arr]);
  // }

  // const hideElement = React.useCallback(
  //   (array: any, id: any) => {
  //     // await setArrCloned(arr)
  //     // setAnchorEl(event.currentTarget);

  //     console.log("hideElement panelActionsCombined", panelActionsCombined);
  //     console.log("hideElement arr", arr);
  //     console.log("hideElement array", array);
  //     console.log("hideElement arrCloned", arrCloned);
  //     console.log('hideElement id', id)
  //     let copy = [...arr];//.slice(1);
  //     console.log("hideElement copy", copy);
  //     const result = appendLastElement(copy);
  //     console.log("hideElement await copy", copy);
  //     // let data = copy.filter(
  //     //   (panel: any) =>
  //     //     !panel.find((el: any, index: number) => index === id.substring(11))
  //     // );
  //     if (id.substring(11) > -1) { // only splice array when item is found
  //       copy.splice(id.substring(11), 1); // 2nd parameter means remove one item only
  //     }
  //     console.log("hideElement copy after", copy);
  //     // setArrCloned(copy)
  //     // const result = await appendLastElement(copy);
  //     // setPanelActionsCombined(result);
  //   },
  //   [panelActionsCombined, arr]
  // );

  // let hideElement = (id: any) => {
  // window.alert("clicked")
  // return function () {
  // you code
  // console.log('hideElement panelWithActions', panelWithActions)
  // console.log('hideElement panelLength', panelLength)

  // console.log('hideElement panel', panel)
  // console.log("hideElement panelActionsCombined", panelActionsCombined);
  // let copy = [...panelActionsCombined];
  // console.log("hideElement copy", copy);
  // let data = copy.filter(
  //   (panel: any) =>
  //     !panel.find((el: any) => typeof el === "object" && el.props.id === id)
  // );
  // console.log("hideElement data", data);
  // setPanelActionsCombined(data);

  // var actions: Array<any> = [
  //   <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>,
  //   <div id='lastElement2' key='2'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='2' component='svg' style={{ justifySelf: 'start' }} /></div>
  // ]
  // setPanelWithActions([['trlalal', actions[0]], ['tralala', actions[1]], ['tralal', actions[1]]]);

  // setPanelLength(panelLength - 1)
  //  }
  // };

  //   function loadContent() {
  //     let panel = arr.slice(1);
  //     type first = Array<string | number | ReactElement>;
  //     type third = Array<
  //       string | ReactElement | number | ReactElement | JsxElement
  //     >;
  //     type second = third[];

  //     var actions: third = [];
  //     let positionsPanelWithAction: second = [];

  //     let panelActionsCombinedVar: second = panel.map((ele: third, i: number) => {
  //       if (ele) {
  //         console.log("useEffect ele", Array.isArray(ele));
  // console.log('inside panel', panel)
  // console.log('inside ele', ele)
  //         // actions.push(ConvertStringToHTML(JSON.stringify(`<div id='lastElement${i}' key=${i}><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key=${i} component='svg' style={{ justifySelf: 'start' }} /></div>`)))
  //         // actions.push(<span dangerouslySetInnerHTML={{ __html: `<div id='lastElement${i}' key=${i}><SvgIcon component={FileUploadOutlinedIcon} style={ justifySelf: 'end' }></SvgIcon><SvgIcon component={CancelPresentationOutlinedIcon} key=${i} style={ justifySelf: 'start' }></SvgIcon></div>` }} />)
  //         // actions.push(<span dangerouslySetInnerHTML={{ __html: `<div id='lastElement${i}' key=${i}><FileUploadOutlinedIcon component='svg' style=justify-self:end /></FileUploadOutlinedIcon><CancelPresentationOutlinedIcon key=${i} component='svg' style=justify-self:start /></div>`}} />)
  //         // actions.push(<div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justlastElementifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>)
  //         actions.splice(
  //           actions.length,
  //           0,
  //           <div id={`lastElement${i}`} key={`${i}`}>
  //             <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
  //             <CancelPresentationOutlinedIcon
  //               key={`${i}`}
  //               component="svg"
  //               style={{ justifySelf: "start" }}
  //               onClick={() => hideElement(`lastElement${i}`)}
  //             />
  //           </div>
  //         );
  //         let eleCopy = ele.slice();
  //         // positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]]
  //         // let uploadDelete: first
  //         positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]];
  //         // <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>
  //         // `${positionsPanelWithAction}${i}` = [...ele, ...[actions[i]]]
  //         return positionsPanelWithAction[i];
  //       }
  //     });

  //     setPanelActionsCombined(panelActionsCombinedVar);
  //     // <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>
  //     console.log("useEffect panelActionsCombined", panelActionsCombined);

  //   }

  // const handleClosePopup = (index: any | undefined) => {
  const handleClosePopup = () => {
    // console.log("close popup")
    setAnchorEl(null)
    setPopoverSelected(0)
  };

  // const doSomething = (arg: any) => {panelActionsCombineduseEffect
  //   var actions: third = [];
  //   let positionsPanelWithAction: second = [];
  //   return arg.map((ele: third, i: number) => {
  //     if (ele) {
  //       console.log("useEffect ele", Array.isArray(ele));
  //       console.log("inside panel", arg);
  //       console.log("inside ele", ele);
  //       console.log("inside arr", arr);
  //       console.log("inside arrCloned", arrCloned);
  //       console.log("inside panelActionsCombined", panelActionsCombined);

  //       actions.push(
  //         <div id={`lastElement${i}`} key={`${i}`}>
  //           <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
  //           <CancelPresentationOutlinedIcon
  //             key={`${i}`}
  //             component="svg"
  //             // aria-describedby={id}
  //             style={{ justifySelf: "start" }}
  //             onClick={(event: any) => hideElement(event, `lastElement${i}`)}
  //           />
  //           {/* <Popover
  //     id={id}
  //     open={open}
  //     anchorEl={anchorEl}
  //     onClose={handleClosePopup}
  //     anchorOrigin={{
  //       vertical: 'bottom',
  //       horizontal: 'left',
  //     }}
  //   > */}
  //           {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
  //   </Popover> */}
  //         </div>
  //       );
  //       let eleCopy = ele.slice();
  //       positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]];
  //       return positionsPanelWithAction[i];
  //     }
  //   });
  // };

  // const handlePopUpClick = (event: React.MouseEvent<SVGSVGElement>) => {
  //   console.log('event.currentTarget', event.currentTarget)
  //   setAnchorEl(event.currentTarget);
  // };

  const updateDirection = (direction: string) => {
    // setDirection(direction);
  };

  const updateBTCValue = (btcValue: number) => {
    // setBtcValue(btcValue);
  };

  const updateUsdcValue = (usdcValue: number) => {
    // setUsdcValue(usdcValue);
  };

  // const updateLeverageValue = (leverageValue: number) => {
  //   // setLeverageValue(leverageValue);
  // };

  const updatePositionsPanel = (positions: any) => {
    // console.log("perpetuals positions", positions);
    // setPositionsPanel(positions);
    // console.log("inside positionsPanelll");
    // console.log("positionsPanelll", positions);
  };

  function valueLabelFormat(value: number) {
    return `${value}.00x`;
  }

  function CustomContentRenderer(message: string) {
    // console.log('CustomContentRenderer notificationMessage', notificationMessage)
    return (
      // <div
      //   className={`notification__custom--success`}
      //   style={{ width: "100%" }}
      // >
      <Grid
        className="rnc__notification-item rnc__notification-item--info"
        style={{ width: "100%" }}
      >
        {/* <div className="rnc__notification-content"> */}
        {/* <div className="rn"></div> */}
        <Box className="rnc__notification-content">
          <Box
            className="rnc__notification-close-mark"
            sx={{ right: 5, top: 2 }}
          ></Box>
          <Typography
            className="rnc__notification-message"
            sx={{ fontSize: 13, color: "#ffffff" }}
          >
            {message}
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
            {/* <OpenInNewIcon fontSizeSmall /> */}
            <SvgIcon
              fontSize="inherit"
              color="inherit"
              sx={{ verticalAlign: "middle" }}
              component={OpenInNewIcon}
              onClick={() => navigate(`/`)}
            />
          </Box>
        </Box>
        {/* <Typography
            className="notification-message"
            sx={{ fontSize: "13px", color: "#cccccc" }}
          >
            Opened {direction} Position {perpetualsMarketValue.label}
          </Typography> */}
      </Grid>
    );
  }

  const displayNotification = (message: string) => {
    // console.log("inside displayNotification");
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
  };

  // useEffect(() => {
  //   if (popoverSelected === 0)  handleClosePopup();
  // }, [popoverSelected])

  const closePosition = React.useCallback(
    (element: any, value: number) => {
      // console.log("closePosition percentage value", value);
      // console.log("closePosition arrclosePosition arr", arr);
      // console.log("closePosition panelActionsCombined", panelActionsCombined);
      // console.log("closePosition element", element);
      // console.log('closePosition element.substring(11)', element.substring(11))
      // console.log('closePosition typeof element.substring(11)', typeof Number(element.substring(11)))

      // the value 100% of Position
      if (value === 1) {
        // handleClosePopup();
        // setAnchorEl(null);

        try {
          let copy = [...panelActionsCombined];
          // console.log("closePosition copy 1", copy);
          if (Number(element.substring(11)) > -1) {
            // only splice array when item is found
            copy.splice(Number(element.substring(11)), 1); // 2nd parameter means remove one item only
            // setPanelActionsCombined(copy.splice(element.substring(11), 1));
          }
          // setPanelActionsCombined(copy)
          // updateFinalPositionsPanel!(copy)
          let arrCopy = [...arr]
          // console.log('closePosition arrCopy', arrCopy)
          // let newArr = arrCopy.filter((obj: any, index: any) => index !== Number(element.substring(11)));
          // console.log('closePosition newArr', newArr)
          //   if( arrCopy.findIndex(x => x === Number(element.substring(11))) >= 0) {
          //     // foud someArray element equals to "index"
          //     console.log('closePosition index exists')
          // } else { console.log('closePosition index does not exist') } 

          if (!!arrCopy[Number(element.substring(11))]) {
            // console.log('closePosition index exists')
            // console.log('closePosition updateArr',arr.splice(Number(element.substring(11)) + 1, 1) )
            // console.log('closePosition updateArr new', arr.filter((data: any, idx: any) => idx !== Number(element.substring(11)) + 1 ))
            // updateArr!(arr.filter((data: any, idx: any) => idx !== Number(element.substring(11)) + 1 ));
            updateArr!(arr.splice(Number(element.substring(11)) + 1, 1));
            // updateArr!((prev) => [...prev.filter((ele, i) => i !== Number(element.substring(11))+1)]);
            // updateArr!(arr.pop());
          } else { console.log('closePosition index does not exist') }
          // console.log("closePosition splice arr", arr.splice(element.substring(11) + 1, 1))
          // updateArr!(arr.splice(element.substring(11) + 1, 1));
          // updateArr!(arr[0].concat(copy));

          // console.log("closePosition copy", copy);

          displayNotification(
            `Closed ${panelActionsCombined[element.substring(11)][0]} Position with -$38.0 Pnl`
          );
          // handleClosePopup();
          // if (id.substring(11) > -1) { // only splice array when item is found
          //   result.splice(id.substring(11), 1); // 2nd parameter means remove one item only
          // }
          // console.log("hideElement result after", result)
          // setPanelActionsCombined(copy);
          // // console.log("closePosition splice arr", arr.splice(element.substring(11) + 1, 1))
          // updateArr!(arr.splice(element.substring(11) + 1, 1));
        } catch (e) {
          console.log("close Position Error", e);
        } finally {
          handleClosePopup();
          console.log("Closing the Position is done.");
        }

        // handleClosePopup();
        // let copy = [...panelActionsCombined];
        // console.log("closePosition copy 1", copy);
        // ${panelActionsCombined[index-1][0]}
        //         let data = copy.filter(
        //   (panel: any) =>
        //     !panel.find((el: any, index: number) => index === i)
        // );

        // if (element.substring(11) > -1) {
        //   // only splice array when item is found
        //   copy.splice(element.substring(11), 1); // 2nd parameter means remove one item only
        //   // setPanelActionsCombined(copy.splice(element.substring(11), 1));
        // }
        // console.log("closePosition copy", copy);
        // displayNotification(
        //   `Closed ${panelActionsCombined[element.substring(11)][0]} Position with -$38.0 Pnl`
        // );
        // if (id.substring(11) > -1) { // only splice array when item is found
        //   result.splice(id.substring(11), 1); // 2nd parameter means remove one item only
        // }
        // console.log("hideElement result after", result)
        // setPanelActionsCombined(copy);
        // // console.log("closePosition splice arr", arr.splice(element.substring(11) + 1, 1))
        // updateArr!(arr.splice(element.substring(11) + 1, 1));
        // handleClosePopup();

        // handleClosePopup()
        // setAnchorEl(null);
      }
    },
    [panelActionsCombined, arr, anchorEl, openSharePnl, leverageValue]
  );

  const openSharePnlWindow = React.useCallback(
    (event: React.MouseEvent<SVGSVGElement>, id: string) => {
      // console.log('openSharePnl func', openSharePnl)
      setOpenSharePnl(true);
      setPopoverSelected(parseInt(id.slice(-1)))
    }, [])

  const handleCloseSharePnlWindow = React.useCallback(
    () => {
      setOpenSharePnl(false);
    }, [])

  const handleCopyPnlWindow = React.useCallback(
    (ele: number | string): void => {
      // console.log('handleCopyPnlWindow')
      var node: HTMLElement | null = document.getElementById('sharePnl' + ele);
      // console.log('node', node)
      // console.log('typeof node', typeof node)
      if (node == null) return;
      htmlToImage.toPng(node)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          // img.type = 'png';
          // download(dataUrl, 'Share_PnL.png');
          // document.body.appendChild(img);
          copyToClipboard(img, node);
          // readClipboardFromDevTools(img).then((r) => console.log("Returned value: ", r));
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });

    }, []);

  const handleSharePnlWindow = React.useCallback(
    (ele: number | string): void => {
      // console.log('handleSharePnlWindow')
      var node: HTMLElement | null = document.getElementById('sharePnl' + ele);
      // console.log('node', node)
      // console.log('typeof node', typeof node)
      if (node == null) return;

      htmlToImage.toPng(node)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          // img.type = 'png';
          download(dataUrl, 'Share_PnL.png');
          // document.body.appendChild(img);
          // copyToClipboard(img, node);
          // readClipboardFromDevTools(img).then((r) => console.log("Returned value: ", r));
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });

    }, []);

  async function copyToClipboard(pngBlob: any, node: any) {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return
    }
    // console.log('pngBlob', pngBlob)
    // var copyText = document.querySelector("#input");
    // node.select();
    // document.execCommand("copy");
    try {
      const response = await fetch(pngBlob.src);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          // [pngBlob.type]: 'png'
          // 'image/png': blob
          [blob.type]: blob
        })
      ]);
      console.log("Image copied");
    } catch (error) {
      console.error("Image not copied", error);
    }
  }

  // function readClipboardFromDevTools(pngBlob: any, type = 'png') {
  //   return new Promise((resolve, reject) => {
  //     const _asyncCopyFn = (async () => {
  //       try {
  //         const value = await navigator.clipboard.write([
  //           new ClipboardItem({
  //             [pngBlob.type]: type
  //           })
  //         ]);
  //         console.log(`${value} is read!`);
  //         resolve(value);
  //       } catch (e) {
  //         reject(e);
  //       }
  //       window.removeEventListener("focus", _asyncCopyFn);
  //     });

  //     window.addEventListener("focus", _asyncCopyFn);
  //     console.log("Hit <Tab> to give focus back to document (or we will face a DOMException);");
  //   });
  // }

  //   function lastElementComponents(i, arg, element, ) {
  //     return(
  //       <>
  //       <IosShareOutlinedIcon
  //       className='sharePnl'
  //       // fontSize="22px"
  //       style={{
  //         justifySelf: "end",
  //         // verticalAlign: "top",
  //         fontSize: "22px",
  //         cursor: "pointer",
  //       }}
  //       onClick={(event: any) => openSharePnlWindow(event, `lastElement${i}`)} />

  //     <Dialog
  //       id={`sharePnl${i}`}
  //       BackdropProps={{
  //         style: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
  //       }}
  //       sx={{
  //         color: "#ff31b9ff",
  //         "& .MuiPaper-root": {
  //           maxWidth: '323px',
  //           width: '100%',
  //           backgroundColor: "#170010ff",
  //           color: "#ff31b9ff"
  //         },
  //       }}
  //       disableEscapeKeyDown
  //       open={openSharePnl}
  //       onClose={handleCloseSharePnlWindow}
  //       aria-labelledby="alert-dialog-title"
  //       aria-describedby="alert-dialog-description"
  //     >
  //       <DialogTitle id="alert-dialog-title" sx={{ padding: '3px 0' }}>
  //         <Typography component="span"
  //           padding="20px 10px"
  //           fontSize="18px"
  //           fontWeight='600'>
  //           {"Share your Pnl"}
  //         </Typography>

  //         <SvgIcon
  //           fontSize="inherit"
  //           color="inherit"
  //           sx={{
  //             verticalAlign: "middle",
  //             fontSize: "17px",
  //             cursor: 'pointer'
  //           }}
  //           component={ContentCopyRoundedIcon}
  //           onClick={() => handleCopyPnlWindow(`${i}`)}
  //         />

  //         <SvgIcon
  //           fontSize="inherit"
  //           color="inherit"
  //           sx={{
  //             verticalAlign: "middle",
  //             // fontSize: "17px",
  //             cursor: "pointer",
  //           }}
  //           component={FileDownloadOutlinedIcon}
  //           onClick={() => handleSharePnlWindow(`${i}`)}
  //         />

  //         {/* <FileDownloadOutlinedIcon
  //           style={{
  //             verticalAlign: "middle",
  //             fontSize: "17px",
  //             cursor: "pointer",
  //           }}
  //         /> */}

  //         <SvgIcon
  //           fontSize="inherit"
  //           color="inherit"
  //           sx={{ verticalAlign: "middle", cursor: 'pointer', float: 'right' }}
  //           component={CloseIcon}
  //           onClick={handleCloseSharePnlWindow}
  //         />

  //         <Divider
  //           sx={{
  //             backgroundColor: "#ff31b9ff",
  //             marginTop: '5px'
  //           }}
  //         />
  //       </DialogTitle>
  //       <DialogContent>
  //         <DialogContentText id="alert-dialog-description" sx={{ color: "#ff31b9ff", display: 'grid', justifyItems: 'center' }}>
  //           <Typography
  //             variant="h6"
  //             noWrap
  //             component="a"
  //             href="/"
  //             sx={{
  //               mr: 2,
  //               display: { xs: "none", lg: "flex" },
  //               fontFamily: "monospace",
  //               fontWeight: 700,
  //               letterSpacing: ".3rem",
  //               color: "inherit",
  //               textDecoration: "none",
  //               padding: "5px 0",
  //               m: 0
  //             }}
  //           >
  //             LOGO
  //           </Typography>
  //           <div
  //             style={{
  //               display: "grid",
  //               gridTemplateColumns: "auto auto",
  //               gridGap: '21px',
  //               alignItems: 'center'
  //             }}
  //           >
  //             <Typography component="span" fontSize="13px">
  //               {arg[popoverSelected][0]}
  //             </Typography>
  //             <Typography component="span" fontSize="13px">
  //               {arg[popoverSelected][1]} - 3.00x Lev.
  //             </Typography>
  //           </div>

  //           <Typography component="span" fontSize="18px" fontWeight="bold" paddingTop="3px">
  //             26.5%
  //           </Typography>

  //           <Paper
  //             component="div"
  //             elevation={0}
  //             sx={{
  //               display: "grid",
  //               gridTemplateColumns: "auto auto",
  //               gridGap: "20px",
  //               backgroundColor: "transparent",
  //               color: "#ff31b9ff",
  //               justifyItems: 'center',
  //               // paddingTop: '94px'
  //               paddingTop: '30px'
  //             }}
  //           >
  //             {/* <div
  //       style={{
  //         display: "grid",
  //         gridTemplateColumns: "auto auto",
  //       }}
  //     > */}
  //             <BoxComponent
  //               sx={{
  //                 fontSize: "12px",
  //                 width: '100%',
  //                 boxSizing: 'border-box'
  //               }}
  //             >
  //               {/* <Typography
  //       sx={{
  //         // color: "#cccccc",
  //         margin: 0,
  //         lineHeight: 1,
  //         paddingBottom: "10px",
  //         fontSize: "11px",
  //       }}
  //       variant="caption"
  //       display="block"
  //       gutterBottom
  //     >
  //       Entry Price
  //     </Typography>
  //     <Typography
  //       sx={{ margin: 0, lineHeight: 1, fontSize: "11px" }}
  //       variant="button"
  //       display="block"
  //       gutterBottom
  //     >
  //       $41,260.5
  //     </Typography> */}
  //               <Typography variant="inherit" textAlign="center" component="span">
  //                 Entry Price
  //               </Typography>
  //               <Typography
  //                 variant="inherit"
  //                 component="span"
  //                 sx={{ fontSize: "14px", fontWeight: "bold" }}
  //               >
  //                 $ 41,260.5
  //               </Typography>
  //             </BoxComponent>

  //             <BoxComponent
  //               sx={{
  //                 fontSize: "12px",
  //                 width: '100%',
  //                 boxSizing: 'border-box'
  //               }}
  //             >
  //               {/* <Typography
  //       sx={{
  //         // color: "#cccccc",
  //         margin: 0,
  //         lineHeight: 1,
  //         paddingBottom: "10px",
  //         fontSize: "11px",
  //       }}
  //       variant="caption"
  //       display="block"
  //       gutterBottom
  //     >
  //       Exit Price
  //     </Typography>
  //     <Typography
  //       sx={{ margin: 0, lineHeight: 1, fontSize: "11px" }}
  //       variant="button"
  //       display="block"
  //       gutterBottom
  //     >
  //       $51,987.0
  //     </Typography> */}
  //               <Typography variant="inherit" textAlign="center" component="span">
  //                 Exit Price
  //               </Typography>
  //               <Typography
  //                 variant="inherit"
  //                 component="span"
  //                 sx={{ fontSize: "14px", fontWeight: "bold" }}
  //               >
  //                 $ 51,987.0
  //               </Typography>
  //             </BoxComponent>
  //             {/* </div> */}
  //           </Paper>

  //         </DialogContentText>
  //       </DialogContent>
  //       {/* <DialogActions>
  // <Button onClick={handleCloseSharePnlWindow}>Disagree</Button>
  // <Button onClick={handleCloseSharePnlWindow} autoFocus>
  //   Agree
  // </Button>
  // </DialogActions> */}
  //     </Dialog>

  //     {/* <CancelPresentationOutlinedIcon
  //       key={`${i}`}
  //       component="svg"
  //       // aria-describedby={id}
  //       style={{ justifySelf: "start" }}
  //       onClick={(event: any) => hideElement(event, `lastElement${i}`)}
  //     // onClick={handlePopUpClick}
  //     /> */}

  //     <SvgIcon
  //       key={`${i}`}
  //       aria-owns={open ? "popover-opened" + `${i}` : "popover-closed" + `${i}`}
  //       aria-haspopup="true"
  //       className='closePosition'
  //       fontSize="medium"
  //       color="inherit"
  //       component={DisabledByDefaultOutlinedIcon}
  //       style={{ position: 'relative', justifySelf: 'start', verticalAlign: 'middle' }}
  //       onClick={(event: any) => hideElement(event, `lastElement${i}`)}
  //     />
  //     {/* { `${ele[0]}` } */}

  //     <Popover
  //       id={open ? "popover-opened" + `${i}` : "popover-closed" + `${i}`}
  //       open={open}
  //       // open={Boolean(anchorEl)}
  //       anchorEl={anchorEl}
  //       onClose={handleClosePopup}
  //       anchorOrigin={{
  //         vertical: "top",
  //         horizontal: "left",
  //       }}
  //       transformOrigin={{
  //         vertical: "bottom",
  //         horizontal: "right",
  //       }}
  //     // disableRestoreFocus
  //     >
  //       {/* <Menu open={open}> */}
  //       {/* { `${ele[0]}` } */}
  //       {/* <Typography sx={{ p: 2 }}>
  //         The content of the Popover.
  //       </Typography> */}
  //       <Box
  //         sx={{
  //           gridArea: "left",
  //           width: "100%",
  //           maxWidth: "100vw",
  //           color: "#ff31b9ff",
  //           backgroundColor: "#170010ff",
  //           margin: "auto",
  //           border: "1px solid #ff31b9ff",
  //           borderRadius: 0,
  //           height: "fit-content",
  //           boxSizing: "border-box",
  //           "& > .MuiBox-root > .MuiBox-root": {
  //             p: 1,
  //             borderRadius: 0,
  //             // fontSize: '0.875rem',
  //             // fontWeight: '700',
  //           },
  //         }}
  //       >
  //         <Box
  //           sx={{
  //             display: "grid",
  //             gridTemplateColumns: "1fr",
  //             gap: "5px",
  //             gridTemplateRows: "auto",
  //             gridTemplateAreas: `
  //                                 "marketDirection"
  //                                 "divider"
  //                                 "orderType"
  //                                 "marketSize"
  //                                 "leverage"
  //                                 "close"
  //                                 "marketData"`,
  //             // padding: '25px 80px',
  //             padding: { xs: "25px 15px", md: "15px 15px" },
  //             // margin: 'auto',
  //             // border: '1px solid #ff31b9ff',
  //             // borderRadius: 0,
  //             // color: '#ff31b9ff',
  //           }}
  //         >
  //           <div
  //             style={{
  //               display: "grid",
  //               gridArea: "marketDirection",
  //               gridTemplateColumns: "auto auto auto",
  //             }}
  //           >
  //             <Typography component="span" fontSize="13px">
  //               Closing 0.5
  //             </Typography>
  //             <Typography component="span" fontSize="13px">
  //               {arg[popoverSelected][0].slice(0, 3)}
  //             </Typography>
  //             <Typography
  //               component="span"
  //               fontSize="13px"
  //               justifySelf="end"
  //             >
  //               Share{" "}
  //               <IosShareOutlinedIcon
  //                 component="svg"
  //                 style={{
  //                   verticalAlign: "top",
  //                   fontSize: "17px",
  //                   cursor: "pointer",
  //                 }}
  //                 onClick={(event: any) => openSharePnlWindow(event, `lastElement${popoverSelected}`)}
  //               />
  //             </Typography>
  //           </div>
  //           <Divider
  //             sx={{
  //               backgroundColor: "#ff31b9ff",
  //               gridArea: "divider",
  //             }}
  //           />
  //           <Paper
  //             id="orderType"
  //             component="div"
  //             elevation={0}
  //             sx={{
  //               gridArea: "orderType",
  //               display: "grid",
  //               gridTemplateAreas: '"a b""c b"',
  //               gridTemplateColumns: "repeat(2, 1fr)",
  //               gridGap: "10px",
  //               backgroundColor: "transparent",
  //               color: "#ff31b9ff",
  //             }}
  //           >
  //             <Typography
  //               variant="inherit"
  //               component="span"
  //               sx={{
  //                 fontSize: "13px",
  //                 gridArea: "a",
  //                 padding: "4px 0",
  //               }}
  //             >
  //               Order Type
  //             </Typography>
  //             {/* <div
  //       style={{
  //         display: "grid",
  //         gridTemplateColumns: "auto auto",
  //       }}
  //     > */}
  //             <BoxComponent sx={{ fontSize: "12px", gridArea: "c" }}>
  //               Market
  //             </BoxComponent>
  //             <BoxComponent
  //               sx={{
  //                 fontSize: "12px",
  //                 gridArea: "b",
  //                 gridGap: "8px",
  //                 textAlign: "right",
  //               }}
  //             >
  //               <Typography variant="inherit" component="span">
  //                 Est/ Entry Price
  //               </Typography>
  //               <Typography
  //                 variant="inherit"
  //                 component="span"
  //                 sx={{ fontSize: "14px", fontWeight: "bold" }}
  //               >
  //                 $ 41,260.5
  //               </Typography>
  //             </BoxComponent>
  //             {/* </div> */}
  //           </Paper>

  //           {/* <Paper
  //   id="marketSize"
  //   component="div"
  //   elevation={0}
  //   sx={{
  //     gridArea: "marketSize",
  //     backgroundColor: "transparent",
  //     color: "#ff31b9ff",
  //   }}
  // >
  //   <Typography
  //     variant="inherit"
  //     component="div"
  //     sx={{ fontSize: "13px", padding: "4px 0" }}
  //   >
  //     Size
  //   </Typography>
  //   <Paper
  //     component="div"
  //     sx={{
  //       display: "grid",
  //       gridTemplateAreas: '"a b""c d"',
  //       gridTemplateColumns: "repeat(2, 1fr)",
  //       backgroundColor: "transparent",
  //     }}
  //   >
  //     <BoxComponent
  //       sx={{
  //         fontSize: "14px",
  //         gridArea: "b",
  //         color: "#ff31b9ff",
  //         justifyContent: "flex-start",
  //         paddingLeft: "12px",
  //       }}
  //     >
  //       BTC
  //     </BoxComponent>
  //     <BoxComponent
  //       sx={{
  //         fontSize: "14px",
  //         gridArea: "d",
  //         color: "#ff31b9ff",
  //         justifyContent: "flex-start",
  //         paddingLeft: "12px",
  //       }}
  //     >
  //       USDC
  //     </BoxComponent>
  //   </Paper>
  // </Paper> */}

  //           <Paper
  //             id="leverage"
  //             component="div"
  //             elevation={0}
  //             sx={{
  //               gridArea: "leverage",
  //               backgroundColor: "transparent",
  //               color: "#ff31b9ff",
  //               padding: "0",
  //             }}
  //           >
  //             {/* <Box sx={{ gridArea: "leverage", padding: "0 8px" }}> */}
  //             <Typography
  //               variant="inherit"
  //               component="div"
  //               sx={{ fontSize: "13px", padding: "4px 0" }}
  //             >
  //               Leverage
  //             </Typography>
  //             <Slider
  //               size="small"
  //               defaultValue={leverageValue}
  //               value={leverageValue}
  //               onChange={(e, value) =>
  //                 updateLeverageValue!(value as number)
  //               }
  //               sx={{
  //                 width: "100%",
  //                 color: "#ff31b9ff",
  //                 marginBottom: 0,
  //                 paddingBottom: "0",
  //               }}
  //               step={1}
  //               // marks
  //               min={1}
  //               max={25}
  //               // valueLabelDisplay="on"
  //               // aria-label="Custom marks"
  //               aria-label="Leverage"
  //               aria-labelledby="leverage-market"
  //               getAriaValueText={valueLabelFormat}
  //               valueLabelFormat={valueLabelFormat}
  //               // defaultValue={20}
  //               // getAriaValueText={"tralala"}
  //               // aria-valuetext={"tralala"}
  //               valueLabelDisplay="auto"
  //               marks={leverageMarks}
  //               // size="small"
  //               classes={{ markLabel: classes.hiddenMark }}
  //             // onChange={handleLeverageChange}
  //             />
  //             <Box
  //               sx={{
  //                 display: "grid",
  //                 gridTemplateColumns: "repeat(5, minmax(0, auto))",
  //                 justifyContent: "space-between",
  //                 gridGap: "9px",
  //               }}
  //             >
  //               <Button
  //                 onClick={(e) => calculateUsdcValue!(0, e)}
  //                 sx={{
  //                   color: "#ff31b9ff",
  //                   border: "1px solid #ff31b9ff",
  //                   marginRight: "0 !important",
  //                   fontSize: "10px",
  //                   padding: "2px 10px",
  //                   borderRadius: "4px",
  //                   minWidth: "fit-content",
  //                   lineHeight: "normal",
  //                 }}
  //               >
  //                 0%
  //               </Button>
  //               <Button
  //                 onClick={(e) => calculateUsdcValue!(0.25, e)}
  //                 sx={{
  //                   color: "#ff31b9ff",
  //                   border: "1px solid #ff31b9ff",
  //                   marginRight: "0 !important",
  //                   fontSize: "10px",
  //                   padding: "2px 10px",
  //                   borderRadius: "4px",
  //                   minWidth: "fit-content",
  //                   lineHeight: "normal",
  //                 }}
  //               >
  //                 25%
  //               </Button>
  //               <Button
  //                 onClick={(e) => calculateUsdcValue!(0.5, e)}
  //                 sx={{
  //                   color: "#ff31b9ff",
  //                   border: "1px solid #ff31b9ff",
  //                   marginRight: "0 !important",
  //                   fontSize: "10px",
  //                   padding: "2px 10px",
  //                   borderRadius: "4px",
  //                   minWidth: "fit-content",
  //                   lineHeight: "normal",
  //                 }}
  //               >
  //                 50%
  //               </Button>
  //               <Button
  //                 onClick={(e) => calculateUsdcValue!(0.75, e)}
  //                 sx={{
  //                   color: "#ff31b9ff",
  //                   border: "1px solid #ff31b9ff",
  //                   marginRight: "0 !important",
  //                   fontSize: "10px",
  //                   padding: "2px 10px",
  //                   borderRadius: "4px",
  //                   minWidth: "fit-content",
  //                   lineHeight: "normal",
  //                 }}
  //               >
  //                 75%
  //               </Button>
  //               <Button
  //                 onClick={(e) => calculateUsdcValue!(1, e)}
  //                 sx={{
  //                   color: "#ff31b9ff",
  //                   border: "1px solid #ff31b9ff",
  //                   marginRight: "0 !important",
  //                   fontSize: "10px",
  //                   padding: "2px 10px",
  //                   borderRadius: "4px",
  //                   minWidth: "fit-content",
  //                   lineHeight: "normal",
  //                 }}
  //               >
  //                 100%
  //               </Button>
  //             </Box>
  //           </Paper>

  //           <Button
  //             onClick={() => closePosition(element, leveragePercentage!)}
  //             // onClick={createNotification('info')}
  //             component="button"
  //             sx={{
  //               gridArea: "close",
  //               color: "#ff31b9ff",
  //               border: "1px solid #ff31b9ff",
  //               marginRight: "0 !important",
  //               textTransform: "initial",
  //             }}
  //           >
  //             Close {leveragePercentage! * 100}% of Position
  //           </Button>

  //           <Box
  //             sx={{
  //               gridArea: "marketData",
  //               width: "100%",
  //               color: "#ff31b9ff",
  //               margin: "auto",
  //               border: "1px solid #ff31b9ff",
  //               boxSizing: "border-box",
  //               borderRadius: 0,
  //               "& > .MuiBox-root > .MuiBox-root": {
  //                 p: 1,
  //                 borderRadius: 0,
  //                 // fontSize: '0.875rem',
  //                 // fontWeight: '700',
  //               },
  //             }}
  //           >
  //             <Box
  //               sx={{
  //                 display: "grid",
  //                 gridTemplateColumns: "repeat(2, auto)",
  //                 gap: 1,
  //                 gridTemplateRows: "repeat(4, auto)",
  //                 gridTemplateAreas: `
  // "left1 right1"
  // "left2 right2"
  // "left3 right3"
  // "left4 right4"
  // `,
  //                 // padding: { xs: "25px 15px", md: "25px 23px" },
  //                 // margin: 'auto',
  //                 // border: '1px solid #ff31b9ff',
  //                 // borderRadius: 0,
  //                 //, color: '#ff31b9ff',
  //               }}
  //             >
  //               <Box
  //                 sx={{
  //                   fontSize: "12px",
  //                   gridArea: "left1",
  //                   justifySelf: "start",
  //                   padding: "0 8px !important",
  //                 }}
  //               >
  //                 Est. Exit Price :
  //               </Box>
  //               <Box
  //                 sx={{
  //                   fontSize: "12px",
  //                   gridArea: "right1",
  //                   justifySelf: "end",
  //                   padding: "0 8px !important",
  //                 }}
  //               >
  //                 $40,260.0
  //               </Box>
  //               <Box
  //                 sx={{
  //                   fontSize: "12px",
  //                   gridArea: "left2",
  //                   justifySelf: "start",
  //                   padding: "0 8px !important",
  //                 }}
  //               >
  //                 New Est. Liquidation Price :
  //               </Box>
  //               <Box
  //                 sx={{
  //                   fontSize: "12px",
  //                   gridArea: "right2",
  //                   justifySelf: "end",
  //                   padding: "0 8px !important",
  //                 }}
  //               >
  //                 None
  //               </Box>
  //               <Box
  //                 sx={{
  //                   fontSize: "12px",
  //                   gridArea: "left3",
  //                   justifySelf: "start",
  //                   padding: "0 8px !important",
  //                 }}
  //               >
  //                 Account Leverage Ratio :
  //               </Box>
  //               <Box
  //                 sx={{
  //                   fontSize: "12px",
  //                   gridArea: "right3",
  //                   justifySelf: "end",
  //                   padding: "0 8px !important",
  //                 }}
  //               >
  //                 5x -&gt; 2x
  //               </Box>
  //               <Box
  //                 sx={{
  //                   fontSize: "12px",
  //                   gridArea: "left4",
  //                   justifySelf: "start",
  //                   padding: "0 8px !important",
  //                 }}
  //               >
  //                 Est. Realized Pnl :
  //               </Box>
  //               <Box
  //                 sx={{
  //                   fontSize: "12px",
  //                   gridArea: "right4",
  //                   justifySelf: "end",
  //                   padding: "0 8px !important",
  //                 }}
  //               >
  //                 -$38.0
  //               </Box>
  //             </Box>
  //           </Box>
  //         </Box>
  //       </Box>
  //       {/* </Menu> */}
  //     </Popover>
  //     </>
  //     )
  //   }

  const appendLastElement = //React.useCallback(
    (arg: any, element: any): any => {
      // setArrCloned(arr, () => console.log("done"));
      let actions: third = [];
      let positionsPanelWithAction: second = [];
      let open = Boolean(anchorEl);
      let id = open ? "simple-popover" : undefined;
      // console.log('appendLastElement arg', arg)
      return arg.map((ele: third, i: number) => {
        if (ele) {
          // console.log("useEffect ele", Array.isArray(ele));
          // console.log("inside panel", arg);
          // console.log("inside ele", ele);
          // console.log("inside arr", arr);
          // console.log("inside arrCloned", arrCloned);
          // console.log("inside panelActionsCombined", panelActionsCombined);
          // console.log("inside open, anchorEl", open, anchorEl);
          // console.log("inside open", open);
          // console.log("inside leverageValue", leverageValue);
          // console.log("inside i", i)
          // console.log('inside element', element)
          // console.log('inside openSharePnl', openSharePnl)
          // console.log('inside popoverSelected', popoverSelected)

          actions.push(
            <div id={`lastElement${i}`} key={`${i}`} ref={ref}>
              {/* <div id={`lastElement`} key={`${i}`}> */}
              <IosShareOutlinedIcon
                className='sharePnl'
                // fontSize="22px"
                style={{
                  justifySelf: "end",
                  // verticalAlign: "top",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
                onClick={(event: any) => openSharePnlWindow(event, `lastElement${i}`)} />

              <Dialog
                id={`sharePnl${i}`}
                BackdropProps={{
                  style: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
                }}
                sx={{
                  color: "#ff31b9ff",
                  "& .MuiPaper-root": {
                    maxWidth: '323px',
                    width: '100%',
                    backgroundColor: "#170010ff",
                    color: "#ff31b9ff"
                  },
                }}
                disableEscapeKeyDown
                open={openSharePnl}
                onClose={handleCloseSharePnlWindow}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title" sx={{ padding: '3px 0' }}>
                  <Typography component="span"
                    padding="20px 10px"
                    fontSize="18px"
                    fontWeight='600'>
                    {"Share your Pnl"}
                  </Typography>

                  <SvgIcon
                    fontSize="inherit"
                    color="inherit"
                    sx={{
                      verticalAlign: "middle",
                      fontSize: "17px",
                      cursor: 'pointer'
                    }}
                    component={ContentCopyRoundedIcon}
                    onClick={() => handleCopyPnlWindow(`${i}`)}
                  />

                  <SvgIcon
                    fontSize="inherit"
                    color="inherit"
                    sx={{
                      verticalAlign: "middle",
                      // fontSize: "17px",
                      cursor: "pointer",
                    }}
                    component={FileDownloadOutlinedIcon}
                    onClick={() => handleSharePnlWindow(`${i}`)}
                  />

                  {/* <FileDownloadOutlinedIcon
                    style={{
                      verticalAlign: "middle",
                      fontSize: "17px",
                      cursor: "pointer",
                    }}
                  /> */}

                  <SvgIcon
                    fontSize="inherit"
                    color="inherit"
                    sx={{ verticalAlign: "middle", cursor: 'pointer', float: 'right' }}
                    component={CloseIcon}
                    onClick={handleCloseSharePnlWindow}
                  />

                  <Divider
                    sx={{
                      backgroundColor: "#ff31b9ff",
                      marginTop: '5px'
                    }}
                  />
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description" sx={{ color: "#ff31b9ff", display: 'grid', justifyItems: 'center' }}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                        mr: 2,
                        display: { xs: "none", lg: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                        padding: "5px 0",
                        m: 0
                      }}
                    >
                      LOGO
                    </Typography>
                    <Box
                      component='span'
                      style={{
                        display: "grid",
                        gridTemplateColumns: "auto auto",
                        gridGap: '21px',
                        alignItems: 'center'
                      }}
                    >
                      <Typography component="span" fontSize="13px">
                        {arg[popoverSelected][0]}
                      </Typography>
                      <Typography component="span" fontSize="13px">
                        {arg[popoverSelected][1]} - 3.00x Lev.
                      </Typography>
                    </Box>

                    <Typography component="span" fontSize="18px" fontWeight="bold" paddingTop="3px">
                      26.5%
                    </Typography>

                    <Paper
                      component="span"
                      elevation={0}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "auto auto",
                        gridGap: "20px",
                        backgroundColor: "transparent",
                        color: "#ff31b9ff",
                        justifyItems: 'center',
                        // paddingTop: '94px'
                        paddingTop: '30px'
                      }}
                    >
                      {/* <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                }}
              > */}
                      <BoxComponent
                        sx={{
                          fontSize: "12px",
                          width: '100%',
                          boxSizing: 'border-box'
                        }}
                      >
                        {/* <Typography
                sx={{
                  // color: "#cccccc",
                  margin: 0,
                  lineHeight: 1,
                  paddingBottom: "10px",
                  fontSize: "11px",
                }}
                variant="caption"
                display="block"
                gutterBottom
              >
                Entry Price
              </Typography>
              <Typography
                sx={{ margin: 0, lineHeight: 1, fontSize: "11px" }}
                variant="button"
                display="block"
                gutterBottom
              >
                $41,260.5
              </Typography> */}
                        <Typography variant="inherit" textAlign="center" component="span">
                          Entry Price
                        </Typography>
                        <Typography
                          variant="inherit"
                          component="span"
                          sx={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          $ 41,260.5
                        </Typography>
                      </BoxComponent>

                      <BoxComponent
                        sx={{
                          fontSize: "12px",
                          width: '100%',
                          boxSizing: 'border-box'
                        }}
                      >
                        {/* <Typography
                sx={{
                  // color: "#cccccc",
                  margin: 0,
                  lineHeight: 1,
                  paddingBottom: "10px",
                  fontSize: "11px",
                }}
                variant="caption"
                display="block"
                gutterBottom
              >
                Exit Price
              </Typography>
              <Typography
                sx={{ margin: 0, lineHeight: 1, fontSize: "11px" }}
                variant="button"
                display="block"
                gutterBottom
              >
                $51,987.0
              </Typography> */}
                        <Typography variant="inherit" textAlign="center" component="span">
                          Exit Price
                        </Typography>
                        <Typography
                          variant="inherit"
                          component="span"
                          sx={{ fontSize: "14px", fontWeight: "bold" }}
                        >
                          $ 51,987.0
                        </Typography>
                      </BoxComponent>
                      {/* </div> */}
                    </Paper>

                  </DialogContentText>
                </DialogContent>
                {/* <DialogActions>
          <Button onClick={handleCloseSharePnlWindow}>Disagree</Button>
          <Button onClick={handleCloseSharePnlWindow} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
              </Dialog>

              {/* <CancelPresentationOutlinedIcon
                key={`${i}`}
                component="svg"
                // aria-describedby={id}
                style={{ justifySelf: "start" }}
                onClick={(event: any) => hideElement(event, `lastElement${i}`)}
              // onClick={handlePopUpClick}
              /> */}

              <SvgIcon
                key={`${i}`}
                aria-owns={open ? "popover-opened" + `${i}` : "popover-closed" + `${i}`}
                aria-haspopup="true"
                className='closePosition'
                fontSize="medium"
                color="inherit"
                component={DisabledByDefaultOutlinedIcon}
                style={{ position: 'relative', justifySelf: 'start', verticalAlign: 'middle' }}
                onClick={(event: any) => hideElement(event, `lastElement${i}`)}
              />
              {/* { `${ele[0]}` } */}

              <Popover
                id={open ? "popover-opened" + `${i}` : "popover-closed" + `${i}`}
                open={open}
                // open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClosePopup}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              // disableRestoreFocus
              >
                {/* <Menu open={open}> */}
                {/* { `${ele[0]}` } */}
                {/* <Typography sx={{ p: 2 }}>
                  The content of the Popover.
                </Typography> */}
                <Box
                  sx={{
                    gridArea: "left",
                    width: "100%",
                    maxWidth: "100vw",
                    color: "#ff31b9ff",
                    backgroundColor: "#170010ff",
                    margin: "auto",
                    border: "1px solid #ff31b9ff",
                    borderRadius: 0,
                    height: "fit-content",
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
                                          "divider"
                                          "orderType"
                                          "marketSize"
                                          "leverage"
                                          "close"
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
                        gridTemplateColumns: "auto auto auto",
                      }}
                    >
                      <Typography component="span" fontSize="13px">
                        Closing 0.5
                      </Typography>
                      <Typography component="span" fontSize="13px">
                        {arg[popoverSelected][0].slice(0, 3)}
                      </Typography>
                      <Typography
                        component="span"
                        fontSize="13px"
                        justifySelf="end"
                      >
                        Share{" "}
                        <IosShareOutlinedIcon
                          component="svg"
                          style={{
                            verticalAlign: "top",
                            fontSize: "17px",
                            cursor: "pointer",
                          }}
                          onClick={(event: any) => openSharePnlWindow(event, `lastElement${popoverSelected}`)}
                        />
                      </Typography>
                    </div>
                    <Divider
                      sx={{
                        backgroundColor: "#ff31b9ff",
                        gridArea: "divider",
                      }}
                    />
                    <Paper
                      id="orderType"
                      component="span"
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
                        sx={{
                          fontSize: "13px",
                          gridArea: "a",
                          padding: "4px 0",
                        }}
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

                    {/* <Paper
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
          </Paper> */}

                    <Paper
                      id="leverage"
                      component="span"
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
                        onChange={(e, value) =>
                          updateLeverageValue!(value as number)
                        }
                        sx={{
                          width: "100%",
                          color: "#ff31b9ff",
                          marginBottom: 0,
                          paddingBottom: "0",
                        }}
                        step={1}
                        // marks
                        min={1}
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
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "repeat(5, minmax(0, auto))",
                          justifyContent: "space-between",
                          gridGap: "9px",
                        }}
                      >
                        <Button
                          onClick={(e) => calculateUsdcValue!(0, e)}
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
                          onClick={(e) => calculateUsdcValue!(0.25, e)}
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
                          onClick={(e) => calculateUsdcValue!(0.5, e)}
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
                          onClick={(e) => calculateUsdcValue!(0.75, e)}
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
                          onClick={(e) => calculateUsdcValue!(1, e)}
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
                      onClick={() => closePosition(element, leveragePercentage!)}
                      // onClick={createNotification('info')}
                      component="button"
                      sx={{
                        gridArea: "close",
                        color: "#ff31b9ff",
                        border: "1px solid #ff31b9ff",
                        marginRight: "0 !important",
                        textTransform: "initial",
                      }}
                    >
                      Close {leveragePercentage! * 100}% of Position
                    </Button>

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
                          gridTemplateRows: "repeat(4, auto)",
                          gridTemplateAreas: `
      "left1 right1"
      "left2 right2"
      "left3 right3"
      "left4 right4"
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
                          Est. Exit Price :
                        </Box>
                        <Box
                          sx={{
                            fontSize: "12px",
                            gridArea: "right1",
                            justifySelf: "end",
                            padding: "0 8px !important",
                          }}
                        >
                          $40,260.0
                        </Box>
                        <Box
                          sx={{
                            fontSize: "12px",
                            gridArea: "left2",
                            justifySelf: "start",
                            padding: "0 8px !important",
                          }}
                        >
                          New Est. Liquidation Price :
                        </Box>
                        <Box
                          sx={{
                            fontSize: "12px",
                            gridArea: "right2",
                            justifySelf: "end",
                            padding: "0 8px !important",
                          }}
                        >
                          None
                        </Box>
                        <Box
                          sx={{
                            fontSize: "12px",
                            gridArea: "left3",
                            justifySelf: "start",
                            padding: "0 8px !important",
                          }}
                        >
                          Account Leverage Ratio :
                        </Box>
                        <Box
                          sx={{
                            fontSize: "12px",
                            gridArea: "right3",
                            justifySelf: "end",
                            padding: "0 8px !important",
                          }}
                        >
                          5x -&gt; 2x
                        </Box>
                        <Box
                          sx={{
                            fontSize: "12px",
                            gridArea: "left4",
                            justifySelf: "start",
                            padding: "0 8px !important",
                          }}
                        >
                          Est. Realized Pnl :
                        </Box>
                        <Box
                          sx={{
                            fontSize: "12px",
                            gridArea: "right4",
                            justifySelf: "end",
                            padding: "0 8px !important",
                          }}
                        >
                          -$38.0
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {/* </Menu> */}
              </Popover>
              {/* <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={true}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div> */}
            </div>
          );
          let eleCopy = ele.slice();
          positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]];
          // console.log('appendLastElement actions[i]', actions[i])
          // const el2 : any | never = ref.current?.id;
          // if (el2) console.log('el2 reference', el2);
          return positionsPanelWithAction[i];
        }
      });
    }
  //   ,
  //   [arr, anchorEl, leverageValue, panelActionsCombined]
  // );

  // const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  //   // setOpen(false);
  // };
  // console.log("root open", open);

  //   useEffect(() => {
  //     // if (isFirstRender.current) {
  //     //   isFirstRender.current = false // toggle flag after first render/mounting
  //     //   return;
  //     // }
  //     console.log('anchorEl changed')
  //     console.log('anchorEl changed value', anchorEl)

  //     async function asyncCall() {
  //       // console.log("calling");
  //       try {
  //               // console.log('hideElement arrC', arrC)

  //       // setAnchorEl(event.currentTarget);
  //       // setOpen(true)
  //       console.log("hideElement panelActionsCombined", panelActionsCombined);
  //       console.log("hideElement arr", arr);
  //       // console.log("hideElement array", array);
  //       console.log("hideElement arrCloned", arrCloned);
  //       // console.log("hideElement id", id);
  //       let copy = [...arr]; //.slice(1);
  //       // let copy = [...arr];//.slice(1);
  //       console.log("hideElement copy", copy);

  //       let panel = arr.slice(1);
  //       console.log("inside useEffect arr");
  //       console.log("useEffect panel1", panel);
  //       // panel = panel.slice(0, panel.length - 1);
  //       console.log("useEffect panell", panel);
  //       console.log("useEffect isArray(panel)", Array.isArray(panel));
  //       console.log("state panelActionsCombined", panelActionsCombined);
  //       const result = await appendLastElement(panel);
  //       console.log("after await result", result);
  //       setPanelActionsCombined(result);

  //       // const result = await appendLastElement(copy.slice(1));
  //       // console.log('await hideElement result', result)
  //       // console.log("hideElement await result", result);
  //       // let data = copy.filter(
  //       //   (panel: any) =>
  //       //     !panel.find((el: any, index: number) => index === id.substring(11))
  //       // );
  //       // if (result && id.substring(11) > -1) { // only splice array when item is found
  //       //   result.splice(id.substring(11), 1); // 2nd parameter means remove one item only
  //       // }
  //       // console.log("hideElement result after", result)
  //       // setPanelActionsCombined(result);
  //       // var dataNew: Array<any> = result.filter(res => res.pop());
  //       //   console.log('dataNew', dataNew)

  //       // setArrCloned([...arr(0), ...result.filter((res: any) => res.pop())], () => console.log('done'))
  //       } catch (e) {
  //         console.log("Error", e);
  //         //     if (error instanceof CreationError) {
  // //         console.error(error) // from creation
  // //     } else {
  // //         throw error;
  // //     }
  //       } finally {
  //         console.log("This is done.");
  //       }
  //     }
  //     // if (anchorEl)
  //     asyncCall();

  //   }, [anchorEl])

  function hideElement(event: React.MouseEvent<SVGSVGElement>, id: any) {
    // console.log("hideElement calling");
    // console.log("AnchorEl before", anchorEl);
    // console.log("AnchorEl event", event.currentTarget);
    // console.log('hideElement id', id)
    setElementToHide(id)
    setAnchorEl(event.currentTarget)
    setPopoverSelected(id.slice(-1))
    // console.log("AnchorEl after", anchorEl)
  }

  useEffect(() => {
    // if (arr.length === 1) return;
    async function asyncCall() {
      // console.log("calling");
      // console.log('array arr', arr)
      try {
        let panel = arr.slice(1);
        // console.log("inside useEffect arr");
        // console.log("useEffect panel1", panel);
        // panel = panel.slice(0, panel.length - 1);
        // console.log("useEffect panell", panel);
        // console.log("useEffect isArray(panel)", Array.isArray(panel));
        // console.log("state panelActionsCombined", panelActionsCombined);
        // console.log('useEffect elementToHide', elementToHide)
        const result = await appendLastElement(panel, elementToHide);
        // console.log("after await result", result);
        setPanelActionsCombined(result);
        // updateArr!(arr.splice(elementToHide.substring(11) + 1, 1));
      } catch (e) {
        console.log("Error", e);
        //     if (error instanceof CreationError) {
        //         console.error(error) // from creation
        //     } else {
        //         throw error;
        //     }
      } finally {
        console.log("Set the panel with the right elements is done.");
      }
      // console.log("panelActionsCombinedVar", panelActionsCombinedVar);

      // setPanelActionsCombined(appendLastElement(panel));
      // console.log(result);
      // expected output: "resolved"
    }
    asyncCall();
    // console.log("end panelActionsCombined", panelActionsCombined);
    // let panel = arr.slice(1);
    // console.log("inside useEffect arr");
    // console.log("useEffect panel1", panel);
    // // panel = panel.slice(0, panel.length - 1);
    // console.log("useEffect panell", panel);
    // console.log("useEffect isArray(panel)", Array.isArray(panel));
    // console.log("state panelActionsCombined", panelActionsCombined);

    // Create an scoped async function in the hook
    // async function anyNameFunction() {
    //   await loadContent();
    // }
    // // Execute the created function directly
    // anyNameFunction();

    // type first = Array<string | number | ReactElement>;
    // type third = Array<
    //   string | ReactElement | number | ReactElement | JsxElement
    // >;
    // type second = third[];

    // var actions: third = [];
    // let positionsPanelWithAction: second = [];

    // let panelActionsCombinedVar: second = panel.map((ele: third, i: number) => {
    //   if (ele) {
    //     console.log("useEffect ele", Array.isArray(ele));

    //     <SvgIcon fontSize="inherit"
    //     color="inherit"
    //     sx={{ verticalAlign: 'middle' }}
    //     component={OpenInNewIcon}
    //     onClick={() =>  navigate(`/`)}
    // />
    // console.log("inside panel", panel);
    // console.log("inside ele", ele);
    // actions.push(ConvertStringToHTML(JSON.stringify(`<div id='lastElement${i}' key=${i}><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key=${i} component='svg' style={{ justifySelf: 'start' }} /></div>`)))
    // actions.push(<span dangerouslySetInnerHTML={{ __html: `<div id='lastElement${i}' key=${i}><SvgIcon component={FileUploadOutlinedIcon} style={ justifySelf: 'end' }></SvgIcon><SvgIcon component={CancelPresentationOutlinedIcon} key=${i} style={ justifySelf: 'start' }></SvgIcon></div>` }} />)
    // actions.push(<span dangerouslySetInnerHTML={{ __html: `<div id='lastElement${i}' key=${i}><FileUploadOutlinedIcon component='svg' style=justify-self:end /></FileUploadOutlinedIcon><CancelPresentationOutlinedIcon key=${i} component='svg' style=justify-self:start /></div>`}} />)
    // actions.push(<div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>)
    // actions.splice(
    //   actions.length,
    //   0,
    //   <div id={`lastElement${i}`} key={`${i}`}>
    //     <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
    //     <CancelPresentationOutlinedIcon
    //       key={`${i}`}
    //       component="svg"
    //       style={{ justifySelf: "start" }}
    //       onClick={() => hideElement(`lastElement${i}`)}
    //     />
    //   </div>
    // );

    // actions.push(
    //   <div id={`lastElement${i}`} key={`${i}`}>
    //     <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
    //     <CancelPresentationOutlinedIcon
    //       key={`${i}`}
    //       component="svg"
    //       style={{ justifySelf: "start" }}
    //       onClick={() => hideElement(`lastElement${i}`)}
    //     />
    //   </div>
    // );
    // let eleCopy = ele.slice();
    // positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]];

    // positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]]
    // let uploadDelete: first

    // <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>
    // `${positionsPanelWithAction}${i}` = [...ele, ...[actions[i]]]
    // positionsPanelWithAction[i] = ele.push(
    //            <div id={`lastElement${i}`} key={`${i}`}>
    //     <FileUploadOutlinedIcon style={{ justifySelf: "end" }} />
    //     <CancelPresentationOutlinedIcon
    //       key={`${i}`}
    //       component="svg"
    //       style={{ justifySelf: "start" }}
    //       onClick={() => hideElement(`lastElement${i}`)}
    //     />
    //   </div>
    // )
    //     return positionsPanelWithAction[i];
    //   }
    // });
    // console.log("panelActionsCombinedVar", panelActionsCombinedVar);
    // setPanelActionsCombined(panelActionsCombinedVar);
    // <div id='lastElement1' key='1'><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key='1' component='svg' style={{ justifySelf: 'start' }} /></div>
    // console.log("useEffect panelActionsCombined", panelActionsCombined);
    // let positionsPanelWithActions = [...panel[0], ...[actions[0]]],
    //   positionsPanelWithActions1 = [...panel[1], ...[actions[1]]],
    //   positionsPanelWithActions2 = [...[positionsPanelWithActions], ...[positionsPanelWithActions1]]

    // const deleteDownloadCell = (arr: any) => {
    //   arr[1].push(<div id="lastElement1" key="1"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="1" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement1'); }} style={{ justifySelf: 'start' }} /></div>);
    //   arr[2].push(<div id="lastElement2" key="2"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="2" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement2'); }} style={{ justifySelf: 'start' }} /></div>);
    //   setPanel(arr);
    // }

    // let [panelWithActions, setPanelWithActions] = useState<any[]>(panelActionsCombined);
    // let [panelLength, setPanelLength] = useState(2);
  }, [arr, anchorEl, openSharePnl, elementToHide, leverageValue]);

  // useEffect(() => {
  // if (isFirstRender.current) {
  //   isFirstRender.current = false // toggle flag after first render/mounting
  //   return;
  // }
  // updateArr!(arr[0].join(panelActionsCombined));
  // const lastElement1 = document.getElementById("lastElement1");
  // const lastElement2 = document.getElementById("lastElement2");

  // // 👇️ using optional (?.) chaining
  // lastElement1?.addEventListener("click", () => {
  //   hideElement("lastElement1");
  //   console.log("button1 clicked");
  // });

  // lastElement2?.addEventListener("click", () => {
  //   hideElement("lastElement2");
  //   console.log("button2 clicked");
  // });
  // }, [panelActionsCombined]);

  //  let positionsPanelWithActions = panel[0].push(<div id="lastElement1" key="1"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="1" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement1'); }} style={{ justifySelf: 'start' }} /></div>)
  //   positionsPanelWithActions = panel[1].push(<div id="lastElement2" key="2"><FileUploadOutlinedIcon style={{ justifySelf: 'end' }} /><CancelPresentationOutlinedIcon key="2" component="svg" onClick={(e: any) => { hideElement(e, arr, 'lastElement2'); }} style={{ justifySelf: 'start' }} /></div>)
  // console.log('positionsPanelWithActions', positionsPanelWithActions)

  // useEffect(() => {
  //   // deleteDownloadCell(arr);
  //   console.log("useEffect 2 panelActionsCombined", panelActionsCombined);
  //   // let copy = [...panelActionsCombined];
  //   // console.log("useEffect copy", copy);
  //   // let data = copy.filter(
  //   //   (panel: any) =>
  //   //     panel.map((el: any) => {typeof el === "object"}
  //   //     )
  //   // );
  //   // console.log("useEffect data", data);
  //   // hideElement('lastElement1');
  //   // console.log('positionsPanelWithActions1', positionsPanelWithActions1 )
  //   // console.log('useEffect positionsPanelWithActions2', positionsPanelWithActions2)
  //   // console.log('panel[0], actions', panel[0], actions)
  //   // console.log('panel, arr, arr.slice(1), positionsPanelWithActions', panel, arr, arr.slice(1), positionsPanelWithActions)
  // }, [panelActionsCombined]);

  return (
    <TableContainer
      component={Paper}
      style={{ backgroundColor: "transparent" }}
      sx={{
        minWidth:
          name !== "orderCreationPositions" ? { md: "93vw" } : { md: "100%" },
      }}
    >
      <Table sx={{ minWidth: "auto" }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            {arr[0].map((title: any, index: any) => {
              // console.log("arr[0]", arr[0]);
              return (
                <StyledTableCell
                  key={index}
                  // style={styles.finalRow}
                  style={{
                    display:
                      index === arr[0].length - 1 && name === "positions"
                        ? "grid"
                        : "",
                    gridTemplateColumns:
                      index === arr[0].length - 1 && name === "positions"
                        ? "auto auto"
                        : "",
                    // textAlign: index === 0 ? "left" : "right"
                    gridGap:
                      index === arr[0].length - 1 && name === "positions"
                        ? 10
                        : "none",
                    textAlign: "center",
                  }}
                >
                  {title}{" "}
                  {index === arr[0].length - 1 && name === "positions" && (
                    <DisabledByDefaultOutlinedIcon
                      onClick={() => setPanelActionsCombined([])}
                    />
                  )}
                </StyledTableCell>
              );
            })}
            {/* <StyledTableCell>Market</StyledTableCell>
            <StyledTableCell align="right">Direction</StyledTableCell>
            <StyledTableCell align="right">Size</StyledTableCell>
            <StyledTableCell align="right">Notional</StyledTableCell>
            <StyledTableCell align="right">Avg. Entry</StyledTableCell>
            <StyledTableCell align="right">Est. Exit</StyledTableCell>
            <StyledTableCell align="right">Est. Liq Price</StyledTableCell>
            <StyledTableCell align="right">Tot. PnL</StyledTableCell>
            <StyledTableCell align="right">Fund. PnL</StyledTableCell>
            <StyledTableCell align="right">Next Fund.</StyledTableCell>
            <StyledTableCell align="right" className={finalRow} >Close All pos. &nbsp; <CancelPresentationOutlinedIcon />
              {/* <svg data-testid="CancelPresentationOutlinedIcon"></svg> */}
            {/* </StyledTableCell>  */}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <>
            {/* {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.title6}</StyledTableCell>
              <StyledTableCell align="right">{row.title7}</StyledTableCell>
              <StyledTableCell align="right">{row.title8}</StyledTableCell>
              <StyledTableCell align="right">{row.title9}</StyledTableCell>
              <StyledTableCell align="right">{row.title10}</StyledTableCell>
              <StyledTableCell align="right" className={finalRow} style={{ gridGap: 10 }}>{row.closeAllPos}</StyledTableCell>
            </StyledTableRow>
          ))} */}
            {name !== "positions"
              ? arr.slice(1).map((position: any, i: any) => (
                  <StyledTableRow key={i}>
                    {position.map((pos: any, index: any) => (
                        <StyledTableCell
                          key={index}
                          style={{
                            // textAlign: index !== 0 ? "right" : "left",
                            textAlign: "center",
                            display:
                              index === position.length - 1 &&
                                name === "positions"
                                ? "grid"
                                : "",
                            gridTemplateColumns:
                              index === position.length - 1 &&
                                name === "positions"
                                ? "auto auto"
                                : "",
                            gridGap:
                              index === position.length - 1 &&
                                name === "positions"
                                ? 10
                                : "none",
                          }}
                        >
                          {pos}
                        </StyledTableCell>
                    ))}
                  </StyledTableRow>
              ))
              : panelActionsCombined.map((position: any, i: any) => {
                // console.log("JSX panelWithActions", panelActionsCombined);
                // console.log("JSX position", position);
                // console.log("JSX position[index]", position[i]);
                return (
                    <StyledTableRow key={i}>
                      {position.map((pos: any, index: any) => (
                          <StyledTableCell
                            key={index}
                            style={{
                              // textAlign: index !== 0 ? "right" : "left",
                              textAlign: "center",
                              // display: index === position.length - 1 && name === 'positions' ? 'grid' : '',
                              // gridTemplateColumns: index === position.length - 1 && name === 'positions' ? 'auto auto' : '',
                              // gridGap: index === position.length - 1 && name === 'positions' ? 10 : 'none'
                            }}
                          >
                            {pos}
                          </StyledTableCell>
                      ))}
                    </StyledTableRow>
                );
              })}
          </>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
