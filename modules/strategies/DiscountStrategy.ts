import Item from "models/Item";

export default interface DiscountStrategy {
  getName(): string;
  getDiscount(items: Item[], params: any): number;
}
