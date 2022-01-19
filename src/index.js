import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsContextProvider } from "./contexts/Products";
import "./styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
