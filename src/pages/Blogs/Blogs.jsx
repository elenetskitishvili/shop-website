import React from "react";
import "./Blogs.css";

function Blogs() {
  const blogPosts = [
    {
      id: 16,
      title: "Best Soap Bars for Men",
      image: "images/blogs/blog-1.jpg",
    },

    {
      id: 2,
      title: "How to Make Your Own Soap",
      image: "images/blogs/blog-2.jpg",
    },
    {
      id: 3,
      title: "5 Benefits of Handmade Soap",
      image: "images/blogs/blog-3.jpg",
    },
    {
      id: 4,
      title: "The History of Soap Making",
      image: "images/blogs/blog-4.jpg",
    },
    {
      id: 5,
      title: "Top Essential Oils for Soap",
      image: "images/blogs/blog-5.jpg",
    },
    {
      id: 6,
      title: "Why Natural Soaps Are Better for Your Skin",
      image: "images/blogs/blog-6.jpg",
    },
    {
      id: 7,
      title: "10 DIY Soap Recipes for Beginners",
      image: "images/blogs/blog-7.jpg",
    },
    {
      id: 8,
      title: "How to Choose the Best Soap for Your Skin Type",
      image: "images/blogs/blog-8.jpg",
    },
    {
      id: 9,
      title: "How to Package Handmade Soaps for Sale",
      image: "images/blogs/blog-9.jpg",
    },
    {
      id: 10,
      title: "The Benefits of Organic Soap",
      image: "images/blogs/blog-10.jpg",
    },
    {
      id: 11,
      title: "Soap Making for Kids: Fun and Easy Recipes",
      image: "images/blogs/blog-11.jpg",
    },
    {
      id: 12,
      title: "The Difference Between Cold and Hot Process Soap",
      image: "images/blogs/blog-12.jpg",
    },
    {
      id: 13,
      title: "How to Use Exfoliants in Soap",
      image: "images/blogs/blog-13.jpg",
    },
    {
      id: 14,
      title: "5 Common Mistakes in Soap Making",
      image: "images/blogs/blog-14.jpg",
    },

    {
      id: 15,
      title: "The Best Soaps for Sensitive Skin",
      image: "images/blogs/blog-15.jpg",
    },
  ];

  return (
    <main className="main main-blogs">
      <section className="section-blogs">
        <p className="section-products__intro">
          Discover the Latest in Soap Making
        </p>
        <ul className="blogs">
          {blogPosts.map((blog) => (
            <li className="blog" key={blog.id}>
              <img className="blog__img" src={blog.image} alt={blog.title} />
              <h4 className="blog__title">{blog.title}</h4>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Blogs;
