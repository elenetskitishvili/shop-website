"use client";
import React, { useState, useEffect } from "react";

function ProductDetails({ params }) {
  const { productId } = params;
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${productId}`);

        if (!res.ok)
          throw new Error("Somthing went wrong with fetching Products");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Products not found!");
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  //   return (
  //     <article className="productPost">
  //       <header className="header">
  //         <h1 className="title">{product.title}</h1>
  //         <div className="meta">
  //           <span className="views">{product.views} views</span>
  //           <span className="userId">Author ID: {product.userId}</span>
  //         </div>
  //       </header>

  //       <div className="content">
  //         <p>{product.body}</p>
  //       </div>

  //       <footer className="footer">
  //         <div className="tags">
  //           {product.tags.map((tag, index) => (
  //             <span key={index} className="tag">
  //               {tag}
  //             </span>
  //           ))}
  //         </div>
  //         <div className="reactions">
  //           <span className="likes">👍 {product.reactions.likes}</span>
  //           <span className="dislikes">👎 {product.reactions.dislikes}</span>
  //         </div>
  //       </footer>
  //     </article>
  //   );
}

export default ProductDetails;
