export default interface PromotionConfig {
  customerId: number;
  strategy: {
    name: string;
    params: any
  }
}