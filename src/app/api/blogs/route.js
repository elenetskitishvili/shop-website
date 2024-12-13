import { fetchBlogs } from "@/src/app/lib/data-service";
export async function GET(request, { params }) {
  try {
    const blogs = await fetchBlogs();

    if (!blogs) {
      throw new Error("Error: Blogs not found");
    }

    return Response.json({ blogs });
  } catch {
    return Response.json({ message: "Blogs not found" });
  }
}
