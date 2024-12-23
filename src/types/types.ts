export interface Product {
  id: number;
  created_at: string;
  name: string;
  price: number;
  user_id: string;
  stripe_product_id: string;
  stripe_price_id: string;
  description: string;
  image: string;
}
