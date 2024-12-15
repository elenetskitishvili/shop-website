import { fetchProduct } from "@/src/lib/data-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;

  try {
    const product = await fetchProduct(productId);

    if (!product) {
      throw new Error("Error: Product not found");
    }

    return NextResponse.json({ product });
  } catch {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
}
