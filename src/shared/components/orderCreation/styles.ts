import { makeStyles } from "@material-ui/core/styles";
import { Button, styled } from "@mui/material";

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

export { useStyles, ReviewOrder, ButtonStyled }
