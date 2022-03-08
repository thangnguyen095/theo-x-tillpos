import { createReducer } from "@reduxjs/toolkit";
import { addToCart, getDiscount } from "actions/cart.action";
import Item from "models/Item";

export interface CartState {
  items?: Item[];
  loading?: boolean;
  discount: number;
  total: number;
}

export default createReducer<CartState>(
  { discount: 0, total: 0 },
  (builder) => {
    builder
      .addCase(getDiscount.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDiscount.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.discount = payload.subtotal - payload.total;
        state.total = payload.total;
      })
      .addCase(addToCart, (state) => {
        // TODO: handle state change for add to cart
      });
  }
);
