import { Button, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./thank-you.module.scss";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className={styles.fullHeight}>
      <Head>
        <title>Thank You</title>
      </Head>
      <div className={styles.alignCenter}>
        <Typography gutterBottom variant="h3">
          Thank You
        </Typography>
        <Typography gutterBottom>
          Your order has been successfully submitted. Expect your delivery in
          ugh... forever?
        </Typography>
        <Typography gutterBottom>Thank you for shopping with us!</Typography>
        <Button onClick={() => router.push("/")}>Back to Shopping</Button>
      </div>
    </div>
  );
}
