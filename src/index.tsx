import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";
// import { ThemeProvider, useTheme } from "@mui/material/styles";
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import theme from "./Theme";
// import { StyledEngineProvider } from "@mui/material/styles";
import { // CssBaseline, 
         GlobalStyles } from "@mui/material";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const theme = useTheme();

// const theme = {
//   borderRadius: "0.7rem",
//   color: "yellow"
// } as const;

const inputGlobalStyles = (
  <GlobalStyles
    styles={
      {
        // a: {
        //   textDecoration: "none"
        // },
        // "*": {
        //   transition: 'height 0.5s ease',
        //   transition: 'background-color 0.5s ease'
        // }
      }
    }
  />
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    {/* <ThemeProvider theme={theme}></ThemeProvider> */}
    {/* <MuiThemeProvider theme={theme}> */}
    <React.StrictMode>
      <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}
        {/* <CssBaseline /> */}

        {inputGlobalStyles}
        {/* <StyledEngineProvider injectFirst> */}
          <App />
        {/* </StyledEngineProvider> */}
        {/* </ThemeProvider> */}
      </Provider>
    </React.StrictMode>
    {/* </MuiThemeProvider> */}
    {/* </ThemeProvider> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
