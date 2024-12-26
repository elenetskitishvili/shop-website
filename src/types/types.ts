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

export interface Blog {
  id: number;
  created_at: string;
  img: string;
  title_en: string;
  title_ka: string;
  body_en: string;
  body_ka: string;
}
