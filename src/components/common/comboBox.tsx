// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import CircularProgress from "@mui/material/CircularProgress";
// import Stack from "@mui/material/Stack";

// type AutocompleteOption = string;

// interface MarketsType {
//   label: string;
//   year: number;
//   id: number;
//   code?: string;
// }

// const perpetualsMarkets: readonly MarketsType[] = [
// // const perpetualsMarkets = [
//   { label: "BTC-PERP", year: 1994, id: 1 },
//   { label: "ETH-PERP", year: 1972, id: 2 },
//   { label: "BTC-PERP", year: 1974, id: 3 },
//   { label: "BTC-PERP", year: 2008, id: 4 },
// ];

// function sleep(delay = 0) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

// export default function ComboBox() {
//   const defaultProps = {
//     options: perpetualsMarkets,
//     getOptionLabel: (option: MarketsType) => option.label,
//   };

//   const [open, setOpen] = React.useState(false);
//   const [options, setOptions] = React.useState<readonly MarketsType[]>([]);
//   const loading = open && options.length === 0;

//   React.useEffect(() => {
//     let active = true;

//     if (!loading) {
//       return undefined;
//     }

//     (async () => {
//       await sleep(1e3); // For demo purposes.

//       if (active) {
//         setOptions([...perpetualsMarkets]);
//       }
//     })();

//     return () => {
//       active = false;
//     };
//   }, [loading]);

//   React.useEffect(() => {
//     if (!open) {
//       setOptions([]);
//     }
//   }, [open]);

//   return (
//     <Stack spacing={1} sx={{ width: "100%" }}>
//       <Autocomplete
//                 {...defaultProps}
//                 clearOnEscape
//                 id="combo-box"
//                 options={perpetualsMarkets}
//                 // loading={loading}
//                 sx={{
//                     width: '100%',
//                     display: 'grid',
//                     gridTemplateColumns: '1fr',
//                     '& .MuiInput-root::after': {
//                         borderBottom: '2px solid #ff31b9ff',
//                     },
//                     '& .MuiInput-root::before': {
//                         borderBottom: '1px solid #cccccc',
//                     },
//                     '& label, & input, & #combo-box-label': {
//                         color: '#ff31b9ff'
//                     },
//                     '& fieldset': {
//                         borderColor: '#ff31b9ff',
//                     },
//                     '&:hover .MuiOutlinedInput-notchedOutline': {
//                         borderColor: '#ff31b9ff',
//                     }
//                 }}
//                 renderInput={(params) => <TextField {...params} label="Market" variant="standard" />}
//             />

//     </Stack>
//   );
// }

import * as React from "react";
import { TextField, Stack, Paper, CircularProgress } from "@mui/material";
// import { matchSorter } from 'match-sorter';
import Autocomplete, 
      { 
      //  createFilterOptions 
      } from "@mui/material/Autocomplete";
// import
//   Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Paper from "@mui/material/Paper";
// import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
// import { WindowSharp } from "@mui/icons-material";

interface PerpetualsMarketsType {
  label: string;
  year?: number;
  id?: number;
}

const perpetualsMarkets: readonly PerpetualsMarketsType[] = [
  // const perpetualsMarkets = [
  { label: "BTC-PERP", id: 1 },
  { label: "ETH-PERP", id: 2 },
];

// const topFilms = [
//   { title: "BTC-PERP" },
//   { title: "ETH-PERP" }
// ];

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
  // updateValue({label:"tralala"})
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<
    readonly PerpetualsMarketsType[]
  >([]);
  const [value, setValue] = React.useState<
    PerpetualsMarketsType | null | unknown
  >(perpetualsMarkets[0]);

  const classes = useStyles();
  const loading = open && options.length === 0;

  // const defaultProps = {
  //   options: perpetualsMarkets,
  //   getOptionLabel: (option: PerpetualsMarketsType) => option.label,
  // };
  // const flatProps = {
  //   options: perpetualsMarkets.map((option) => option.label),
  // };

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

      {/* <StyledAutocomplete
      id="combo-box-demo"
      options={perpetualsMarkets}
      getOptionLabel={(option: any) => option.label}
      style={{ width: 300 }}
      renderInput={(params: any) => {
        return (
          <TextField
            {...params}
            label="Combo box"
            variant="outlined"
            fullWidth
          />
        );
      }}
    /> */}

      {/* <Autocomplete
        sx={{ width: "100%" }}
        id="custom-autocomplete"
        options={perpetualsMarkets}
        style={{ margin: 20 }}
        getOptionLabel={(option) => `${option.label}`} //filter value
        PaperComponent={CustomPaper}
        ListboxProps={{ style: root }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              variant="outlined"
              label="Name: Manufacturer"
              sx={textfield}
            />
          );
        }}
        renderOption={(props, option, state) => {
          return (
            <h4
              key={`${option.label}`}
            >{`${option.label}`}</h4>
          ); //display value
        }}
      /> */}

      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg, & fieldset.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "& label":{ fontSize: '15px'},
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="clear-on-escape"
        clearOnEscape
        // disableClearable
        // includeInputInList
        // autoComplete
        // includeInputInList
        // disableListWrap
        // openOnFocus
        // autoHighlight
        // autoSelect
        // disablePortal
        // blurOnSelect
        // clearOnBlur
        // selectOnFocus
        renderInput={(params) => (
          <TextField {...params} label="Perpetuals Markets" variant="standard" />
        )}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="disableClearable" variant="standard" />
        )}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="include-input-in-list"
        includeInputInList
        renderInput={(params) => (
          <TextField
            {...params}
            label="includeInputInList"
            variant="standard"
          />
        )}
      /> */}
      {/* <Autocomplete
        {...flatProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="flat-demo"
        renderInput={(params) => (
          <TextField {...params} label="flat" variant="standard" />
        )}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="controlled-demo"
        value={value}
        onChange={(event: any, newValue: PerpetualsMarketsType | null) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="controlled" variant="standard" />
        )}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="autoComplete" variant="standard" />
        )}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="disable-list-wrap"
        disableListWrap
        renderInput={(params) => (
          <TextField {...params} label="disableListWrap" variant="standard" />
        )}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "&.Mui-focused": {
            borderColor: "purple !important"
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff !important",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="open-on-focus"
        openOnFocus
        renderInput={(params) => (
          <TextField {...params} label="openOnFocus" variant="standard" />
        )}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="auto-highlight"
        autoHighlight
        renderInput={(params) => (
          <TextField {...params} label="autoHighlight" variant="standard" />
        )}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="auto-select"
        autoSelect
        renderInput={(params) => (
          <TextField {...params} label="autoSelect" variant="standard" />
        )}
      /> */}

      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="disable-portal"
        disablePortal
        renderInput={(params) => (
          <TextField {...params} label="disablePortal" variant="standard" />
        )}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="blur-on-select"
        blurOnSelect
        renderInput={(params) => (
          <TextField {...params} label="blurOnSelect" variant="standard" />
        )}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="clear-on-blur"
        clearOnBlur
        renderInput={(params) => (
          <TextField {...params} label="clearOnBlur" variant="standard" />
        )}
      /> */}
      {/* <Autocomplete
        {...defaultProps}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          "& .MuiInput-root::after": {
            borderBottom: "2px solid #ff31b9ff",
          },
          "& .MuiInput-root::before": {
            borderBottom: "1px solid #cccccc",
          },
          "& label, & input, & #combo-box-label, & svg": {
            color: "#ff31b9ff",
          },
          "& fieldset": {
            borderColor: "#ff31b9ff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff31b9ff",
          },
        }}
        id="select-on-focus"
        selectOnFocus
        renderInput={(params) => (
          <TextField {...params} label="selectOnFocus" variant="standard" />
        )}
      /> */}
    </Stack>
  );
}
