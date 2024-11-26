import "./product-details.css";

import { notFound } from "next/navigation";
import { supabase } from "../../../../lib/supabase";
const fetchProduct = async function (id) {
  try {
    const { data, error } = await supabase
      .from("caudalie")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
      notFound();
    }

    return data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

export default async function ProductPage({ params }) {
  const { locale, productId } = params;
  const product = await fetchProduct(productId);
  return (
    <div className="product__wrapper">
      <div>
        <img
          className="product__img--big"
          src={product.img}
          alt={product.title_en}
        />
      </div>
      <div className="product-details">
        <h3 className="heading-tertiary">{product.title_en}</h3>
        <p className="product__description">{product.description_en}</p>
        <span className="product__price">$ {product.price}</span>
        <a href={`/${locale}/products/${product.id}`} className="btn btn-cta">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
