import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import { Provider } from "react-redux";
import { store } from "store";

describe("Home", () => {
  it("Should render headings for menu and cart", () => {
    render(
      <Provider store={store}>
        <Home products={[]} />
      </Provider>
    );

    const menuHeading = screen.getByText("Menu");
    const cartHeading = screen.getByText("Cart");

    expect(menuHeading).toBeInTheDocument();
    expect(cartHeading).toBeInTheDocument();
  });

  it("Should render given product information", () => {
    render(
      <Provider store={store}>
        <Home
          products={[
            {
              id: 1,
              name: "Small Pizza",
              description: "lorem ipsum",
              price: 11.99,
              image: "",
            },
          ]}
        />
      </Provider>
    );

    const product = screen.getByText("Small Pizza");

    expect(product).toBeInTheDocument();
  });
});
