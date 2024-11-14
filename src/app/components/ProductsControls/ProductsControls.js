"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import useDebounce from "../../hooks/useDebounce";

export default function ProductsControls({ searchParams }) {
  const router = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState(searchParams?.search || "");
  const [sortOrder, setSortOrder] = useState(searchParams?.sort || "");

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const updateUrl = (search, sort) => {
    const queryParams = new URLSearchParams();

    if (search) queryParams.set("search", search);
    if (sort) queryParams.set("sort", sort);

    const newUrl = `${pathname}?${queryParams.toString()}`;

    router.push(newUrl);
  };

  useEffect(() => {
    updateUrl(debouncedSearchValue, sortOrder);
  }, [debouncedSearchValue, sortOrder]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  return (
    <div className="flex items-center justify-center gap-12 mt-10">
      <input
        type="text"
        className="w-96 py-4 px-10 text-2xl rounded-xl font-inherit text-inherit bg-white border-b-4 border-b-transparent shadow-sm focus:outline-none focus:shadow-md focus:border-b-emerald-500 dark:bg-zinc-900"
        placeholder="Search products"
        value={searchValue}
        onChange={handleSearch}
      />

      <div className="flex items-center gap-10">
        <button
          className="cursor-pointer rounded-xl"
          onClick={() => handleSort("asc")}
        >
          <i className="text-4xl text-emerald-500 fa-solid fa-arrow-up-z-a"></i>
        </button>
        <button
          className="cursor-pointer rounded-xl"
          onClick={() => handleSort("desc")}
        >
          <i className="text-4xl text-emerald-500 fa-solid fa-arrow-down-z-a"></i>
        </button>
      </div>
    </div>
  );
}
