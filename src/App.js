// App.js
import HomePage from "./pages/HomePage";
import "./App.css";
import { useState } from "react";
import { CartContext, CartProvider } from "./context/CartContext.js";

function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}

export default App;