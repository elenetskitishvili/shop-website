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

  return (
    <article className="blogPost">
      <header className="header">
        <h1 className="title">{blog.title}</h1>
        <div className="meta">
          <span className="views">{blog.views} views</span>
          <span className="userId">Author ID: {blog.userId}</span>
        </div>
      </header>

      <div className="content">
        <p>{blog.body}</p>
      </div>

      <footer className="footer">
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

export { generateStaticParams };
export default BlogDetails;
