import Product from "models/Product";
import products from "../../fixtures/products.json";

export default {
  getAllProducts() {
    return products as Product[];
  },
};
