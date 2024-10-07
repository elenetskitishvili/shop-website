"use client";

import React, { useState, useEffect } from "react";
import "./Blog.css";

export default function BlogDetailsClient({ params }) {
  const { blogId } = params;
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        const res = await fetch(`https://dummyjson.com/posts/${blogId}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlogPost();
  }, [blogId]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!blog) {
    return <div className="error">No blog post found.</div>;
  }

  return (
    <article className="blog">
      <header className="blog__header">
        <h1 className="title">{blog.title}</h1>
        <div className="meta">
          <span className="views">{blog.views} views</span>
          <span className="userId">Author ID: {blog.userId}</span>
        </div>
      </header>
      <div className="blog__content">
        <p>{blog.body}</p>
      </div>
      <footer className="blog__footer">
        <div className="tags">
          {blog.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="reactions">
          <span className="likes">👍 {blog.reactions.likes}</span>
          <span className="dislikes">👎 {blog.reactions.dislikes}</span>
        </div>
      </footer>
    </article>
  );
}
