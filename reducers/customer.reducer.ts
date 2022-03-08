import { createReducer } from "@reduxjs/toolkit";
import { getCustomers } from "actions/customer.action";
import Customer from "models/Customer";

export interface CustomerState {
  loading?: boolean;
  customers?: Customer[];
}

export default createReducer<CustomerState>({}, (builder) =>
  builder
    .addCase(getCustomers.pending, (state) => {
      state.loading = true;
    })
    .addCase(getCustomers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.customers = payload;
    })
);
