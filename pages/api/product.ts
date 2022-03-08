import type { NextApiRequest, NextApiResponse } from "next"
import products from "../../fixtures/products.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json(products);
}
