import Link from "next/link";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <li className="flex flex-col items-center justify-between gap-10 px-8 py-10 bg-white border-zinc-500 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:shadow-md">
      <h4 className="text-center font-heading text-4xl font-bold">
        {blog.title}
      </h4>
      <p className="blog__desc">{blog.body}</p>
      <div className="flex gap-9">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-zinc-300 py-2 px-4 rounded-md text-xl uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-12">
        <p>{blog.reactions.likes} 👍</p>
        <p>{blog.reactions.dislikes} 👎</p>
      </div>
      <div>
        <Link
          href={`/blogs/${blog.id}`}
          className="inline-block text-2xl py-5 px-10 bg-emerald-500 text-white rounded-xl transition-all duration-300 ease-in-out hover:bg-emerald-600 "
        >
          Read More
        </Link>
      </div>
    </li>
  );
}
