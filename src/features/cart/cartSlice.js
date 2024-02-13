import { createSlice } from "@reduxjs/toolkit";
import { compareArrays } from "../../utils/helpers";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.find(
        (item) =>
          item.itemId === action.payload.itemId &&
          compareArrays(item.addons, action.payload.addons),
      );
      if (!existingItem) {
        state.push(action.payload);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      }
    },
  },
});

export const selectAddonQuantityById = (state, id) => {
  const items = state.cart.filter((item) => item.itemId === id);
  return items?.reduce((acc, cur) => acc + cur.quantity, 0);
};

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
