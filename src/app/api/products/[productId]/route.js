import { fetchProduct } from "@/src/app/lib/data-service";

export async function GET(request, { params }) {
  const { productId } = params;

  try {
    const product = await fetchProduct(productId);

    if (!product) {
      throw new Error("Error: Product not found");
    }

    return Response.json({ product });
  } catch {
    return Response.json({ message: "Product not found" });
  }
}
