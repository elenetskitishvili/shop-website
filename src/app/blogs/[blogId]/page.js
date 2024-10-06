import React from "react";
import "./Blog.css";

async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const blogs = data.posts;
  return blogs.map((blog) => ({
    blogId: blog.id.toString(),
  }));
}

async function BlogDetails({ params }) {
  const { blogId } = params;
  const res = await fetch(`https://dummyjson.com/posts/${blogId}`);
  const blog = await res.json();

  return <article className="blogPost"></article>;
}

export { generateStaticParams };
export default BlogDetails;
