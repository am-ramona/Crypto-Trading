import { withStyles } from "@material-ui/core";
import {
    Button,
    styled,
    Tooltip
} from "@mui/material";

const PinkTooltip = withStyles({
    tooltip: {
        color: "#ff31b9ff",
        // backgroundColor: '#bdbdbd'
    },
})(Tooltip);

const ButtonStyled = styled(Button)`
    &.MuiButton-outlinedInherit {
    }
  
    &.MuiButton-containedInherit {
      color: #170010;
      background-color: #ff31b9;
      border-color: #ff31b9;
    }
  `;

export { PinkTooltip, ButtonStyled }