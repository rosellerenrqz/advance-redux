import React from "react";
import Card from "../UI/Card";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Card>
      <h2>Shopping Cart</h2>
      <ul>
        <CartItem
          title="Test Item"
          total="18.0000"
          price="6.000000"
          quantity="3"
        />
      </ul>
    </Card>
  );
};

export default Cart;
