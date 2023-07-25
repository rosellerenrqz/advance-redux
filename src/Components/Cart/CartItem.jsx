import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, price, total, id } = props;
  const formattedTotal = Number(total).toFixed(2);
  const formattedPrice = Number(price).toFixed(2);

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemToCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
      })
    );
  };

  return (
    <li className="my-4 p-4 bg-gray-500 text-white rounded-xl">
      <header className="flex justify-between items-baseline">
        <h3 className="text-3xl">{title}</h3>
        <div className="text-2xl font-bold">
          ₱{formattedTotal}
          <span className="font-normal text-base italic ml-2">
            (₱{formattedPrice}/item)
          </span>
        </div>
      </header>

      {/*DETAILS */}
      <div className="flex justify-between items-center">
        <div>
          x <span className="font-bold text-2xl">{quantity}</span>
        </div>

        {/*ACTIONS*/}
        <div className="flex justify-end my-2">
          <button
            onClick={removeItemHandler}
            className="px-4 py-1 border ml-2 hover:bg-gray-600 active:bg-gray-500">
            -
          </button>
          <button
            onClick={addItemHandler}
            className="px-4 py-1 border ml-2 hover:bg-gray-600 active:bg-gray-500">
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
