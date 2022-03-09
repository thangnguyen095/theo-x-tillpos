import Item from "models/Item";
import DiscountStrategy from "./strategies/DiscountStrategy";

export interface Promotion {
  strategy: DiscountStrategy;
  params?: any;
}

export default class Checkout {
  promotions: Promotion[] | undefined;
  items: Item[] = [];

  constructor(promotions?: Promotion[]) {
    this.promotions = promotions;
  }

  add(item: Item): void {
    this.items.push(item);
  }

  subtotal(): number {
    let total = this.items.reduce(
      (prev, curr) => prev + curr.price * curr.amount,
      0
    );
    return Math.round((total + Number.EPSILON) * 100) / 100;
  }

  total(): number {
    // subtotal without any discount
    let total = this.subtotal();

    if (this.promotions && this.promotions.length) {
      // if there's any promotions, find the total discount value
      let discount = this.promotions.reduce(
        (prev, curr) =>
          prev + curr.strategy.getDiscount(this.items, curr.params),
        0
      );
      // final total will be subtracted with discount value
      total -= discount;
    }
    return Math.round((total + Number.EPSILON) * 100) / 100;
  }
}
