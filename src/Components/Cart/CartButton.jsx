import React from "react";

const CartButton = () => {
  return (
    <button className="border-2 px-5 py-3 rounded-md bg-none">
      <span className="text-white mx-1 text-lg">Cart</span>
      <span className="bg-white mx-1 px-5 py-1 text-lg rounded-full">1</span>
    </button>
  );
};

export default CartButton;
