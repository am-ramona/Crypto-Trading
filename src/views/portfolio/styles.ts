import { makeStyles } from "@material-ui/core/styles";
import { Slider, styled } from "@mui/material";
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: 300
  // },
  // margin: {
  //   height: theme.spacing(3)
  // },
  mark: {
    color: "#ff31b9ff !important",
    fontSize: "13px",
  },
}));

const PrettoSlider = styled(Slider)({
  color: "#ff31b9ff",
  height: 2,
  fontSize: "13px",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    // height: 15,
    // width: 15,
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
    // width: 32,
    // height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#757575",
    // color: '#ffffff',
    color: "#cccccc",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      // style the value for the disability
      backgroundColor: "transparent",
      top: "39px",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export { useStyles, PrettoSlider }