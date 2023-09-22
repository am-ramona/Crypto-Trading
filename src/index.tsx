import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { GlobalStyles } from "@mui/material";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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
    <React.StrictMode>
      <Provider store={store}>
        {inputGlobalStyles}
          <App />
      </Provider>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
