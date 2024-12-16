import { fetchBlog } from "@/src/lib/data-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { blogId: string } }
) {
  const { blogId } = params;

  try {
    const blog = await fetchBlog(blogId);

    if (!blog) {
      throw new Error("Error: Blog not found");
    }

    return NextResponse.json({ blog });
  } catch {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }
}
