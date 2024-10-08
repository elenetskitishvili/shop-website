"use client";

import React from "react";
import "./blogs.css";
import { useEffect, useState } from "react";

const url = "https://dummyjson.com/posts";

function Blogs() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBlogList(data.posts);
      } catch (error) {
        console.log(error);
        setBlogList([]);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <main className="main main-blogs">
      <section className="section-blogs">
        <p className="section-intro">
          Welcome to the OmniShop Blog! Discover tips, trends, and insights on
          everything from food to fashion, home decor, and more.
        </p>
        <ul className="blogs">
          {blogList.map((blog) => (
            <li className="blog" key={blog.id}>
              <h4 className="blog__title">{blog.title}</h4>
              <p className="blog__desc">{blog.body}</p>
              <div className="blog__tags">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="blog__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="blog__reactions">
                <p>{blog.reactions.likes} 👍</p>
                <p>{blog.reactions.dislikes} 👎</p>
              </div>
              <div className="blog__button btn">
                <a href={`/blogs/${blog.id}`} className="btn">
                  Read More
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Blogs;
