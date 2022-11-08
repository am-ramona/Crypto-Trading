import * as React from "react";
import Box from "@mui/material/Box";
import { TestProps } from './boxInterfaces';

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

