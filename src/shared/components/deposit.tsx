import * as React from "react";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
import {
    InputLabel,
    // OutlinedInput,
    // MenuItem,
    FormControl,
    // FormHelperText,
    // Select,
    InputAdornment,
    Input,
    Typography,
    Divider,
    Box,
} from "@mui/material";

// interface State {
//     amount: string;
//     password: string;
//     weight: string;
//     weightRange: string;
//     showPassword: boolean;
// }

export default function Deposit({settradingAmount}: any) {
    // const [values, setValues] = React.useState<State>({
    //     amount: "",
    //     password: "",
    //     weight: "",
    //     weightRange: "",
    //     showPassword: false,
    // });
    // console.log('settradingAmount', settradingAmount)
    // const { settradingAmount } = props
    const [ depositAmount, setDepositAmount ] = React.useState<number>()

        // const handleChange =
        // (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        //     setValues({ ...values, [prop]: event.target.value });
        // };

    // const handleChange =
    //     (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //         setValues({ ...values, [prop]: event.target.value });
    //     };

    return (
        <Box
            id="deposit"
            component="form"
            sx={
                {
                    // width: "470px",
                    // height: "326px",
                }
            }
            //   spacing={2}
            noValidate
            autoComplete="off"
        >
            {/* <TextField
                className="USDCInput"
                // label="Number"
                // type="number"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                // value={btcValue && btcValue}
                sx={{
                    "& label, & label.Mui-focused, .USDCInput, .MuiTextField-root & input":
                    {
                        color: "green",
                        paddingTop: 0,
                    },
                    "& .MuiFilledInput-underline::after, & .MuiFilledInput-underline::before":
                    {
                        borderBottom: "2px solid #ff31b9ff",
                    },
                }}
                variant="filled"
                inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    color: "red !important",
                }}
            onChange={(e: any) => {
              setUsdcValue(
                e.target.value < 0 ? 0 : e.target.value * marketPrice
              );
              setBtcValue(e.target.value < 0 ? 0 : e.target.value);

              // setUsdcValue(e.target.value * marketPrice);
              // setBtcValue(e.target.value);
            }}
            /> */}
            {/* <TextField className="USDCInput" hiddenLabel variant="standard" /> */}
            <FormControl
                variant="standard"
                sx={{ m: "46px auto 23px", width: 413, height: 43 }}
            >
                <InputLabel
                    htmlFor="standard-adornment-weight"
                    sx={{
                        fontSize: 10,
                        top: 8,
                        color: "#ff31b9ff",
                        "&.Mui-focused": { color: "inherit" },
                    }}
                >
                    Deposit Amount
                </InputLabel>
                <Input
                    id="standard-adornment-weight"
                    //   value={values.weight}
                    //   onChange={handleChange("weight")}
                    value={depositAmount}
                    onChange={(e) => {
                        setDepositAmount(
                          Number(e.target.value)
                        );
                        settradingAmount(Number(e.target.value));
                      }}
                    endAdornment={
                        <InputAdornment
                            position="end"
                            sx={{
                                "& p": {
                                    color: "#ff31b9ff",
                                    fontSize: "0.875rem",
                                    fontWeight: "bold",
                                },
                            }}
                        >
                            USDC
                        </InputAdornment>
                    }
                    aria-describedby="standard-weight-helper-text"
                    sx={{
                        color: "#ff31b9ff",
                        "&::before": { borderBottom: "1px solid #ff31b9ff" },
                        "&::after": { borderBottom: "2px solid #ff31b9ff" },
                    }}
                    inputProps={{
                        "aria-label": "weight",
                    }}
                />
                {/* <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText> */}
            </FormControl>
            <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ mt: "34px", fontSize: 10, lineHeight: 1.5 }}
            >
                Need USDC? <b>Bridge & Swap here</b>
            </Typography>
            <Divider variant="middle" sx={{ m: 0, borderColor: "#ff31b9ff" }} />
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, auto)",
                    mt: "15px",
                }}
            // sx={{ display: "flex", flexWrap: "wrap" }}
            >
                <Box
                    sx={{
                        fontSize: "13px",
                    }}
                >
                    Total Collateral
                </Box>
                <Box
                    sx={{
                        fontSize: "13px",
                        justifySelf: "flex-end",
                    }}
                >
                    $0.00 { depositAmount && depositAmount > 0 && <> -&gt; {depositAmount}</>}
                </Box>
            </Box>
            {/* <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Normal"
                variant="filled"
            /> */}
            {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
                <Select
                    native
                // value={age}
                // onChange={handleChange}
                // input={<OutlinedInput label="Age" id="demo-dialog-native" />}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl> */}
            {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    // value={age}
                    // onChange={handleChange}
                    input={<OutlinedInput label="Age" />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl> */}
        </Box>
    );
}
