import BlogDetailsClient from "./BlogDetailsClient.js";

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const blogs = data.posts;
  return blogs.map((blog) => ({
    blogId: blog.id.toString(),
  }));
}

export default function BlogDetails({ params }) {
  return <BlogDetailsClient params={params} />;
}
