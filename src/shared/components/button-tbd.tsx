// import * as React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";

const ButtonComponent = () => (
  <>
    <Typography>This is the Perpetuals. and i am testing !!!</Typography>
    <div className="stockData">
      <Button
        variant="outlined"
        sx={{
          my: 2,
          color: "#ff31b9ff",
          display: "block",
          borderColor: "#ff31b9ff",
          "&:hover": {
            borderColor: "#951369",
          },
        }}
      >
        Connect Wallet
      </Button>
    </div>
  </>
);

export default ButtonComponent;
