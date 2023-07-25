import React from "react";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = () => {
  const badge = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  // console.log(badge);

  const toggleHandler = () => {
    dispatch(uiActions.toggled());
  };

  return (
    <button
      onClick={toggleHandler}
      className="border-2 px-5 py-3 rounded-md bg-none hover:opacity-90 active:opacity-80">
      <span className="text-white mx-1 text-lg">Cart</span>
      <span className="bg-white mx-1 px-5 py-0 text-lg font-medium rounded-full">
        {badge}
      </span>
    </button>
  );
};

export default CartButton;
