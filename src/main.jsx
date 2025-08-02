import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext';
import { FilterProvider } from './context/FilterContext'; 
import { SidebarProvider } from "./context/SidebarContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <FilterProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>
);
