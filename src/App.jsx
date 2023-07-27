import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";

import Notification from "./Components/UI/Notification";
import Layout from "./Components/Layout/Layout";
import Products from "./Components/Shop/Products";
import Cart from "./Components/Cart/Cart";

let initialMount = true;

const App = () => {
  const cartToggle = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart); //Get data from overall cart reducer
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      //show pending notif
      dispatch(
        uiActions.setNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data",
        })
      );

      try {
        const response = await fetch(
          `https://redux-d1c26-default-rtdb.firebaseio.com/cart.json`,
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );

        if (!response.ok) {
          throw new Error("Sending Cart Data Failed.");
        }

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

    //initial mount notif will be visible
    if (initialMount) {
      initialMount = false;
      return;
    }

    sendCartData();
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartToggle && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
};

export default App;
