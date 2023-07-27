import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addItemToCart(state, action) {
      const addNewItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === addNewItem.id
      );

      state.totalQuantity++; //to update totalquantity in initial state
      if (!existingItem) {
        state.items.push({
          id: addNewItem.id,
          name: addNewItem.title,
          price: addNewItem.price,
          quantity: 1,
          totalPrice: addNewItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      }
    },

    removeItemToCart(state, action) {
      const id = action.payload;
      //finding the id of the array to be removed
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--; //to update totalquantity in initial state
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
