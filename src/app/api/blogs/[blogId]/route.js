import { fetchBlog } from "@/src/app/lib/data-service";

export async function GET(request, { params }) {
  const { blogId } = params;

  try {
    const blog = await fetchBlog(blogId);

    if (!blog) {
      throw new Error("Error: Blog not found");
    }

    return Response.json({ blog });
  } catch {
    return Response.json({ message: "Blog not found" });
  }
}
