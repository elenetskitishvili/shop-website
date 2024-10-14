import Link from "next/link";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <li className="blog">
      <h4 className="blog__title">{blog.title}</h4>
      <p className="blog__desc">{blog.body}</p>
      <div className="blog__tags">
        {blog.tags.map((tag, index) => (
          <span key={index} className="blog__tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="blog__reactions">
        <p>{blog.reactions.likes} 👍</p>
        <p>{blog.reactions.dislikes} 👎</p>
      </div>
      <div className="blog__button btn">
        <Link href={`/blogs/${blog.id}`} className="btn">
          Read More
        </Link>
      </div>
    </li>
  );
}
