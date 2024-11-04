import BlogCard from "../../components/BlogCard/BlogCard";

export default async function Blogs() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const blogs = data.posts;

  return (
    <section>
      <p className="max-w-7xl mx-auto text-center font-heading text-5xl font-normal tracking-tight leading-snug mt-8">
        Welcome to the OmniShop Blog! Discover tips, trends, and insights on
        everything from food to fashion, and more.
      </p>
      <ul className="max-w-screen-xl mx-auto px-12 mt-14 mb-14 grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </section>
  );
}
