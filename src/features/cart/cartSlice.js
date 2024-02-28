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
    increaseItemQuantity(state, action) {
      const existingItem = state.find((item) => item.itemId === action.payload);
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const existingItem = state.find((item) => item.itemId === action.payload);
      existingItem.quantity--;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    },
    removeItem(state, action) {
      state.splice(
        state.findIndex((item) => item.itemId === action.payload),
        1,
      );
    },
    clearCart() {
      return [];
    },
  },
});

export const selectAddonQuantityById = (state, id) => {
  const items = state.cart.filter((item) => item.itemId === id);
  return items?.reduce((acc, cur) => acc + cur.quantity, 0);
};

export const selectTotlePrice = (state) =>
  state.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const {
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
