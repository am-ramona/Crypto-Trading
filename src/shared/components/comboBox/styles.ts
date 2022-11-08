import Autocomplete,
{
    //  createFilterOptions 
} from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    paper: {
        border: "1px solid #ff31b9ff",
        background: "yellow",
        "& li": {
            fontSize: "13px",
            lineHeight: 1,
        },
    },
});

export const StyledAutocomplete = styled(Autocomplete)({
    ".MuiAutocomplete-noOptions": {
        color: "red",
    },
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
        // Default transform is "translate(14px, 20px) scale(1)""
        // This lines up the label with the initial cursor position in the input
        // after changing its padding-left.
        color: "#ff31b9ff",
        //   transform: "translate(34px, 20px) scale(1);"
    },
    "& .MuiAutocomplete-inputRoot": {
        color: "#ff31b9ff",
        // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
            // Default left padding is 6px
            // paddingLeft: 26
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "##ff31b9ff",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
        },
        "& label": {
            color: "#ff31b9ff",
        },
        "& .MuiAutocomplete-noOptions": {
            color: "red",
        },
    },
});

// const root = {
//   border: "2px solid grey",
//   minHeight: 200,
//   maxHeight: 200,
//   color: "green",
//   fontSize: 18,
//   "& :hover": {
//     color: "brown",
//   },
//   "& li": {
//     //list item specific styling
//     border: "2px solid green",
//     borderRadius: 4,
//   },
// };

export const textfield = {
    "& .MuiInputBase-input.MuiAutocomplete-input": {
        color: "#ff31b9ff",
        fontSize: 14,
    },
    "& #custom-autocomplete-label": {
        //or could be targeted through a class
        color: "#ff31b9ff",
    },
    "& .MuiButtonBase-root.MuiAutocomplete-clearIndicator": {
        color: "#ff31b9ff",
    },
};