import React from "react";
import ReactDOM from "react-dom/client";
import "./Scss/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ShopContextProvider from "./Context/ShopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>,
);
reportWebVitals();
