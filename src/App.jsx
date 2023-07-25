import React from "react";
import { useSelector } from "react-redux";

import Layout from "./Components/Layout/Layout";
import Products from "./Components/Shop/Products";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const cartToggle = useSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <Layout />
      {cartToggle && <Cart />}
      <Products />
    </>
  );
};

export default App;
