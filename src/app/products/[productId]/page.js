import React from "react";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log(data);
  const products = data.products;
  return products.map((product) => ({
    productId: product.id.toString(),
  }));
}

async function ProductDetails({ params }) {
  const { productId } = params;
  const res = await fetch(`https://dummyjson.com/products`);
  const product = await res.json();
  return <div>PAAGE</div>;
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
