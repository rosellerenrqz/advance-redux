import React from "react";
import Layout from "./Components/Layout/Layout";
import Products from "./Components/Shop/Products";
import Cart from "./Components/Cart/Cart";

const App = () => {
  return (
    <>
      <Layout />
      <Cart />
      <Products />
    </>
  );
};

export default App;
