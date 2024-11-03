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
    <section>
      <ProductsControls searchParams={searchParams} />
      <ul className="max-w-screen-xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-16 mt-16 mb-24">
        {products.map((product) => (
          <ProductCard productsObj={product} key={product.id} />
        ))}
      </ul>
    </section>
  );
}
