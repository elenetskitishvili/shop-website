import "./products.css";
import ProductCard from "../components/ProductCard/ProductCard";

export default async function Products() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const { products } = data;

  return (
    <main className="main main-products">
      <section className="section-products">
        <p className="section-intro">
          Discover a world of endless choices at OmniShop!
        </p>

        <ul className="products">
          {products.map((product) => (
            <ProductCard productsObj={product} key={product.id} />
          ))}
        </ul>
      </section>
    </main>
  );
}
