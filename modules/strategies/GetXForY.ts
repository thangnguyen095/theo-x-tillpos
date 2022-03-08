import Item from "models/Item";
import DiscountStrategy from "./DiscountStrategy";

export interface GetXForYParams {
  productId: number;
  xAmount: number;
  yAmount: number;
}

export default class GetXForY implements DiscountStrategy {
  getName(): string {
    return "GetXForY";
  }
  getDiscount(items: Item[], params: GetXForYParams): number {
    let totalDiscount = 0;
    let matchedItems: Item[] = items.filter(
      (item) => item.id == params.productId
    ); // filter out only item that is discountable
    let discountedCount = params.xAmount - params.yAmount; // the number of item to be discount
    let totalAmountMatched = matchedItems.reduce(
      (prev, curr) => prev + curr.amount,
      0
    );
    if (totalAmountMatched >= params.xAmount) {
      // qualified for discount
      let discountedAmount = discountedCount * matchedItems[0].price; // total discount will be number of item to be discount multiply by price

      totalDiscount += discountedAmount;
    }
    return totalDiscount;
  }
}
