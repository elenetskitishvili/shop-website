import { fetchBlog } from "@/src/lib/data-service";
import ReactMarkdown from "react-markdown";

import { notFound } from "next/navigation";
import { supabase } from "../../../../../lib/supabase";

export interface Blog {
  id: number;
  created_at: string;
  img: string;
  title_en: string;
  title_ka: string;
  body_en: string;
  body_ka: string;
}

interface BlogPageProps {
  params: {
    locale: "en" | "ka";
    blogId: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale, blogId } = params;

  const blog: Blog | null = await fetchBlog(blogId);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-screen-md mx-auto flex flex-col gap-14 mb-20">
      <img src={blog.img} alt={blog.title_en} />
      <h1 className="max-w-full h-auto  text-5xl">
        {locale === "ka" ? blog.title_ka : blog.title_en}
      </h1>
      <div className="text-[1.6rem] leading-10 flex flex-col gap-5">
        <ReactMarkdown>
          {locale === "ka" ? blog.body_ka : blog.body_en}
        </ReactMarkdown>
      </div>
    </div>
  );
}
