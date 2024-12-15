import BlogCard from "../../../components/BlogCard/BlogCard";
import { supabase } from "../../../../lib/supabase";
import { fetchBlogs } from "@/src/lib/data-service";

export const metadata = {
  title: "Blogs",
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
