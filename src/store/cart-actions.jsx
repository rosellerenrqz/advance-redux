import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-d1c26-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch Cart data!");
      }
      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      //use cartData to set cart
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          //fixing issue of items being undefined, instead of just leave it as empty array
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      //show error notif
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error",
          message: "Fetching Cart Data Failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    //show pending notif
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data",
      })
    );

    const sendRequest = async () => {
      //fetching data
      const response = await fetch(
        "https://redux-d1c26-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data Failed.");
      }
    };

    try {
      await sendRequest();

      //show success notif
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success",
          message: "Sent Cart Data Successfully!",
        })
      );
    } catch (error) {
      //show error notif
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error",
          message: "Sending Cart Data Error!",
        })
      );
    }
  };
};
