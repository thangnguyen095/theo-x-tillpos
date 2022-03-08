import { createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "services/frontend/customer.service";

export const getCustomers = createAsyncThunk(
  "@customer/get",
  async (payload) => {
    const { data } = await customerService.getCustomers();
    return data;
  }
);
