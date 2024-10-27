import "./products.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductsControls from "../../components/ProductsControls/ProductsControls";

async function fetchProducts(search, sort) {
  const url = `https://dummyjson.com/products/search?q=${search || ""}${
    sort ? `&sortBy=title&order=${sort}` : ""
  }`;

  const res = await fetch(url);
  const data = await res.json();

  return data.products;
}

export default async function Products({ searchParams = {} }) {
  const { search = "", sort = "" } = searchParams;
  const products = await fetchProducts(search, sort);

  return (
    <main className="main main-products">
      <section className="section-products">
        <ProductsControls searchParams={searchParams} />
        <ul className="products">
          {products.map((product) => (
            <ProductCard productsObj={product} key={product.id} />
          ))}
        </ul>
      </section>
    </main>
  );
}
