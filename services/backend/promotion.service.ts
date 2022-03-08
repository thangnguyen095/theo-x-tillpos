import PromotionConfig from "models/PromotionConfig";
import { Promotion } from "modules/Checkout";
import availableStrategies from "modules/strategies";
import allPromotions from "../../fixtures/promotions.json";

export default {
  getCustomerPromotions(customerId: number) {
    const promotionConfigs = (allPromotions as PromotionConfig[]).filter(
      (promo) => promo.customerId == customerId
    );
    let promotions: Promotion[] = [];
    promotionConfigs.forEach((promo) => {
      for (const strat of availableStrategies) {
        if (strat.getName() == promo.strategy.name) {
          promotions.push({
            strategy: strat,
            params: promo.strategy.params,
          });
          break;
        }
      }
    });
    return promotions;
  },
};
