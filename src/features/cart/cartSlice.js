import { createSlice } from "@reduxjs/toolkit";
import { compareArrays } from "../../utils/helpers";

const initialState = { cartItems: [], tip: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cartItems.find(
        (item) =>
          item.itemId === action.payload.itemId &&
          compareArrays(item.addons, action.payload.addons),
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      }
    },
    increaseItemQuantity(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.itemId === action.payload,
      );
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.itemId === action.payload,
      );
      existingItem.quantity--;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    },
    removeItem(state, action) {
      state.cartItems.splice(
        state.cartItems.findIndex((item) => item.itemId === action.payload),
        1,
      );
    },
    addTip(state, action) {
      state.tip = action.payload;
    },
    clearCart(state) {
      state.cartItems = [];
      state.tip = 0;
    },
  },
});

export const selectCartItems = (state) => state.cart.cartItems;

export const selectAddonQuantityById = (state, id) => {
  const items = state.cart.cartItems.filter((item) => item.itemId === id);
  return items?.reduce((acc, cur) => acc + cur.quantity, 0);
};

export const selectTotlePrice = (state) =>
  state.cart.cartItems.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const {
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
  addTip,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
