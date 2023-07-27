import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData, sendCartData } from "./store/cart-actions";
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
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initialMount) {
      initialMount = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
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
