import FixedDiscount from "./FixedDiscount";

describe("FixedDiscount", () => {
  it("Should return a fixed amount of discount", () => {
    const strat = new FixedDiscount();

    const result = strat.getDiscount(
      [{ id: 1, name: "Small Pizza", price: 11.99, amount: 1 }],
      { productId: 1, amount: 1 }
    );

    expect(result).toBe(1);
  });

  it("Should discount for the fixed amount multiply by the quantity", () => {
    const strat = new FixedDiscount();

    const result2 = strat.getDiscount(
      [{ id: 1, name: "Small Pizza", price: 11.99, amount: 4 }],
      { productId: 1, amount: 2 }
    );

    expect(result2).toBe(8)
  })

  it("Should return zero if not qualified for discount", () => {
    const strat = new FixedDiscount();

    const result = strat.getDiscount(
      [{ id: 1, name: "Small Pizza", price: 11.99, amount: 1 }],
      { productId: 2, amount: 1 }
    );

    expect(result).toBe(0);
  });
});
