import CartItem from "@/components/CartItem";
import { Button, MenuItem, Select, Typography } from "@mui/material";
import { getDiscount, resetCart } from "actions/cart.action";
import { getCustomers } from "actions/customer.action";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import styles from "./CheckOutCart.module.scss";

export default function CheckOutCart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartState = useSelector((state: RootState) => state.cart);
  const customerState = useSelector((state: RootState) => state.customer);
  const customerOptions = useMemo(() => {
    const allOptions =
      customerState.customers?.map((cus) => ({
        value: cus.id,
        label: cus.name,
      })) || [];

    allOptions.unshift({ value: -1, label: "Default" });
    return allOptions;
  }, [customerState.customers]);
  const [customerId, setCustomerId] = useState<number>(-1);
  const router = useRouter();

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  const checkDiscount = async () => {
    if (cartState.items && cartState.items.length) {
      dispatch(
        getDiscount({
          items: cartState.items,
          customerId: customerId != -1 ? customerId : undefined,
        })
      );
    } else {
      dispatch(resetCart());
    }
  };

  const checkOut = () => {
    // TODO: do the checkout integration
    router.push("/thank-you");
  };

  useEffect(() => {
    checkDiscount();
  }, [customerId, cartState.items]);

  return (
    <div>
      <Typography variant="h4" mb={2}>
        Cart
      </Typography>
      <div className={styles.items}>
        {cartState.items?.map((item, idx) => (
          <CartItem item={item} key={idx} />
        ))}
      </div>
      <div className={styles.summary}>
        <div className={styles.row}>
          <div className={styles.left}>Customer</div>
          <div className={styles.right}>
            <Select
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value as number)}
            >
              {customerOptions.map((option) => (
                <MenuItem value={option.value} key={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Subtotal</div>
          <div className={styles.right}>{cartState.subtotal || 0} USD</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Discount</div>
          <div className={styles.right}>{cartState.discount} USD</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>Total</div>
          <div className={styles.right}>{cartState.total} USD</div>
        </div>
      </div>
      <div className={styles.checkout}>
        <Button
          variant={"contained"}
          onClick={checkOut}
          disabled={!cartState.items || !cartState.items.length}
        >
          Check Out
        </Button>
      </div>
    </div>
  );
}
