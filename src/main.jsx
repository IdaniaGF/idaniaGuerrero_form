import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InputContext, InputContextProvider } from "./context/InputContext";
import "./assets/css/reset.css";
import "./assets/css/base.css";
import "./assets/css/index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InputContextProvider>
      <App />
    </InputContextProvider>
  </React.StrictMode>
);
