import ProductDisplay from "@/components/ProductDisplay";
import { Typography } from "@mui/material";
import { addToCart } from "actions/cart.action";
import Product from "models/Product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";

export default function ProductListing(props: { products: Product[] }) {
  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = (product: Product, quantity: number) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        amount: quantity,
      })
    );
  };
  return (
    <div>
      <Typography variant="h4" mb={2}>
        Menu
      </Typography>
      <div>
        {props.products.map((product, idx) => (
          <ProductDisplay
            key={idx}
            product={product}
            onChange={handleOnChange}
          />
        ))}
      </div>
    </div>
  );
}
