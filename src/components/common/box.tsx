import * as React from "react";
import Box from "@mui/material/Box";
// import { makeStyles } from "@material-ui/core";
// import styled from "@emotion/styled";

/*** Types & Interfaces ***/
interface TestProps {
  children: React.ReactNode;
  className?: string;
  props?: object;
  id?: string;
  sx?: object;
  // onClick: Event;
}
/*** End ***/

// const useStyles = makeStyles({
//   feedbackStyles: {
//     position: 'fixed',
//     right: '-25px',
//     transform: 'rotate(270deg)',
//     top: 0,
//     bottom: 0
//   }
// });

// const useStyles = makeStyles((theme) => ({
//   feedbackStyles: {
//     position: "fixed",
//     color: "#ff31b9ff",
//     right: "-35px",
//     transform: "rotate(270deg)",
//     top: 0,
//     bottom: 0,
//     height: 0,
//     margin: "auto",

//     // right: '-30px'
//   },
// }));

// const styles = {
//   feedbackStyles: {
//     position: "fixed",
//     color: "#ff31b9ff",
//     right: "-35px",
//     transform: "rotate(270deg)",
//     top: 0,
//     bottom: 0,
//     height: 0,
//     margin: "auto",

//     // right: '-30px'
//   },
// };

// interface StyledSliderProps {
//   className?: string;
// }

// const StyledBox = styled(Box, {
//   shouldForwardProp: (prop) => prop !== 'className',
// })<StyledSliderProps>(({ className, theme }) => ({
//   position: 'fixed',
//   right: '-25px',
//   transform: 'rotate(270deg)',
//   top: 0,
//   bottom: 0
// }));

// interface BoxComponentProps extends React.HTMLAttributes<unknown> { }

// export default function BoxComponent(props: BoxComponentProps) {
const BoxComponent: React.FC<TestProps> = (props: TestProps) => {
  const { //children, 
          className, sx, 
          // ...others 
        } = props;
  // console.log("className in Box", props.className);
  // console.log('{...styles}', {...styles})
  // console.log("props in Box", props);
  // console.log("children in Box", props.children);
  // console.log("BoxComponent styles feedbackStyles", styles.feedbackStyles);

  // const classes = useStyles();
  // console.log("BoxComponent classes feedbackStyles", classes.feedbackStyles);
  // const { style1 } = useStyles(props);
  return (
    // <Box className={`${style1}`} component="span" sx={{
    <Box
      className={className ? "feedbackStyles" : ""}
      component="span"
      sx={{
        fontSize: "14px",
        p: 1,
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
        border: "1px solid #ff31b9ff",
        ...sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxComponent;

// interface PropsType {
//   children: JSX.Element
//   xs ?: string
// }
// class BoxComponent extends React.Component<PropsType, {}> {
//   render() {
//     return (
//       <Box component="span" sx={{
//         p: 1, display: 'grid', alignContent: 'center',
//         justifyContent: 'center', border: '1px solid #ff31b9ff'
//       }}>
//       {this.props.children}
//       </Box>
//     )
//   }
// }
