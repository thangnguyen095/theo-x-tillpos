import CheckDiscount from "models/CheckDiscount";
import Checkout from "modules/Checkout";
import type { NextApiRequest, NextApiResponse } from "next";
import promotionService from "services/backend/promotion.service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "POST") {
    // invalid method, send status "Method not allowed"
    res.status(405).send(null);
    return;
  }

  const body: CheckDiscount = req.body;
  const promotions = body.customerId
    ? promotionService.getCustomerPromotions(body.customerId)
    : [];

  const checkout = new Checkout(promotions);
  if (body.items && body.items.length) {
    body.items.forEach((item) => checkout.add(item));
  }
  res.status(200).json({
    subtotal: checkout.subtotal(),
    total: checkout.total(),
  });
}
