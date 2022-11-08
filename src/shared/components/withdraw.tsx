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
    // Typography,
    Divider,
    Box,
} from "@mui/material";

export default function Withdraw({amount, updateWithdrawAmount}: any) {
    const [ withdrawAmount, setWithdrawAmount ] = React.useState<number>()

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
                    Withdraw Amount
                </InputLabel>
                <Input
                    id="standard-adornment-weight"
                    //   value={values.weight}
                    //   onChange={handleChange("weight")}
                    value={withdrawAmount}
                    onChange={(e) => {
                        setWithdrawAmount(
                          Number(e.target.value)
                        );
                        updateWithdrawAmount(Number(e.target.value))
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
            {/* <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ mt: "34px", fontSize: 10, lineHeight: 1.5 }}
            >
                Need USDC? <b>Bridge & Swap here</b>
            </Typography> */}
            <Divider variant="middle" sx={{ m: "34px 0 0", borderColor: "#ff31b9ff" }} />
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, auto)",
                    mt: "10px",
                }}
            // sx={{ display: "flex", flexWrap: "wrap" }}
            >
                <Box
                    sx={{
                        fontSize: "13px",
                    }}
                >
                    Free Collateral
                </Box>
                <Box
                    sx={{
                        fontSize: "13px",
                        justifySelf: "flex-end",
                    }}
                >
                    {amount} { withdrawAmount && <> -&gt; {Math.abs( amount - withdrawAmount ) }</>}
                </Box>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, auto)",
                    mt: "10px",
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
                     {amount} { withdrawAmount && <> -&gt; {Math.abs( amount - withdrawAmount ) }</>}
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
