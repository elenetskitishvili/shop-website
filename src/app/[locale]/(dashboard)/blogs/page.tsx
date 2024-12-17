import BlogCard from "../../../components/BlogCard";
import { supabase } from "../../../../lib/supabase";
import { fetchBlogs } from "@/src/lib/data-service";

export const metadata = {
  title: "Blogs",
};

export interface Blog {
  id: number;
  created_at: string;
  img: string;
  title_en: string;
  title_ka: string;
  body_en: string;
  body_ka: string;
}

interface BlogsProps {
  params: {
    locale: "en" | "ka";
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function Blogs({ params, searchParams }: BlogsProps) {
  const { locale } = params;
  const blogs: Blog[] = await fetchBlogs();

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
