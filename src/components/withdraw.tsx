import * as React from "react";
import {
    InputLabel,
    FormControl,
    InputAdornment,
    Input,
    Divider,
    Box,
} from "@mui/material";

export default function Withdraw({amount, updateWithdrawAmount}: any) {
    const [ withdrawAmount, setWithdrawAmount ] = React.useState<number>()

    return (
        <Box
            id="deposit"
            component="form"
            noValidate
            autoComplete="off"
        >
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
            </FormControl>
            <Divider variant="middle" sx={{ m: "34px 0 0", borderColor: "#ff31b9ff" }} />
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, auto)",
                    mt: "10px",
                }}
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
        </Box>
    );
}
