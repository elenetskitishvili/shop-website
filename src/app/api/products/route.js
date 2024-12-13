import { fetchProducts } from "@/src/app/lib/data-service";
export async function GET(request, { params }) {
  try {
    const products = await fetchProducts();

    if (!products) {
      throw new Error("Error: Products not found");
    }

    return Response.json({ products });
  } catch {
    return Response.json({ message: "Products not found" });
  }
}
