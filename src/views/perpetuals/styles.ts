import ComboBox from "../../components/common/comboBox"
import { makeStyles } from "@material-ui/core/styles"
import {
    Paper,
    Box,
    Button,
    Slider,
    styled
} from "@mui/material"

export const useStyles = makeStyles((theme) => ({
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

export const PrettoSlider = styled(Slider)({
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

export const ComboBoxStyled = styled(ComboBox)`
      grid-area: market;
    `;

export const InfoDisplayStyled = styled(Box)`
      grid-area: mainTop;
      color: #ff31b9ff;
      width: 100%;
      max-width: 100vw;
      height: 52px;
      margin: auto;
      border: 1px solid #ff31b9ff;
      border-radius: 0;
    `;

export const Item = styled(Paper)`
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

export const PerpetualsWrapper = styled("div")`
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

export const ButtonStyled = styled(Button)`
      &.MuiButton-outlinedInherit {
      }
    
      &.MuiButton-containedInherit {
        color: #170010;
        background-color: #ff31b9;
        border-color: #ff31b9;
      }
    `;