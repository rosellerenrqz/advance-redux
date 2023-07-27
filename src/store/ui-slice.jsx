import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
  name: "ui-slice",
  initialState: initialState,
  reducers: {
    toggled(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
