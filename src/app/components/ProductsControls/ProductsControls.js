"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useDebounce from "../../hooks/useDebounce";
import "./ProductsControls.css";

export default function ProductsControls({ searchParams }) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(searchParams.search || "");
  const [sortOrder, setSortOrder] = useState(searchParams.sort || "");

  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearchValue === "") {
      const updatedUrl = `/products?sort=${sortOrder}`;
      router.push(updatedUrl);
    } else {
      const updatedUrl = `/products?search=${debouncedSearchValue}&sort=${sortOrder}`;
      router.push(updatedUrl);
    }
  }, [debouncedSearchValue, sortOrder]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const updatedUrl = `/products?search=${debouncedSearchValue}&sort=${order}`;
    router.push(updatedUrl);
  };

  return (
    <div className="products-controls">
      <input
        type="text"
        className="products-controls__search"
        placeholder="Search products"
        value={searchValue}
        onChange={handleSearch}
      />
      <div className="products-controls__sort">
        <button
          className="products-controls__sort-btn"
          onClick={() => handleSort("asc")}
        >
          <i className="icon-sort fa-solid fa-arrow-up-z-a"></i>
        </button>
        <button
          className="products-controls__sort-btn"
          onClick={() => handleSort("desc")}
        >
          <i className="icon-sort fa-solid fa-arrow-down-z-a"></i>
        </button>
      </div>
    </div>
  );
}
