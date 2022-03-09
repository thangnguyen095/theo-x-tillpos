import { Grid, Typography } from "@mui/material";
import Item from "models/Item";

export default function CartItem(props: { item: Item }) {
  return (
    <Grid
      container
      alignItems={"center"}
      sx={{
        borderBottom: "1px solid silver",
      }}
    >
      <Grid item xs={2} textAlign={"center"}>
        <Typography variant="h6">{`${props.item.amount}x`}</Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography>{props.item.name}</Typography>
        <Typography>{props.item.price} USD</Typography>
      </Grid>
    </Grid>
  );
}
