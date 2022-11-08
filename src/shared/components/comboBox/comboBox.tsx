import * as React from "react";
import { TextField, Stack, Paper, CircularProgress } from "@mui/material";
import { PerpetualsMarketsType, ComboBoxProps } from './comboBoxInterfaces';
import { perpetualsMarkets } from './comboBoxConstants';
import { useStyles, StyledAutocomplete, textfield } from './styles';
// import { matchSorter } from 'match-sorter';
// import { WindowSharp } from "@mui/icons-material";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// const CustomPaper = (props: any) => {
//   return <Paper {...props} sx={{ width: 300 }} />;
// };

// const filterOptions = createFilterOptions({
//   matchFrom: 'start',
//   stringify: (option: PerpetualsMarketsType) => option.label,
// });
// const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

export default function ComboBox({ updateValue }: ComboBoxProps) {
  // updateValue({label:"tralala"})
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly PerpetualsMarketsType[]>([]);
  const [value, setValue] = React.useState<PerpetualsMarketsType | null | unknown>(perpetualsMarkets[0]);

  const classes = useStyles();
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

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
            // alert('value null')
            //Just give a value to a value to avoid null
            //e.g. value = ""
            setValue({ label: "", id: 0 });
            updateValue({ label: "", id: 0 });
            return;
          }

          // console.log("newValue", newValue);
          setValue(newValue);
          updateValue(newValue);
        }}
        // onChange={(event: any, newValue: PerpetualsMarketsType | unknown) => {
        //   alert(newValue)
        //   console.log('newValue', newValue)
        //   setValue(newValue);
        // }}
        // disableCloseOnSelect
        PaperComponent={({ children }) => {
          // console.log("comboBox children", children);
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
        // ListboxProps={{ style: root }}
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
      // filterOptions={(x) => x}
      //   renderOption={(props, option, { selected }) => (

      //     <li {...props}>
      //       {typeof option === 'object' && option !== null && options &&
      //       <Box>{option.label}</Box>
      //   }
      //     </li>
      // )}
      />
    </Stack>
  );
}
