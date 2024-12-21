import Stripe from "stripe";

export function CreateProductForm() {
  async function createProduct(formData: FormData) {
    "use server";

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));

    // თითოეული await call-ის გარშემო უნდა გვქონდეს try/catch
    const product = await stripe.products.create({
      name,
    });

    console.log({ product });
  }

  return (
    // აუცილებლად უნდა მოვახდინოთ ფორმის ვალიდაცია.
    <form
      action={createProduct}
      className="rounded-lg p-4 bg-gray-100 flex flex-col gap-6 min-w-[400px]"
    >
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" />

      <button type="submit" className="bg-black text-white py-4">
        Create
      </button>
    </form>
  );
}
