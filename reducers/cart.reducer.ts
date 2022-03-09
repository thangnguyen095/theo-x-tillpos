import { createReducer } from "@reduxjs/toolkit";
import { addToCart, getDiscount, resetCart } from "actions/cart.action";
import Item from "models/Item";

export interface CartState {
  items?: Item[];
  loading?: boolean;
  discount: number;
  total: number;
  subtotal: number;
}

export default createReducer<CartState>(
  {
    discount: 0,
    total: 0,
    subtotal: 0,
  },
  (builder) => {
    builder
      .addCase(getDiscount.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDiscount.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.total = payload.total;
        state.subtotal = payload.subtotal;
        state.discount =
          Math.round(
            (payload.subtotal - payload.total + Number.EPSILON) * 100
          ) / 100;
      })
      .addCase(resetCart, (state) => {
        state.loading = false;
        state.total = 0;
        state.discount = 0;
        state.subtotal = 0;
      })
      .addCase(addToCart, (state, { payload }) => {
        const items = state.items || [];
        let itemIdx = items.findIndex((item) => item.id == payload.id);
        if (itemIdx == -1) {
          // newly added
          items?.unshift(payload);
          itemIdx = 0;
        }
        if (payload.amount == 0) {
          // if amount equals zero, remove it from cart
          items?.splice(itemIdx, 1);
        } else {
          // else, update the quantity
          items[itemIdx].amount = payload.amount;
        }

        state.items = items;
      });
  }
);
