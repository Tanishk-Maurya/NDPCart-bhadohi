import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </CartProvider>
  </BrowserRouter>
);
