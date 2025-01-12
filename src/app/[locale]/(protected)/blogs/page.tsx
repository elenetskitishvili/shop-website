import BlogCard from "../../../components/BlogCard";
import { supabase } from "../../../../lib/supabase";
import { fetchBlogs } from "@/src/lib/data-service";
import { Blog } from "@/src/types/types";

export const metadata = {
  title: "Blogs",
};

interface BlogsProps {
  params: Promise<{
    locale: "en" | "ka";
  }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Blogs(props: BlogsProps) {
  const params = await props.params;
  const { locale } = params;
  const blogs: Blog[] = await fetchBlogs();

  return (
    <section>
      <ul className="max-w-screen-xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 mt-12 mb-24">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} locale={locale} />
        ))}
      </ul>
    </section>
  );
}
