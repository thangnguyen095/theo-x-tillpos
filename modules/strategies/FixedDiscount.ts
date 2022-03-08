import Item from "models/Item";
import DiscountStrategy from "./DiscountStrategy";

export interface FixedDiscountParams {
  productId: number;
  amount: number;
}

export default class FixedDiscount implements DiscountStrategy {
  getName(): string {
    return "FixedDiscount";
  }
  getDiscount(items: Item[], params: FixedDiscountParams): number {
    let totalDiscount = 0;
    for (let item of items) {
      if (item.id == params.productId) {
        totalDiscount += params.amount;
      }
    }

    return totalDiscount;
  }
}
