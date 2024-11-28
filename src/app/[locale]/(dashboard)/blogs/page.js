import BlogCard from "../../../components/BlogCard/BlogCard";
import { supabase } from "../../../lib/supabase";

export const metadata = {
  title: "Blogs",
};

const fetchBlogs = async function () {
  try {
    const { data: blogs, error } = await supabase.from("blogs").select("*");
    if (error) {
      throw new Error(`Error fetching blogs: ${error.message}`);
    }
    return blogs;
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

export default async function Blogs({ params, searchParams }) {
  const { locale } = params;
  const blogs = await fetchBlogs();

  return (
    <section>
      <ul className="max-w-screen-xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-16 mt-16 mb-24">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} locale={locale} />
        ))}
      </ul>
    </section>
  );
}
