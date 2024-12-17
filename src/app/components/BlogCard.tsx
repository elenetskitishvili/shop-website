import Link from "next/link";

export interface Blog {
  id: number;
  created_at: string;
  img: string;
  title_en: string;
  title_ka: string;
  body_en: string;
  body_ka: string;
}

interface BlogCardProps {
  blog: Blog;
  locale: "en" | "ka";
}

export default function BlogCard({ blog, locale }: BlogCardProps) {
  return (
    <li className="">
      <Link
        href={`/${locale}/blogs/${blog.id}`}
        className="flex flex-col items-left justify-between gap-6  bg-white border-zinc-500 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:shadow-md dark:bg-zinc-900"
      >
        <img
          className="w-full h-96 object-cover object-right block"
          src={blog.img}
          alt={blog.title_en}
        />
        <div className="h-28">
          <h4 className="text-left text-[1.6rem] font-normal px-8">
            {locale === "ka" ? blog.title_ka : blog.title_en}
          </h4>
        </div>
      </Link>
    </li>
  );
}
