import React from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import CartItem from "./CartItem";

const Cart = () => {
  const itemsCart = useSelector((state) => state.cart.items);
  return (
    <Card>
      <h2 className="text-xl font-semibold text-center">Shopping Cart</h2>
      <ul>
        {itemsCart.map((items) => (
          <CartItem
            key={items.id}
            id={items.id}
            title={items.name}
            total={items.totalPrice}
            price={items.price}
            quantity={items.quantity}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
