import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addItem } = orderSlice.actions;

export default orderSlice.reducer;
