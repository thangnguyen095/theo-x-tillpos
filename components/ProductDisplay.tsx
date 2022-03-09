import {
  Button, ButtonGroup, Grid,
  Typography
} from "@mui/material";
import Product from "models/Product";
import Image from "next/image";
import { useState } from "react";
import styles from "./ProductDisplay.module.scss";

export default function ProductDisplay(props: {
  product: Product;
  onChange: (product: Product, quantity: number) => void;
}) {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    handleOnChange(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      handleOnChange(quantity - 1);
    }
  };

  const handleOnChange = (newQuantity: number) => {
    props.onChange(props.product, newQuantity);
  };

  return (
    <Grid
      container
      sx={{
        borderBottom: "1px solid silver",
      }}
      alignItems={"center"}
    >
      <Grid item xs={3}>
        {props.product.image && props.product.image.length && (
          <Image src={props.product.image} width={"150"} height={"150"} />
        )}
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h5">{props.product.name}</Typography>
        <Typography variant="subtitle1">{props.product.description}</Typography>
        <Typography
          fontWeight={600}
          mb={1}
        >{`${props.product.price} USD`}</Typography>
        <ButtonGroup size="small">
          <Button onClick={decreaseQuantity}>-</Button>
          <Button disabled className={styles.quantity}>
            {quantity}
          </Button>
          <Button onClick={increaseQuantity}>+</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
