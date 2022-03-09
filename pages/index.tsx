import { Card, Container, Grid } from "@mui/material";
import CheckOutCart from "containers/CheckOutCart";
import ProductListing from "containers/ProductListing";
import Product from "models/Product";
import Head from "next/head";
import styles from "./index.module.scss";
import productService from "services/backend/product.service";

export default function Home(props: { products: Product[] }) {
  return (
    <Container>
      <Head>
        <title>Pizza Shop</title>
      </Head>
      <div className={styles.main}>
        <Grid container>
          <Grid item xs={8}>
            <ProductListing products={props.products} />
          </Grid>
          <Grid item xs={4}>
            <Card className={styles.cart} elevation={0}>
              <CheckOutCart />
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export const getServerSideProps = () => {
  return {
    props: { products: productService.getAllProducts() },
  };
};
