// import Link from "next/link";
// import "./BlogCard.css";

// export default function BlogCard({ blog, locale }) {
//   return (
//     <li className="flex flex-col items-left justify-between gap-6  bg-white border-zinc-500 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:shadow-md dark:bg-zinc-900">
//       <img
//         className="w-full h-96 object-cover object-right block"
//         src={blog.img}
//         alt={blog.title_en}
//       />

//       <div className="px-8 pb-10">
//         <h4 className="text-left text-3xl font-normal">
//           {locale === "ka" ? blog.title_ka : blog.title_en}
//         </h4>
//         <div>
//           <Link
//             href={`/${locale}/blogs/${blog.id}`}
//             className="inline-block text-2xl py-4 px-8 mt-6 bg-transparent text-zinc-800 rounded-lg transition-all duration-300 ease-in-out border border-solid border-zinc-500  hover:border-purple-950 hover:text-purple-950 dark:border-purple-800  dark:hover:border-purple-800"
//           >
//             {locale === "ka" ? "გაიგეთ მეტი" : "Read More"}
//           </Link>
//         </div>
//       </div>
//     </li>
//   );
// }

import Link from "next/link";
import "./BlogCard.css";

export default function BlogCard({ blog, locale }) {
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
