import * as React from "react";
import { TextField, Stack, Paper, CircularProgress } from "@mui/material";
// import { matchSorter } from 'match-sorter';
import Autocomplete,
{
  //  createFilterOptions 
} from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
// import { WindowSharp } from "@mui/icons-material";

interface PerpetualsMarketsType {
  label: string;
  year?: number;
  id?: number;
}

const perpetualsMarkets: readonly PerpetualsMarketsType[] = [
  { label: "BTC-PERP", id: 1 },
  { label: "ETH-PERP", id: 2 },
];

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const useStyles = makeStyles({
  paper: {
    border: "1px solid #ff31b9ff",
    background: "yellow",
    "& li": {
      fontSize: "13px",
      lineHeight: 1,
    },
  },
});

const StyledAutocomplete = styled(Autocomplete)({
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

const textfield = {
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

// const CustomPaper = (props: any) => {
//   return <Paper {...props} sx={{ width: 300 }} />;
// };

// const filterOptions = createFilterOptions({
//   matchFrom: 'start',
//   stringify: (option: PerpetualsMarketsType) => option.label,
// });
// const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

interface ComboBoxProps {
  updateValue: (arg: PerpetualsMarketsType | null | unknown) => void;
}

export default function ComboBox({ updateValue }: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<
    readonly PerpetualsMarketsType[]
  >([]);
  const [value, setValue] = React.useState<
    PerpetualsMarketsType | null | unknown
  >(perpetualsMarkets[0]);

  const classes = useStyles();
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions([...perpetualsMarkets]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      <StyledAutocomplete
        // disablePortal
        id="perpetuals-market-selection"
        defaultValue={perpetualsMarkets[0]}
        // noOptionsText="No labels"
        value={value}
        // filterOptions={filterOptions}
        onChange={(
          event: React.SyntheticEvent,
          newValue: PerpetualsMarketsType | unknown,
          reason: string
        ) => {
          if (
            event.type === "keydown" &&
            (event as React.KeyboardEvent).key === "Backspace" &&
            reason === "removeOption"
          ) {
            return;
          }
          if (newValue == null) {
            //Just give a value to a value to avoid null
            //e.g. value = ""
            setValue({ label: "", id: 0 });
            updateValue({ label: "", id: 0 });
            return;
          }
          setValue(newValue);
          updateValue(newValue);
        }}
        // disableCloseOnSelect
        PaperComponent={({ children }) => {
          return (
            <Paper
              sx={{
                background: "#170010ff",
                border: "1px solid #ff31b9ff",
                color: "#cccccc",
                fontSize: "13px",
              }}
            >
              {children}
            </Paper>
          );
        }}
        classes={{ paper: classes.paper }}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& input.MuiInputBase-input.MuiAutocomplete-input, & MuiInputLabel-root.Mui-focused":
            { color: "#ff31b9ff" },
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& label": { fontSize: "15px" },
          "& .MuiInputBase-adornedEnd: hover fieldset, & .MuiInputBase-adornedEnd fieldset":
          {
            borderColor: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
            "&:hover": {
              borderColor: "#ff31b9ff !important",
            },
          },
          "&:hover .MuiOutlinedInput-notchedOutline, & fieldset.css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#ff31b9ff",
          },
        }}
        open={open}
        // open
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option: any, value: any) =>
          option.label === value.label
        }
        getOptionLabel={(option: any) => option.label}
        options={options}
        loading={loading}
        clearOnBlur={false}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Perpetuals Markets"
            sx={textfield}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />

    </Stack>
  );
}
