import "./blog-details.css";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const blogs = data.posts;

  return blogs.flatMap((blog) => [
    { locale: "en", blogId: blog.id.toString() },
    { locale: "ka", blogId: blog.id.toString() },
  ]);
}

export default async function Page({ params }) {
  const { locale, blogId } = params;

  const res = await fetch(`https://dummyjson.com/posts/${blogId}`);
  const blog = await res.json();

  return (
    <article className="blog-details">
      <header className="blog-details__header">
        <h1 className="blog-details__title">{blog.title}</h1>
        <div className="blog-details__meta">
          <span className="views">{blog.views} views</span>
          <span className="userId">Author ID: {blog.userId}</span>
        </div>
      </header>
      <div className="blog-details__content">
        <p>{blog.body}</p>
      </div>
      <footer className="blog-details__footer">
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
