import Item from "./Item";

export default interface CheckDiscount {
  customerId?: number;
  items?: Item[]
}