"use client";

import { useLocale } from "next-intl";
import BlogCard from "../../../components/BlogCard";

export interface Blog {
  id: number;
  created_at: string;
  img: string;
  title_en: string;
  title_ka: string;
  body_en: string;
  body_ka: string;
}

interface BlogsListProps {
  blogs: Blog[];
}

export default function BlogsList({ blogs }: BlogsListProps) {
  const locale = useLocale();

  const validLocale = locale === "en" || locale === "ka" ? locale : "en";

  return (
    <section>
      <ul className="max-w-screen-xl mx-auto px-12 mt-14 mb-14 grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} locale={validLocale} />
        ))}
      </ul>
    </section>
  );
}
