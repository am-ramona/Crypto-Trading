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
  DialogContentText
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import BoxComponent from '../box'
import {
  Store,
} from 'react-notifications-component'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import {
  incrementByAmount,
} from '../../../features/notifications/notificationsSlice'
import { JsxElement } from 'typescript'
/* ES6 */
import * as htmlToImage from 'html-to-image'
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // [`&:not(last-child)`]: { borderBottom: '1px solid rgba(224, 224, 224, 1)' } ,

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: "#ff31b9ff",
    borderBottom: "1px solid rgba(224, 224, 224, 1)",
    // '& th': {
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

  const handleClosePopup = () => {
    setAnchorEl(null)
    setPopoverSelected(0)
  };

  const updateDirection = (direction: string) => {
    // setDirection(direction);
  };

  const updateBTCValue = (btcValue: number) => {
    // setBtcValue(btcValue);
  };

  const updateUsdcValue = (usdcValue: number) => {
    // setUsdcValue(usdcValue);
  };

  function valueLabelFormat(value: number) {
    return `${value}.00x`;
  }

  function CustomContentRenderer(message: string) {
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
  }

  const displayNotification = (message: string) => {
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

  const closePosition = React.useCallback(
    (element: any, value: number) => {
      // the value 100% of Position
      if (value === 1) {
        try {
          let copy = [...panelActionsCombined];
          if (Number(element.substring(11)) > -1) {
            // only splice array when item is found
            copy.splice(Number(element.substring(11)), 1); // 2nd parameter means remove one item only
          }
          let arrCopy = [...arr]

          if (!!arrCopy[Number(element.substring(11))]) {
            updateArr!(arr.splice(Number(element.substring(11)) + 1, 1));
          } else { console.log('closePosition index does not exist') }

          displayNotification(
            `Closed ${panelActionsCombined[element.substring(11)][0]} Position with -$38.0 Pnl`
          );
        } catch (e) {
          console.log("close Position Error", e);
        } finally {
          handleClosePopup();
          console.log("Closing the Position is done.");
        }
      }
    },
    [panelActionsCombined, arr, anchorEl, openSharePnl, leverageValue]
  );

  const openSharePnlWindow = React.useCallback(
    (event: React.MouseEvent<SVGSVGElement>, id: string) => {
      setOpenSharePnl(true);
      setPopoverSelected(parseInt(id.slice(-1)))
    }, [])

  const handleCloseSharePnlWindow = React.useCallback(
    () => {
      setOpenSharePnl(false);
    }, [])

  const handleCopyPnlWindow = React.useCallback(
    (ele: number | string): void => {
      var node: HTMLElement | null = document.getElementById('sharePnl' + ele);
      if (node == null) return;
      htmlToImage.toPng(node)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          copyToClipboard(img, node);
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });

    }, []);

  const handleSharePnlWindow = React.useCallback(
    (ele: number | string): void => {
      var node: HTMLElement | null = document.getElementById('sharePnl' + ele);
      if (node == null) return;

      htmlToImage.toPng(node)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          // img.type = 'png';
          download(dataUrl, 'Share_PnL.png');
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

  const appendLastElement = //React.useCallback(
    (arg: any, element: any): any => {
      // setArrCloned(arr, () => console.log("done"));
      let actions: third = [];
      let positionsPanelWithAction: second = [];
      let open = Boolean(anchorEl);
      // let id = open ? "simple-popover" : undefined;
      return arg.map((ele: third, i: number) => {
        if (ele) {
          actions.push(
            <div id={`lastElement${i}`} key={`${i}`} ref={ref}>
              {/* <div id={`lastElement`} key={`${i}`}> */}
              <IosShareOutlinedIcon
                className='sharePnl'
                style={{
                  justifySelf: "end",
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
                      cursor: "pointer",
                    }}
                    component={FileDownloadOutlinedIcon}
                    onClick={() => handleSharePnlWindow(`${i}`)}
                  />

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
                        paddingTop: '30px'
                      }}
                    >
                      <BoxComponent
                        sx={{
                          fontSize: "12px",
                          width: '100%',
                          boxSizing: 'border-box'
                        }}
                      >
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
                    </Paper>

                  </DialogContentText>
                </DialogContent>
              </Dialog>

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
                                          "divider"
                                          "orderType"
                                          "marketSize"
                                          "leverage"
                                          "close"
                                          "marketData"`,
                      padding: { xs: "25px 15px", md: "15px 15px" }
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
                        min={1}
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
                          borderRadius: 0
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
              </Popover>
            </div>
          );
          let eleCopy = ele.slice();
          positionsPanelWithAction[i] = [...eleCopy, ...[actions[i]]];
          // const el2 : any | never = ref.current?.id;
          // if (el2) console.log('el2 reference', el2);
          return positionsPanelWithAction[i];
        }
      });
    }

  function hideElement(event: React.MouseEvent<SVGSVGElement>, id: any) {
    setElementToHide(id)
    setAnchorEl(event.currentTarget)
    setPopoverSelected(id.slice(-1))
  }

  useEffect(() => {
    async function asyncCall() {
      try {
        let panel = arr.slice(1);
        const result = await appendLastElement(panel, elementToHide);
        setPanelActionsCombined(result);
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
    }
    asyncCall();
  }, [arr, anchorEl, openSharePnl, elementToHide, leverageValue]);

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
              return (
                <StyledTableCell
                  key={index}
                  style={{
                    display:
                      index === arr[0].length - 1 && name === "positions"
                        ? "grid"
                        : "",
                    gridTemplateColumns:
                      index === arr[0].length - 1 && name === "positions"
                        ? "auto auto"
                        : "",
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
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <>
            {name !== "positions"
              ? arr.slice(1).map((position: any, i: any) => (
                <StyledTableRow key={i}>
                  {position.map((pos: any, index: any) => (
                    <StyledTableCell
                      key={index}
                      style={{
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
                return (
                  <StyledTableRow key={i}>
                    {position.map((pos: any, index: any) => (
                      <StyledTableCell
                        key={index}
                        style={{
                          textAlign: "center"
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
