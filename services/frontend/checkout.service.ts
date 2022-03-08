import axios, { AxiosResponse } from "axios";
import CheckDiscountResult from "models/CheckDiscountResult";
import Item from "models/Item";

export default {
  getDiscount(
    items?: Item[],
    customerId?: number
  ): Promise<AxiosResponse<CheckDiscountResult>> {
    return axios.post("/api/checkout/get-discount", {
      customerId,
      items,
    });
  },
};
