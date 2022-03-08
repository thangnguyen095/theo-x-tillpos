import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import CheckDiscount from "models/CheckDiscount";
import Item from "models/Item";
import checkoutService from "services/frontend/checkout.service";

export const addToCart = createAction<Item>("@cart/add-to-cart");

export const getDiscount = createAsyncThunk(
  "@cart/get-discount",
  async (payload: CheckDiscount) => {
    const { data } = await checkoutService.getDiscount(
      payload.items,
      payload.customerId
    );
    return data;
  }
);
