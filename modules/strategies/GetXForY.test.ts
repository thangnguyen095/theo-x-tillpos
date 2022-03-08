import GetXForY from "./GetXForY";

describe("FixedDiscount", () => {
  it("Should return a discount of X minus Y", () => {
    const strat = new GetXForY();

    const result = strat.getDiscount(
      [{ id: 1, name: "Small Pizza", price: 11.99, amount: 2 }],
      { productId: 1, xAmount: 2, yAmount: 1 }
    );

    expect(result).toBe(11.99);
  });

  it("Should return zero if not qualified for discount", () => {
    const strat = new GetXForY();

    const result = strat.getDiscount(
      [{ id: 1, name: "Small Pizza", price: 11.99, amount: 1 }],
      { productId: 1, xAmount: 4, yAmount: 3 }
    );

    expect(result).toBe(0);
  });
});
