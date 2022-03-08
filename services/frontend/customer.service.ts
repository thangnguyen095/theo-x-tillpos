import axios, { AxiosResponse } from "axios";
import Customer from "models/Customer";

export default {
  getCustomers(): Promise<AxiosResponse<Customer[]>> {
    return axios.get("/api/customer");
  },
};
