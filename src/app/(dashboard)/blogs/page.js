import BlogCard from "../../components/BlogCard/BlogCard";
import "./blogs.css";

export default async function Blogs() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const blogs = data.posts;

  return (
    <main className="main main-blogs">
      <section className="section-blogs">
        <p className="section-intro">
          Welcome to the OmniShop Blog! Discover tips, trends, and insights on
          everything from food to fashion, home decor, and more.
        </p>
        <ul className="blogs">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </ul>
      </section>
    </main>
  );
}
