import * as React from "react";
import {
    InputLabel,
    FormControl,
    InputAdornment,
    Input,
    Typography,
    Divider,
    Box,
} from "@mui/material";

export default function Deposit({settradingAmount}: any) {
    const [ depositAmount, setDepositAmount ] = React.useState<number>()

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
                    Deposit Amount
                </InputLabel>
                <Input
                    id="standard-adornment-weight"
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
        </Box>
    );
}
