import * as React from "react";
import Box from "@mui/material/Box";

/*** Types & Interfaces ***/
interface TestProps {
  children: React.ReactNode;
  className?: string;
  props?: object;
  id?: string;
  sx?: object;
  // onClick: Event;
}

const BoxComponent: React.FC<TestProps> = (props: TestProps) => {
  const {
          className, sx, 
        } = props;

  return (
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
