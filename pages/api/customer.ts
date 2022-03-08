import type { NextApiRequest, NextApiResponse } from "next"
import customers from "../../fixtures/customers.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json(customers);
}
