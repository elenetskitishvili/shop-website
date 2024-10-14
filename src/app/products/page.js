"use client";
import "./products.css";
import ProductCard from "../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { debounce } from "lodash";

export default function Products({}) {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async (sortBy, order, query) => {
    try {
      let url = `https://dummyjson.com/products`;
      if (query) {
        url = `https://dummyjson.com/products/search?q=${query}`;
      } else if (sortBy && order) {
        url += `?sortBy=${sortBy}&order=${order}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Debounced API call for searching
  const debouncedFetchProducts = debounce((searchQuery) => {
    fetchProducts(null, null, searchQuery);
  }, 200);

  const handleSearchChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    debouncedFetchProducts(searchQuery);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!products) {
    return <div className="error">Product not found</div>;
  }

  return (
    <main className="main main-products">
      <section className="section-products">
        <div className="products-controls">
          <input
            type="text"
            className="products-controls__search"
            placeholder="Search products"
            value={query}
            onChange={handleSearchChange}
          />
          <div className="products-controls__sort">
            <button
              className="products-controls__sort-btn"
              onClick={() => fetchProducts("title", "asc")}
            >
              <i class="icon-sort fa-solid fa-arrow-up-z-a"></i>
            </button>
            <button
              className="products-controls__sort-btn"
              onClick={() => fetchProducts("title", "desc")}
            >
              <i class="icon-sort fa-solid fa-arrow-down-z-a"></i>
            </button>
          </div>
        </div>
        <ul className="products">
          {products.map((product) => (
            <ProductCard productsObj={product} key={product.id} />
          ))}
        </ul>
      </section>
    </main>
  );
}
