import Checkout, { Promotion } from "./Checkout";
import FixedDiscount from "./strategies/FixedDiscount";
import GetXForY from "./strategies/GetXForY";

describe("Checkout", () => {
  it("Should return total without any discount", () => {
    let checkout = new Checkout();
    checkout.add({ id: 1, name: "Small Pizza", price: 11.99, amount: 1 });
    checkout.add({ id: 2, name: "Medium Pizza", price: 15.99, amount: 1 });
    checkout.add({ id: 3, name: "Large Pizza", price: 21.99, amount: 1 });

    expect(checkout.total()).toBe(49.97);
  });

  it("Should return the price after a fixed discount", () => {
    let promotions: Promotion[] = [
      {
        strategy: new FixedDiscount(),
        params: {
          productId: 1,
          amount: 1,
        },
      },
    ];
    let checkout = new Checkout(promotions);
    checkout.add({ id: 1, name: "Small Pizza", price: 11.99, amount: 1 });
    checkout.add({ id: 2, name: "Medium Pizza", price: 15.99, amount: 1 });
    checkout.add({ id: 3, name: "Large Pizza", price: 21.99, amount: 1 });

    expect(checkout.total()).toBe(48.97);
  });

  it("Should return the price of Y instead of X", () => {
    let promotions: Promotion[] = [
      {
        strategy: new GetXForY(),
        params: {
          productId: 1,
          xAmount: 3,
          yAmount: 2,
        },
      },
    ];
    let checkout = new Checkout(promotions);
    checkout.add({ id: 1, name: "Small Pizza", price: 11.99, amount: 3 });

    expect(checkout.total()).toBe(11.99 * 2);
  });

  it("Should be able to combine fixed discount and get X for Y", () => {
    let promotions: Promotion[] = [
      {
        strategy: new FixedDiscount(),
        params: {
          productId: 3,
          amount: 2,
        },
      },
      {
        strategy: new GetXForY(),
        params: {
          productId: 1,
          xAmount: 3,
          yAmount: 2,
        },
      },
    ];
    let checkout = new Checkout(promotions);
    checkout.add({ id: 1, name: "Small Pizza", price: 11.99, amount: 3 });
    checkout.add({ id: 2, name: "Medium Pizza", price: 15.99, amount: 1 });
    checkout.add({ id: 3, name: "Large Pizza", price: 21.99, amount: 1 });

    expect(checkout.total()).toBe(59.96);
  });
});
