import axios, { AxiosResponse } from "axios";
import Product from "models/Product";

export default {
  getAllProducts(): Promise<AxiosResponse<Product[]>> {
    return axios.get("/api/product");
  },
};
